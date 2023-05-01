import Avatar from '@mui/material/Avatar';
function HeaderOption({ avatar, Icon, title, onClick }) {
  return (
    // Header Option
    <div
      className="flex flex-col items-center mr-4 cursor-pointer text-black text-opacity-60 hover:text-[#B92B27]"
      onClick={onClick}>
      {Icon && <Icon  className="headerOption__Icon" />}
      {avatar && (
        <Avatar
          className="headerOption__Icon"
          src={avatar}
        />
      )}
      {/* HeaderOption-title  */}
      <h3 className="text-xs font-normal"> {title} </h3>
    </div>
  );
}

export default HeaderOption;
