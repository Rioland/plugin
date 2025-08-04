// api/authApi.ts

const ApiBaseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://your-api-url.com";

interface LoginResponse {
  status: boolean;
  message?: string;
  data?: {
    user: any;
    token: string;
    role: string;
    verified: boolean;
  };
  errors?: {
    verified?: boolean;
    email?: string;
  };
}

interface ApiResponse {
  status: boolean;
  message?: string;
  data?: any;
}

export const AuthApi = {
  // Login API call
  login: async (email: string, password: string): Promise<LoginResponse> => {
    try {
      const res = await fetch(`${ApiBaseUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data: LoginResponse = await res.json();

      if (!res.ok || data.status === false) {
        throw new Error(data.message || "Login failed", { cause: data.errors });
      }

      return data;
    } catch (error) {
      console.error("Error during login:", error);
      throw error;
    }
  },

  // Resend verification email
  resendVerification: async (email: string): Promise<ApiResponse> => {
    try {
      const res = await fetch(`${ApiBaseUrl}/resend-verification`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data: ApiResponse = await res.json();

      if (!res.ok || data.status === false) {
        throw new Error(data.message || "Failed to resend verification");
      }

      return data;
    } catch (error) {
      console.error("Error resending verification:", error);
      throw new Error(error.message || "Failed to resend verification");
    }
  },

  // Verify OTP
  verifyOtp: async (email: string, verification_code: string): Promise<ApiResponse> => {
    try {
      const res = await fetch(`${ApiBaseUrl}/register-step-two`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, verification_code }),
      });

      const data: ApiResponse = await res.json();

      if (!res.ok || data.status === false) {
        throw new Error(data.message || "OTP verification failed");
      }

      return data;
    } catch (error) {
      console.error("Error during OTP verification:", error);
      throw new Error(error.message || "Failed to verify OTP");
    }
  },
  // Logout API call
  logout: async (token: string): Promise<ApiResponse> => {
    try {
      const res = await fetch(`${ApiBaseUrl}/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data: ApiResponse = await res.json();

      if (!res.ok || data.status === false) {
        throw new Error(data.message || "Logout failed");
      }

      return data;
    } catch (error) {
      console.error("Error during logout:", error);
      throw new Error(error.message || "Failed to logout");
    }
  },

  // Forgot Password API call
  forgotPassword: async (email: string): Promise<ApiResponse> => {
    try {
      const res = await fetch(`${ApiBaseUrl}/forget-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data: ApiResponse = await res.json();

      if (!res.ok || data.status === false) {
        throw new Error(data.message || "Failed to send password reset request");
      }

      return data;
    } catch (error) {
      console.error("Error during forgot password:", error);
      throw new Error(error.message || "Failed to send password reset request");
    }
  },
};