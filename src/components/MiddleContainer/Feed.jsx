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
          <Avatar src="https://reliable-crumble-7d9de0.netlify.app/IMG_20230401_003850_727.jpg" />
          <div className="flex-col w-full">
            {/* Feed Input */}
            <div className=" flex border border-neutral-200 rounded-full mb-2 bg-neutral-50">
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
              <hr />
              <InputFeed Icon={HiOutlinePencilAlt} title="Answer" />
              <hr />
              <InputFeed Icon={HiOutlinePencil} title="Post" />
              <hr />
            </div>
          </div>
        </div>
      </section>
      <Post
        name="Yaazushi Gupta"
        description="Future Life Coach"
        photoUrl=""
        question="How has your life changed after one incident which you were always afraid of?"
        message="Thank you for A2A.

        I was doing my B.tech.. I used to live in Jaipur, away from my family. I belong to a middle class family. Moved to a city from a small town with big aspirations but after seeing failure at IIT JEE, I had lost all hopes in myself. I was a topper in my school but during college, things changed. I was always spending time talkin’ on phone and having timepas in hostel and study during semester exams only to pass the exams.
        
        My father took an educational loan for my studies, but I didn't care, because I was so hopeless. I considered myself a waste already. But it was 3rd year which changed my life. My father lost his job. He told me he has no money to continue with my college expenses, and I might drop out. That incident changed me completely. I was so scared to drop out of college after coming halfway, I started studying properly. I managed to get few tuitions to manage my expenses. It was one year to prepare for college placements. I used to get up at 4 am and no fix time for sleeping. College, then taking tuitions, then studies (all 3 years course at once because I never studied before), and internship. But hard work pays off. I cracked the interviews and got placed in two biggies - Infosys and Cognizant, got interview calls from many.
        
        I was always scared of my family end up being poor but it changed me to a capable daughter :)"
      />
    </main>
  );
}

export default Feed;
