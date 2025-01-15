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
import fixedImg from '../images/others/constant.jpeg';

const FurnitureSection = () => {
    return (
        <div className=" text-center mt-10">
            <p className="text-gray-400">Share your setup with <br /></p>
            <h2 className="text-center text-md sm:text-2xl lg:text-3xl font-bold mb-6">
                #FuniroFurniture
            </h2>
            <div className="furniture hidden xl:grid grid-cols-1 md:grid-cols-[2fr_1.1fr_2.1fr] gap-2 relative">
                {/* Left Section */}
                <div className="left_section flex h-[750px]">
                    <div className="h-[382px] w-[78px] bg-slate-950 absolute ">
                        <img className="h-full w-full object-cover" src={img1} alt="Furniture 1" />
                    </div>
                    <div className="h-[312px] w-[451px] bg-green-200 absolute left-[6.5%] top-[9%] ">
                        <img className="h-full w-full object-cover" src={img3} alt="Furniture 3" />

                    </div>
                    <div className="h-[323px] w-[140px] bg-red-400 absolute left-[0%] bottom-[5%]">
                        <img className="h-full w-full object-cover" src={img2} alt="Furniture 2" />
                    </div>
                    <div className="h-[242px] w-[386px] bg-blue-400 absolute bottom-[16%] left-[11%] ">
                        <img className="h-full w-full object-cover" src={img4} alt="Furniture 4" />
                    </div>
                </div>


                {/* Middle Section */}
                <div className="middle_secton h-[750px]">
                    {/*  */}

                    <div className="h-[392px] w-[295px] bg-slate-950 absolute top-[20%]">
                        <img className="h-full w-full object-cover" src={img5} alt="" />
                    </div>

                </div>

                {/* Right Section */}
                <div className="right_section flex h-[750px] ">
                    <div className="h-[348px] w-[290px] bg-slate-950 absolute top-[8%]">
                        <img className="h-full w-full object-cover" src={img6} alt="Furniture 6" />
                    </div>
                    <div className="h-[433px] w-[290px] bg-green-200 absolute right-[-1%] top-[-3.5%] ">
                        <img className="h-full w-full object-cover" src={img7} alt="Furniture 7" />

                    </div>
                    <div className="h-[242px] w-[178px] bg-red-400 absolute right-[27.5%] bottom-[12%]">
                        <img className="h-full w-full object-cover" src={img8} alt="Furniture 8" />

                    </div>
                    <div className="h-[196px] w-[258px] bg-blue-400 absolute bottom-[18%] right-[10%] ">

                        <img className="h-full w-full object-cover" src={img9} alt="Furniture 9" />
                    </div>



                </div>
               


            </div>
             <div className="h-[200px] sm:h-[400px] w-full block xl:hidden">
                    <img className="h-full w-full object-contain" src={fixedImg} alt="" />
                </div>

        </div>
    );
};

export default FurnitureSection;
