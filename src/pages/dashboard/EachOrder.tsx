import { FC } from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import { EachOrderProps } from "../../interface";
import Swal from "sweetalert2";
import { useDeleteOrderMutation } from "../../redux/features/orders/orders.api";

const EachOrder: FC<EachOrderProps> = ({ item, setClickedData }) => {
    const [deleteProduct] = useDeleteOrderMutation()

    async function handleDeleteOrder() {

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
                
                try {
                    const res = await deleteProduct({ id: item._id }).unwrap()

                    if (res.success) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Order has been deleted.",
                            icon: "success"
                        });
                    }

                } catch (error) {
                    Swal.fire({
                        title: 'Oops!',
                        text: 'Something Wrong!',
                        icon: 'error'
                    })
                }

            }
        });
    }

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
                <FaEye onClick={() => setClickedData(item)} className="text-sky-700 cursor-pointer hover:scale-110 transition-all" size={20} />
                <FaTrash onClick={handleDeleteOrder} className="text-rose-600  cursor-pointer hover:scale-110 transition-all" size={16} />
            </div>
        </div>
    );
};

export default EachOrder;