import moment from 'moment';

const Header = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <img src="/src/assets/logo.png" alt="" />
      </div>
      <p className="text-[#706F6F] text-center ">Journalism Without Fear or Favour</p>
      <p className="text-xl text-center">{moment().format("dddd, MMMM D , YYYY")}</p>
    </div>
  );
};

export default Header;
