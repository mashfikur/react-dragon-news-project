import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftSidebar from "../components/LeftSidebar";
import Navbar from "../components/Navbar";
import RightSidebar from "../components/RightSidebar";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <LatestNews></LatestNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6" >
                <div className=" border-black border">
                    <LeftSidebar></LeftSidebar>
                </div>
                <div className="col-span-2 border-black border">
                    <h3 className="text-5xl">this is the middle part</h3>
                </div>
                <div className=" border-black border">
                    <RightSidebar></RightSidebar>
                </div>
            </div>
        </div>
    );
};

export default Home;