
const FeaturedPrdctCard = () => {
    return (
        <div className="  border overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="px-4 py-2">
                <h1 className="text-xl font-bold text-gray-800 uppercase">NIKE AIR</h1>
                <p className="mt-1 text-sm text-gray-600 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus</p>
            </div>

            <img className="object-cover w-full h-48 mt-2" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80" alt="NIKE AIR" />

                <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <h1 className="text-lg font-bold text-white">$129</h1>
                    <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-rose-600 rounded hover:bg-rose-700 ">View Details</button>
                </div>
        </div>
    );
};

export default FeaturedPrdctCard;