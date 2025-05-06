'use client'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Clock10Icon, Star } from "lucide-react"
import PluginNavbar from "../../Components/NavBar"
import { useRouter } from "next/navigation"
import MyModal from "@/components/ui/MyModal"
import AcceptOfferDialog from "../components/AcceptInviteDialog"
import { useState } from "react"
import DeclineOffer from "../components/DeclineInvite"





export default function UIUXJobPage() {
        const router = useRouter();
        const [showAcceptDialog, setShowShowDialog] = useState(false)
        const [showDeclineDialog, setShowDeclineDialog] = useState(false)

        return (
                <PluginNavbar >
                        <div className="bg-black text-white min-h-screen p-4 md:p-10">
                                <div className="w-full mx-auto space-y-6 flex md:flex-row flex-col gap-6 justify-center items-center">
                                        {/* <button className="text-yellow-400 text-sm">&lt; return to search</button> */}

                                        <div className="w-full  md:w-3/4">
                                                <div>
                                                        <h1 className="text-xl md:text-2xl font-bold">UI/UX Designer Needed for Fintech Company</h1>
                                                        <p className="text-sm text-gray-400 mt-1">Posted 2hrs ago <span className="mx-2">•</span> Lagos, Nigeria (Remote)</p>
                                                </div>

                                                <Card className="bg-[#111] border-none">
                                                        <CardContent className="p-6 space-y-6">
                                                                <div>
                                                                        <h2 className="font-semibold text-white">Job Description: UI/UX Designer</h2>
                                                                        <p className="text-white">
                                                                                We're looking for a talented UI/UX Designer to join our team. You’ll be responsible for designing intuitive and visually appealing user experiences for web and mobile applications.
                                                                        </p>
                                                                </div>

                                                                <div>
                                                                        <h3 className="font-semibold">Key Responsibilities</h3>
                                                                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                                                                                <li>Create user-friendly interfaces that enhance usability and engagement.</li>
                                                                                <li>Conduct user research and analyze feedback to improve designs.</li>
                                                                                <li>Develop wireframes, prototypes, and high-fidelity designs.</li>
                                                                                <li>Collaborate with developers to ensure seamless implementation.</li>
                                                                                <li>Stay updated on UI/UX trends and best practices.</li>
                                                                        </ul>
                                                                </div>

                                                                <div>
                                                                        <h3 className="font-semibold">Requirements</h3>
                                                                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                                                                                <li>Experience in UI/UX design, preferably in web or mobile applications.</li>
                                                                                <li>Strong understanding of user-centered design principles.</li>
                                                                                <li>Proficiency in design tools like Figma, Adobe XD, or Sketch.</li>
                                                                                <li>Ability to create wireframes, prototypes, and high-fidelity designs.</li>
                                                                                <li>Strong communication and problem-solving skills.</li>
                                                                        </ul>
                                                                </div>

                                                                <div>
                                                                        <h3 className="font-semibold">Relevant Skills</h3>
                                                                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                                                                                <li>User Research</li>
                                                                                <li>Wireframing & Prototyping</li>
                                                                                <li>Interaction Design</li>
                                                                                <li>Visual Design</li>
                                                                                <li>Usability Testing</li>
                                                                                <li>Design Systems</li>
                                                                        </ul>
                                                                </div>

                                                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                                                                        <div className="flex items-center gap-2 text-sm text-gray-300">
                                                                                <span className="flex items-center gap-1">
                                                                                        <Clock10Icon className="text-yellow-400" />
                                                                                        1 month
                                                                                </span>
                                                                                <span className="flex items-center gap-1"><Briefcase className="text-yellow-400" /> ₦250,000 Fixed</span>
                                                                        </div>

                                                                </div>

                                                                <div className="flex flex-wrap gap-2 text-xs mt-4">
                                                                        <Badge variant="secondary">Graphics</Badge>
                                                                        <Badge variant="secondary">UX</Badge>
                                                                        <Badge variant="secondary">Web Design</Badge>
                                                                </div>
                                                        </CardContent>
                                                </Card>
                                        </div>


                                        <div className="w-full  md:w-1/4">
                                                {/* <div className="bg-[#111] border border-gray-700 p-4 rounded-xl flex items-center gap-2 w-full mb-2">
                                                        <img src='/images/logo-single-yellow.png' alt='logo' />
                                                        <p className="">Plugs: </p>
                                                        <p className="text-yellow-400 font-semibold">200</p>
                                                </div> */}
                                                <div className="flex flex-col w-full  gap-2 mt-4 md:mt-0">
                                                        <Button className="bg-yellow-400 text-black hover:bg-yellow-500 cursor-pointer" onClick={() => { setShowShowDialog(true) }}>Accept Offer</Button>
                                                        <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent" onClick={()=>{ setShowDeclineDialog(true) }}>Decline Offer</Button>
                                                </div>
                                                <div className="space-y-4 mt-3">
                                                        <h2 className="font-semibold text-lg">Client Reviews</h2>
                                                        {[1, 2, 3].map((_, idx) => (
                                                                <div key={idx} className="border border-gray-700 p-4 rounded-xl">
                                                                        <div className="flex items-center gap-1 text-yellow-400">
                                                                                {[...Array(4)].map((_, i) => <Star key={i} size={14} fill="currentColor" stroke="none" />)}
                                                                                <span className="ml-1 text-sm text-white">4.0</span>
                                                                        </div>
                                                                        <p className="text-sm text-gray-300 mt-2">
                                                                                Working with him was smooth from start to finish. Clear requirements, prompt feedback, and timely payments. Would definitely work with him again
                                                                        </p>
                                                                        <p className="text-xs text-gray-400 mt-1 ms-auto h-fit">Adebayo Tobi</p>
                                                                </div>
                                                        ))}
                                                        <Button variant="link" className="text-yellow-400 p-0">View more &gt;</Button>
                                                </div>

                                                <div className="bg-[#111] border border-gray-700 p-4 rounded-xl mt-6">
                                                        <p className="text-sm">Share Job Link</p>
                                                        <div className="flex justify-between items-center mt-2">
                                                                <span className="text-gray-400 text-xs">Share job link to interested freelancers</span>
                                                                <Button variant="link" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black text-xs px-3 py-1">Copy Link</Button>
                                                        </div>
                                                </div>


                                        </div>



                                </div>
                        </div>

                        <MyModal isOpen={showAcceptDialog} onClose={() => { setShowShowDialog(false) }} >
                                <AcceptOfferDialog onSubmit={() => {
                                        setShowShowDialog(false)

                                }} onCancle={() => { setShowShowDialog(false) }} />
                        </MyModal>

                        <MyModal isOpen={showDeclineDialog} onClose={() => { setShowDeclineDialog(false) }} >
                                <DeclineOffer onSubmit={() => {
                                        setShowDeclineDialog(false)

                                }} onCancle={() => { setShowDeclineDialog(false) }} />
                        </MyModal>
                </PluginNavbar>
        )
}
