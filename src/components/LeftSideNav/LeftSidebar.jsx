import Categories from "./Categories";
import Sidenews from "./Sidenews";


const LeftSidebar = () => {
    return (
        <div>
           <h3 className="text-xl mb-5 font-semibold">All categories</h3> 
           <Categories></Categories>
           <Sidenews></Sidenews>
        </div>
    );
};

export default LeftSidebar;