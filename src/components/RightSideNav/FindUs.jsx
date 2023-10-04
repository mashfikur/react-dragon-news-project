import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const FindUs = () => {
  return (
    <div className="mt-7 mb-5">
      <h3 className="text-xl font-bold mb-5">Find Us</h3>
      <ul>
        <li>
          {" "}
          <Link className="flex items-center p-4 border-2 rounded-t-lg" to="">
            <FaFacebook className="mr-4 text-xl "></FaFacebook> Facebook
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link className="flex items-center p-4 border-x-2" to="">
            <FaTwitter className="mr-4 text-xl "></FaTwitter> Twitter
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link className="flex items-center p-4 border-2 rounded-b-lg " to="">
            <FaInstagram className="mr-4 text-xl "></FaInstagram> Instagram
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FindUs;
