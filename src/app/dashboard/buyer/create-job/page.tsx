"use client"

import type React from "react"

import { useState } from "react"
import { Upload, X, Plus, DollarSign, Clock, MapPin, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import Navbar from "../Components/NavBar"


export default function CreatePostPage() {
        const [step, setStep] = useState(1)
        const [title, setTitle] = useState("")
        const [description, setDescription] = useState("")
        const [category, setCategory] = useState("")
        const [budget, setBudget] = useState("")
        const [budgetType, setBudgetType] = useState("fixed")
        const [duration, setDuration] = useState("")
        const [location, setLocation] = useState("")
        const [skills, setSkills] = useState<string[]>([])
        const [newSkill, setNewSkill] = useState("")
        const [attachments, setAttachments] = useState<File[]>([])

        const addSkill = () => {
                if (newSkill.trim() && !skills.includes(newSkill.trim())) {
                        setSkills([...skills, newSkill.trim()])
                        setNewSkill("")
                }
        }

        const removeSkill = (skillToRemove: string) => {
                setSkills(skills.filter((skill) => skill !== skillToRemove))
        }

        const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
                const files = event.target.files
                if (files) {
                        setAttachments([...attachments, ...Array.from(files)])
                }
        }

        const removeAttachment = (index: number) => {
                setAttachments(attachments.filter((_, i) => i !== index))
        }

        const handleSubmit = (e: React.FormEvent) => {
                e.preventDefault()
                console.log({
                        title,
                        description,
                        category,
                        budget,
                        budgetType,
                        duration,
                        location,
                        skills,
                        attachments,
                })
        }


        return (
                <div className="min-h-screen bg-black text-white">
                        <Navbar />

                        <main className=" flex flex-col items-center justify-center  min-h-screen md:px-32">
                                {step === 1 ? <Stepone title={title} setTitle={setTitle} /> : step === 2 ? <StepTwo /> : step === 3 ? <StepThree /> : step === 4 ? <StepFour /> : step === 5 ? <StepFive /> : null}
                        </main>

                        <div className="w-full  inline-flex justify-between items-center mb-14 px-10">
                                <div className="cursor-pointer h-[50px] px-[59px] py-[19px] rounded-xl  outline-offset-[-0.75px] outline-[#c2c4cf] flex justify-center items-center gap-2.5 overflow-hidden border border-[#c2c4cf]" onClick={() => setStep(step > 1 ? step - 1 : step)}>
                                        <div className="justify-center text-white text-xl font-bold font-['Outfit'] leading-[22.86px] ">Back</div>
                                </div>
                                <div className="cursor-pointer h-[50px] px-[59px] py-[19px] bg-[#e3a325] rounded-xl flex justify-center items-center gap-2.5 overflow-hidden" onClick={() => setStep(step < 5 ? step + 1 : step)}>
                                        <div className="justify-center text-black text-xl font-bold font-['Outfit'] leading-[22.86px] ">Next</div>
                                </div>
                        </div>
                </div>
        )
}


function Stepone({ title, setTitle }: { title: string, setTitle: (value: string) => void }) {
        return <div className="inline-flex justify-start items-start gap-40 md:flex-row flex-col">
                <div className="w-[418px] inline-flex flex-col justify-start items-start gap-3">
                        <div className="w-[181px] inline-flex justify-center items-center gap-[60px]">
                                <div className="justify-center text-white text-lg font-semibold font-['Outfit']">1/5</div>
                                <div className="justify-center text-white text-lg font-bold font-['Outfit']">Job post</div>
                        </div>
                        <div className="self-stretch flex flex-col justify-center items-start gap-1.5">
                                <div className="inline-flex justify-center items-center gap-2">
                                        <div className="w-[433px] justify-center text-white text-4xl font-bold font-['Outfit']">Let’s start with choosing a title. </div>
                                </div>
                                <div className="inline-flex justify-center items-center gap-2">
                                        <div className="w-[365px] justify-center text-white text-xl font-bold font-['Outfit']">This helps your job post stand out to the right candidates. It’s the first thing they’ll see, so make it count!</div>
                                </div>
                        </div>
                </div>
                <div className="w-[417px] inline-flex flex-col justify-start items-start gap-[60px]">
                        <div className="self-stretch flex flex-col justify-start items-start gap-3">
                                <div className="self-stretch justify-center text-white text-base font-bold font-['Outfit'] leading-[22.86px]">Write a title for your job post</div>
                                <div className="self-stretch h-10 p-4 rounded-lg  outline-offset-[-0.75px] outline-[#c2c4cf] flex flex-col justify-between items-start">
                                        <div className="self-stretch inline-flex justify-start items-center gap-[491px]">
                                                <div className="justify-center text-white text-base font-bold font-['Outfit'] leading-[22.86px] border p-3 rounded-xl border-[#c2c4cf] w-full">
                                                        <input
                                                                type="text"
                                                                value={title}
                                                                onChange={(e) => setTitle(e.target.value)}
                                                                placeholder="UX/UI Design and Developer Needed"
                                                                className="bg-transparent outline-none w-full"
                                                        />
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div className="self-stretch h-[161px] relative">

                                <ul className="w-[410px]  justify-center list-disc">
                                        <li className="text-white text-base font-bold font-['Outfit'] leading-[22.86px] mb-2">Example title</li>
                                        <li className="text-white text-base font-bold font-['Outfit'] leading-[22.86px]">Build responsive WordPress site with booking/payment functionality</li>
                                        <li className="text-white text-base font-bold font-['Outfit'] leading-[22.86px]">AR experience needed for virtual product demos (ARCore)</li>
                                        <li className="text-white text-base font-bold font-['Outfit'] leading-[22.86px]">Developer needed to update Android app UI for new OS/device specs</li>
                                </ul>


                        </div>
                </div>
        </div>
}

function StepTwo({ title, setTitle }: { title?: string, setTitle?: (value: string) => void }) {
        return <main className=" text-white px-4  flex flex-col md:flex-row gap-8 items-start justify-between md:px-32 py-6">
                <div className="md:w-1/2">
                        <p className="text-sm text-white font-semibold mb-2">2/5 &nbsp; • &nbsp; Job post</p>
                        <h1 className="text-3xl md:text-5xl font-bold leading-snug">
                                What are the main skills required for this job?
                        </h1>
                </div>

                <div className="md:w-1/2">
                        <SkillInputSection />
                        <CategorySection />
                </div>
        </main>
}

function StepThree({ title, setTitle }: { title?: string, setTitle?: (value: string) => void }) {
        return  <main className=" text-white px-4 md:px-12 py-12 flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <p className="text-sm text-white font-semibold mb-2">3/5 &nbsp; • &nbsp; Job post</p>
        <h1 className="text-3xl md:text-5xl font-bold leading-snug mb-4">
          Next, estimate the scope of this work.
        </h1>
        <p className="text-gray-400 text-lg">
          Consider the size of your project and the time it will take.
        </p>
      </div>

      <div className="md:w-1/2">
        <ScopeEstimator />
      </div>
    </main>
}
function StepFour({ title, setTitle }: { title?: string, setTitle?: (value: string) => void }) {
        return <div className="w-[995px] h-[296px] relative">
                <div className="w-[995px] h-[296px] left-0 top-0 absolute">
                        <div className="w-[996px] left-[-0.50px] top-0 absolute inline-flex justify-start items-start gap-40">
                                <div className="w-[418px] inline-flex flex-col justify-start items-start gap-3">
                                        <div className="w-[181px] inline-flex justify-center items-center gap-[60px]">
                                                <div className="justify-center text-white text-lg font-semibold font-['Outfit']">2/5</div>
                                                <div className="justify-center text-white text-lg font-bold font-['Outfit']">Job post</div>
                                        </div>
                                        <div className="self-stretch flex flex-col justify-center items-start gap-1.5">
                                                <div className="inline-flex justify-center items-center gap-2">
                                                        <div className="w-[433px] justify-center text-white text-[40px] font-bold font-['Outfit']">What are the main skills required for this job?</div>
                                                </div>
                                        </div>
                                </div>
                                <div className="w-[417px] h-[111px] relative">
                                        <div className="w-[531px] left-0 top-[128px] absolute inline-flex flex-col justify-start items-start gap-6">
                                                <div className="w-[410px] flex flex-col justify-start items-start gap-4">
                                                        <div className="self-stretch justify-center text-white text-base font-bold font-['Outfit'] leading-tight tracking-tight">Selected Skills</div>
                                                        <div className="self-stretch h-[94px] inline-flex justify-start items-center gap-[13px] flex-wrap content-center">
                                                                <div className="p-2.5 rounded-[17px]  outline-offset-[-1px] outline-white/70 flex justify-center items-center gap-2.5">
                                                                        <div className="justify-center text-white/60 text-base font-bold font-['Outfit'] leading-tight">Home &Lifestyle</div>
                                                                </div>
                                                                <div className="p-2.5 rounded-[17px] outline-offset-[-1px] outline-white/70 flex justify-center items-center gap-2.5">
                                                                        <div className="justify-center text-white/60 text-base font-bold font-['Outfit'] leading-tight">Branding, Design & Identity</div>
                                                                </div>
                                                                <div className="p-2.5 rounded-[17px]  outline-offset-[-1px] outline-white/70 flex justify-center items-center gap-2.5">
                                                                        <div className="justify-center text-white/60 text-base font-bold font-['Outfit'] leading-tight">Transportation & Logistics</div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="self-stretch flex flex-col justify-start items-start gap-[23px]">
                                                        <div data-property-1="Collapsed" className="self-stretch h-[289px] flex flex-col justify-start items-start gap-[23px]">
                                                                <div className="self-stretch flex flex-col justify-start items-start gap-[22px]">
                                                                        <div className="self-stretch justify-center text-white text-base font-bold font-['Outfit'] leading-tight">Categories</div>
                                                                        <div className="self-stretch h-0 outline-offset-[-0.50px] outline-white/30"></div>
                                                                        <div className="self-stretch inline-flex justify-start items-center gap-[13px] flex-wrap content-center">
                                                                                <div className="p-2.5 rounded-[17px]  outline-offset-[-1px] outline-white/70 flex justify-center items-center gap-2.5">
                                                                                        <div className="justify-center text-white/60 text-base font-bold font-['Outfit'] leading-tight">Business, Corporate & Financial services</div>
                                                                                </div>
                                                                                <div className="p-2.5 rounded-[17px] outline-offset-[-1px] outline-white/70 flex justify-center items-center gap-2.5">
                                                                                        <div className="justify-center text-white/60 text-base font-bold font-['Outfit'] leading-tight">Website, App & Software Development</div>
                                                                                </div>
                                                                                <div className="p-2.5 rounded-[17px] outline-offset-[-1px] outline-white/70 flex justify-center items-center gap-2.5">
                                                                                        <div className="justify-center text-white/60 text-base font-bold font-['Outfit'] leading-tight">Transportation & Logistics</div>
                                                                                </div>
                                                                                <div className="p-2.5 rounded-[17px] outline-offset-[-1px] outline-white/70 flex justify-center items-center gap-2.5">
                                                                                        <div className="justify-center text-white/60 text-base font-bold font-['Outfit'] leading-tight"> Branding, Design & Identity</div>
                                                                                </div>
                                                                                <div className="p-2.5 rounded-[17px] outline-offset-[-1px] outline-white/70 flex justify-center items-center gap-2.5">
                                                                                        <div className="justify-center text-white/60 text-base font-bold font-['Outfit'] leading-tight">Health, Wellness & Fitness</div>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div className="inline-flex justify-center items-center gap-[7px]">
                                                                        <div className="justify-center text-white/60 text-base font-bold font-['Outfit'] leading-tight">See more</div>
                                                                        <div className="w-4 h-4 relative overflow-hidden" />
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="w-[417px] left-0 top-0 absolute inline-flex flex-col justify-start items-start gap-2">
                                                <div className="self-stretch flex flex-col justify-start items-start gap-3">
                                                        <div className="self-stretch justify-center text-white text-base font-bold font-['Outfit'] leading-[22.86px]">Search skills or add your own</div>
                                                        <div className="self-stretch h-10 p-4 rounded-lg  outline-offset-[-0.75px] outline-[#c2c4cf] flex flex-col justify-between items-start">
                                                                <div className="self-stretch inline-flex justify-start items-center gap-[491px]">
                                                                        <div className="w-[18px] h-[18px] bg-white" />
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="w-[417px] left-[20px] top-[83px] absolute justify-center text-white text-sm font-bold font-['Outfit'] leading-tight tracking-tight">For the best results, add 3-5 skills</div>
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
}


function StepFive({ title, setTitle }: { title?: string, setTitle?: (value: string) => void }) {
        return <div className="w-[995px] h-[296px] relative">
                <div className="w-[995px] h-[296px] left-0 top-0 absolute">
                        <div className="w-[996px] left-[-0.50px] top-0 absolute inline-flex justify-start items-start gap-40">
                                <div className="w-[418px] inline-flex flex-col justify-start items-start gap-3">
                                        <div className="w-[181px] inline-flex justify-center items-center gap-[60px]">
                                                <div className="justify-center text-white text-lg font-semibold font-['Outfit']">2/5</div>
                                                <div className="justify-center text-white text-lg font-bold font-['Outfit']">Job post</div>
                                        </div>
                                        <div className="self-stretch flex flex-col justify-center items-start gap-1.5">
                                                <div className="inline-flex justify-center items-center gap-2">
                                                        <div className="w-[433px] justify-center text-white text-[40px] font-bold font-['Outfit']">What are the main skills required for this job?</div>
                                                </div>
                                        </div>
                                </div>
                                <div className="w-[417px] h-[111px] relative">
                                        <div className="w-[531px] left-0 top-[128px] absolute inline-flex flex-col justify-start items-start gap-6">
                                                <div className="w-[410px] flex flex-col justify-start items-start gap-4">
                                                        <div className="self-stretch justify-center text-white text-base font-bold font-['Outfit'] leading-tight tracking-tight">Selected Skills</div>
                                                        <div className="self-stretch h-[94px] inline-flex justify-start items-center gap-[13px] flex-wrap content-center">
                                                                <div className="p-2.5 rounded-[17px]  outline-offset-[-1px] outline-white/70 flex justify-center items-center gap-2.5">
                                                                        <div className="justify-center text-white/60 text-base font-bold font-['Outfit'] leading-tight">Home &Lifestyle</div>
                                                                </div>
                                                                <div className="p-2.5 rounded-[17px] outline-offset-[-1px] outline-white/70 flex justify-center items-center gap-2.5">
                                                                        <div className="justify-center text-white/60 text-base font-bold font-['Outfit'] leading-tight">Branding, Design & Identity</div>
                                                                </div>
                                                                <div className="p-2.5 rounded-[17px]  outline-offset-[-1px] outline-white/70 flex justify-center items-center gap-2.5">
                                                                        <div className="justify-center text-white/60 text-base font-bold font-['Outfit'] leading-tight">Transportation & Logistics</div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="self-stretch flex flex-col justify-start items-start gap-[23px]">
                                                        <div data-property-1="Collapsed" className="self-stretch h-[289px] flex flex-col justify-start items-start gap-[23px]">
                                                                <div className="self-stretch flex flex-col justify-start items-start gap-[22px]">
                                                                        <div className="self-stretch justify-center text-white text-base font-bold font-['Outfit'] leading-tight">Categories</div>
                                                                        <div className="self-stretch h-0 outline-offset-[-0.50px] outline-white/30"></div>
                                                                        <div className="self-stretch inline-flex justify-start items-center gap-[13px] flex-wrap content-center">
                                                                                <div className="p-2.5 rounded-[17px]  outline-offset-[-1px] outline-white/70 flex justify-center items-center gap-2.5">
                                                                                        <div className="justify-center text-white/60 text-base font-bold font-['Outfit'] leading-tight">Business, Corporate & Financial services</div>
                                                                                </div>
                                                                                <div className="p-2.5 rounded-[17px] outline-offset-[-1px] outline-white/70 flex justify-center items-center gap-2.5">
                                                                                        <div className="justify-center text-white/60 text-base font-bold font-['Outfit'] leading-tight">Website, App & Software Development</div>
                                                                                </div>
                                                                                <div className="p-2.5 rounded-[17px] outline-offset-[-1px] outline-white/70 flex justify-center items-center gap-2.5">
                                                                                        <div className="justify-center text-white/60 text-base font-bold font-['Outfit'] leading-tight">Transportation & Logistics</div>
                                                                                </div>
                                                                                <div className="p-2.5 rounded-[17px] outline-offset-[-1px] outline-white/70 flex justify-center items-center gap-2.5">
                                                                                        <div className="justify-center text-white/60 text-base font-bold font-['Outfit'] leading-tight"> Branding, Design & Identity</div>
                                                                                </div>
                                                                                <div className="p-2.5 rounded-[17px] outline-offset-[-1px] outline-white/70 flex justify-center items-center gap-2.5">
                                                                                        <div className="justify-center text-white/60 text-base font-bold font-['Outfit'] leading-tight">Health, Wellness & Fitness</div>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div className="inline-flex justify-center items-center gap-[7px]">
                                                                        <div className="justify-center text-white/60 text-base font-bold font-['Outfit'] leading-tight">See more</div>
                                                                        <div className="w-4 h-4 relative overflow-hidden" />
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="w-[417px] left-0 top-0 absolute inline-flex flex-col justify-start items-start gap-2">
                                                <div className="self-stretch flex flex-col justify-start items-start gap-3">
                                                        <div className="self-stretch justify-center text-white text-base font-bold font-['Outfit'] leading-[22.86px]">Search skills or add your own</div>
                                                        <div className="self-stretch h-10 p-4 rounded-lg  outline-offset-[-0.75px] outline-[#c2c4cf] flex flex-col justify-between items-start">
                                                                <div className="self-stretch inline-flex justify-start items-center gap-[491px]">
                                                                        <div className="w-[18px] h-[18px] bg-white" />
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="w-[417px] left-[20px] top-[83px] absolute justify-center text-white text-sm font-bold font-['Outfit'] leading-tight tracking-tight">For the best results, add 3-5 skills</div>
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
}



type SkillTagProps = {
        label: string;
};

export function SkillTag({ label }: SkillTagProps) {
        return (
                <span className="inline-block px-4 py-2 rounded-full border border-white text-white text-sm mr-2 mb-2">
                        {label}
                </span>
        );
}




const selectedSkills = [
        "Home & Lifestyle",
        "Branding, Design & Identity",
        "Transportation & Logistics",
];

export function SkillInputSection() {
        return (
                <div className="w-full max-w-xl">
                        <label className="block text-white font-medium mb-2">
                                Search skills or add your own
                        </label>
                        <div className="flex items-center border border-white rounded-lg px-4 py-2">
                                <input
                                        type="text"
                                        placeholder="Search skills"
                                        className="bg-transparent outline-none flex-1 text-white placeholder:text-gray-400"
                                />
                                <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                >
                                        <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                </svg>
                        </div>
                        <p className="text-gray-400 text-sm mt-1 mb-3">
                                For the best results, add 3–5 skills
                        </p>

                        <div className="mb-4">
                                <h4 className="text-white font-semibold mb-2">Selected Skills</h4>
                                <div className="flex flex-wrap">
                                        {selectedSkills.map((skill) => (
                                                <SkillTag key={skill} label={skill} />
                                        ))}
                                </div>
                        </div>
                </div>
        );
}



const categories = [
        "Business, Corporate & Financial services",
        "Website, App & Software Development",
        "Transportation & Logistics",
        "Branding, Design & Identity",
        "Health, Wellness & Fitness",
];

export function CategorySection() {
        return (
                <div className="mt-6">
                        <h4 className="text-white font-semibold mb-2">Categories</h4>
                        <div className="border-t border-gray-500 mb-4"></div>
                        <div className="flex flex-wrap">
                                {categories.map((category) => (
                                        <SkillTag key={category} label={category} />
                                ))}
                        </div>
                        <button className="text-white text-sm mt-2 underline">See more</button>
                </div>
        );
}


type RadioOptionProps = {
  name: string;
  label: string;
  description: string;
  value: string;
};

export  function RadioOption({
  name,
  label,
  description,
  value,
}: RadioOptionProps) {
  return (
    <label className="flex items-start space-x-3 mb-4 cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        className="mt-1 accent-yellow-400 w-4 h-4"
      />
      <div>
        <p className="text-white font-semibold">{label}</p>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </label>
  );
}



export  function ScopeEstimator() {
  return (
    <div className="w-full max-w-xl">
      {/* Scope Size */}
      <div className="mb-6">
        <RadioOption
          name="projectSize"
          value="large"
          label="Large"
          description="Longer term or complex initiatives"
        />
        <RadioOption
          name="projectSize"
          value="medium"
          label="Medium"
          description="Well-defined projects"
        />
        <RadioOption
          name="projectSize"
          value="small"
          label="Small"
          description="Quick and straightforward tasks"
        />
      </div>

      {/* Duration */}
      <div className="mb-6">
        <label className="text-white font-semibold block mb-2">
          How long will your work take?
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            className="bg-transparent border border-white text-white rounded-md px-4 py-2 w-24"
            defaultValue={45}
          />
          <span className="text-white">days</span>
        </div>
      </div>

      {/* Experience Level */}
      <div>
        <h4 className="text-white font-semibold mb-1">
          What level of experience will it need?
        </h4>
        <p className="text-sm text-gray-400 mb-4">
          This won’t restrict any proposals, but helps match expertise to your budget.
        </p>

        <RadioOption
          name="experience"
          value="entry"
          label="Entry"
          description="Looking for someone relatively new to this field"
        />
        <RadioOption
          name="experience"
          value="intermediate"
          label="Intermediate"
          description="Looking for substantial experience in this field"
        />
        <RadioOption
          name="experience"
          value="expert"
          label="Expert"
          description="Looking for comprehensive and deep expertise in this field"
        />
      </div>
    </div>
  );
}




