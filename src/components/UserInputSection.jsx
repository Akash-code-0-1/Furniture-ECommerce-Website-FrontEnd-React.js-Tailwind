import React from 'react'

const UserInputSection = () => {
    return (
        <div class=''>
            <div className="flex flex-col justify-center items-center text-center">
                <h2 class="text-[36px] font-poppins font-semibold text-gray-800 mb-2 mt-8">Get In Touch With Us</h2>
                <p class="text-[16px] text-gray-600 mb-6">
                    For more information about our products & services, please feel free to drop us <br /> an email. Our staff will always be there to help you out. Do not hesitate!
                </p>

                <div class="container flex flex-col-reverse sm:flex-row md:justify-around  pl-10 pr-10 gap-8 mt-12">
                    {/* Left Section */}
                    <div class="w-full md:w-1/2  flex flex-col  items-start justify-center gap-6 order-1 lg:order-1">

                        <div className="flex relative sm:left-[20%] justify-start items-center text-start gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="28" viewBox="0 0 22 28" fill="none">
                                <path d="M11 0.120087C8.08369 0.123477 5.28779 1.26659 3.22564 3.29867C1.16348 5.33075 0.00345217 8.08587 1.17029e-05 10.9597C-0.00348119 13.3081 0.774992 15.5929 2.21601 17.4634C2.21601 17.4634 2.51601 17.8527 2.56501 17.9088L11 27.7118L19.439 17.9039C19.483 17.8517 19.784 17.4634 19.784 17.4634L19.785 17.4605C21.2253 15.5907 22.0034 13.3071 22 10.9597C21.9966 8.08587 20.8365 5.33075 18.7744 3.29867C16.7122 1.26659 13.9163 0.123477 11 0.120087ZM11 14.9013C10.2089 14.9013 9.43553 14.6702 8.77773 14.237C8.11993 13.8039 7.60724 13.1883 7.30449 12.4681C7.00174 11.7478 6.92253 10.9553 7.07687 10.1907C7.23121 9.42608 7.61217 8.72374 8.17158 8.17249C8.73099 7.62124 9.44373 7.24583 10.2197 7.09374C10.9956 6.94165 11.7998 7.01971 12.5307 7.31804C13.2616 7.61638 13.8864 8.12159 14.3259 8.7698C14.7654 9.418 15 10.1801 15 10.9597C14.9987 12.0047 14.5768 13.0065 13.827 13.7454C13.0771 14.4843 12.0605 14.9 11 14.9013Z" fill="black" />
                            </svg>
                            <div >
                                <p class="text-lg font-semibold text-gray-800">Address</p>
                                <p class="text-sm text-gray-600">
                                    236 5th SE Avenue,<br /> New York NY10000, United States
                                </p>
                            </div>
                        </div>

                        <div className="flex relative sm:left-[20%] justify-start items-center text-start gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M25.6089 21.425L20.5276 16.805C20.2874 16.5867 19.9718 16.4703 19.6474 16.4803C19.3229 16.4903 19.0151 16.626 18.7889 16.8587L15.7976 19.935C15.0776 19.7975 13.6301 19.3462 12.1401 17.86C10.6501 16.3687 10.1989 14.9175 10.0651 14.2025L13.1389 11.21C13.3719 10.9839 13.5078 10.676 13.5178 10.3515C13.5278 10.027 13.4112 9.71129 13.1926 9.47124L8.57386 4.39124C8.35516 4.15044 8.05121 4.00437 7.72655 3.98407C7.40189 3.96376 7.08211 4.07082 6.83511 4.28249L4.12261 6.60874C3.9065 6.82564 3.77751 7.11431 3.76011 7.41999C3.74136 7.73249 3.38386 15.135 9.12386 20.8775C14.1314 25.8837 20.4039 26.25 22.1314 26.25C22.3839 26.25 22.5389 26.2425 22.5801 26.24C22.8858 26.2229 23.1743 26.0933 23.3901 25.8762L25.7151 23.1625C25.9276 22.9163 26.0355 22.5968 26.0156 22.2721C25.9958 21.9475 25.8498 21.6435 25.6089 21.425Z" fill="black" />
                            </svg>
                            <div>
                                <p class="text-lg font-semibold text-gray-800">Phone</p>
                                <p class="text-sm text-gray-600">Mobile: (+84) 546-6789</p>
                                <p class="text-sm text-gray-600">Hotline: (+84) 456-6789</p>
                            </div>
                        </div>

                        <div class="flex relative sm:left-[20%] justify-center items-center text-start gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                <g clip-path="url(#clip0_63_247)">
                                    <path d="M23 11.5C23 14.55 21.7884 17.4751 19.6317 19.6317C17.4751 21.7884 14.55 23 11.5 23C8.45001 23 5.52494 21.7884 3.36827 19.6317C1.2116 17.4751 0 14.55 0 11.5C0 8.45001 1.2116 5.52494 3.36827 3.36827C5.52494 1.2116 8.45001 0 11.5 0C14.55 0 17.4751 1.2116 19.6317 3.36827C21.7884 5.52494 23 8.45001 23 11.5ZM11.5 5.03125C11.5 4.84063 11.4243 4.65781 11.2895 4.52302C11.1547 4.38823 10.9719 4.3125 10.7812 4.3125C10.5906 4.3125 10.4078 4.38823 10.273 4.52302C10.1382 4.65781 10.0625 4.84063 10.0625 5.03125V12.9375C10.0625 13.0642 10.0961 13.1886 10.1597 13.2982C10.2233 13.4077 10.3147 13.4985 10.4247 13.5614L15.456 16.4364C15.6211 16.5256 15.8146 16.5467 15.995 16.4952C16.1755 16.4437 16.3287 16.3236 16.4218 16.1607C16.5149 15.9977 16.5406 15.8048 16.4933 15.6232C16.4461 15.4415 16.3297 15.2856 16.169 15.1886L11.5 12.5206V5.03125Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_63_247">
                                        <rect width="23" height="23" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <div>
                                <p class="text-lg font-semibold text-gray-800">Working Time</p>
                                <p class="text-sm text-gray-600">Monday–Friday: 9:00 - 22:00</p>
                                <p class="text-sm text-gray-600">Saturday–Sunday: 9:00 - 21:00</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div class="w-full sm:w-1/2 p-6 text-left items-start order-2 lg:order-2">

                        <form class="flex flex-col gap-4">
                            <div>
                                <label class="block font-poppins text-[16px] font-medium text-black mb-4 ">Your name</label>
                                <input
                                    type="text"
                                    id="name"
                                    class="mt-1 pl-3 block w-full sm:text-sm border-[1px] border-[#9F9F9F] w-[60%] h-[50px] rounded-md"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label class="block font-poppins text-[16px] font-medium text-black mb-4 ">Email address</label>
                                <input
                                    type="email"
                                    id="email"
                                    class="mt-1 pl-3 block w-full sm:text-sm border-[1px] border-[#9F9F9F] w-[60%] h-[50px] rounded-md"
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div>
                                <label class="block font-poppins text-[16px] font-medium text-black mb-4 ">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    class="mt-1 pl-3 block w-full sm:text-sm border-[1px] border-[#9F9F9F] w-[60%] h-[50px] rounded-md"
                                    placeholder="This is optional"
                                />
                            </div>

                            <div>
                                <label class="block font-poppins text-[16px] font-medium text-black mb-4 ">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    class="mt-1 pl-3 pt-2 block w-full sm:text-sm border-[1px] border-[#9F9F9F] w-[60%] h-[80px] rounded-md"
                                    placeholder="Hi! I'd like to ask about..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="mt-4 text-center bg-primary text-white px-4 py-2 lg:px-6 lg:py-3  hover:bg-yellow-700 w-[200px]"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserInputSection;
