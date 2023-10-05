import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";

const LoginWith = () => {
  const { user, loading } = useContext(AuthContext);

  return (
    <div>
      {loading ? (
        ""
      ) : user ? (
        ""
      ) : (
        <>
          <div className="space-y-2">
            <h3 className="text-xl font-bold mb-4">Login with</h3>
            <button className="btn btn-wide capitalize btn-outline btn-info">
              {" "}
              <FcGoogle className="text-xl"></FcGoogle> Login With Google
            </button>
            <button className="btn btn-wide capitalize btn-outline btn-netural">
              {" "}
              <BsGithub className="text-xl"></BsGithub> Login With Github
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default LoginWith;
