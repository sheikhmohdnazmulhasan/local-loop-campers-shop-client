import { NavLink, Outlet } from 'react-router-dom';
import logo from '../../../public/logo.png';
import { FaPager, FaPlus } from 'react-icons/fa';
import Navbar from '../../components/Global/nav/Navbar';
import { useState } from 'react';

const DashboardRoot = () => {
    const [isActive, setIsActive] = useState('products');

    return (
        <div className="">

            <div className="flex justify-center items-center w-full h-screen md:hidden">
                <p>Oops! Use Computer for Operating Dashboard</p>
            </div>

            {/* desktop */}
            <div className="hidden md:block">
                <Navbar />

                <div className='flex'>
                    <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l">
                        <div className=' text-black font-bold text-xl flex items-center'>
                            <img className='size-16' src={logo} alt="" />
                            <h1>Local<span className='text-rose-600'>Loop</span></h1>
                        </div>

                        <div className="flex flex-col justify-between flex-1 mt-6">
                            <nav>
                                <NavLink onClick={() => setIsActive('products')} to={'/dashboard/products'} className={`flex items-center px-4 py-2  ${isActive === 'products' ? 'bg-rose-600 text-white' : 'bg-gray-100 text-gray-700'} rounded-md`}>
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <span className="mx-4 font-medium">Products</span>
                                </NavLink>

                                <NavLink onClick={() => setIsActive('new')} to={'/dashboard/new'} className={`flex items-center px-4 mt-3 py-2  ${isActive === 'new' ? 'bg-rose-600 text-white' : 'bg-gray-100 text-gray-700'} rounded-md`}>
                                    <FaPlus />

                                    <span className="mx-4 font-medium">Add Product</span>
                                </NavLink>


                                <NavLink onClick={() => setIsActive('orders')} to={'/dashboard/orders'} className={`flex items-center mt-3 px-4 py-2  ${isActive === 'orders' ? 'bg-rose-600 text-white' : 'bg-gray-100 text-gray-700'} rounded-md`}>
                                    <FaPager />
                                    <span className="mx-4 font-medium">Orders</span>
                                </NavLink>

                            </nav>
                        </div>
                    </aside>

                    <div className=" w-full p-10">
                        <Outlet />
                    </div>
                </div>

                {/* <Footer /> */}
            </div>
        </div>
    );
};

export default DashboardRoot;