"use server"

import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

export async function signUp(prevState: any, formData: FormData) {
  if (!formData) {
    return { error: "Form data is missing" }
  }
console.log(formData)
  const email = formData.get("email")
   const lastName = formData.get("lastName") as string;
                const firstName = formData.get("firstName") as string;
                const password = formData.get("password") as string;
                const phoneNumber = formData.get("phoneNumber") as string;
                       const role = formData.get("role")

  if (!email || !password || !firstName|| !lastName || !role || !phoneNumber) {
    return { error: "All fields are required" }
  }

  const supabase = createClient()

  try {
    const redirectUrl = process.env.NEXT_PUBLIC_SITE_URL
      ? `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`
      : `${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"}/auth/callback`

    const { error } = await supabase.auth.signUp({
      email: email.toString(),
      password: password.toString(),
      options: {
        emailRedirectTo: redirectUrl,
        data: {
         firstName,
         lastName,
         phoneNumber,
          role: role.toString(),
        },
      },
    })

    if (error) {
      return { error: error.message }
    }

    return { success: "Check your email to confirm your account." }
  } catch (error) {
    console.error("Sign up error:", error)
    return { error: "An unexpected error occurred. Please try again." }
  }
}

export async function signIn(prevState: any, formData: FormData) {
  if (!formData) {
    return { error: "Form data is missing" }
  }

  const email = formData.get("email")
  const password = formData.get("password")

  if (!email || !password) {
    return { error: "Email and password are required" }
  }

  const supabase = createClient()

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.toString(),
      password: password.toString(),
    })

    if (error) {
      if (error.message.includes("Email not confirmed")) {
        const redirectUrl = process.env.NEXT_PUBLIC_SITE_URL
          ? `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`
          : `${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"}/auth/callback`

        await supabase.auth.resend({
          type: "signup",
          email: email.toString(),
          options: {
            emailRedirectTo: redirectUrl,
          },
        })

        return {
          success: true,
          toast:
            "Verification email sent! Please check your inbox and click the verification link to complete your account setup.",
        }
      }
      return { error: error.message }
    }

    return { success: true }
  } catch (error) {
    console.error("Login error:", error)
    return { error: "An unexpected error occurred. Please try again." }
  }
}

export async function signOut() {
  const supabase = createClient()
  await supabase.auth.signOut()
  redirect("/auth/login")
}

export async function updateProfile(prevState: any, formData: FormData) {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    return { error: "Not authenticated" }
  }

  const fullName = formData.get("fullName")
  const bio = formData.get("bio")
  const location = formData.get("location")
  const website = formData.get("website")
  const skills = formData.get("skills")

  try {
    const { error } = await supabase
      .from("profiles")
      .update({
        full_name: fullName?.toString(),
        bio: bio?.toString(),
        location: location?.toString(),
        website: website?.toString(),
        skills: skills
          ?.toString()
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
        updated_at: new Date().toISOString(),
      })
      .eq("id", user.id)

    if (error) {
      return { error: error.message }
    }

    revalidatePath("/dashboard")
    return { success: "Profile updated successfully!" }
  } catch (error) {
    console.error("Profile update error:", error)
    return { error: "Failed to update profile" }
  }
}

export async function createService(prevState: any, formData: FormData) {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    return { error: "Not authenticated" }
  }

  // Get user profile to verify they're a seller
  const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single()
  if (!profile || profile.role !== "seller") {
    return { error: "Only sellers can create services" }
  }

  const title = formData.get("title")
  const description = formData.get("description")
  const category = formData.get("category")
  const subcategory = formData.get("subcategory")
  const price = formData.get("price")
  const deliveryTime = formData.get("delivery_time")
  const revisions = formData.get("revisions")
  const requirements = formData.get("requirements")
  const tagsJson = formData.get("tags")

  if (!title || !description || !category || !price || !deliveryTime) {
    return { error: "Please fill in all required fields" }
  }

  let tags: string[] = []
  try {
    tags = tagsJson ? JSON.parse(tagsJson.toString()) : []
  } catch (error) {
    tags = []
  }

  try {
    const { data, error } = await supabase
      .from("services")
      .insert({
        seller_id: user.id,
        title: title.toString(),
        description: description.toString(),
        category: category.toString(),
        subcategory: subcategory?.toString() || null,
        price: Number.parseFloat(price.toString()),
        delivery_time: Number.parseInt(deliveryTime.toString()),
        revisions: revisions ? Number.parseInt(revisions.toString()) : 0,
        requirements: requirements?.toString() || null,
        tags,
        status: "draft",
      })
      .select()
      .single()

    if (error) {
      return { error: error.message }
    }

    revalidatePath("/dashboard/services")
    redirect(`/dashboard/services/${data.id}`)
  } catch (error) {
    console.error("Service creation error:", error)
    return { error: "Failed to create service" }
  }
}

export async function updateServiceStatus(serviceId: string, status: "active" | "paused" | "draft") {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    return { error: "Not authenticated" }
  }

  try {
    const { error } = await supabase
      .from("services")
      .update({ status, updated_at: new Date().toISOString() })
      .eq("id", serviceId)
      .eq("seller_id", user.id)

    if (error) {
      return { error: error.message }
    }

    revalidatePath("/dashboard/services")
    return { success: "Service status updated successfully" }
  } catch (error) {
    console.error("Service update error:", error)
    return { error: "Failed to update service status" }
  }
}

export async function deleteService(serviceId: string) {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    return { error: "Not authenticated" }
  }

  try {
    const { error } = await supabase.from("services").delete().eq("id", serviceId).eq("seller_id", user.id)

    if (error) {
      return { error: error.message }
    }

    revalidatePath("/dashboard/services")
    return { success: "Service deleted successfully" }
  } catch (error) {
    console.error("Service deletion error:", error)
    return { error: "Failed to delete service" }
  }
}

export async function createOrder(prevState: any, formData: FormData) {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    return { error: "Not authenticated" }
  }

  // Get user profile to verify they're a buyer
  const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single()
  if (!profile || profile.role !== "buyer") {
    return { error: "Only buyers can create orders" }
  }

  const serviceId = formData.get("service_id")
  const description = formData.get("description")
  const requirementsAnswers = formData.get("requirements_answers")

  if (!serviceId || !description) {
    return { error: "Please fill in all required fields" }
  }

  // Get service details
  const { data: service } = await supabase
    .from("services")
    .select("*")
    .eq("id", serviceId.toString())
    .eq("status", "active")
    .single()

  if (!service) {
    return { error: "Service not found or not available" }
  }

  // Check if buyer is trying to order their own service
  if (service.seller_id === user.id) {
    return { error: "You cannot order your own service" }
  }

  // Calculate delivery date
  const deliveryDate = new Date()
  deliveryDate.setDate(deliveryDate.getDate() + service.delivery_time)

  // Calculate total price with platform fee
  const totalPrice = service.price * 1.05

  try {
    const { data, error } = await supabase
      .from("orders")
      .insert({
        service_id: serviceId.toString(),
        buyer_id: user.id,
        seller_id: service.seller_id,
        title: service.title,
        description: description.toString(),
        price: totalPrice,
        delivery_date: deliveryDate.toISOString(),
        status: "pending",
        requirements_answers: requirementsAnswers ? { answers: requirementsAnswers.toString() } : null,
      })
      .select()
      .single()

    if (error) {
      return { error: error.message }
    }

    // Update service order count
    await supabase
      .from("services")
      .update({ total_orders: service.total_orders + 1 })
      .eq("id", serviceId.toString())

    revalidatePath("/dashboard/orders")
    redirect(`/dashboard/orders/${data.id}`)
  } catch (error) {
    console.error("Order creation error:", error)
    return { error: "Failed to create order" }
  }
}

export async function updateOrderStatus(
  orderId: string,
  status: "pending" | "in_progress" | "completed" | "cancelled" | "disputed",
) {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    return { error: "Not authenticated" }
  }

  try {
    // Get order to verify user can update it
    const { data: order } = await supabase.from("orders").select("*").eq("id", orderId).single()

    if (!order) {
      return { error: "Order not found" }
    }

    // Check permissions
    if (order.buyer_id !== user.id && order.seller_id !== user.id) {
      return { error: "You don't have permission to update this order" }
    }

    const { error } = await supabase
      .from("orders")
      .update({ status, updated_at: new Date().toISOString() })
      .eq("id", orderId)

    if (error) {
      return { error: error.message }
    }

    revalidatePath("/dashboard/orders")
    return { success: "Order status updated successfully" }
  } catch (error) {
    console.error("Order update error:", error)
    return { error: "Failed to update order status" }
  }
}

export async function deliverOrder(orderId: string, deliveryFiles: string[]) {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    return { error: "Not authenticated" }
  }

  try {
    const { error } = await supabase
      .from("orders")
      .update({
        status: "completed",
        delivery_files: deliveryFiles,
        updated_at: new Date().toISOString(),
      })
      .eq("id", orderId)
      .eq("seller_id", user.id)

    if (error) {
      return { error: error.message }
    }

    revalidatePath("/dashboard/orders")
    return { success: "Order delivered successfully" }
  } catch (error) {
    console.error("Order delivery error:", error)
    return { error: "Failed to deliver order" }
  }
}

export async function sendMessage(orderId: string, content: string) {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    return { error: "Not authenticated" }
  }

  if (!content.trim()) {
    return { error: "Message content is required" }
  }

  try {
    // Verify user is part of this order
    const { data: order } = await supabase.from("orders").select("buyer_id, seller_id").eq("id", orderId).single()

    if (!order) {
      return { error: "Order not found" }
    }

    if (order.buyer_id !== user.id && order.seller_id !== user.id) {
      return { error: "You don't have permission to message in this order" }
    }

    const { error } = await supabase.from("messages").insert({
      order_id: orderId,
      sender_id: user.id,
      content: content.trim(),
      is_read: false,
    })

    if (error) {
      return { error: error.message }
    }

    revalidatePath(`/dashboard/messages/${orderId}`)
    revalidatePath("/dashboard/messages")
    return { success: "Message sent successfully" }
  } catch (error) {
    console.error("Message sending error:", error)
    return { error: "Failed to send message" }
  }
}

export async function adminLogin(prevState: any, formData: FormData) {
  if (!formData) {
    return { error: "Form data is missing" }
  }

  const email = formData.get("email")
  const password = formData.get("password")

  if (!email || !password) {
    return { error: "Email and password are required" }
  }

  const supabase = createClient()

  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: email.toString(),
      password: password.toString(),
    })

    if (error) {
      return { error: error.message }
    }

    // Verify user is admin after login
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (user) {
      const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single()

      if (!profile || profile.role !== "admin") {
        await supabase.auth.signOut()
        return { error: "Access denied. Admin privileges required." }
      }
    }

    redirect("/dashboard")
  } catch (error) {
    console.error("Admin login error:", error)
    return { error: "An unexpected error occurred. Please try again." }
  }
}

export async function updateUserStatus(userId: string, status: "active" | "suspended") {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    return { error: "Not authenticated" }
  }

  // Verify admin role
  const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single()
  if (!profile || profile.role !== "admin") {
    return { error: "Admin access required" }
  }

  try {
    const { error } = await supabase
      .from("profiles")
      .update({ status, updated_at: new Date().toISOString() })
      .eq("id", userId)

    if (error) {
      return { error: error.message }
    }

    revalidatePath("/dashboard/users")
    return { success: "User status updated successfully" }
  } catch (error) {
    console.error("User status update error:", error)
    return { error: "Failed to update user status" }
  }
}

export async function deleteUser(userId: string) {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    return { error: "Not authenticated" }
  }

  // Verify admin role
  const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single()
  if (!profile || profile.role !== "admin") {
    return { error: "Admin access required" }
  }

  try {
    // Delete user profile (this will cascade to related data)
    const { error } = await supabase.from("profiles").delete().eq("id", userId)

    if (error) {
      return { error: error.message }
    }

    revalidatePath("/dashboard/users")
    return { success: "User deleted successfully" }
  } catch (error) {
    console.error("User deletion error:", error)
    return { error: "Failed to delete user" }
  }
}

export async function resendVerificationEmail(prevState: any, formData: FormData) {
  if (!formData) {
    return { error: "Form data is missing" }
  }

  const email = formData.get("email")

  if (!email) {
    return { error: "Email is required" }
  }

  const supabase = createClient()

  try {
    const redirectUrl = process.env.NEXT_PUBLIC_SITE_URL
      ? `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`
      : `${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"}/auth/callback`

    const { error } = await supabase.auth.resend({
      type: "signup",
      email: email.toString(),
      options: {
        emailRedirectTo: redirectUrl,
      },
    })

    if (error) {
      return { error: error.message }
    }

    return {
      success: true,
      message: "Verification email sent! Please check your inbox and click the verification link.",
    }
  } catch (error) {
    console.error("Resend verification error:", error)
    return { error: "Failed to resend verification email. Please try again." }
  }
}

export async function signInWithGoogle() {
  const supabase = createClient()

  const redirectUrl = process.env.NEXT_PUBLIC_SITE_URL
    ? `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`
    : `${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"}/auth/callback`

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: redirectUrl,
    },
  })

  if (error) {
    console.error("Google OAuth error:", error)
    return { error: error.message }
  }

  return { success: true, url: data.url }
}

export async function signUpWithGoogle(role: "buyer" | "seller") {
  const supabase = createClient()

  const redirectUrl = process.env.NEXT_PUBLIC_SITE_URL
    ? `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`
    : `${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"}/auth/callback`

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: redirectUrl,
      queryParams: {
        role: role,
      },
    },
  })

  if (error) {
    console.error("Google OAuth signup error:", error)
    return { error: error.message }
  }

  return { success: true, url: data.url }
}

export async function forgotPassword(prevState: any, formData: FormData) {
  if (!formData) {
    return { error: "Form data is missing" }
  }

  const email = formData.get("email")

  if (!email) {
    return { error: "Email is required" }
  }

  const supabase = createClient()

  try {
    const redirectUrl = process.env.NEXT_PUBLIC_SITE_URL
      ? `${process.env.NEXT_PUBLIC_SITE_URL}/auth/reset-password`
      : `${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"}/auth/reset-password`

    const { error } = await supabase.auth.resetPasswordForEmail(email.toString(), {
      redirectTo: redirectUrl,
    })

    if (error) {
      return { error: error.message }
    }

    return {
      success: true,
      message: "Password reset link sent! Please check your email and follow the instructions.",
    }
  } catch (error) {
    console.error("Forgot password error:", error)
    return { error: "Failed to send reset email. Please try again." }
  }
}

export async function resetPassword(prevState: any, formData: FormData) {
  if (!formData) {
    return { error: "Form data is missing" }
  }

  const code = formData.get("code")
  const password = formData.get("password")
  const confirmPassword = formData.get("confirmPassword")

  if (!code || !password || !confirmPassword) {
    return { error: "All fields are required" }
  }

  if (password !== confirmPassword) {
    return { error: "Passwords do not match" }
  }

  if (password.toString().length < 6) {
    return { error: "Password must be at least 6 characters long" }
  }

  const supabase = createClient()

  try {
    const { error } = await supabase.auth.updateUser({
      password: password.toString(),
    })

    if (error) {
      return { error: error.message }
    }

    return {
      success: true,
      message: "Password updated successfully! You can now sign in with your new password.",
    }
  } catch (error) {
    console.error("Reset password error:", error)
    return { error: "Failed to reset password. Please try again." }
  }
}
