import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();

  const { userSignIn, setLoading } = useContext(AuthContext);

  const [showError, setShowError] = useState("");

  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    // reseting error
    setShowError("");

    if (password.length < 6) {
      setShowError("Your password should be more than 6 charectars");
      return;
    }

    // user sign in
    userSignIn(email, password)
      .then(() => {
        toast.success("Logged in successfully");
        e.target.reset();
        setTimeout(() => {
          location.state ? navigate(location.state) : navigate("/");
        }, 1000);
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="bg-[#F3F3F3] min-h-screen">
      <div className="pt-8 font-poppins max-w-6xl mx-auto">
        <Navbar bgColor={200}></Navbar>
        <div className="w-2/3 mx-auto bg-white  p-[4.5rem]">
          <h3 className="text-[2.15rem] mb-10 font-semibold text-center">
            Login to your account
          </h3>
          <hr className="mb-10" />

          <form onSubmit={handleSubmit}>
            <label>
              <h3 className=" text-[#403F3F] font-semibold mb-3">
                Email Address
              </h3>
              <input
                type="email"
                name="email"
                required
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
                required
                placeholder="Enter your password"
                className="w-full p-5 bg-base-200 focus:outline-none rounded-md "
              />
            </label>

            {showError && (
              <p className="text-red-600 font-semibold">{showError}</p>
            )}

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
      <Toaster></Toaster>
    </div>
  );
};

export default Login;
