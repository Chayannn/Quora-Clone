import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
function HeaderOption({ avatar, Icon, title, onClick, color }) {
  const user = useSelector(selectUser);
  return (
    // Header Option
    <div
      className="flex flex-col items-center mr-3 cursor-pointer text-black text-opacity-60 hover:text-[#B92B27]"
      onClick={onClick}>
      {Icon && <Icon className="headerOption__Icon" style={{ color: color }} />}
      {avatar && (
        <Avatar className="headerOption__Icon" src={user?.photoUrl}>
          {user?.displayName[0].toUpperCase()}
        </Avatar>
      )}
      {/* HeaderOption-title  */}
      <h3 className="text-xs font-normal"> {title} </h3>
    </div>
  );
}

export default HeaderOption;
