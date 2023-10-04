import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <div className="bg-[#F3F3F3] min-h-screen">
      <div className="pt-8 font-poppins max-w-6xl mx-auto">
        <Navbar bgColor={200}></Navbar>
        <div className="w-2/3 mx-auto bg-white  p-[4.5rem]">
          <h3 className="text-[2.15rem] mb-10 font-semibold text-center">
            Login to your account
          </h3>
          <hr className="mb-10" />

          <form>
            <label>
              <h3 className=" text-[#403F3F] font-semibold mb-3">
                Email Address
              </h3>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full p-5 bg-base-200 focus:outline-none rounded-md "
              />
            </label>

            <label>
              <h3 className=" text-[#403F3F] font-semibold mb-3 mt-5">
                Password
              </h3>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full p-5 bg-base-200 focus:outline-none rounded-md "
              />
            </label>

            <button className="btn  btn-neutral py-[1.13rem] capitalize w-full rounded-md mt-7">
              Login
            </button>
          </form>

          <p className="font-medium mt-7 text-[#706F6F] text-center">
            Dont’t Have An Account ?{" "}
            <Link className="text-[#FF8C47]" to="/register">
              Register
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
