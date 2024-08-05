import FetchErrorElmt from "../../error/FetchErrorElmt";
import { OrderDocument } from "../../interface";
import { useGetOrdersQuery } from "../../redux/features/orders/orders.api";
import Spinner from "../../utils/Spinner";
import EachOrder from "./EachOrder";
import noItem from '../../../public/no-product-8316266-6632286.webp'
import { useState } from "react";

const Orders = () => {
    const { data, isError, isLoading } = useGetOrdersQuery(undefined);
    const [clickedData, setClickedData] = useState<OrderDocument | null>(null);

    if (isLoading) return <Spinner />;
    if (isError) return <FetchErrorElmt />;

    if (!data.data.length) return (
        <div className="h-screen w-full  flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <img className="size-36" src={noItem} alt="" />
                <p className="text-xl">No Order Available</p>

            </div>
        </div>
    );

    if (clickedData) return (
        <p>hello details</p>
    );

    return (
        <div>

            <div className="flex w-full bg-gray-100 p-3 mb-5 rounded-md font-semibold">
                <div className="w-[30%] "> Item Title </div>
                <div className="w-[30%]">Customer Name</div>
                <div className="w-[20%]">Quantity</div>
                <div className="w-[20%]">Price</div>
                <div className="w-[20%]">Action</div>
            </div>

            {data?.data.map((item: OrderDocument, indx: number) => (
                <EachOrder key={indx} setClickedData={setClickedData} item={item} />
            ))}

        </div>
    );
};

export default Orders;