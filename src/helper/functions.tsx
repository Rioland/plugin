import Cookies from "js-cookie";

export const ApiBaseUrl="https://plugins.cyclebreeze.com/api";

export async function fetchAndStoreUserProfile() {
        try {
          const response = await fetch(`${ApiBaseUrl}/seller/get-profile`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${Cookies.get("token")}`, // Ensure auth token is included
            },
          });
      
          if (!response.ok) {
            throw new Error("Failed to fetch profile");
          }
      
          const data = await response.json();
      
          if (data.status && data.data) {
            Cookies.set("currentUser", JSON.stringify(data.data), {
              expires:  0.5,
              secure: process.env.NODE_ENV === "production",
              sameSite: "strict",
            });
      
            console.log("User profile stored in cookies:", data.data);
          } else {
            console.error("Invalid response format:", data);
          }
        } catch (error) {
          console.error("Error fetching user profile:", error);
        }
      }
      
      
