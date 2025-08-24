'use client'

import React, { useEffect, useState } from 'react'
import ExperienceCard from './ExperienceCard'
import { ApiBaseUrl } from '@/helper/functions'
import Cookies from 'js-cookie'
import Swal from 'sweetalert2'
import MyModal from '@/components/ui/MyModal'
import UpdateExperienceForm from './UpdateExperienceForm'
import { toast, Toaster } from 'sonner'
import Preloading from '@/components/preloading'

interface Experience {
        id: number
        user_id: number
        type: string
        title: string
        from: string
        desc: string
        start_year: number
        end_year: number
}

interface Props {
        type: string
}

export default function MyExperience({ type }: Props) {
        const [experiences, setExperiences] = useState<Experience[]>([])
        const [loading, setLoading] = useState(true)
        const [showUpdateModal, setShowUpdateModal] = useState(false)
        const [updateExperience, setUpdateExperience] = useState<Experience | null>(null)


        useEffect(() => {
                const fetchExperience = async () => {
                        try {
                                const res = await fetch(`${ApiBaseUrl}/seller/credentials?type=${type}`, {
                                        headers: {
                                                Authorization: `Bearer ${Cookies.get("token")}`,
                                        }
                                })
                                const data = await res.json()

                                if (data.status && Array.isArray(data.data)) {
                                        setExperiences(data.data)
                                }
                        } catch (err) {
                                console.error('Failed to fetch experiences:', err)
                        } finally {
                                setLoading(false)
                        }
                }

                fetchExperience()
        }, [type])

        if (loading) return <Preloading />;
        if (experiences.length === 0) return <p>No {type} found.</p>;

        return (
                <div>
                        {experiences.map((exp) => (
                                <ExperienceCard
                                        key={exp.id}
                                        startYear={exp.start_year}
                                        endYear={exp.end_year}
                                        title={exp.title}
                                        subTitle={exp.from}
                                        description={exp.desc}
                                        onDelete={() => {
                                                Swal.fire({
                                                        title: "Are you sure?",
                                                        text: "You won't be able to revert this!",
                                                        icon: "warning",
                                                        showCancelButton: true,
                                                        confirmButtonColor: "#3085d6",
                                                        cancelButtonColor: "#d33",
                                                        confirmButtonText: "Yes, delete it!"
                                                }).then((result) => {
                                                        if (result.isConfirmed) {

                                                                fetch(`${ApiBaseUrl}/seller/credentials/${exp.id}/delete`, {
                                                                        method: "POST",
                                                                        headers: {
                                                                                "Content-Type": "application/json",
                                                                                Authorization: `Bearer ${Cookies.get("token")}`,
                                                                        },
                                                                })
                                                                        .then((res) => res.json())
                                                                        .then((data) => {
                                                                                if (data.status) {
                                                                                        setExperiences((prev) =>
                                                                                                prev.filter((item) => item.id !== exp.id)
                                                                                        )

                                                                                        toast.success("Experience deleted successfully!")
                                                                                } else {
                                                                                        toast.error("Failed to delete experience")

                                                                                }
                                                                        })
                                                                        .catch((error) => {
                                                                                toast.error("An error occurred while deleting experience")
                                                                                console.error("Error deleting experience:", error)
                                                                        })


                                                        }
                                                });

                                        }

                                        }
                                        onEdit={() => {
                                                setUpdateExperience(exp)
                                                setShowUpdateModal(true)

                                        }}
                                />
                        ))}
                        <Toaster position='top-center' />

                        <MyModal isOpen={showUpdateModal} onClose={() => {
                                setShowUpdateModal(false)
                                setUpdateExperience(null)
                        }}>
                                {updateExperience && (
                                        <UpdateExperienceForm
                                                type={updateExperience.type}
                                                start_year={`${updateExperience.start_year}`}
                                                end_year={`${updateExperience.end_year}`}
                                                title={updateExperience.title}
                                                from={updateExperience.from}
                                                desc={updateExperience.desc}
                                                id={updateExperience.id}
                                        />
                                )}
                        </MyModal>

                </div>
        )
}
