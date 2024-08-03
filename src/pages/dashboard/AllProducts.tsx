import { useGetProductsQuery } from "../../redux/features/products/product.api";
import logo from '../../../public/logo.png';
import { FaEdit, FaTrash } from "react-icons/fa";

const AllProducts = () => {

    const { data, isError, isLoading } = useGetProductsQuery(undefined);

    console.log({ data, isError, isLoading });

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
            <div className="w-full flex p-3 items-center border-b">
                <div className="w-[40%] flex items-center gap-2">
                    <img className="size-20" src={logo} alt="" />
                    <p>Dell Xps 13 9389G</p>
                </div>
                <div className="w-[20%]">
                    <p>Laptop</p>
                </div>
                <div className="w-[20%]">100</div>
                <div className="w-[20%]">$ 200</div>
                <div className="w-[20%] flex items-center gap-4">
                    <FaEdit className="text-sky-700 cursor-pointer hover:scale-110 transition-all" />
                    <FaTrash className="text-rose-700 cursor-pointer hover:scale-110 transition-all" />
                </div>
            </div>
        </div>
    );
};

export default AllProducts;