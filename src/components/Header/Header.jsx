import SearchIcon from '@mui/icons-material/Search';
import { BiHome } from 'react-icons/bi';
import { FaRegListAlt } from 'react-icons/fa';
import { HiOutlinePencilAlt, HiOutlineUserGroup } from 'react-icons/hi';
import { MdOutlineNotifications } from 'react-icons/md';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import HeaderOption from './HeaderOption';

function Header() {
  return (
    // Header
    <header className="sticky top-0 flex justify-evenly pt-2 pb-4 w-full z-50 bg-white border shadow-md">
      {/* Header Left */}
      <nav className="flex relative">
        <img
          className="object-contain h-7 mr-7 mt-1"
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Quora_logo_2015.svg"
          alt="linkedIn logo"
        />
        <div className="flex gap-4">
          <div className="icon">
            <HeaderOption size="lg" Icon={BiHome} />
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
      <div className="flex relative -left-16 ">
        {/* Header-Search */}
        <div className=" Search-Icon border p-1 rounded w-72 mr-2 ">
          <SearchIcon />
          <input
            className="outline-none"
            type="text"
            placeholder="Search Quora"
          />
        </div>
        <button className="border rounded-2xl pr-4 pl-4 h-[30px] ml-2 mr-2 text-xs font-medium text-[#636466] ">
          Try Quora+
        </button>

        <HeaderOption avatar="https://reliable-crumble-7d9de0.netlify.app/IMG_20230401_003850_727.jpg" />

        <HeaderOption Icon={LanguageOutlinedIcon} />

        <button className="pl-[10px] pr-[60px] h-[30px] rounded-2xl bg-[#B92B27] text-white font-medium text-xs">
          Add question
        </button>
      </div>
    </header>
  );
}

export default Header;
