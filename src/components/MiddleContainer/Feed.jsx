import Post from './Post';
import InputFeed from './InputFeed';
import { MdOutlineLiveHelp } from 'react-icons/md';
import { HiOutlinePencilAlt, HiOutlinePencil } from 'react-icons/hi';
import Avatar from '@mui/material/Avatar';

import { useEffect, useState } from 'react';
import { db } from '../../firebase';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts')
      .orderBy('timeStamp', 'desc')
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || '',
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput('');
  };

  return (
    // Feed
    <main className="w-1/2 pb-5">
      {/* Feed Input Container */}
      <section className=" p-3 mb-5 mt-4 border rounded shadow-sm bg-white">
        <div className="flex gap-x-2">
          <Avatar className="headerOption__Icon" src={user?.photoUrl}>
            {user?.displayName[0].toUpperCase()}
          </Avatar>
          <div className="flex-col w-full">
            {/* Feed Input */}
            <div className=" flex border border-neutral-200 rounded-full mb-2 bg-neutral-50">
              <form className="flex w-full">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 ml-3 py-[3px] font-normal text-lg border-0 outline-0 bg-transparent"
                  type="text"
                  placeholder="What do you want to ask or share?"
                />
                <button onClick={sendPost} className="sr-only" type="submit">
                  Send
                </button>
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
      {posts.map(
        ({ id, data: { name, description, question, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            question={question}
            message={message}
            photoUrl={photoUrl}
          />
        )
      )}
    </main>
  );
}

export default Feed;
