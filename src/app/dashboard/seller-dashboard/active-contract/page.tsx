'use client'
import { Briefcase, MapPin, Clock } from 'lucide-react'
import PluginNavbar from '../Components/NavBar'

export default function ActiveContracts() {
  const contracts = Array(7).fill({
    title: 'UI/UX Designer Needed for Fintech Company',
    hiredBy: 'Toby Dave',
    company: 'Techo',
    budget: '₦250,000',
    location: 'Lagos, Nigeria (Remote)',
    duration: '1 month',
  })

  return (
        <PluginNavbar>

    <div className="min-h-screen bg-black text-white px-4 sm:px-8 py-6">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-white">Active contracts</h2>

      <div className="space-y-6">
        {contracts.map((contract, index) => (
          <div
            key={index}
            className="border-b border-gray-800 pb-4 flex flex-col sm:flex-row sm:justify-between sm:items-start"
          >
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                {contract.title}
              </h3>
              <p className="text-sm text-white">Hired by {contract.hiredBy}</p>
              <p className="text-sm text-gray-400">{contract.company}</p>
            </div>

            <div className="mt-4 sm:mt-0 text-sm text-white flex flex-col gap-2 sm:items-start">
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-yellow-500" />
                <span className="text-white">Budget: {contract.budget}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-yellow-500" />
                <span className="text-white">{contract.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-yellow-500" />
                <span className="text-white">{contract.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
        </PluginNavbar>
  )
}
