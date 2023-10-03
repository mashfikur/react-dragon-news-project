import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex bg-base-300 p-4  rounded">
            <button className="btn btn-md rounded p btn-secondary">Latest</button>
            <Marquee  pauseOnHover={true} speed={100}>
                <Link className="mr-4" to="/">This is a sliding text which is really exciting because i havent seen something like this </Link>
                <Link className="mr-4" to="/">This is a sliding text which is really exciting because i havent seen something like this </Link>
                <Link className="mr-4" to="/">This is a sliding text which is really exciting because i havent seen something like this </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;