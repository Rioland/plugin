import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    section: "Billing",
    items: ["Billing & payments"],
  },
  {
    section: "User Settings",
    items: [
      "My Profile",
      "Profile Setting",
      "Membership & Plugins",
      "Contact info",
      "Get paid",
      "Password & Security",
      "Notification Settings",
    ],
  },
];

export default function BillingSettingsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="md:flex space-y-8 md:space-y-0 md:space-x-8">
          {/* Sidebar */}
          <aside className="w-full md:w-1/4">
            <h2 className="text-2xl font-bold mb-6">Settings</h2>
            {navLinks.map((section) => (
              <div key={section.section} className="mb-6">
                <p className="text-sm uppercase text-gray-400 mb-2">
                  {section.section}
                </p>
                <ul className="space-y-2 text-gray-300">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className={cn(
                        "hover:text-yellow-500 cursor-pointer",
                        item === "Billing & payments" &&
                          "text-yellow-500 font-medium border-l-2 border-yellow-500 pl-2"
                      )}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </aside>

          {/* Main Content */}
          <main className="w-full md:flex-1">
            <h2 className="text-2xl font-semibold mb-6">Billing & payments</h2>
            <Card className="bg-[#121212] border border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-3 text-white">
                  Billing methods
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  You haven’t set up any billing methods yet. Your billing method will be
                  charged only when your available balance from Plugin earnings is not
                  sufficient to pay for your monthly membership and/or Connects.
                </p>
                <Button className="text-yellow-500 hover:underline px-0" variant="ghost">
                  <span className="mr-1">➕</span> Add a billing method
                </Button>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
}
