import EachPrdct from "../components/cart/EachPrdct";
import { useAppSelector } from "../redux/hooks";
import TitleGenerator from "../utils/TitleGenerator";
import noItem from '../../public/cartempty.png';
import { Link } from "react-router-dom";

const Cart = () => {
    const cart = useAppSelector((state) => state.cart);
    const deliveryCharge: number = 15 * cart.length;
    const subTotal: number = cart.reduce(((acc, value) => acc + value.payable), 0);
    const total: number = subTotal + deliveryCharge;

    if (!cart?.length) return (
        <div className="h-screen w-full border flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <img className="size-[70%]" src={noItem} alt="" />
            </div>
        </div>
    )

    return (
        <section className="pb-10 relative md:px-6">
            <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">

                <TitleGenerator title="Shopping" colorTitle="Cart" underTitle="Check Your Bag" />

                {/* <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">Your Cart
                </h2> */}
                <div className="hidden lg:grid grid-cols-2 py-6">
                    <div className="font-normal text-xl leading-8 text-gray-500">Product</div>
                    <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
                        <span className="w-full max-w-[200px] text-center">Delivery Charge</span>
                        <span className="w-full max-w-[260px] text-center">Quantity</span>
                        <span className="w-full max-w-[200px] text-center">Total</span>
                    </p>
                </div>


                {cart.map((item, indx) => (
                    <EachPrdct item={item} key={indx} />
                ))}


                <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
                    <div className="flex items-center justify-between w-full mb-6">
                        <p className="font-normal text-xl leading-8 text-gray-400">Sub Total</p>
                        <h6 className="font-semibold text-xl leading-8 text-gray-900">${subTotal}</h6>
                    </div>
                    <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
                        <p className="font-normal text-xl leading-8 text-gray-400">Delivery Charge</p>
                        <h6 className="font-semibold text-xl leading-8 text-gray-900">${deliveryCharge}</h6>
                    </div>
                    <div className="flex items-center justify-between w-full py-6">
                        <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">Total</p>
                        <h6 className="font-manrope font-medium text-2xl leading-9 text-rose-600">${total}</h6>
                    </div>
                </div>
                <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">

                    <Link to={'/cart/checkout'}
                        className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-rose-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-rose-700">Continue
                        to Checkout
                        <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22"
                            fill="none">
                            <path d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998" stroke="white" stroke-width="1.6"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>

    );
};

export default Cart;