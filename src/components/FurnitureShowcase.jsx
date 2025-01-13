import React from "react";
import img1 from '../images/furniture_showcase/1.png';
import img2 from '../images/furniture_showcase/2.png';
import img3 from '../images/furniture_showcase/3.png';
import img4 from '../images/furniture_showcase/4.png';
import img5 from '../images/furniture_showcase/5.png';
import img6 from '../images/furniture_showcase/6.png';
import img7 from '../images/furniture_showcase/7.png';
import img8 from '../images/furniture_showcase/8.png';
import img9 from '../images/furniture_showcase/9.png';


const FurnitureSection = () => {
    return (
        <div className="bg-[#fefaf5] p-6 sm:p-12 text-center">
            <p className="text-gray-400">Share your setup with <br /></p>
            <h2 className="text-center text-md sm:text-2xl lg:text-3xl font-bold mb-6">
                #FuniroFurniture
            </h2>
            <div className="furniture grid lg:grid-cols-3 gap-10 object-contain w-full h-auto overflow-hidden relative">
                {/* Left Section */}
                <div className="flex flex-wrap gap-4">
                    <img
                        src={img1}
                        alt="Furniture 1"
                        className="w-[274px] h-[382px] object-contain absolute left-[-10%] "
                    />
                    <img
                        src={img2}
                        alt="Furniture 2"
                        className="w-[381px] h-[323px] object-contain absolute bottom-[15%] left-[-10%]"
                    />
                    <img
                        src={img3}
                        alt="Furniture 3"
                        className="w-[451px] h-[312px] object-contain absolute top-[8%] left-[3.5%]"
                    />
                    <img
                        src={img4}
                        alt="Furniture 4"
                        className="w-[344px] h-[242px] object-contain absolute bottom-[24.5%] left-[11%]"
                    />
                </div>

                {/* Middle Section */}
                <div className="flex justify-center items-center">
                    <img
                        src={img5}
                        alt="Furniture 5"
                        className="w-[295] h-[392px] object-contain absolute top-[19%] left-[36.5%]"
                    />
                </div>

                {/* Right Section */}
                <div className="flex flex-wrap gap-4">
                    <img
                        src={img6}
                        alt="Furniture 6"
                        className="w-full h-full object-contain absolute"
                    />
                    <img
                        src={img7}
                        alt="Furniture 7"
                        className="w-[290] h-[348px] object-contain absolute"
                    />
                    <img
                        src={img8}
                        alt="Furniture 8"
                        className="w-full h-[200px] object-cover"
                    />
                    <img
                        src={img9}
                        alt="Furniture 9"
                        className="w-full h-[200px] object-cover"
                    />
                </div>
            </div>

        </div>
    );
};

export default FurnitureSection;
