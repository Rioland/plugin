'use client'
import React from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { useDropzone } from 'react-dropzone'
import { Card } from '@/components/ui/card'

const categories = [
        { id: 1, name: "Business Registration", category: "Business, Corporate & Financial Services" },
        { id: 3, name: "Business Plan Writing", category: "Business, Corporate & Financial Services" },
        { id: 11, name: "Website Development", category: "Website, App & Software Development" },
        { id: 13, name: "AI & Chatbot Development", category: "Website, App & Software Development" },
        { id: 14, name: "Social Media Management", category: "Digital Marketing & E-Commerce" },
        { id: 16, name: "Influencer Marketing", category: "Digital Marketing & E-Commerce" },
]

const englishLevels = ['Fluent', 'Mid level', 'Conversational', 'Others']

export default function Page() {
        const { getRootProps, getInputProps, acceptedFiles } = useDropzone({ accept: { 'image/*': [] } })

        return (

                <div className=" w-full p-6  ">

                        <h1 className="font-bold text-3xl">Add New Service</h1>
                        <p className="py-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae voluptates quo sit! Molestias, iusto ipsam!</p>


                        <Card>
                                <form className="p-4 md:p-6">
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                                                <div>
                                                        <label className="block mb-1 font-semibold">Service Title</label>
                                                        <Input placeholder="Enter service title" />
                                                </div>

                                                <div>
                                                        <label className="block mb-1 font-semibold">Price (₦)</label>
                                                        <Input type="number" placeholder="Enter price" />
                                                </div>

                                                <div>
                                                        <label className="block mb-1 font-semibold">Category</label>
                                                        <Select>
                                                                <SelectTrigger>
                                                                        <SelectValue placeholder="Select category" />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                        {categories.map(cat => (
                                                                                <SelectItem key={cat.id} value={cat.id.toString()}>
                                                                                        {cat.name} — <span className="text-xs text-gray-500">{cat.category}</span>
                                                                                </SelectItem>
                                                                        ))}
                                                                </SelectContent>
                                                        </Select>
                                                </div>

                                                <div>
                                                        <label className="block mb-1 font-semibold">English Level</label>
                                                        <Select>
                                                                <SelectTrigger>
                                                                        <SelectValue placeholder="Select level" />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                        {englishLevels.map(level => (
                                                                                <SelectItem key={level} value={level.toLowerCase()}>{level}</SelectItem>
                                                                        ))}
                                                                </SelectContent>
                                                        </Select>
                                                </div>

                                                <div>
                                                        <label className="block mb-1 font-semibold">Estimated Delivery Time (in days)</label>
                                                        <Input type="number" placeholder="e.g., 3" />
                                                </div>

                                                <div>
                                                        <label className="block mb-1 font-semibold">Response Time (in hours)</label>
                                                        <Input type="number" placeholder="e.g., 12" />
                                                </div>

                                                <div className="lg:col-span-2">
                                                        <label className="block mb-1 font-semibold">Service Details</label>
                                                        <Textarea placeholder="Enter service description..." rows={5} />
                                                </div>

                                                <div className="lg:col-span-2">
                                                        <label className="block mb-1 font-semibold">Service Image</label>
                                                        <div
                                                                {...getRootProps()}
                                                                className="mt-1 p-6 border-2 border-dashed border-gray-300 rounded-xl text-center cursor-pointer hover:border-gray-400"
                                                        >
                                                                <input {...getInputProps()} />
                                                                {acceptedFiles.length > 0 ? (
                                                                        <p className="text-green-600">{acceptedFiles[0].name}</p>
                                                                ) : (
                                                                        <p className="text-gray-500">Drag and drop an image here, or click to select</p>
                                                                )}
                                                        </div>
                                                </div>
                                        </div>

                                        <div className="mt-6">
                                                <button type="submit" className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90">
                                                        Submit Service
                                                </button>
                                        </div>
                                </form>
                        </Card>
                </div>

        )
}
