import React from 'react';
import img1 from '../images/home_section_2/1.png';
import img2 from '../images/home_section_2/2.png';
import img3 from '../images/home_section_2/3.png';

const Home_section_2 = () => {
    return (
        <section class="container mx-auto py-16">
            <h2 class="text-3xl font-poppins font-bold mb-6 text-center">Browse The Range</h2>
            <p class="text-center mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pl-16 pr-16">
                <div class="bg-white rounded-lg  overflow-hidden">
                    <img src={img1} alt="" class="w-full lg:h-[520px] object-cover" />
                    <div class="p-4">
                        <h3 class="text-lg text-center font-semibold font-poppins">Dining</h3>
                    </div>
                </div>

                <div class="bg-white rounded-lg  overflow-hidden">
                    <img src={img2} alt="" class="w-full lg:h-[520px] object-cover" />
                    <div class="p-4">
                        <h3 class="text-lg text-center font-semibold font-poppins">Living</h3>
                    </div>
                </div>

                <div class="bg-white rounded-lg  overflow-hidden">
                    <img src={img3} alt="" class="w-full lg:h-[520px] object-cover" />
                    <div class="p-4">
                        <h3 class="text-lg text-center font-semibold font-poppins">Bedroom</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home_section_2;
