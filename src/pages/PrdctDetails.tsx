import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../redux/features/products/product.api";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { addToCart } from "../redux/features/cart/cartSlice";
import toast from "react-hot-toast";
import Spinner from "../utils/Spinner";
import FetchErrorElmt from "../error/FetchErrorElmt";
import Footer from "../components/Global/nav/Footer";
import FeaturedPrdctCard from "../components/home/FeaturedPrdctCard";
import { TProduct } from "../interface";
import ReactImageMagnify from 'react-image-magnify';

const PrdctDetails = () => {
    const { id } = useParams<{ id: string }>();
    const { data: item, isError: singleError, isLoading: singleLoading } = useGetProductsQuery({ id });
    const { data, isError, isLoading } = useGetProductsQuery({ category: item?.data?.category });
    const moreItemExceptThisOne = data?.data?.filter((data: { _id: string; }) => data._id !== item?.data?._id);

    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [clickedImg, setClickedImg] = useState(0);
    const dispatch = useAppDispatch();

    function handleAddToCart() {
        const price = parseInt(item?.data?.price);

        const payload = {
            id: item?.data?._id,
            title: item?.data?.title,
            img: item?.data?.images[0],
            stock: item.data.quantity,
            quantity: selectedQuantity,
            payable: price * selectedQuantity
        };

        dispatch(addToCart(payload));
        toast.success(`${item?.data?.title} is Added to Your Cart`);
    }

    if (singleLoading || isLoading) return <Spinner />;
    if (singleError || isError) return <FetchErrorElmt />;

    return (
        <div className="font-sans bg-white">
            <div className="p-4 lg:max-w-7xl max-w-4xl mx-auto">
                <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6 rounded-lg">
                    <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
                        <div className="rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
                            <ReactImageMagnify
                                {...{
                                    smallImage: {
                                        alt: 'Product',
                                        isFluidWidth: true,
                                        src: item?.data?.images[clickedImg],
                                    },
                                    largeImage: {
                                        src: item?.data?.images[clickedImg],
                                        width: 1200,
                                        height: 1800,
                                    },
                                    enlargedImageContainerStyle: { background: '#fff', zIndex: 9 },
                                    enlargedImageStyle: { objectFit: 'cover' },
                                }}
                            />
                        </div>

                        <div className="mt-2 flex flex-wrap justify-center gap-2 mx-auto">
                            {item?.data?.images.map((img: string, indx: number) => (
                                <div
                                    onClick={() => setClickedImg(indx as number)}
                                    key={indx}
                                    className="w-24 h-24 flex items-center justify-center rounded-lg cursor-pointer"
                                >
                                    <img src={img} alt="Product2" className="w-full" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-extrabold text-gray-800">{item?.data?.title}</h2>
                        <p>{item?.data?.description}</p>

                        {/* rating */}
                        <div className="flex space-x-2 mt-4">
                            <svg className="w-5 fill-rose-600" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-rose-600" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-rose-600" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-rose-600" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <h4 className="text-gray-800 text-base">{item?.data?.quantity + 2} Reviews</h4>
                        </div>

                        <div className="mt-5">
                            <h1 className="font-semibold">Category: {item?.data?.category.charAt(0).toUpperCase() + item?.data?.category.slice(1)}</h1>
                            <h1 className="font-semibold">Available Quantity: {item?.data?.quantity}</h1>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <p className="text-gray-800 text-3xl font-bold">${item?.data?.price}</p>
                            <p className="text-gray-400 text-base"> <span className="line-through">${parseInt(item?.data?.price) + 120}</span> <span className="text-sm ml-1">Tax included</span></p>
                        </div>

                        {item?.data?.quantity && <div className="mt-8">
                            <h3 className="font-semibold text-gray-800">Choose Quantity</h3>

                            <div className="flex mt-3 gap-3 flex-wrap">
                                {selectedQuantity > 1 && <button onClick={() => selectedQuantity > 1 && setSelectedQuantity(selectedQuantity - 1)}><FaMinus /></button>}
                                <span className="border px-10 py-1">{selectedQuantity}</span>
                                {selectedQuantity !== item.data.quantity && <button onClick={() => selectedQuantity < item?.data?.quantity && setSelectedQuantity(selectedQuantity + 1)}><FaPlus /></button>}
                            </div>

                        </div>}

                        {item?.data?.quantity ? (
                            <div className="flex flex-wrap gap-4 mt-8">
                                
                                <button onClick={handleAddToCart} type="button" className="w-full  px-4 py-2.5 border bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold rounded">Add to cart</button>
                            </div>
                        ) : (
                            <button type="button" className="w-full mt-20 px-4 py-2.5 border border-rose-600 bg-transparent hover:bg-gray-50 text-rose-800 text-sm font-semibold cursor-not-allowed rounded">Out Of Stock</button>
                        )}
                    </div>
                </div>
            </div>

            {moreItemExceptThisOne.length && (
                <div className="mx-5 md:mx-10 lg:mx-16 py-20">
                    <h1 className="text-4xl font-semibold">Browse More {item?.data?.category.charAt(0).toUpperCase() + item?.data?.category.slice(1)}</h1>
                    <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {moreItemExceptThisOne?.map((item: TProduct, indx: number) => (
                            <FeaturedPrdctCard item={item} key={indx} />
                        ))}
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default PrdctDetails;
