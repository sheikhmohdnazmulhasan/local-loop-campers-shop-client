import { useLocation } from "react-router-dom";
import Footer from "../components/Global/nav/Footer";
import PrdctCard from "../components/home/PrdctCard";
import { useGetProductsQuery } from "../redux/features/products/product.api";

const Products = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');

    const { data, isError, isLoading } = useGetProductsQuery({ category });

    if (isLoading) return <div className="">Loading...</div>;
    if(isError) return <div className="">Something Wrong!</div>;

    return (
        <div className="">

            <div className=" p-4 md:p-10 lg:p-14">

                <div className="">

                    {/* search bar */}
                    <form className="mb-5">
                        <input type="text" name="" id="" placeholder="Search..." className="py-1 px-3 border rounded-l-md " required />
                        <button type="submit" className="py-1 px-3 border border-rose-600 bg-rose-600 text-white rounded-r-md">Search</button>
                    </form>
                </div>

                {/* card */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
                    <PrdctCard />
                    <PrdctCard />
                    <PrdctCard />
                    <PrdctCard />
                    <PrdctCard />
                    <PrdctCard />
                    <PrdctCard />
                    <PrdctCard />
                    <PrdctCard />
                    <PrdctCard />
                    <PrdctCard />
                </div>

            </div>

            {/*  */}
            <Footer />
        </div>
    );
};

export default Products;