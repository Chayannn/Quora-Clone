import { Avatar } from '@mui/material';
import { RxThickArrowUp, RxThickArrowDown } from 'react-icons/rx';
import { BiMessageRounded } from 'react-icons/bi';
import { IoSyncOutline } from 'react-icons/io5';
import InputFeed from './InputFeed';
const Post = ({ name, description, message, photoUrl }) => {
  return (
    // Post
    <div className="bg-white p-4 mb-3 rounded max-w-lg">
      {/* Post header */}
      <div className="flex mb-3">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        {/* Post info */}
        <div className="ml-3">
          <h2 className="text-base">{name}</h2>
          <p className="text-xs">{description}</p>
        </div>
      </div>
      {/* Post Body */}
      <div className="break-words">
        <p>{message}</p>
      </div>
      {/* Post Buttons */}
      <div className="flex justify-evenly">
        <InputFeed Icon={RxThickArrowUp} />
        <InputFeed Icon={RxThickArrowDown} />
        <InputFeed Icon={BiMessageRounded} />
        <InputFeed Icon={IoSyncOutline} />
      </div>
    </div>
  );
};

export default Post;
