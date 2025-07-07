/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { EyeOff, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export default function LoginPage() {
  return (
    <div className="h-screen flex flex-col lg:flex-row">
      {/* Left Panel - Features */}
      <div className="w-full lg:w-1/2 bg-[#e3a325] p-6 md:p-10 lg:p-12 flex flex-col justify-between">
        <div className="pt-10">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-12">
            <img src="/images/logo-white-single.svg" className="w-8 h-8" />
            <span className="text-white text-2xl md:text-3xl font-bold">Plugin</span>
          </div>

          {/* Features List */}
          <div className="space-y-6">
            {[
              {
                title: "Secure Login",
                desc: "Use your email to sign in",
              },
              {
                title: "Enhanced User Management",
                desc: "Gain insights into user activity, track jobs and analyse Plugin patterns",
              },
              {
                title: "Proactive Monitoring",
                desc: "Stay on top with real-time data and reports, ensuring a smooth experience for users.",
              },
            ].map((item, i) => (
              <div className="flex items-start gap-4" key={i}>
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-[#e3a325]" />
                </div>
                <div>
                  <h3 className="text-white text-lg md:text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-white/90 text-sm md:text-base leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-white/80 text-sm mt-12 text-center lg:text-left">
          Pluginafrica | Terms and Privacy
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="w-full lg:w-1/2 relative">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/plugin-team.jpg"
            alt="Plugin team members"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Login Form */}
        <div className="relative z-10 h-full flex items-center justify-center px-6 py-12 md:p-12">
          <div className="w-full max-w-md">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-8">
              <img src="/images/logo-single-yellow.png" className="w-6 h-6" />
              <span className="text-[#e3a325] text-xl font-bold">Plugin</span>
            </div>

            <h1 className="text-white text-2xl md:text-3xl font-bold mb-6">Welcome Admin</h1>

            <form className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-white text-sm mb-2 block">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Johndoe@pluginafrica.com"
                  className="bg-[#57585f] border-0 text-white placeholder:text-white/60 h-12 rounded-lg"
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-white text-sm mb-2 block">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="bg-[#57585f] border-0 text-white placeholder:text-white/60 h-12 rounded-lg pr-12"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
                  >
                    <EyeOff className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <Button className="w-full bg-[#e3a325] hover:bg-[#e0c224] text-black font-semibold h-12 rounded-lg flex items-center justify-center gap-2">
                LOGIN
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
