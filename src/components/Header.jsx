import moment from 'moment';
import HeaderLogo from '../assets/logo.png'

const Header = () => {
  return (
    <div className='mt-12'>
      <img className='mx-auto mb-5' src={HeaderLogo} alt="" />
      <p className="text-[#706F6F] text-center mb-2 ">Journalism Without Fear or Favour</p>
      <p className="text-xl text-center">{moment().format("dddd, MMMM D , YYYY")}</p>
    </div>
  );
};

export default Header;
