import { FaArrowRight } from "react-icons/fa";
import { Carousel } from "../components/home/Carousel";
import PrdctCard from "../components/home/PrdctCard";
import TitleGenerator from "../utils/TitleGenerator";
import { NavLink } from "react-router-dom";
import Categories from "../components/home/Categories";


const Home = () => {

    return (
        <div className="pb-96">
            <Carousel />

            {/* hot products */}
            <div className="px-4 md:px-8 lg:px-10 mx-auto">
                <TitleGenerator title={'Hot'} colorTitle={'Products'} underTitle={'Choose Your Best'} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <PrdctCard />
                    <PrdctCard />
                    <PrdctCard />
                    <PrdctCard />
                </div>

                <div className="flex justify-end mt-4">
                    <NavLink to={'/products'}> <button className=" flex items-center gap-2 uppercase font-medium text-sm hover:scale-110 duration-150">View More<FaArrowRight />
                    </button></NavLink>
                </div>
            </div>

            {/* categories */}
            <div className="px-4 md:px-8 lg:px-10 mx-auto">
                <TitleGenerator title="Top" colorTitle="Categories" underTitle="Go to Right Track" />

                <div className="-mt-24">
                    <Categories />
                </div>
            </div>
        </div>
    );
};

export default Home;