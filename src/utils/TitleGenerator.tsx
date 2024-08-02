
interface TTitleGenerator { title: string; colorTitle: string; underTitle: string; }
const TitleGenerator = ({ title, colorTitle, underTitle }: TTitleGenerator) => {

    return (
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
            <div className="relative">
                <h1 className="absolute -top-14 left-0 text-[120px] font-bold opacity-5 md:block hidden">
                    {underTitle}
                </h1>
                <h1 className="text-5xl font-bold"> {title}  <span className="text-rose-600">
                    {colorTitle}
                </span> </h1>
                <div className="flex w-24 mt-1 mb-6 overflow-hidden rounded md:mb-14">
                    <div className="flex-1 h-2 bg-rose-300">
                    </div>
                    <div className="flex-1 h-2 bg-rose-400">
                    </div>
                    <div className="flex-1 h-2 bg-rose-500">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TitleGenerator;