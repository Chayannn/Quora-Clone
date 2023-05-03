import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../../firebase';
import { login } from '../../features/userSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const dispatch = useDispatch();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const userAuth = await auth.signInWithEmailAndPassword(email, password);

      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          profilePic: userAuth.user.photoURL,
        })
      );
    } catch (error) {
      alert(error);
    }
  };

  const registerHandler = async () => {
    if (!name) {
      return alert('Please enter a full name!');
    }

    try {
      const userAuth = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await userAuth.user.updateProfile({
        displayName: name,
        photoURL: profilePic,
      });

      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          profilePic: userAuth.user.photoURL,
        })
      );
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    // Login
    <div className="grid place-items-center h-screen">
      <div className="bg-white p-8 rounded shadow-lg">
        <div className="flex flex-col items-center pb-5">
          <img
            className="object-contain h-16 my-5"
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Quora_logo_2015.svg"
            alt="Quora main logo"
          />
          <p className="text-[#636466] font-bold">
            A place to share knowledge and better understand the world
          </p>
        </div>

        <form className="flex flex-col login">
          <input
            placeholder="Your Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Profile pic URL (optional)"
            type="text"
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
          />

          <input
            placeholder="Your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Your password"
            type="password"
            autoComplete=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={loginHandler}
            className="w-[365px] h-[50px] text-lg rounded-md border-0 text-white bg-[#2e69ff]">
            Login
          </button>
        </form>

        <p className="mt-5">
          Not a member?{' '}
          <span
            className="text-blue-800 cursor-pointer"
            onClick={registerHandler}>
            Register Now
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
