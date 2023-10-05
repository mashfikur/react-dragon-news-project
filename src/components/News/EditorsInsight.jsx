import { BsCalendar } from "react-icons/bs";
import editor1 from "../../assets/editorsInsight1.png";
import editor2 from "../../assets/editorsInsight2.png";
import editor3 from "../../assets/editorsInsight3.png";

const EditorsInsight = () => {
  return (
    <div>
      <h3 className="text-xl mb-6 font-bold">Editors Insight</h3>

      <div>
        <div>
          <div className=" grid grid-cols-3 gap-5">
            <div>
              <img src={editor1} alt="" />
              <h3 className="text-xl text-[#403F3F] font-semibold mt-5">
                Bayern Slams Authorities Over Flight Delay to Club World Cup
              </h3>
              <span className="flex items-center gap-5 mt-5">
                <p className="text-[#9F9F9F] font-medium flex items-center gap-2">
                  {" "}
                  <BsCalendar></BsCalendar> Jan 4, 2022
                </p>
              </span>
            </div>
            {/*  */}
            <div>
              <img src={editor2} alt="" />
              <h3 className="text-xl text-[#403F3F] font-semibold mt-5">
                Bayern Slams Authorities Over Flight Delay to Club World Cup
              </h3>
              <span className="flex items-center gap-5 mt-5">
                <p className="text-[#9F9F9F] font-medium flex items-center gap-2">
                  {" "}
                  <BsCalendar></BsCalendar> Jan 4, 2022
                </p>
              </span>
            </div>
            {/*  */}
            <div>
              <img src={editor3} alt="" />
              <h3 className="text-xl text-[#403F3F] font-semibold mt-5">
                Bayern Slams Authorities Over Flight Delay to Club World Cup
              </h3>
              <span className="flex items-center gap-5 mt-5">
                <p className="text-[#9F9F9F] font-medium flex items-center gap-2">
                  {" "}
                  <BsCalendar></BsCalendar> Jan 4, 2022
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorsInsight;
