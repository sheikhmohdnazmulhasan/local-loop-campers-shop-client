import { FC } from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import { EachOrderProps } from "../../interface";

const EachOrder: FC<EachOrderProps> = ({ item }) => {

    return (
        <div className="flex w-full p-3 mb-5 rounded-md font-semibold border-b">
            <div className="w-[30%] ">
                {/* product title */}
                {item?.orders.map((order, indx: number) => (
                    <p className="text-sm" key={indx}>{indx + 1}. {order?.title}</p>
                ))}
            </div>
            <div className="w-[30%]">
                <p className="text-sm">{item?.user?.name}</p>
            </div>
            <div className="w-[20%]">
                {/* quantity */}
                <p className="text-sm">{item?.orders?.reduce((acc, order) => acc + order.quantity, 0)}</p>
            </div>
            <div className="w-[20%]">
                {/* price */}
                <p className="text-sm"> ${item?.orders?.reduce((acc, order) => acc + order.value, 0)}</p>
            </div>
            <div className="w-[20%] flex justify-start items-center gap-5">
                <FaEye className="text-sky-700 cursor-pointer hover:scale-110 transition-all" size={20} />
                <FaTrash className="text-rose-600  cursor-pointer hover:scale-110 transition-all" size={16} />
            </div>
        </div>
    );
};

export default EachOrder;