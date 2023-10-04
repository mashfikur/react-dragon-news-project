import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftSidebar from "../components/LeftSideNav/LeftSidebar";

import Navbar from "../components/Navbar";
import RightSidebar from "../components/RightSideNav/RightSidebar";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <LatestNews></LatestNews>
      <Navbar bgColor={100} ></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
            <LeftSidebar></LeftSidebar>
        </div>
        <div className="col-span-2">
          <h3 className="text-5xl">this is the middle part</h3>
        </div>
        <div>
          <RightSidebar></RightSidebar>
        </div>
      </div>
    </div>
  );
};

export default Home;
