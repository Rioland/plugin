import { SellersProfileType } from "@/types/SellersProfileType";
import Cookies from "js-cookie";

export const ApiBaseUrl="https://plugins.cyclebreeze.com/api";

      


      export const fetchAndReturnUserProfile = async (): Promise<SellersProfileType | null> => {
        try {
          const response = await fetch(`${ApiBaseUrl}/seller/get-profile`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${Cookies.get("token")}`,
            },
          });
      
          if (!response.ok) {
            throw new Error("Failed to fetch profile");
          }
      
          const data = await response.json();
      
          if (data.status && data.data) {
            return data.data as SellersProfileType;
          } else {
            console.error("Invalid response format:", data);
            return null;
          }
        } catch (error) {
          console.error("Error fetching user profile:", error);
          return null;
        }
      };
      