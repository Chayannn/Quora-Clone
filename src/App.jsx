import Header from './components/Header/Header';
import Feed from './components/MiddleContainer/Feed';
import AdContainer from './components/Right_Sidebar/AdContainer';
import SideBar from './components/SideBar/SideBar';
import Login from './components/Login/Login';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { useEffect } from 'react';
import { auth } from './firebase';

export default function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    // eslint-disable-next-line
  }, []);
  return (
    <div className=''>
      {!user ? (
        <Login />
      ) : (
        <div className="flex flex-col justify-evenly bg-neutral-100">
          <Header />

          <div className="flex flex-grow-0 mx-20  mt-1 mb-52">
            <SideBar />
            <Feed />
            <AdContainer />
          </div>
        </div>
      )}
    </div>
  );
}
