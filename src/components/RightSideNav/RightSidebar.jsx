import Ads from "./Ads";
import FindUs from "./FindUs";
import LoginWith from "./LoginWith";
import Qzone from "./Qzone";

const RightSidebar = () => {
  return (
    <div className="sticky top-2">
      <LoginWith></LoginWith>
      <FindUs></FindUs>
      <Qzone></Qzone>
      <Ads></Ads>
    </div>
  );
};

export default RightSidebar;
