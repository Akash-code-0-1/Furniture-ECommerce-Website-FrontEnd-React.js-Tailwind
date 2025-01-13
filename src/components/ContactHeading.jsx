import React from 'react';
import header_bg from '../images/header_background/1.png';
import logo from '../images/navbar/logo.png';


const ContactHeading = () => {
  return (
    <div>
        <div class="relative flex flex-col justify-center text-center items-center h-[316px] bg-cover bg-center w-full"
                style={{ backgroundImage: `url(${header_bg})` }}
            >
                <img src={logo} alt="" />
                <h1 class="relative font-poppins text-[48px]  font-smibold text-black mb-2">Contact</h1>
                <div class="relative flex justify-center text-center items-center">
                    <a href="#" class="hover:underline font-poppins text-[16px] text-black font-bold font-medium">Home</a>
                    <span class="mx-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black" />
                    </svg></span>
                    <p class='font-poppins text-[16px] font-light text-black'>Contact</p>
                </div>
            </div>
    </div>
  )
}

export default ContactHeading;
