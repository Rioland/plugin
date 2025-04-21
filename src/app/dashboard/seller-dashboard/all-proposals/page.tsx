import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

import { TabsContent } from "@radix-ui/react-tabs"
import PluginNavbar from "../Components/NavBar"





export default function ProposalsPage() {
        return (
                <PluginNavbar>
                  

                        <div className="min-h-screen px-4 md:px-10 py-6 bg-black text-white">
                                <h1 className="text-2xl font-semibold mb-6">Proposals</h1>
                                <Tabs defaultValue="active" className="mb-4">
                                        <TabsList className="bg-transparent ">
                                                <TabsTrigger value="active" className="px-3 pb-2  data-[state=active]:underline data-[state=active]:text-yellow-500 text-gray-500 rounded-none text-sm font-medium bg-transparent data-[state=active]:bg-transparent">Active</TabsTrigger>
                                                <TabsTrigger value="archived" className="px-3 pb-2  data-[state=active]:underline rounded-none text-sm font-medium  data-[state=active]:text-yellow-500 text-gray-500 bg-transparent data-[state=active]:bg-transparent ">Archived</TabsTrigger>
                                        </TabsList>
                                        <TabsContent value="active">
                                                <ActiveProposal />

                                        </TabsContent>
                                        <TabsContent value="archived">
                                                <ArchivedProposal />

                                        </TabsContent>
                                </Tabs>


                        </div>
                </PluginNavbar>
        )
}

const ActiveProposal = () => {
        const statusColor = {
                Accepted: "text-green-500",
                Declined: "text-red-500",
                Pending: "text-yellow-500",
        }
        const proposals = [
                { date: "Apr 14, 2025", daysAgo: "4 days ago", title: "UI/UX designer needed for fintech project", status: "Accepted" },
                { date: "Apr 14, 2025", daysAgo: "4 days ago", title: "UI/UX designer needed for fintech project", status: "Declined" },
                ...Array(8).fill({ date: "Apr 14, 2025", daysAgo: "4 days ago", title: "UI/UX designer needed for fintech project", status: "Pending" })
        ]

        return (


                <Card className="bg-neutral-950 rounded-xl border border-neutral-800">
                        <div className="p-5 text-white font-semibold text-base border-b border-neutral-800">Submitted proposals</div>
                        <div className="divide-y divide-neutral-800">
                                {proposals.map((proposal, i) => (
                                        <div key={i} className="flex flex-col md:flex-row md:items-center justify-between px-5 py-4 text-sm">
                                                <div className="mb-2 md:mb-0">
                                                        <div className="text-neutral-400">Submitted {proposal.date}</div>
                                                        <div className="text-xs text-neutral-500">{proposal.daysAgo}</div>
                                                </div>
                                                <div className="text-yellow-400 font-medium cursor-pointer hover:underline">
                                                        {proposal.title}
                                                </div>
                                                <div className={cn("text-sm", statusColor[proposal.status])}>{proposal.status}</div>
                                        </div>
                                ))}
                        </div>
                        <div className="flex justify-end items-center p-4 gap-2">
                                {[1, 2, 3].map((num) => (
                                        <Button
                                                key={num}
                                                variant="ghost"
                                                className={cn(
                                                        "h-9 w-9 p-0 border border-yellow-400 text-yellow-400",
                                                        num === 1 && "bg-yellow-400 text-black"
                                                )}
                                        >
                                                {num}
                                        </Button>
                                ))}
                                <Button variant="ghost" className="h-9 w-9 p-0 text-yellow-400">&gt;</Button>
                        </div>
                </Card>

        );
}

const ArchivedProposal = () => {
        const statusColor = {
                Closed: "text-gray-500",
                Withdrawn: "text-red-500",
                Hired: "text-yellow-500",
        }
        const proposals = [
                { date: "Apr 14, 2025", daysAgo: "4 days ago", title: "UI/UX designer needed for fintech project", status: "Hired" },
                { date: "Apr 14, 2025", daysAgo: "4 days ago", title: "UI/UX designer needed for fintech project", status: "Withdrawn" },
                ...Array(8).fill({ date: "Apr 14, 2025", daysAgo: "4 days ago", title: "UI/UX designer needed for fintech project", status: "Closed" })
        ]

        return (


                <Card className="bg-neutral-950 rounded-xl border border-neutral-800">
                        <div className="p-5 text-white font-semibold text-base border-b border-neutral-800">Submitted proposals</div>
                        <div className="divide-y divide-neutral-800">
                                {proposals.map((proposal, i) => (
                                        <div key={i} className="flex flex-col md:flex-row md:items-center justify-between px-5 py-4 text-sm">
                                                <div className="mb-2 md:mb-0">
                                                        <div className="text-neutral-400">Submitted {proposal.date}</div>
                                                        <div className="text-xs text-neutral-500">{proposal.daysAgo}</div>
                                                </div>
                                                <div className="text-yellow-400 font-medium cursor-pointer hover:underline">
                                                        {proposal.title}
                                                </div>
                                                <div className={cn("text-sm", statusColor[proposal.status])}>{proposal.status}</div>
                                        </div>
                                ))}
                        </div>
                        <div className="flex justify-end items-center p-4 gap-2">
                                {[1, 2, 3].map((num) => (
                                        <Button
                                                key={num}
                                                variant="ghost"
                                                className={cn(
                                                        "h-9 w-9 p-0 border border-yellow-400 text-yellow-400",
                                                        num === 1 && "bg-yellow-400 text-black"
                                                )}
                                        >
                                                {num}
                                        </Button>
                                ))}
                                <Button variant="ghost" className="h-9 w-9 p-0 text-yellow-400">&gt;</Button>
                        </div>
                </Card>

        );
}
