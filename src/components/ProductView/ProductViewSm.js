import { Rating } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
const ProductViewSm = ({ selectedProduct }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div style={{ backgroundColor: 'white' }} className='w-full py-12 container place-content-center -mt-36 px-8 justify-center items-center grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6'>
            <div>
                <Swiper
                    style={{

                    }}
                    spaceBetween={10}
                    // navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                >
                    <SwiperSlide>
                        <img alt="" src={selectedProduct.img} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img alt="" src={selectedProduct.hoverImg} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img alt="" src="https://i.pinimg.com/originals/84/37/94/8437943c087d24e4d09c3142f778dbd7.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img alt="" src="https://cdn.flightclub.com/750/TEMPLATE/292220/4.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img alt="" src="https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/065/107/182/original/859919_03.jpg.jpeg?action=crop&width=1250" />
                    </SwiperSlide>
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img alt="" src={selectedProduct.img} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img alt="" src={selectedProduct.hoverImg} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img alt="" src="https://i.pinimg.com/originals/84/37/94/8437943c087d24e4d09c3142f778dbd7.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img alt="" src="https://cdn.flightclub.com/750/TEMPLATE/292220/4.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img alt="" src="https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/065/107/182/original/859919_03.jpg.jpeg?action=crop&width=1250" />
                    </SwiperSlide>
                </Swiper>
            </div>

            <div>
                <h2 className='text-3xl mb-2 font-medium'>Nike sports shoe</h2>
                <div className='flex items-center mb-4'>
                    <div>
                        <Rating name="half-rating-read" defaultValue={6} precision={0.5} readOnly />
                    </div>
                    <div className="text-xs text-gray-500 ml-3">
                        ({selectedProduct.rating} Reviews)
                    </div>
                </div>
                <div className='space-y-2'>
                    <p className="p text-gray-800 font-semibold space-x-2">
                        <span>Availability:</span>
                        <span className='text-green-600'>In stock</span>
                    </p>
                    <p className="space-x-2">
                        <span className='text-gray-800 font-semibold'>Brand:</span>
                        <span className='text-gray-600'>Nike</span>
                    </p>
                    <p className="space-x-2">
                        <span className='text-gray-800 font-semibold'>Category:</span>
                        <span className='text-gray-600'>Men</span>
                    </p>
                    <p className="space-x-2">
                        <span className='text-gray-800 font-semibold'>SKU:</span>
                        <span className='text-gray-600 uppercase'>udhff45gr</span>
                    </p>
                </div>

                <div className="flex items-baseline mb-1 mt-2 space-x-2">
                    <p className="text-xl text-indigo-500 font-semibold">${selectedProduct.salePrice}</p>
                    <p className="text-sm text-gray-400 line-through">${selectedProduct.price}</p>
                </div>
                <div className="grid grid-cols-2">
                    <div className="">
                        <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium ">Color</h3>
                        <div className="flex gap-2">
                            {/* Single Color Starts */}
                            <div className="color-selctor">
                                <input type="radio" name='color' className='hidden' color='red' id='color-red' />
                                <label htmlFor="color" className='border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block' style={{ backgroundColor: "red" }}></label>
                            </div>
                            <div className="color-selctor">
                                <input type="radio" name='color' className='hidden' color='red' id='color-red' />
                                <label htmlFor="color" className='border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block' style={{ backgroundColor: "green" }}></label>
                            </div>
                            <div className="color-selctor">
                                <input type="radio" name='color' className='hidden' color='red' id='color-red' />
                                <label htmlFor="color" className='border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block' style={{ backgroundColor: "blue" }}></label>
                            </div>
                        </div>
                    </div>
                    <div className="pt-4 -mt-32 block">
                        <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Size</h3>
                        <div className="flex item-center gap-2">
                            {/* single size selector starts */}
                            <div className="size-selector">
                                <input type="radio" name='size' className='hidden' id='xs' />
                                <label htmlFor="size-xs" className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                                    S
                                </label>
                            </div>
                            <div className="size-selector">
                                <input type="radio" name='size' className='hidden' id='xs' />
                                <label htmlFor="size-xs" className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                                    M
                                </label>
                            </div>
                            <div className="size-selector">
                                <input type="radio" name='size' className='hidden' id='xs' />
                                <label htmlFor="size-xs" className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                                    L
                                </label>
                            </div>
                            <div className="size-selector">
                                <input type="radio" name='size' className='hidden' id='xs' />
                                <label htmlFor="size-xs" className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                                    XS
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-xl text-gray-800 mb-1'>Quantity</h3>
                        <div className="flex border border-gray-500 divide-gray-500 text-gray-600 divide-x w-max">
                            <div className='h-8 w-8 flex items-center justify-center cursor-pointer select-none'>
                                -
                            </div>
                            <div className='h-8 w-8 flex items-center justify-center'>
                                <input style={{ width: '34px', height: '34px' }} type="text" />
                            </div>
                            <div className='h-8 w-8 flex items-center justify-center cursor-pointer select-none'>
                                +
                            </div>
                        </div>
                    </div>
                    <div className="border-b -mt-20 border-gray-200 pb-5">
                        <Link to="/">
                            <button className='w-40 text-center top-5 text-white  p-2 bg-indigo-500 border border-indigo-500 hover:bg-transparent hover:text-indigo-500 transition'>
                                <i className="fa-regular fa-bag-shopping"></i> Add to cart
                            </button>
                        </Link>
                        <Link to="/">
                            <button className='w-40 text-center top-5 hover:text-white my-2 p-2 hover:bg-indigo-500 border border-indigo-500 bg-transparent text-indigo-500 transition'>
                                <i className="fa-regular fa-heart"> </i> Add to wishlist
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductViewSm;