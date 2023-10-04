import { BsCalendar } from "react-icons/bs";

const Sidenews = () => {
  return (
    <div className="mt-5">
      <div className="space-y-4">
        <div>
          <img src="/src/assets/1.png" alt="" />
          <h3 className="text-xl text-[#403F3F] font-semibold mt-5">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h3>
          <span className="flex items-center gap-5 mt-5">
            <p className="font-medium">Sports</p>
            <p className="text-[#9F9F9F] font-medium flex items-center gap-2">
              {" "}
              <BsCalendar></BsCalendar> Jan 4, 2022
            </p>
          </span>
        </div>
        <div>
          <img src="/src/assets/2.png" alt="" />
          <h3 className="text-xl text-[#403F3F] font-semibold mt-5">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h3>
          <span className="flex items-center gap-5 mt-5">
            <p className="font-medium">Sports</p>
            <p className="text-[#9F9F9F] font-medium flex items-center gap-2">
              {" "}
              <BsCalendar></BsCalendar> Jan 4, 2022
            </p>
          </span>
        </div>
        <div>
          <img src="/src/assets/3.png" alt="" />
          <h3 className="text-xl text-[#403F3F] font-semibold mt-5">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h3>
          <span className="flex items-center gap-5 mt-5">
            <p className="font-medium">Sports</p>
            <p className="text-[#9F9F9F] font-medium flex items-center gap-2">
              {" "}
              <BsCalendar></BsCalendar> Jan 4, 2022
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidenews;
