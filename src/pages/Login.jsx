import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <div className="bg-[#F3F3F3]">
      <div className="pt-8 font-poppins max-w-6xl mx-auto">
        <Navbar bgColor={200} ></Navbar>
        <div className="w-2/3 mx-auto bg-white  p-[4.5rem]">
          <h3 className="text-[2.15rem] mb-10 font-semibold text-center">
            Login to your account
          </h3>
          <hr />

          <label>
            <h3 className=" text-[#403F3F] font-semibold mb-3">
              Email Address
            </h3>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              id=""
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Login;
