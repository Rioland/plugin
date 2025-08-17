"use client"
import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */
export default function MyComponentLeft() {
        // Define images for each slide
        const slideImages = [
                '/images/ImageCard1.png',
                '/images/ImageCard2.png',
                '/images/ImageCard3.png',
        ];

        const [currentSlide, setCurrentSlide] = useState(0);

        // Change slide every 5 seconds
        useEffect(() => {
                const interval = setInterval(() => {
                        setCurrentSlide((prev) => (prev + 1) % slideImages.length);
                }, 5000);

                return () => clearInterval(interval); // Cleanup
        }, [slideImages.length]);

        return (
                <div className="flex-col flex-1 p-10 left-[section] max-md:p-6 bg-[#917930] w-full md:w-1/2 hidden md:flex">
                        <div className="mb-16">
                                <div>
                                        <img
                                                src="/images/logo-wihte.png"
                                                alt="Logo"
                                                className="w-28 h-auto mb-4"
                                        />
                                </div>
                                <img
                                        src={slideImages[currentSlide]}
                                        alt={`Slide ${currentSlide + 1}`}
                                        className="mt-20 transition-all duration-500 w-full h-[900px]"
                                />
                        </div>

                        <div className="mt-2 max-w-[500px]">
                                <div className="mb-2 text-3xl font-medium text-white max-sm:text-3xl">
                                        Find Services That Fit Your Life
                                </div>
                                <div className="mb-10 text-white text-opacity-70 text-lg">
                                        From daily tasks to expert solutions, Plugin connects you with trusted vendors for everything you need.
                                </div>
                                <div className="flex justify-start items-center gap-4">
                                        {[0, 1, 2].map((i) => (
                                                <div
                                                        key={i}
                                                        className={`rounded-full w-3 h-3 transition-all duration-300 ${currentSlide === i ? 'bg-yellow-500' : 'bg-white'}`}
                                                />
                                        ))}
                                </div>
                        </div>
                </div>
        );
}