import { FaArrowRight } from "react-icons/fa";
import { Carousel } from "../components/home/Carousel";
import PrdctCard from "../components/home/PrdctCard";
import TitleGenerator from "../utils/TitleGenerator";
import { NavLink } from "react-router-dom";
import Categories from "../components/home/Categories";
import FeaturedPrdctCard from "../components/home/FeaturedPrdctCard";
import ShuffleHero from "../components/home/ShuffleHero";
import Footer from "../components/Global/nav/Footer";
import Faq from "../components/home/Faq";


const Home = () => {

    return (
        <div className="">
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

            {/* Featured products */}
            <div className="px-4 md:px-8 lg:px-10 mx-auto">
                <TitleGenerator title="Featured " colorTitle="Products" underTitle="Look Our Featured" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <FeaturedPrdctCard />
                    <FeaturedPrdctCard />
                    <FeaturedPrdctCard />
                    <FeaturedPrdctCard />
                    <FeaturedPrdctCard />
                    <FeaturedPrdctCard />
                    <FeaturedPrdctCard />
                    <FeaturedPrdctCard />
                </div>
            </div>

            {/* unique section */}
            <div className="px-4 md:px-8 mt-20 md:mt-32 lg:mt-40 lg:px-10 mx-auto">
                <ShuffleHero />
            </div>

            <div className="px-4 md:px-8 mt-20 md:mt-32 lg:mt-40 lg:px-10 mx-auto">
                <TitleGenerator title="Frequently Asked " colorTitle="Questions" underTitle="FAQ" />

                <div className="-mt-20">
                    <Faq />
                </div>
            </div>



            <Footer />
        </div>
    );
};

export default Home;