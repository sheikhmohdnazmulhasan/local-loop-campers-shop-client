import FetchErrorElmt from "../../error/FetchErrorElmt";
import { OrderDocument } from "../../interface";
import { useGetOrdersQuery } from "../../redux/features/orders/orders.api";
import Spinner from "../../utils/Spinner";
import EachOrder from "./EachOrder";

const Orders = () => {
    const { data, isError, isLoading } = useGetOrdersQuery(undefined);

    if (isLoading) return <Spinner />;
    if (isError) return <FetchErrorElmt />;

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
                <EachOrder key={indx} item={item} />
            ))}

        </div>
    );
};

export default Orders;