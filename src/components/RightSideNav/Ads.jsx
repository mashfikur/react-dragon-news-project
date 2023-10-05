import { useLocation } from "react-router-dom";

const Ads = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname.includes("/news") ? (
        ""
      ) : (
        <>
          <div className="text-center text-white mb-5 py-14 px-8 space-y-5 bg-[url('/src/assets/bg.png')] ">
            <h3 className="text-2xl font-bold">Create an Amazing Newspaper</h3>
            <p>
              Discover thousands of options, easy to customize layouts,
              one-click to import demo and much more.
            </p>
            <button className="btn btn-secondary capitalize rounded">
              learn More
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Ads;
