import React, { useState } from "react";
import img1 from '../images/slider/1.png';
import img2 from '../images/slider/2.png';
import img3 from '../images/slider/3.png';

const Home_Slide_section = () => {
    const sliderImages = [
        {
            id: 1,
            image: img1,
            title: "01 — Bed Room",
            subtitle: "Inner Peace",
        },
        {
            id: 2,
            image: img2,
            title: "02 — Living Room",
            subtitle: "Serenity Space",
        },
        {
            id: 3,
            image: img3,
            title: "03 — Dining Room",
            subtitle: "Cozy Comfort",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide(
            (prev) => (prev - 1 + sliderImages.length) % sliderImages.length
        );
    };

    const getTranslateValue = () => {
        const screenWidth = window.innerWidth;

        if (screenWidth >= 1280) {
            return currentSlide * 60; // Extra Large Screens
        } else if (screenWidth >= 1024) {
            return currentSlide * 60; // Large Screens
        } else if (screenWidth >= 768) {
            return currentSlide * 70; // Medium Screens
        } else {
            return currentSlide * 80; // Small Screens
        }
    };

    return (
        <div className="flex flex-col lg:flex-row items-center justify-between relative bg-[#f8f4f0] p-6 rounded-lg">
            {/* Left Section */}
            <div className="lg:w-1/2 w-full p-6 text-center lg:text-left">
                <h2 className="text-black mb-2 font-poppins text-[20px] md:text-[25px] lg:text-[30px] xl:text-[52px] font-bold leading-[22px] md:leading-[30px] lg:leading-[40px] xl:leading-[65px]">
                    50+ Beautiful rooms inspiration
                </h2>
                <p className="text-gray-600 mb-6 font-poppins text-[12px] md:text-[14px] lg:text-[15px] xl:text-[19px]">
                    Our designer already made a lot of beautiful prototype of rooms that
                    inspire you.
                </p>
                <button className="bg-primary text-white px-4 py-2 lg:px-6 lg:py-3  hover:bg-yellow-700">
                    Explore More
                </button>
            </div>

            {/* Right Section (Slider) */}
            <div className="lg:w-1/2 w-full relative overflow-hidden">
                <div
                    className={`flex items-center transition-transform duration-300 ease-in-out`}
                    style={{
                        transform: `translateX(-${getTranslateValue()}%)`,
                    }}
                >

                    {sliderImages.map((image, index) => (
                        <div
                            key={image.id}
                            className={`relative flex-shrink-0 w-[80%] sm:w-[70%] lg:w-[60%] h-[300px] sm:h-[400px] lg:h-[580px]  ${index === currentSlide ? "scale-100" : "left-8 bottom-12 lg:h-[480px]"
                                } transition-transform duration-300 ease-in-out`}
                        >
                            <img
                                src={image.image}
                                alt={image.title}
                                className="w-full h-full object-cover "
                            />
                            {/* Caption */}
                            <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-white p-2 sm:p-4  shadow-lg">
                                <p className="text-sm sm:text-base text-gray-600">{image.title}</p>
                                <h3 className="text-base sm:text-xl font-bold text-gray-800">
                                    {image.subtitle}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Slider Controls */}
                <button
                    className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-white font-bold p-2 sm:p-3 rounded-full hover:bg-gray-900"
                    onClick={prevSlide}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15 5L8 12L15 19" stroke="#B88E2F" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </button>
                <button
                    className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-white font-bold p-2 sm:p-3 rounded-full hover:bg-gray-900"
                    onClick={nextSlide}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9.00006 5L16.0001 12L9.00006 19" stroke="#B88E2F" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-4 absolute bottom-4 sm:bottom-6 md:bottom-4 lg:bottom-12 right-[-25px] md:right-28 lg:right-20 xl:right-44 ">
                    {sliderImages.map((_, index) => (
                        <button
                            key={index}
                            className={`relative flex items-center justify-center h-5 w-5 mx-1 rounded-full ${index === currentSlide
                                ? "border-2 border-[#B88E2F]" // Circle around the active dot
                                : ""
                                }`}
                            onClick={() => setCurrentSlide(index)}
                        >
                            <span
                                className={`h-2 w-2 rounded-full ${index === currentSlide
                                    ? "bg-[#B88E2F]" // Inner filled dot for active
                                    : "bg-gray-400 hover:bg-gray-500" // Inactive dot
                                    }`}
                            />
                        </button>
                    ))}


                </div>
            </div>
        </div>
    );

};

export default Home_Slide_section;
