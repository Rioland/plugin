// utils/api.ts

const ApiBaseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://your-api-url.com";

export const Api = {
  // Fetch public job categories
  fetchJobCategories: async () => {
    try {
      const res = await fetch(`${ApiBaseUrl}/categories`);
      const json = await res.json();
      return json.data;
    } catch (error) {
      console.error("Error fetching job categories:", error);
      throw new Error("Failed to fetch job categories");
    }
  },

  // Fetch job categories for admin
  fetchJobCategoriesAdmin: async () => {
    try {
      const res = await fetch(`${ApiBaseUrl}/admin/categories`);
      const json = await res.json();
      return json.data;
    } catch (error) {
      console.error("Error fetching admin categories:", error);
      throw new Error("Failed to fetch admin job categories");
    }
  },



  // Register step two
  registerStepTwo: async (payload: any, role: string) => {
    try {
      const endpoint =
        role === "individual"
          ? `${ApiBaseUrl}/register-step-two`
          : `${ApiBaseUrl}/register-step-one`;

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Registration failed");
      }

      return await res.json();
    } catch (error) {
      console.error("Register step two error:", error);
      throw new Error(error.message || "Registration step two failed");
    }
  },
};
