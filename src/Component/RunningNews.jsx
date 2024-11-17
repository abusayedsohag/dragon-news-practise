import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const RunningNews = () => {
    return (
        <div className="bg-gray-100 flex p-3 gap-4">
            <div>
                <p className="bg-rose-600 text-white px-3 py-1">Latest</p>
            </div>
            <Marquee pauseOnHover={true} className="gap-6">
                <Link to='news'>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, nobis voluptatibus distinctio numquam possimus eaque dolore autem necessitatibus.</p>
                </Link>
            </Marquee>
        </div>
    );
};

export default RunningNews;