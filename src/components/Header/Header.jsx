import SearchIcon from '@mui/icons-material/Search';
import { BiHome } from 'react-icons/bi';
import { FaRegListAlt } from 'react-icons/fa';
import { HiOutlinePencilAlt, HiOutlineUserGroup } from 'react-icons/hi';
import { MdOutlineNotifications } from 'react-icons/md';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import HeaderOption from './HeaderOption';
import SearchBar from './SearchBar';

function Header() {
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
        <div className="flex gap-x-3">
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
          <HeaderOption avatar="https://reliable-crumble-7d9de0.netlify.app/IMG_20230401_003850_727.jpg" />

          <HeaderOption Icon={LanguageOutlinedIcon} />
        </div>
        <button className="pl-[10px] pr-[60px] h-[30px] rounded-2xl bg-[#B92B27] text-white font-medium text-xs">
          Add question
        </button>
      </div>
    </header>
  );
}

export default Header;
