import { useGetOrdersQuery } from "../../redux/features/orders/orders.api";
import EachOrder from "./EachOrder";

const Orders = () => {
    const { data, isError, isSuccess } = useGetOrdersQuery(undefined);

    console.log(data);

    return (
        <div>

            <div className="flex w-full bg-gray-100 p-3 mb-5 rounded-md font-semibold">
                <div className="w-[30%] "> Item Title </div>
                <div className="w-[30%]">Customer Name</div>
                <div className="w-[20%]">Quantity</div>
                <div className="w-[20%]">Price</div>
                <div className="w-[20%]">Action</div>
            </div>

            <EachOrder/>
            
        </div>
    );
};

export default Orders;