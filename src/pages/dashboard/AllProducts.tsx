/* eslint-disable @typescript-eslint/no-explicit-any */
import Swal from "sweetalert2";
import { useGetProductsQuery } from "../../redux/features/products/product.api";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../utils/Spinner";
import FetchErrorElmt from "../../error/FetchErrorElmt";
import noItem from '../../../public/no-product-8316266-6632286.webp'

const AllProducts = () => {

    const { data, isError, isLoading, refetch } = useGetProductsQuery(undefined);

    if (isLoading) return <Spinner />;
    if (isError) return <FetchErrorElmt />;

    function handleDeleteProduct(_id: string) {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                const res = await axios.delete(`https://local-loop-server.vercel.app/api/v1/products?id=${_id}`);

                if (res.data.success) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Product has been deleted.",
                        icon: "success"
                    })

                    refetch()
                }
            }
        });
    }

    if (!data.data.length) return (

        <div className="h-screen w-full  flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <img className="size-36" src={noItem} alt="" />
                <p className="text-xl">No Item Available</p>
                <div className="flex gap-3 mt-3">
                    <Link to={'/dashboard/new'}>  <button className="py-1.5 px-3 bg-rose-600 text-white rounded-sm">Add One</button></Link>
                </div>
            </div>
        </div>
    )

    return (

        <div className="" data-aos="fade-left">
            {/* head */}
            <div className="flex w-full bg-gray-100 p-3 rounded-md font-semibold">
                <div className="w-[40%] ">Images And Name </div>
                <div className="w-[20%]">Category</div>
                <div className="w-[20%]">Quantity</div>
                <div className="w-[20%]">Price</div>
                <div className="w-[20%]">Action</div>
            </div>

            {/* body */}

            {data?.data?.slice().reverse().map((item: { images: (string | undefined)[]; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; category: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; quantity: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; price: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; _id: string; }, indx: Key | null | undefined) => (

                <div key={indx} className="w-full flex p-3 items-center border-b">
                    <div className="w-[40%] flex items-center gap-2">
                        <img className="size-20 rounded-md" src={item?.images[0]} alt="" />
                        <p>{item?.title}</p>
                    </div>
                    <div className="w-[20%]">
                        <p>{item?.category}</p>
                    </div>
                    <div className="w-[20%]">{item?.quantity}</div>
                    <div className="w-[20%]">$ {item?.price}</div>
                    <div className="w-[20%] flex items-center gap-4">
                        <Link to={`edit/${item?._id}`}>
                            <FaEdit className="text-sky-700 cursor-pointer hover:scale-110 transition-all" />
                        </Link>
                        <FaTrash className="text-rose-700 cursor-pointer hover:scale-110 transition-all" onClick={() => handleDeleteProduct(item._id)} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllProducts;