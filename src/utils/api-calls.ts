// utils/api.ts

const ApiBaseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://your-api-url.com";

export const Api = {
  // Fetch public job categories
  fetchJobCategories: async () => {
    const res = await fetch(`${ApiBaseUrl}/categories`);
    const json = await res.json();
    return json.data;
  },

  // Fetch job categories for admin
  fetchJobCategoriesAdmin: async () => {
    const res = await fetch(`${ApiBaseUrl}/admin/categories`);
    const json = await res.json();
    return json.data;
  },

  // Login user
  login: async (payload: any) => {
    const res = await fetch(`${ApiBaseUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Login failed");
    }

    return res.json(); // assuming it returns { token, user, role, etc. }
  },

  // Register user (handles individual and others)
  registerStepOne: async (payload: any, accountType: string) => {
    const endpoint =
      accountType === "individual"
        ? `${ApiBaseUrl}/seller/register-step-one`
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

    return res.json(); // expected: { user, status, etc. }
  },
  registerStepTwo: async (payload: any, role: string) => {
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

    return res.json(); // expected: { user, status, etc. }
  },


};
