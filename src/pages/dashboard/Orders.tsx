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

    const createdAt = clickedData?.createdAt ?? '';
    const date = createdAt ? new Date(createdAt).toLocaleDateString() : 'Invalid Date'

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
        <div className="">

            {/* head */}
            <h3 className="text-xl font-semibold">Product Info</h3>
            <p className="mb-5">{date}</p>
            <div className="flex w-full bg-gray-100 p-3 rounded-md font-semibold">
                <div className="w-[60%] ">Images And Name </div>
                <div className="w-[20%]">Quantity</div>
                <div className="w-[20%]">Price</div>
            </div>

            {/* body (actual products) */}

            {clickedData?.orders.map((order, indx) => (
                < div key={indx} className="flex w-full p-3 mt-5 rounded-md border-b shadow-sm ">
                    <div className="w-[60%] flex items-center gap-2 ">
                        <img className="size-20 rounded-md" src={order.img} alt="" />
                        <p>{order?.title}</p>
                    </div>
                    {/* quantity */}
                    <div className="w-[20%] mt-4">{order?.quantity}</div>

                    {/* price */}
                    <div className="w-[20%] mt-4">${order.value}</div>
                </div>
            ))}

            {/* customer info */}
            <div className="mt-10 flex justify-between">
                <div className="">
                    <h3 className="text-xl font-semibold mb-5">Customer Info</h3>
                    <div className="mt-5">
                        <p><strong>Name: </strong>{clickedData?.user?.name}</p>
                        <p><strong>Email: </strong>{clickedData?.user?.email}</p>
                        <p><strong>Phone: </strong>{clickedData?.user?.phone}</p>
                        <p><strong>Address: </strong>{clickedData?.user?.city}, {clickedData?.user?.country} - {clickedData?.user?.post_code}</p>
                    </div>
                </div>
                <div className="">
                    <h3 className="text-xl font-semibold mb-5">Order Summary</h3>
                    <div className="mt-5">
                        <p><strong>Total Quantity:</strong> {clickedData?.orders.reduce((acc, order) => acc + order.quantity, 0)}</p>
                        <p><strong>Total Payable:</strong>{clickedData?.orders?.reduce((acc, order) => acc + order.value, 0)}</p>
                        <p><strong>Tracking Number: </strong> {clickedData?.others?.track}</p>
                        <p><strong>Current Status: </strong> {clickedData?.others?.status.charAt(0).toUpperCase() + clickedData?.others?.status.slice(1)}</p>
                    </div>
                </div>
            </div>

            {/* close */}
            <div className="flex justify-end mt-10">
                <button onClick={() => setClickedData(null)} className="text-white bg-rose-600 py-1 rounded-sm px-4">Close</button>
            </div>

        </div >
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

            {data?.data.slice().reverse().map((item: OrderDocument, indx: number) => (
                <EachOrder key={indx} setClickedData={setClickedData} item={item} />
            ))}

        </div>
    );
};

export default Orders;