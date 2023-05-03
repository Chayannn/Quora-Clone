import { Avatar } from '@mui/material';
import { RxThickArrowUp, RxThickArrowDown } from 'react-icons/rx';
import { BiMessageRounded } from 'react-icons/bi';
import { IoSyncOutline } from 'react-icons/io5';
import InputFeed from './InputFeed';
import { useState } from 'react';
const Post = ({ name, question, description, message, photoUrl }) => {
  let [count, setCounter] = useState(0);
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
        <button
          className="button_style py-1 px-2 rounded-l-full"
          onClick={(e) => setCounter(count++)}>
          <InputFeed
            Icon={RxThickArrowUp}
            title="Upvote"
            count={count}
            color="blue"
          />
        </button>
        {/* DownVote Button */}
        <button
          className="button_style pl-2 pb-1 rounded-r-full"
          onClick={(e) => setCounter(count--)}>
          <InputFeed Icon={RxThickArrowDown} />
        </button>
        <div className="flex gap-2">
          <button className="flex items-center gap-3 ml-4">
            <InputFeed
              Icon={BiMessageRounded}
              count={Math.floor(Math.random() * 100)}
            />
          </button>
          <button>
            <InputFeed
              Icon={IoSyncOutline}
              count={Math.floor(Math.random() * 100)}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
