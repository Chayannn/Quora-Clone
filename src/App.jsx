import Header from './components/Header/Header';
import Feed from './components/MiddleContainer/Feed';
import AdContainer from './components/Right_Sidebar/AdContainer';
import SideBar from './components/SideBar/SideBar';

export default function App() {
  return (
    <div className="flex flex-col justify-evenly bg-neutral-100">
      <Header />
      <div className="flex flex-grow-0 mx-20  mt-1 mb-52">
        <SideBar />
        <Feed />
        <AdContainer />
      </div>
    </div>
  );
}
