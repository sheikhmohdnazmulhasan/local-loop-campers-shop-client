import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Global/nav/Footer";
import PrdctCard from "../components/home/PrdctCard";
import { useGetProductsQuery } from "../redux/features/products/product.api";
import noItem from '../../public/no-product-8316266-6632286.webp';
import Spinner from "../utils/Spinner";
import FetchErrorElmt from "../error/FetchErrorElmt";
import { TProduct } from "../interface";

const Products = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');
    const { data, isError, isLoading } = useGetProductsQuery({ category });

    if (isLoading) return <Spinner />;
    if (isError) return <FetchErrorElmt />;

    if (!data.data.length && category) return (
        <div className="h-screen w-full border flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <img className="size-36" src={noItem} alt="" />
                <p className="text-xl">No Item Available In <span className="text-rose-600">{category?.toUpperCase()}</span> Category!</p>
                <div className="flex gap-3 mt-3">
                    <Link to={'/dashboard/new'}>  <button className="py-1.5 px-3 bg-rose-600 text-white rounded-sm">Add One</button></Link>
                    <Link to={'/products'} >  <button className="py-1.5 px-3 bg-white text-rose-600 border rounded-sm">Load All</button></Link>
                </div>
            </div>
        </div>
    )

    if (!data.data.length) return (
        <div className="h-screen w-full border flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <img className="size-36" src={noItem} alt="" />
                <p className="text-xl">No Item Available</p>
                <div className="flex gap-3 mt-3">
                    <Link to={'/dashboard/new'}>  <button className="py-1.5 px-3 bg-rose-600 text-white rounded-sm">Add One</button></Link>
                </div>
            </div>
        </div>
    )

    return (
        <div data-aos="fade-left" className="h-screen">

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

                    {data?.data?.slice()?.reverse()?.map((item: TProduct, indx: number) => (
                        <PrdctCard item={item} key={indx} />
                    ))}

                </div>

            </div>

            {/*  */}
            <Footer />
        </div>
    );
};

export default Products;