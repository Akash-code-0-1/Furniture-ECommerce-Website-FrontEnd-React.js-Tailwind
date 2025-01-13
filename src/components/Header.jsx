import React from 'react';
import banner from '../images/header/banner.png';

const Header = () => {
    return (
        <div className='header flex  '>
            <img className='w-full cover' src={banner} alt="" />

            <div className="heading_card  absolute right-0 top-[10%] md:right-8 md:top-[26%]">
                <div className="content flex flex-col justify-start items-start w-[200px] h-[180px] md:w-[400px] md:h-[220px] lg:w-[500px] lg:h-[280px] xl:w-[640px] xl:h-[400px] bg-head_bg p-5 rounded">

                    <span class="font-poppins text-[10px] md:text-[13px] lg:text-[14px] xl:text-[16px] font-semibold leading-normal tracking-[2px] lg:tracking-[3px] xl:tracking-[3px]"
                    >New Arrival</span> 
                    <h1 class="text-primary font-poppins text-[20px] md:text-[25px] lg:text-[30px] xl:text-[52px] font-bold leading-[22px] md:leading-[30px] lg:leading-[40px] xl:leading-[65px]"
                    >Discover Our <br />New Collection</h1>
                    <p class="text-[var(--Font-Color,#333)] font-poppins text-[8px] md:text-[12px] lg:text-[15px] xl:text-[22px] lg:leading-[20px] xl:leading-[24px] mt-1 md:mt-2 lg:mt-3"
                    >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo dolores nostrum earum exercitationem nesciunt aliquam quisquam</p>
                    <button class="bg-primary text-white inline-flex px-[30px] py-[5px]  lg:px-[40px] lg:py-[10px] xl:px-[72px] xl:py-[25px] items-start mt-2 lg:mt-3 xl:mt-6"
                    >BUY NOW</button>

                </div>
            </div>

        </div>
    )
}

export default Header;
