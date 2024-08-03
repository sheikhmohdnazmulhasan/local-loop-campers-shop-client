import { Link } from "react-router-dom";

const FeaturedPrdctCard = ({...item}) => {

    return (
        <div className="  border overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="px-4 py-2">
                <h1 className="text-xl font-bold text-gray-800 uppercase">{item?.item?.title}</h1>
                <p className="mt-1 text-sm text-gray-600 ">{item?.item?.description.slice(0,100)}</p>
            </div>

            <img className="object-cover w-full h-48 mt-2" src={item?.item?.images[0]} alt={item?.item?.title} />

                <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <h1 className="text-lg font-bold text-white">${item?.item?.price}</h1>
                <Link to={`/products/details/${item?.item?._id}`} className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-rose-600 rounded hover:bg-rose-700 ">View Details</Link>
                </div>
        </div>
    );
};

export default FeaturedPrdctCard;