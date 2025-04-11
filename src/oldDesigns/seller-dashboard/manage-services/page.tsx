'use client';
import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

const tabs = [
  "Active Services",
  "Pending Services",
  "Ongoing Services",
  "Completed Services",
  "Canceled Services",
];

const services = [
  {
    id: 1,
    title: "I will design modern websites in figma or adobe xd",
    features: [
      "Delivered within a day",
      "Delivery Time Decreased",
      "Upload apps to Stores",
    ],
    category: "Web & App Design",
    price: "$500.00",
    type: "Fixed",
    image: "/img1.jpg", // replace with real image path
  },
  {
    id: 2,
    title: "I will design modern websites in figma or adobe xd",
    features: [
      "Delivered within a day",
      "Delivery Time Decreased",
      "Upload apps to Stores",
    ],
    category: "Web & App Design",
    price: "$500.00",
    type: "Fixed",
    image: "/img2.jpg",
  },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("Active Services");

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-10">
      <div className="bg-white rounded-2xl p-4 md:p-6 shadow">
        {/* Tabs */}
        <div className="flex flex-wrap gap-4 border-b text-sm md:text-base font-medium text-gray-500 mb-6">
          {tabs.map(tab => (
            <button
              key={tab}
              className={`pb-2 border-b-2 ${
                activeTab === tab
                  ? "border-black text-black"
                  : "border-transparent"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Table Header - Hidden on mobile */}
        <div className="hidden md:grid grid-cols-12 font-semibold text-gray-700 mb-4 px-2">
          <div className="col-span-5">Title</div>
          <div className="col-span-3">Category</div>
          <div className="col-span-2">Type/Cost</div>
          <div className="col-span-2">Actions</div>
        </div>

        {/* Service List */}
        <div className="space-y-6">
          {services.map(service => (
            <div
              key={service.id}
              className="bg-white border rounded-xl p-4 md:p-3 flex flex-col md:grid md:grid-cols-12 gap-4 items-start"
            >
              {/* Title + Image */}
              <div className="col-span-5 flex gap-4">
                <img
                  src={service.image}
                  alt="preview"
                  className="w-28 h-20 object-cover rounded-xl border"
                />
                <div>
                  <p className="font-semibold text-gray-800 mb-1">{service.title}</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {service.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Category */}
              <div className="col-span-3 text-gray-700 text-sm md:text-base">{service.category}</div>

              {/* Price */}
              <div className="col-span-2 text-gray-700 text-sm md:text-base">
                {service.price}/<span className="text-gray-500">{service.type}</span>
              </div>

              {/* Actions */}
              <div className="col-span-2 flex gap-3">
                <button className="bg-red-100 p-2 rounded-xl hover:bg-red-200">
                  <Pencil className="w-4 h-4 text-red-500" />
                </button>
                <button className="bg-red-100 p-2 rounded-xl hover:bg-red-200">
                  <Trash2 className="w-4 h-4 text-red-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
