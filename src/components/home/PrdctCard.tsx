import { Link } from "react-router-dom";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { useAppDispatch } from "../../redux/hooks";
import toast from "react-hot-toast";

const PrdctCard = ({ ...item }) => {
    const dispatch = useAppDispatch();

    function handleAddToCart() {
        const price = parseInt(item?.item?.price);

        const payload = {
            id: item?.item?._id,
            title: item?.item?.title,
            img: item?.item?.images[0],
            quantity: 1,
            payable: price
        }

        dispatch(addToCart(payload));

        toast.success('Item Added In Cart')
    }

    return (

        <div className="relative flex w-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <Link to={`/products/details/${item?.item?._id}`} className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" >
                <img className="object-cover" src={item?.item?.images[0]} alt={item?.item?.title} />
                {/* <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span> */}
            </Link>
            <div className="mt-4 px-5 pb-5">

                {/* title */}
                <h5 className="text-xl tracking-tight text-slate-900">{item?.item?.title.slice(0, 22)}</h5>

                <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>

                        {/* price */}
                        <span className="text-3xl font-bold text-slate-900">${item?.item?.price}</span>
                        {/* <span className="text-sm text-slate-900 line-through">$699</span> */}
                    </p>

                    {/* quantity */}
                    <div className="flex items-center">
                        Stock
                        <span className="mr-2 ml-3 rounded bg-rose-200 px-2.5 py-0.5 text-xs font-semibold">{item?.item?.quantity}</span>
                    </div>

                </div>

                <button onClick={handleAddToCart} className="flex w-full items-center justify-center rounded-md bg-rose-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-rose-700 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Add to cart
                </button>
            </div>
        </div>

    );
};

export default PrdctCard;