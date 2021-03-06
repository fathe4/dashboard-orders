import React from 'react'
import { Link } from 'react-router-dom'

const VendorCard = () => {
    return (
        <div className='grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-4'>
            <div>
                <div className=' shadow-lg rounded-md h-3/5 border '>
                    <div>
                        <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="clothes" />
                    </div>

                    <div className='p-5  flex flex-col gap-3 bg-gray-100'>
                        <div className='flex items items-center gap-2'>
                            <span className='px-3 py-1 rounded-full text-xs bg-gray-100'>Stock ready</span>
                            <span className='px-3 py-1 rounded-full text-xs bg-gray-100'>Vendore Store</span>
                        </div>
                        <div>
                            <h2 className='text-left font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap' title='Best Clothes Ever'>Best Clothes </h2>
                        </div>
                        <div className='text-left'>
                            <span className='text-xl  font-bold'>$ 300.00</span>
                            <div className='flex items-center gap-2 mt-1'>
                                <span className='test-sm line-through opacity-50'>
                                    $ 500.00
                                </span>
                                <span className='bg-green-400 px-1 py-0.5 rounded-md text-xs text-white'>
                                    save 20%
                                </span>
                            </div>
                            <span className='flex items-center mt-1 text-amber-400'>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star-half-stroke"></i>
                                <i className="fa-solid fa-star-half-stroke"></i>
                                <span className='text-sm ml-2 text-gray-500'>
                                    20k reviews
                                </span>

                            </span>
                            <div className='mt-5 flex gap-2'>

                                <Link to="/">
                                    <button className='flex-grow flex justify-center items-center bg-yellow-500 hover:bg-yellow-500 transition rounded-md px-3 py-2'>
                                        Add To Cart
                                    </button></Link>
                                <Link to="/wishlist">
                                    <button className='flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/90 transition rounded-md px-6 py-2'>
                                        <i className="fa-regular fa-heart opacity-50 pr-2"></i> Wishlist
                                    </button></Link>

                            </div>


                        </div>
                    </div>

                </div>
            </div>
            <div>
                <div className=' shadow-lg rounded-md h-3/5 border '>
                    <div>
                        <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="clothes" />
                    </div>

                    <div className='p-5  flex flex-col gap-3 bg-gray-100'>
                        <div className='flex items items-center gap-2'>
                            <span className='px-3 py-1 rounded-full text-xs bg-gray-100'>Stock ready</span>
                            <span className='px-3 py-1 rounded-full text-xs bg-gray-100'>Vendore Store</span>
                        </div>
                        <div>
                            <h2 className='text-left font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap' title='Best Clothes Ever'>Best Clothes </h2>
                        </div>
                        <div className='text-left'>
                            <span className='text-xl  font-bold'>$ 300.00</span>
                            <div className='flex items-center gap-2 mt-1'>
                                <span className='test-sm line-through opacity-50'>
                                    $ 500.00
                                </span>
                                <span className='bg-green-400 px-1 py-0.5 rounded-md text-xs text-white'>
                                    save 20%
                                </span>
                            </div>
                            <span className='flex items-center mt-1 text-amber-400'>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star-half-stroke"></i>
                                <i className="fa-solid fa-star-half-stroke"></i>
                                <span className='text-sm ml-2 text-gray-500'>
                                    20k reviews
                                </span>

                            </span>
                            <div className='mt-5 flex gap-2'>

                                <Link to="/">
                                    <button className='flex-grow flex justify-center items-center bg-yellow-500 hover:bg-yellow-500 transition rounded-md px-3 py-2'>
                                        Add To Cart
                                    </button></Link>
                                <Link to="/wishlist">
                                    <button className='flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/90 transition rounded-md px-6 py-2'>
                                        <i className="fa-regular fa-heart opacity-50 pr-2"></i> Wishlist
                                    </button></Link>

                            </div>


                        </div>
                    </div>

                </div>
            </div>
            <div>
                <div className=' shadow-lg rounded-md h-3/5 border '>
                    <div>
                        <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="clothes" />
                    </div>

                    <div className='p-5  flex flex-col gap-3 bg-gray-100'>
                        <div className='flex items items-center gap-2'>
                            <span className='px-3 py-1 rounded-full text-xs bg-gray-100'>Stock ready</span>
                            <span className='px-3 py-1 rounded-full text-xs bg-gray-100'>Vendore Store</span>
                        </div>
                        <div>
                            <h2 className='text-left font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap' title='Best Clothes Ever'>Best Clothes </h2>
                        </div>
                        <div className='text-left'>
                            <span className='text-xl  font-bold'>$ 300.00</span>
                            <div className='flex items-center gap-2 mt-1'>
                                <span className='test-sm line-through opacity-50'>
                                    $ 500.00
                                </span>
                                <span className='bg-green-400 px-1 py-0.5 rounded-md text-xs text-white'>
                                    save 20%
                                </span>
                            </div>
                            <span className='flex items-center mt-1 text-amber-400'>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star-half-stroke"></i>
                                <i className="fa-solid fa-star-half-stroke"></i>
                                <span className='text-sm ml-2 text-gray-500'>
                                    20k reviews
                                </span>

                            </span>
                            <div className='mt-5 flex gap-2'>

                                <Link to="/">
                                    <button className='flex-grow flex justify-center items-center bg-yellow-500 hover:bg-yellow-500 transition rounded-md px-3 py-2'>
                                        Add To Cart
                                    </button></Link>
                                <Link to="/wishlist">
                                    <button className='flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/90 transition rounded-md px-6 py-2'>
                                        <i className="fa-regular fa-heart opacity-50 pr-2"></i> Wishlist
                                    </button></Link>

                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default VendorCard