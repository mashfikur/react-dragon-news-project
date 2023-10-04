import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Register = () => {

    const handleSubmit =(e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')

        console.log(email,password)
    }

  return (
    <div className="bg-[#F3F3F3] min-h-screen">
      <div className="pt-8 font-poppins max-w-6xl pb-16 mx-auto">
        <Navbar bgColor={200}></Navbar>
        <div className="w-2/3 mx-auto bg-white  p-[4.5rem]">
          <h3 className="text-[2.15rem] mb-10 font-semibold text-center">
            Register Now
          </h3>
          <hr className="mb-10" />

          <form onSubmit={handleSubmit} >

            <label>
              <h3 className=" text-[#403F3F] font-semibold mb-3">Your Name</h3>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full p-5 bg-base-200 focus:outline-none rounded-md "
              />
            </label>

            <label>
              <h3 className=" text-[#403F3F] font-semibold mt-5 mb-3">Photo URL</h3>
              <input
                type="text"
                name="photo"
                placeholder="Enter your image link"
                className="w-full p-5 bg-base-200 focus:outline-none rounded-md "
              />
            </label>

            <label>
              <h3 className=" text-[#403F3F] font-semibold mt-5 mb-3">
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
                className="w-full p-5 bg-base-200 focus:outline-none rounded-md mb-5 "
              />
            </label>

            <label className="flex items-center gap-3">
            <input type="checkbox"  className="checkbox checkbox-sm rounded" />
            <p className="text-[#706F6F]">Accept <Link className="font-semibold">Terms & Conditions</Link> </p>
            </label>

            <button className="btn  btn-neutral py-[1.13rem] capitalize w-full rounded-md mt-7">
              Register
            </button>

          </form>

          <p className="font-medium mt-7 text-[#706F6F] text-center">
            Already Have An Account ?{" "}
            <Link className="text-[#FF8C47]" to="/login">
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
