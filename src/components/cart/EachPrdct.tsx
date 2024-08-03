import { FaMinus } from "react-icons/fa";
import { useAppDispatch } from "../../redux/hooks";
import { deleteItem, updateQuantity } from "../../redux/features/cart/cartSlice";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const EachPrdct = ({ ...item }) => {
    const { id, title, img, quantity, payable, stock } = item.item;
    const dispatch = useAppDispatch();

    function handleIncrementQuantity() {

        if (quantity < stock) return dispatch(updateQuantity({ id, operationType: 'increment' }));

        toast.error('Stock Unavailable!')

    }

    function handleDeleteItemFromCart() {
        Swal.fire({
            title: "Are you sure?",
            text: "You seem to be looking at pockets :)",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Remove it!"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteItem({ id }))

                toast.success('Item Removed! You seem to be looking at pockets :)', { duration: 2000 })
            }
        });
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
            <div
                className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                <div className="img-box"><img src={img} alt={title} className="xl:w-[140px] rounded-xl" /></div>
                <div className="pro-data w-full max-w-sm ">
                    <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">{title}</h5>

                    <h6 className="font-medium text-lg leading-8 text-rose-500  max-[550px]:text-center">${payable}</h6>
                </div>
            </div>
            <div
                className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
                <h6 className="font-manrope font-bold text-2xl leading-9 text-black w-full max-w-[176px] text-center">
                    $15.00 <span className="text-sm text-gray-300 ml-3 lg:hidden whitespace-nowrap">(Delivery
                        Charge)</span></h6>
                <div className="flex items-center w-full mx-auto justify-center">

                    {/* decrement */}
                    <button onClick={() => dispatch(updateQuantity({ id, operationType: 'decrement' }))}
                        className="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                        <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                            xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                            fill="none">
                            <path d="M16.5 11H5.5" stroke="" stroke-width="1.6" stroke-linecap="round" />
                            <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                stroke-linecap="round" />
                            <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                stroke-linecap="round" />
                        </svg>
                    </button>

                    {/* value */}
                    <input type="text"
                        className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent"
                        placeholder={quantity} />

                    {/* increment */}
                    <button onClick={handleIncrementQuantity}
                        className="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                        <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                            xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                            fill="none">
                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-width="1.6"
                                stroke-linecap="round" />
                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                stroke-linecap="round" />
                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                stroke-linecap="round" />
                        </svg>
                    </button>
                </div>
                <h6
                    className="text-rose-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                    ${payable + 15}</h6>
                <h6 onClick={handleDeleteItemFromCart} className="p-2 cursor-pointer hover:bg-rose-600 hover:text-white transition-all rounded-full border"><FaMinus className="" /></h6>
            </div>
        </div>
    );
};

export default EachPrdct;