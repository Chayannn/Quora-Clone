import Post from './Post';
import InputFeed from './InputFeed';
import { MdOutlineLiveHelp } from 'react-icons/md';
import { HiOutlinePencilAlt, HiOutlinePencil } from 'react-icons/hi';
import Avatar from '@mui/material/Avatar';
function Feed() {
  return (
    // Feed
    <main className="w-1/2 pb-5">
      {/* Feed Input Container */}
      <section className=" p-3 mb-5 mt-4 border rounded shadow-sm bg-white">
        <div className="flex gap-x-2">
          <Avatar
            src="https://reliable-crumble-7d9de0.netlify.app/IMG_20230401_003850_727.jpg"
          />
          <div className="flex-col w-full">
            {/* Feed Input */}
            <div className=" flex border border-neutral-200 rounded-2xl w-full bg-neutral-50">
              <form className="flex w-full">
                <input
                  className="flex-1 ml-3 py-[3px] font-normal text-lg border-0 outline-0 bg-transparent"
                  type="text"
                  placeholder="What do you want to ask or share?"
                />
                <button className="sr-only" type="submit"></button>
              </form>
            </div>
            {/* Feed Input Options */}
            <div className="flex justify-between">
              <InputFeed Icon={MdOutlineLiveHelp} title="Ask" />
              <hr/>
              <InputFeed Icon={HiOutlinePencilAlt} title="Answer" />
              <hr />
              <InputFeed Icon={HiOutlinePencil} title="Post" />
              <hr />
            </div>
          </div>
        </div>
      </section>
      <Post
        name="Trex"
        message="Test"
        description="this is a test"
        photoUrl=""
      />
    </main>
  );
}

export default Feed;
