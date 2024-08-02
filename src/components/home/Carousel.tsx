import { useEffect, useState } from "react";

export const Carousel = () => {
    const [currentSlider, setCurrentSlider] = useState(0);

    const sliders = [
        { img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { img: "https://plus.unsplash.com/premium_photo-1682832927486-a2c8201358d9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { img: "https://images.unsplash.com/photo-1495269652876-12a814403455?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { img: "https://images.unsplash.com/photo-1495055154266-57bbdeada43e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { img: "https://images.unsplash.com/photo-1633381638831-0ced80e2fee4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },

    ];

    const titles = [
        <h1 className="text-xl uppercase font-semibold md:text-left text-white sm:text-2xl">
            We have exactly what <br /> <span className="text-rose-600 text-2xl uppercase font-bold md:text-left  sm:text-5xl">you are  looking for!</span>
        </h1>,
        <h1 className="text-xl uppercase font-semibold md:text-left text-white sm:text-2xl">
            Shop as much as you want <br /> <span className="text-rose-600 text-2xl uppercase font-bold md:text-left  sm:text-5xl">free delivery nationwide!</span>
        </h1>,
        <h1 className="text-xl uppercase font-semibold md:text-left text-white sm:text-2xl">
            If you don't like the product <br /> <span className="text-rose-600 text-2xl uppercase font-bold md:text-left  sm:text-5xl">return it within 72 hours</span>
        </h1>,
        <h1 className="text-xl uppercase font-semibold md:text-left text-white sm:text-2xl">
            Cash on delivery facility<br /> <span className="text-rose-600 text-2xl uppercase font-bold md:text-left  sm:text-5xl">across the country</span>
        </h1>,
        <h1 className="text-xl uppercase font-semibold md:text-left text-white sm:text-2xl">
            Guaranteed best product <br /> <span className="text-rose-600 text-2xl uppercase font-bold md:text-left  sm:text-5xl">at lowest price</span>
        </h1>,
        

    ]


    // if you don't want to change the slider automatically then you can just remove the useEffect
    useEffect(() => {
        const intervalId = setInterval(() => setCurrentSlider(currentSlider === sliders.length - 1 ? 0 : currentSlider + 1), 3000);
        return () => clearInterval(intervalId);
    }, [currentSlider, sliders.length]);

    return (
        <>
            <div className="w-full h-96 sm:h-96 md:h-screen flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear"
                style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}>
                {/* text container here */}

                <div className="drop-shadow-lg text-white text-center w-full">

                    <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8" >
                        <div className="max-w-3xl text-center ltr:sm:text-left rtl:sm:text-right">

                            {titles[currentSlider]}

                            <p className="mt-4 max-w-lg text-white md:text-left sm:text-xl/relaxed">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                                numquam ea!
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4 text-center !justify-start md:justify-center">
                                <a href="#" className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                                    Get Started
                                </a>

                                <a href="#" className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
};
