import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOption from './HeaderOption';

function Header() {
  return (
    // Header
    <div className="sticky top-0 flex justify-evenly pt-3 pb- w-full z-50 bg-white">
      {/* Header-left */}
      <div className="flex">
        <img
          className="object-contain h-9 mr-3"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png?20140125013055"
          alt="linkedIn logo"
        />
        {/* Header-Search */}
        <div className="flex items-center rounded border text-gray-500 bg-[#eef3f8] w-full pl-2 h-9">
          <SearchIcon />
          <input
            className="outline-none bg-transparent border-none p-2"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      {/* Header-right */}
      <div className="flex">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption title="Me" avatar='https://magnificent-dolphin-599305.netlify.app/IMG_20220422_202835_312%20(1).jpg' />
      </div>
    </div>
  );
}

export default Header;
