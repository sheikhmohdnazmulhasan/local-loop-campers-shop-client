import { useGetProductsQuery } from "../../redux/features/products/product.api";
import logo from '../../../public/logo.png';
import { FaEdit, FaTrash } from "react-icons/fa";

const AllProducts = () => {

    const { data, isError, isLoading } = useGetProductsQuery(undefined);

    if (isError) return <div className="">Something Wrong!</div>
    if (isLoading) return <div className="">Loading...</div>

    return (

        <div className="">
            {/* head */}
            <div className="flex w-full bg-gray-100 p-3 rounded-md font-semibold">
                <div className="w-[40%] ">Images And Name </div>
                <div className="w-[20%]">Category</div>
                <div className="w-[20%]">Quantity</div>
                <div className="w-[20%]">Price</div>
                <div className="w-[20%]">Action</div>
            </div>

            {/* body */}

            {data?.data?.map((item, indx) => (

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
                        <FaEdit className="text-sky-700 cursor-pointer hover:scale-110 transition-all" />
                        <FaTrash className="text-rose-700 cursor-pointer hover:scale-110 transition-all" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllProducts;