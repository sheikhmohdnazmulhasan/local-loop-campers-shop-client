import Footer from "../components/Global/nav/Footer";

const About = () => {
    return (
        <div data-aos="fade-left" className="">
            <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                <div className="flex flex-col lg:flex-row justify-between gap-8">
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
                        <p className="font-normal text-base leading-6 text-gray-600 ">At LocalLoop, we’re more than just an online store we’re a community dedicated to enhancing your shopping experience. Our journey began with a vision to revolutionize the way people shop online by combining convenience with a personal touch.
                            <p>Founded in 2024, LocalLoop started with a simple idea: to make high-quality products accessible to everyone, no matter where they are. With a focus on innovation and customer satisfaction, we’ve grown from a small startup to a trusted name in e-commerce.</p>

                        </p>
                    </div>
                    <div className="w-full lg:w-8/12 ">
                        <img className="w-full h-full" src="https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="A group of People" />
                    </div>
                </div>

                <div className=" mt-10">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Mission Statement</h1>
                    <p>"At LocalLoop, our mission is to provide a seamless and personalized shopping experience by offering a diverse range of high-quality products, exceptional customer service, and innovative technology. We strive to empower our customers with convenience and choice, ensuring that every interaction is efficient, enjoyable, and tailored to their needs. Our commitment is to build trust and create lasting value through transparency, reliability, and a passion for exceeding expectations."</p>
                </div>

                <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Meet Team</h1>
                        <p className="font-normal text-base leading-6 text-gray-600 ">It is a long established fact that a reader will be distracted es inviolate; and we will that it be thus observed; which is apparent from</p>
                    </div>
                    <div className="w-full lg:w-8/12 lg:pt-8">
                        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png" alt="Alexa featured Img" />
                                <img className="md:hidden block" src="https://i.ibb.co/zHjXqg4/Rectangle-118.png" alt="Alexa featured Img" />
                                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Alexa</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png" alt="Olivia featured Img" />
                                <img className="md:hidden block" src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png" alt="Olivia featured Img" />
                                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Olivia</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Img" />
                                <img className="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Liam featued Img" />
                                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Liam</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured img" />
                                <img className="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Elijah featured img" />
                                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Elijah</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
