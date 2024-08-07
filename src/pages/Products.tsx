import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Global/nav/Footer";
import PrdctCard from "../components/home/PrdctCard";

import noItem from '../../public/no-product-8316266-6632286.webp';

import { TProduct, TProductApiResponse } from "../interface";
import { FormEvent, useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const categoryParams = searchParams.get('category');
    const [open, setOpen] = useState(false);

    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState(categoryParams ? categoryParams : '');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    const [data, setData] = useState<TProductApiResponse>();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchProducts = async (): Promise<void> => {
        const response = await axios.get('http://localhost:5000/api/v1/products', {
            params: {
                searchTerm,
                category,
                minPrice,
                maxPrice,
                sortOrder,
            },
        });

        setData(response.data);
    };

    function handleSearch(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const value = (e.target as HTMLFormElement).search.value;
        setSearchTerm(value);
    }

    const clearFilters = () => {
        setSearchTerm('');
        setCategory('');
        setMinPrice('');
        setMaxPrice('');
        setSortOrder('asc');
        fetchProducts();
    };

    useEffect(() => {
        fetchProducts();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm, sortOrder, category, minPrice, maxPrice,]);




    return (
        <div className="h-screen">
            <div className=" p-4 md:p-10 lg:p-14">

                {/* searching and flittering  */}
                <div className="md:flex hidden justify-between items-center">

                    {/* search bar */}
                    <form onSubmit={handleSearch} className="mb-5">
                        <input onChange={(e) => setSearchTerm(e.target.value)} type="text" name="search" id="" placeholder="Search..." className="py-1 px-3 border rounded-l-md " required />
                        <button type="submit" className="py-1 px-3 border border-rose-600 bg-rose-600 text-white rounded-r-md">Search</button>
                    </form>

                    <div className="flex justify-between flex-wrap mb-5">
                        <div className=" md:mr-3">
                            <select onChange={(e) => setCategory(e.target.value)} name="" id="" className="border py-1 rounded-md px-3 ">
                                <option value="" selected disabled>Category</option>
                                <option value="smartphone">Smartphone</option>
                                <option value="laptop">Laptop</option>
                                <option value="drone">Drone</option>
                                <option value="camera">Camera</option>
                                <option value="Headphone">Headphone</option>
                                <option value="robotic">Robotic</option>
                                <option value="vr">VR</option>
                            </select>
                        </div>

                        <div className="flex justify-center items-center">
                            <select onChange={(e) => setSortOrder(e.target.value)} name="" id="" className="border py-1 rounded-md px-3 ">
                                <option value="" selected disabled>Sort by Price</option>
                                <option value="asc">Low To High</option>
                                <option value="desc">High To High</option>
                            </select>
                        </div>

                        <div className="flex ml-3">
                            <div className="flex justify-center items-center border rounded-md px-2 ">
                                <p className="mr-1">Min Price $: </p>
                                <input onChange={(e) => setMinPrice(e.target.value)} className="rounded-md w-16" type="text" />
                                <p></p>
                            </div>
                        </div>

                        <div className="flex ml-3">
                            <div className="flex justify-center items-center border rounded-md px-2 ">
                                <p className="mr-1">Max Price $: </p>
                                <input onChange={(e) => setMaxPrice(e.target.value)} className="rounded-md w-16" type="text" />
                                <p></p>
                            </div>
                        </div>

                        <button className=" px-2 py-1 bg-rose-600 text-white ml-3 rounded-md" onClick={() => clearFilters()}>Clear</button>
                    </div>
                </div>


                {/* mobile */}
                <div className="md:hidden mb-5 w-full space-y-3">

                    {/* searching */}
                    <form onSubmit={handleSearch} className="w-full flex">
                        <input onChange={(e) => setSearchTerm(e.target.value)} type="text" name="search" id="" placeholder="Search..." className="py-1 px-3 w-full border rounded-l-md " required />
                        <button type="submit" className="py-1 px-3 border border-rose-600 bg-rose-600 text-white rounded-r-md">Search</button>
                    </form>

                    {open && <div className=" space-y-3">
                        {/* category */}
                        <div className=" w-full">
                            <select onChange={(e) => setCategory(e.target.value)} name="" id="" className="border w-full py-1 rounded-md px-3 ">
                                <option value="" selected disabled>Category</option>
                                <option value="smartphone">Smartphone</option>
                                <option value="laptop">Laptop</option>
                                <option value="drone">Drone</option>
                                <option value="camera">Camera</option>
                                <option value="Headphone">Headphone</option>
                                <option value="robotic">Robotic</option>
                                <option value="vr">VR</option>
                            </select>
                        </div>

                        {/* shorting */}
                        <div className="flex justify-center items-center w-full">
                            <select onChange={(e) => setSortOrder(e.target.value)} name="" id="" className="border w-full py-1 rounded-md px-3 ">
                                <option value="" selected disabled>Sort by Price</option>
                                <option value="asc">Low To High</option>
                                <option value="desc">High To High</option>
                            </select>
                        </div>

                        <div className="flex gap-1 justify-center">
                            <div className="flex ">
                                <div className="flex  items-center border rounded-md px-2 ">
                                    <p className="">Min Price $: </p>
                                    <input onChange={(e) => setMinPrice(e.target.value)} className="rounded-md w-16" type="text" />

                                </div>
                            </div>

                            <div className="flex">
                                <div className="flex justify-center items-center border rounded-md px-2 ">
                                    <p className="mr-1">Max Price $: </p>
                                    <input onChange={(e) => setMaxPrice(e.target.value)} className="rounded-md w-16" type="text" />

                                </div>
                            </div>
                        </div>

                    </div>}
                    {open ?
                        <button onClick={() => {
                            clearFilters();
                            setOpen(false);
                        }} className="w-full bg-rose-600 text-center text-white py-1">Clear</button> :
                        <button onClick={() => setOpen(true)} className="w-full bg-rose-600 text-center text-white py-1">Add Filter</button>
                    }
                </div>

                {/* card */}
                {data?.data?.length ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">

                    {data?.data?.map((item: TProduct, indx: number) => (
                        <PrdctCard item={item} key={indx} />
                    ))}

                </div> :
                    <div className="">
                        <div className="h-screen w-full flex justify-center items-center">
                            <div className="flex flex-col justify-center items-center">
                                <img className="size-36" src={noItem} alt="" />
                                <p className="text-xl">No Item Available</p>
                                <div className="flex gap-3 mt-3">
                                    <Link to={'/dashboard/new'}>  <button className="py-1.5 px-3 bg-rose-600 text-white rounded-sm">Add One</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                }

            </div>

            {/*  */}
            <Footer />
        </div>
    );
};

export default Products;