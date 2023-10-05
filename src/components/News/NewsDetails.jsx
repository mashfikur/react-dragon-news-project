import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../Header";
import RightSidebar from "../RightSideNav/RightSidebar";
import { AiOutlineArrowLeft } from "react-icons/ai";
import EditorsInsight from "./EditorsInsight";
import { useEffect } from "react";

const NewsDetails = () => {
  const { ID } = useParams();
  const allNewsData = useLoaderData();

  const selectedNews = allNewsData.find((news) => news._id === ID);

  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  return (
    <div className="lg:mb-28">
      <Header></Header>
      <div className="mt-7 grid gap-5 lg:grid-cols-4">
        <div className="lg:col-span-3">
          <h3 className="text-xl font-bold mb-5">Dragon News </h3>
          <div className="p-7 border-2 rounded-lg">
            <img src={selectedNews.image_url} alt="" />
            <h3 className="text-2xl my-5 font-bold">{selectedNews.title}</h3>
            <p className="text-[#706F6F]  mb-10 ">{selectedNews.details}</p>
            <Link to="/">
              <button className="btn btn-secondary capitalize">
                {" "}
                <AiOutlineArrowLeft></AiOutlineArrowLeft> All news in this
                category
              </button>
            </Link>
          </div>

          <div className="mt-7">
            <div>
              <EditorsInsight></EditorsInsight>
            </div>
          </div>
        </div>

        <div>
          <RightSidebar></RightSidebar>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
