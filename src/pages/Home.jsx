import { Toaster } from "react-hot-toast";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftSidebar from "../components/LeftSideNav/LeftSidebar";

import Navbar from "../components/Navbar";
import RightSidebar from "../components/RightSideNav/RightSidebar";
import News from "../components/News/News";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const allNews=useLoaderData()
  return (
    <div className="mb-16">
      <Header></Header>
      <LatestNews></LatestNews>
      <Navbar bgColor={100}></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <LeftSidebar></LeftSidebar>
        </div>
        <div className="col-span-2">
          <News allNews={allNews} ></News>
        </div>
        <div>
          <RightSidebar></RightSidebar>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Home;
