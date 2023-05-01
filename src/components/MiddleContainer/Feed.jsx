import Post from './Post';
import InputFeed from './InputFeed';
import { MdOutlineLiveHelp } from 'react-icons/md';
import { HiOutlinePencilAlt, HiOutlinePencil } from 'react-icons/hi';
import Avatar from '@mui/material/Avatar';
function Feed() {
  return (
    // Feed
    <div className="flex-[0.6] pb-96">
      {/* Feed Input Container */}
      <div className="bg-white p-3 pb-3 rounded mb-5 mt-4">
        <div className="flex gap-2">
          <Avatar className='h-4 w-4' src="https://reliable-crumble-7d9de0.netlify.app/IMG_20230401_003850_727.jpg" />
          {/* Feed Input */}
          <div className=" flex border p-1 rounded-2xl w-full border-gray-400 bg-gray-100">
            <form className="flex w-full">
              <input
                className="border-none flex-1 ml-3 outline-0 font-normal bg-transparent"
                type="text"
                placeholder="What do you want to ask or share?"
              />
              <button className="hidden" type="submit"></button>
            </form>
          </div>
        </div>
        {/* Feed Input Options */}
        <div className="flex justify-evenly">
          <InputFeed Icon={MdOutlineLiveHelp} title="Ask" />
          <InputFeed Icon={HiOutlinePencilAlt} title="Answer" />
          <InputFeed Icon={HiOutlinePencil} title="Post" />
        </div>
      </div>
      <Post
        name="Trex"
        message="Test"
        description="this is a test"
        photoUrl=""
      />
    </div>
  );
}

export default Feed;
