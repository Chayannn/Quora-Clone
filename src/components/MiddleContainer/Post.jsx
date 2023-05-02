import { Avatar } from '@mui/material';
import { RxThickArrowUp, RxThickArrowDown } from 'react-icons/rx';
import { BiMessageRounded } from 'react-icons/bi';
import { IoSyncOutline } from 'react-icons/io5';
import InputFeed from './InputFeed';
const Post = ({ name, question, description, message, photoUrl }) => {
  return (
    // Post
    <div className="bg-white p-4 mb-3 rounded">
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
        <h1 className="font-bold text-xl">{question}</h1>
        <p className="my-5">{message}</p>
      </div>
      {/* Post Buttons */}
      <div className="flex">
        {/* UpVote button */}
        <div className="button_style py-1 px-2 rounded-l-full">
          <InputFeed
            Icon={RxThickArrowUp}
            title="Upvote"
            count="9.9K"
            color="blue"
          />
        </div>
        {/* DownVote Button */}
        <div className="button_style pl-2 pb-1 rounded-r-full">
          <InputFeed Icon={RxThickArrowDown} />
        </div>
        <div className="flex items-center gap-3 ml-4">
          <InputFeed Icon={BiMessageRounded} count="43" />
          <InputFeed Icon={IoSyncOutline} count="47" />
        </div>
      </div>
    </div>
  );
};

export default Post;
