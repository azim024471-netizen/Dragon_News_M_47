import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="container mx-auto flex justify-between gap-4 p-4 items-center bg-gray-200">
            <button className="btn bg-pink-500 text-white"> Leatest News</button>

            <Marquee pauseOnHover={true} speed={60}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptatibus deserunt impedit! Molestias, natus vitae. Rem quae sunt, dolorem ex, tenetur praesentium incidunt iste, eveniet adipisci nemo unde itaque ducimus! </Marquee>
        </div>
    );
};

export default BreakingNews;