
import React from 'react';
import { useState } from 'react';
import product1 from '../images/products/1.png';
import product2 from '../images/products/2.png';
import product3 from '../images/products/3.png';
import product4 from '../images/products/4.png';
import product5 from '../images/products/5.png';
import product6 from '../images/products/6.png';
import product7 from '../images/products/7.png';
import { Link } from "react-router-dom";

const products = [
    {
        id: 1,
        name: 'Syltherine',
        description: 'Stylish cafe chair',
        price: 2500000,
        oldPrice: 3500000,
        discount: 30,
        image: product1,
    },
    {
        id: 2,
        name: 'Leviosa',
        description: 'Stylish eidlectio',
        price: 2500000,
        oldPrice: 3500000,
        discount: 30,
        image: product2,
    },
    {
        id: 3,
        name: 'Lolito',
        description: 'Luxury big sofa',
        price: 7000000,
        oldPrice: 10000000,
        discount: 30,
        image: product3,
    },
    {
        id: 4,
        name: 'Syltherine Plus',
        description: 'Ergonomic desk chair',
        price: 3000000,
        oldPrice: 4000000,
        discount: 0,
        image: product4,
    },
    {
        id: 5,
        name: 'Leviosa Pro',
        description: 'Comfortable lounge chair',
        price: 2800000,
        oldPrice: 3700000,
        discount: 24,
        image: product5,
    },
    {
        id: 6,
        name: 'Lolito Grande',
        description: 'Spacious and modern sofa',
        price: 9000000,
        oldPrice: 12000000,
        discount: 0,
        image: product6,
    },
    {
        id: 7,
        name: 'Syltherine Mini',
        description: 'Compact cafe chair',
        price: 2200000,
        oldPrice: 3200000,
        discount: 30,
        image: product7,
    },
    {
        id: 8,
        name: 'Leviosa Light',
        description: 'Lightweight chair',
        price: 2400000,
        oldPrice: 3400000,
        discount: 29,
        image: product2,
    },
    {
        id: 9,
        name: 'Lolito Classic',
        description: 'Traditional big sofa',
        price: 7500000,
        oldPrice: 10500000,
        discount: 28,
        image: product3,
    },
    {
        id: 10,
        name: 'Syltherine Elegant',
        description: 'Elegant cafe chair',
        price: 2700000,
        oldPrice: 3700000,
        discount: 27,
        image: product1,
    },
    {
        id: 11,
        name: 'Leviosa Elite',
        description: 'Premium lounge chair',
        price: 2900000,
        oldPrice: 3900000,
        discount: 26,
        image: product2,
    },
    {
        id: 12,
        name: 'Lolito Ultra',
        description: 'Premium luxury sofa',
        price: 9500000,
        oldPrice: 13000000,
        discount: 27,
        image: product3,
    },
    {
        id: 13,
        name: 'Syltherine Grand',
        description: 'Grand cafe chair',
        price: 3100000,
        oldPrice: 4100000,
        discount: 25,
        image: product1,
    },
    {
        id: 14,
        name: 'Leviosa Supreme',
        description: 'High-end lounge chair',
        price: 3000000,
        oldPrice: 4000000,
        discount: 25,
        image: product2,
    },
    {
        id: 15,
        name: 'Lolito Max',
        description: 'Extra-large luxury sofa',
        price: 10000000,
        oldPrice: 14000000,
        discount: 29,
        image: product3,
    },
    {
        id: 16,
        name: 'Syltherine Compact',
        description: 'Compact and stylish chair',
        price: 2000000,
        oldPrice: 3000000,
        discount: 33,
        image: product1,
    },
    {
        id: 17,
        name: 'Lolito Max',
        description: 'Extra-large luxury sofa',
        price: 10000000,
        oldPrice: 14000000,
        discount: 29,
        image: product3,
    },
    {
        id: 18,
        name: 'Syltherine Compact',
        description: 'Compact and stylish chair',
        price: 2000000,
        oldPrice: 3000000,
        discount: 33,
        image: product1,
    }
];

const Products = ({ limit, page }) => {
    const display_products = limit ? products.slice(0, limit) : products;

    let header, footer;

    if (page === 'home') {
        header = <h2 className="text-3xl font-poppins font-bold mb-6 text-center">Our Products</h2>;
        footer = (
            <button className='border-primary border-[1px] text-primary font-poppins inline-flex text-[16px] px-[50px] py-[10px] md:text-[18px] md:px-[90px] md:py-[20px] mb-10 mt-5'>
                Show More
            </button>
        );
    } else if (page === 'shop') {
        header = null;
    } else if (page === 'product') {
        header = <h2 className="text-3xl font-poppins font-bold mb-6 text-center text-black">Related Products</h2>;
    }

    const PRODUCTS_PER_PAGE = page === 'product' ? 4 : 16;

    // Number of products per page
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate total pages
    const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

    // Get products for the current page
    const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
    const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const renderPagination = () => {
        return (
            <div className="pagination flex space-x-2 justify-center mt-6">
                {/* Previous Button */}
                <button
                    className={`px-5 py-2 ${currentPage === 1 ? 'bg-gray-300 text-gray-500 hidden ' : 'bg-white text-black border'} rounded-md`}
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        className={`px-4 py-2 ${currentPage === index + 1
                            ? 'bg-yellow-600 text-white'
                            : 'bg-[#F9F1E7] text-black border'
                            } rounded-md`}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}

                {/* Next Button */}
                <button
                    className={`px-4 py-2 ${currentPage === totalPages ? 'bg-gray-300 text-gray-500 hidden' : 'bg-white text-black border '} rounded-md ml-[20px] `}
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        );
    };

    return (
        <div className="products flex flex-col items-center mb-4">
            {/* Header */}
            {header}

            {/* Products Grid */}
            <div className="product_container flex pl-6 pr-6 justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
                    {currentProducts.map((product) => (
                        <div
                            key={product.id}
                            className="relative group overflow-hidden bg-product_bg"
                        >
                            {/* Entire Card Content */}
                            <div className="group-hover:blur-sm transition duration-300 ease-in-out">
                                {/* Discount */}
                                {product.discount === 0 ? (
                                    <div className="absolute top-2 right-2 bg-no_discount_bg text-white text-sm px-2 py-3 rounded-full font-poppins">
                                        New
                                    </div>
                                ) : (
                                    <div className="absolute font-poppins top-2 right-2 bg-discount_bg text-white text-sm px-2 py-3 rounded-full p-1">
                                        -{product.discount}%
                                    </div>
                                )}

                                {/* Image */}
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-[300px] w-[285px] object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-bold font-poppins text-gray-800 mb-1">
                                        {product.name}
                                    </h3>
                                    <p className="text-gray-600 font-poppins text-sm mb-2">
                                        {product.description}
                                    </p>

                                    {/* Price */}
                                    <div className="price flex items-center space-x-2">
                                        <p className="text-xl font-poppins font-bold text-gray-800">
                                            Rp {product.price.toLocaleString('id-ID')}
                                        </p>
                                        {product.discount !== 0 && (
                                            <p className="line-through text-gray-500 font-poppins text-sm">
                                                Rp {product.oldPrice.toLocaleString('id-ID')}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Hover Overlay with Buttons */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-80 transition-opacity duration-300 bg-[#3A3A3A]">
                                <Link to={`/shop/${product.id}`}
                                    state={{ product }}>
                                    <button className="bg-white text-primary font-poppins font-medium px-6 py-2  mb-4 hover:bg-white">
                                        Add to Cart
                                    </button>
                                </Link>
                                <div className="flex space-x-4">
                                    {/* Share Icon */}
                                    <button className="flex justify-center items-center gap-1 text-white p-2 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M12 10.6667C11.4747 10.6667 11 10.8733 10.644 11.2047L5.94 8.46667C5.97333 8.31334 6 8.16 6 8C6 7.84 5.97333 7.68667 5.94 7.53334L10.64 4.79334C11 5.12667 11.4733 5.33334 12 5.33334C13.1067 5.33334 14 4.44 14 3.33334C14 2.22667 13.1067 1.33334 12 1.33334C10.8933 1.33334 10 2.22667 10 3.33334C10 3.49334 10.0267 3.64667 10.06 3.8L5.36 6.54C5 6.20667 4.52667 6 4 6C2.89333 6 2 6.89334 2 8C2 9.10667 2.89333 10 4 10C4.52667 10 5 9.79333 5.36 9.46L10.0587 12.2053C10.0211 12.3563 10.0014 12.5111 10 12.6667C10 13.0622 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.3631 11.2346 14.5144C11.6001 14.6658 12.0022 14.7054 12.3902 14.6282C12.7781 14.5511 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0568C14.0387 12.6689 13.9991 12.2668 13.8478 11.9013C13.6964 11.5358 13.44 11.2235 13.1111 11.0037C12.7822 10.784 12.3956 10.6667 12 10.6667Z" fill="white" />
                                        </svg>
                                        Share
                                    </button>
                                    {/* Compare Icon */}
                                    <button className="flex justify-center items-center gap-1 text-white p-2 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M10.08 7L11.08 8L14.52 4.55L11 1L10 2L11.8 3.8H2.00001V5.2H11.82L10.08 7ZM5.86001 9L4.86001 8L1.42001 11.5L4.91001 15L5.91001 14L4.10001 12.2H14V10.8H4.10001L5.86001 9Z" fill="white" />
                                        </svg>
                                        Compare
                                    </button>
                                    {/* Like Icon */}
                                    <button className="flex justify-center items-center gap-1 text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M7.99973 14.0361C-5.33333 6.66667 3.99999 -1.33333 7.99973 3.72537C12 -1.33334 21.3333 6.66667 7.99973 14.0361Z" stroke="white" stroke-width="1.8" />
                                        </svg>
                                        Like
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>

            {footer}

            {/* Pagination */}
            {page === 'shop' && renderPagination()}
        </div >
    );
};

export default Products;



// const Products = ({ limit, page, products }) => {
//     const display_products = limit ? products.slice(0, limit) : products;

//     let header, footer;

//     if (page === 'home') {
//         header = <h2 className="text-3xl font-poppins font-bold mb-6 text-center">Our Products</h2>;
//         footer = (
//             <button className='border-primary border-[1px] text-primary font-poppins inline-flex text-[16px] px-[50px] py-[10px] md:text-[18px] md:px-[90px] md:py-[20px] mb-10 mt-5'>
//                 Show More
//             </button>
//         );
//     } else if (page === 'shop') {
//         header = null;
//     } else if (page === 'product') {
//         header = <h2 className="text-3xl font-poppins font-bold mb-6 text-center text-red-600">Sale Products</h2>;
//         footer = (
//             <div className="bg-yellow-100 p-6 rounded-md w-full text-center mt-5">
//                 <p className="text-yellow-700 font-poppins text-sm">Hurry! Grab the best discounts on our products.</p>
//             </div>
//         );
//     }


//     const PRODUCTS_PER_PAGE = 16; // Number of products per page
//     const [currentPage, setCurrentPage] = useState(1);

//     // Calculate total pages
//     const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

//     // Get products for the current page
//     const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
//     const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
//     const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

//     // Handle page change
//     const handlePageChange = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };

//     const renderPagination = () => {
//         return (
//             <div className="pagination flex space-x-2 justify-center mt-6">
//                 {/* Previous Button */}
//                 <button
//                     className={`px-5 py-2 ${currentPage === 1 ? 'bg-gray-300 text-gray-500 hidden ' : 'bg-white text-black border'} rounded-md`}
//                     onClick={() => handlePageChange(currentPage - 1)}
//                     disabled={currentPage === 1}
//                 >
//                     Previous
//                 </button>

//                 {/* Page Numbers */}
//                 {Array.from({ length: totalPages }, (_, index) => (
//                     <button
//                         key={index + 1}
//                         className={`px-4 py-2 ${
//                             currentPage === index + 1
//                                 ? 'bg-yellow-600 text-white'
//                                 : 'bg-[#F9F1E7] text-black border'
//                         } rounded-md`}
//                         onClick={() => handlePageChange(index + 1)}
//                     >
//                         {index + 1}
//                     </button>
//                 ))}

//                 {/* Next Button */}
//                 <button
//                     className={`px-4 py-2 ${currentPage === totalPages ? 'bg-gray-300 text-gray-500 hidden' : 'bg-white text-black border '} rounded-md ml-[20px] `}
//                     onClick={() => handlePageChange(currentPage + 1)}
//                     disabled={currentPage === totalPages}
//                 >
//                     Next
//                 </button>
//             </div>
//         );
//     };

//     return (
//         <div className="products flex flex-col items-center mb-4">
//             {/* Header */}
//             {header}

//             {/* Products Grid */}
//             <div className="product_container flex pl-6 pr-6 justify-center">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
//                     {currentProducts.map((product) => (
//                         <div
//                             key={product.id}
//                             className="overflow-hidden relative bg-product_bg group transition-transform duration-300 ease-in-out"
//                         >
//                             {/* Discount */}
//                             {product.discount === 0 ? (
//                                 <div className="absolute top-2 right-2 bg-no_discount_bg text-white text-sm px-2 py-3 rounded-full font-poppins">
//                                     New
//                                 </div>
//                             ) : (
//                                 <div className="absolute font-poppins top-2 right-2 bg-discount_bg text-white text-sm px-2 py-3 rounded-full p-1">
//                                     -{product.discount}%
//                                 </div>
//                             )}

//                             {/* Image */}
//                             <img
//                                 src={product.image}
//                                 alt={product.name}
//                                 className="h-[300px] w-[285px] object-cover transition-transform duration-300 group-hover:scale-105"
//                             />

//                             {/* Hover Overlay */}
//                             <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300">
//                                 <button className="bg-white text-primary font-bold py-2 px-4 mb-4 rounded shadow hover:bg-gray-100">
//                                     Add to Cart
//                                 </button>
//                                 <div className="flex space-x-4 text-white">
//                                     <button className="hover:text-gray-300">
//                                         <i className="fas fa-share"></i> Share
//                                     </button>
//                                     <button className="hover:text-gray-300">
//                                         <i className="fas fa-exchange-alt"></i> Compare
//                                     </button>
//                                     <button className="hover:text-gray-300">
//                                         <i className="fas fa-heart"></i> Like
//                                     </button>
//                                 </div>
//                             </div>

//                             {/* Product Info */}
//                             <div className="p-4">
//                                 <h3 className="text-lg font-bold font-poppins text-gray-800 mb-1">{product.name}</h3>
//                                 <p className="text-gray-600 font-poppins text-sm mb-2">{product.description}</p>

//                                 {/* Price */}
//                                 <div className="price flex items-center space-x-2">
//                                     <p className="text-xl font-poppins font-bold text-gray-800">
//                                         Rp {product.price.toLocaleString('id-ID')}
//                                     </p>
//                                     {product.discount !== 0 && (
//                                         <p className="line-through text-gray-500 font-poppins text-sm">
//                                             Rp {product.oldPrice.toLocaleString('id-ID')}
//                                         </p>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {footer}

//             {/* Pagination */}
//             {page === 'shop' && renderPagination()}
//         </div>
//     );
// };

// export default Products;
