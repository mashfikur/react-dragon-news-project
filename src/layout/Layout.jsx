import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="font-poppins max-w-6xl mx-auto ">
      <Outlet></Outlet>
      <Toaster></Toaster>
    </div>
  );
};

export default Layout;
