import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { NavLink } from "react-router-dom";

type CardType = {
    url: string;
    title: string;
    id: number;
};

const cards: CardType[] = [
    {
        url: "https://plus.unsplash.com/premium_photo-1664201889947-ca672c9d4134?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Smartphone",
        id: 1,
    },
    {
        url: "https://plus.unsplash.com/premium_photo-1684785617500-fb22234eeedd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Laptop",
        id: 2,
    },
    {
        url: "https://plus.unsplash.com/premium_photo-1680402879257-48ffbbc6db1d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Robotic",
        id: 3,
    },
    {
        url: "https://images.unsplash.com/photo-1474426112664-8f4248139c49?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Drone",
        id: 4,
    },
    {
        url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1638&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Camera",
        id: 5,
    },
    {
        url: "https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Headphone",
        id: 6,
    },
    {
        url: "https://plus.unsplash.com/premium_photo-1687558246422-e94f0864d467?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "VR",
        id: 7,
    },
];


const Categories = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-58%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] ">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {cards.map((card, index) => {
                        return <Card card={card} key={index} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card }: { card: CardType }) => {
    return (
        <NavLink to={`/products?category=${card.title.toLocaleLowerCase()}`}><div
            key={card.id}
            className="group relative h-[400px] w-[400px] overflow-hidden bg-neutral-200">
            <div
                style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            ></div>
            <div className="absolute bottom-0 bg-rose-600 p-5 bg-opacity-70 w-full grid place-content-center">
                <p className="uppercase text-white text-xl">{card.title}</p>
            </div>
        </div></NavLink>
    );
};

export default Categories;