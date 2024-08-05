import { FaEye, FaTrash } from "react-icons/fa";

const EachOrder = () => {
    return (
        <div className="flex w-full p-3 mb-5 rounded-md font-semibold border-b">
            <div className="w-[30%] ">
                <p>iphone 13</p>
            </div>
            <div className="w-[30%]">
                <p>Sheikh mohd nazmul </p>
            </div>
            <div className="w-[20%]">
                {/* quantity */}
                <p>10</p>
            </div>
            <div className="w-[20%]">
                {/* price */}
                <p>$100</p>
            </div>
            <div className="w-[20%] flex justify-start items-center gap-5">
                <FaEye className="text-sky-700 cursor-pointer hover:scale-110 transition-all" size={20} />
                <FaTrash className="text-rose-600  cursor-pointer hover:scale-110 transition-all" size={16}/>
            </div>
        </div>
    );
};

export default EachOrder;