import { useState, useEffect, FC } from 'react';
import { FaUser, FaHeart, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logo from '../../../../public/logo.png';
import Headroom from 'react-headroom';
import { useAppSelector } from '../../../redux/hooks';

const navLinks = [
    { title: 'Home', url: '/' },
    { title: 'Products', url: '/products' },
    { title: 'About', url: '/about' },
    { title: 'Contact', url: '/contact' }
];

const iconList = [
    { icon: <FaUser /> },
    { icon: <FaHeart /> },
];


const bgColor = 'bg-gray-800';
const modalColor = 'bg-gray-900';



const Navbar: FC = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
    const [showModal, setShowModal] = useState(false);
    const cart = useAppSelector((state) => state.cart);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 769);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleBarsIconClick = () => {
        toggleModal();
    };

    return (
        <Headroom>
            {!isMobile ? (
                // Laptop Navbar Code Here
                <nav className={` ${bgColor}`}>
                    <div className="flex justify-between mx-auto items-center px-24">
                        <div className="text-white font-bold text-xl flex items-center">
                            <img className='size-16' src={logo} alt="" />
                            <h1>Local<span className='text-rose-600'>Loop</span></h1>
                        </div>
                        <ul className="flex gap-8 md:gap-16 items-center justify-center text-center cursor-pointer">
                            {navLinks.map((link, index) => (
                                <li key={index} className="text-white text-sm"><NavLink className={({ isActive }) => isActive ? 'text-rose-600' : undefined} to={link.url}>{link.title}</NavLink> </li>
                            ))}
                        </ul>
                        <ul className="flex text-white gap-6 items-center cursor-pointer">
                            {iconList.map((item, index) => (
                                <div key={index}>{item.icon}</div>
                            ))}
                            <FaShoppingCart className='-mr-5' /> <sup className='bg-rose-600 p-2 rounded-full text-white'>{cart?.length}</sup>
                        </ul>
                    </div>
                </nav>
            ) : (
                // Mobile Navbar Code Here
                <nav className={` ${bgColor} ${showModal && 'h-screen'} px-4 z-[100]`}>
                    <div className="mx-auto flex justify-between items-center ">
                        <div className="text-white font-bold text-xl flex items-center">
                            <img className='size-16' src={logo} alt="" />
                            <h1>Local<span className='text-rose-600'>Loop</span></h1>
                        </div>
                        <div className="flex justify-end items-center gap-6 text-white cursor-pointer">
                            {iconList.map((item, index) => (
                                <div key={index} onClick={index === iconList.length - 1 ? handleBarsIconClick : undefined}>{item.icon}</div>
                            ))}
                            <FaShoppingCart className='-mr-5' /> <sup className='bg-rose-600 p-2 rounded-full text-white'>10</sup>
                            {!showModal && <FaBars onClick={handleBarsIconClick} className="text-white cursor-pointer z-10" />}
                        </div>
                    </div>
                    {showModal && (
                        <div className="fixed inset-0 flex justify-center items-center">
                            <div className={`absolute inset-0 ${modalColor}`} />
                            {showModal && <FaTimes
                                className="absolute  z-20 top-6 right-4 text-white cursor-pointer"
                                onClick={toggleModal}
                                style={{ fontSize: '16px' }}
                            />}
                            <div className="relative bg-gray-900 w-full">
                                <div className="flex flex-col gap-8 items-center justify-center h-full">
                                    {navLinks.map((link) => (
                                        <NavLink onClick={() => setShowModal(false)} to={link.url} className={({ isActive }) => isActive ? 'text-rose-600 font-light text-2xl cursor-pointer' : 'text-white font-light text-2xl cursor-pointer'}>{link.title}</NavLink>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </nav>
            )}
        </Headroom>
    );
};

export default Navbar;