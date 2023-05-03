import { BsChevronDown } from 'react-icons/bs';
import { FaRegListAlt } from 'react-icons/fa';
import { HiOutlinePencilAlt, HiOutlineUserGroup } from 'react-icons/hi';
import { MdOutlineNotifications, MdHome } from 'react-icons/md';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import HeaderOption from './HeaderOption';
import SearchBar from './SearchBar';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/userSlice';
import { auth } from '../../firebase';

const Header = () => {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout(auth.signOut));
  };
  return (
    // Header
    <header className="sticky top-0 flex justify-center pt-2 pb-2 z-50 bg-white shadow-sm">
      {/* Header Left */}
      <nav className="flex mt-1">
        <img
          className="object-contain h-7 mr-7 mt-1"
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Quora_logo_2015.svg"
          alt="Quora logo"
        />
        <div className="flex gap-x-2 i">
          <div className="icon flex flex-col justify-between">
            <HeaderOption size="lg" Icon={MdHome} color="#B92B27" />
            <div className="relative top-2 h-[3px] px-6 rounded bg-[#B92B27] "></div>
          </div>
          <div className="icon">
            <HeaderOption Icon={FaRegListAlt} />
          </div>
          <div className="icon">
            <HeaderOption Icon={HiOutlinePencilAlt} />
          </div>
          <div className="icon">
            <HeaderOption Icon={HiOutlineUserGroup} />
          </div>
          <div className="icon">
            <HeaderOption Icon={MdOutlineNotifications} />
          </div>
        </div>
      </nav>
      {/* Header Right */}
      <div className="flex w-1/2">
        {/* Header-Search */}
        <div className="flex-1">
          <SearchBar />
        </div>
        <div className="my-auto px-2">
          <button className="border-gray-300 border rounded-2xl px-3 py-1 text-sm font-medium text-[#636466] ">
            Try Quora+
          </button>
        </div>
        <div className="flex my-auto px-2">
          <HeaderOption avatar={true} onClick={logoutOfApp} />

          <HeaderOption Icon={LanguageOutlinedIcon} />
        </div>
        {/* Add Question Button */}
        <div className="flex items-center">
          <button className="text-sm h-8 px-3 font-semibold rounded-l-full bg-[#B92B27] text-white">
            Add question
          </button>
          <div className="h-8 px-3 flex items-center text-white rounded-r-full bg-[#B92B27]">
            <BsChevronDown />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
