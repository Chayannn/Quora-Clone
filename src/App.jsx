import Header from './components/Header/Header';
import Feed from './components/MiddleContainer/Feed';
import SideBar from './components/SideBar/SideBar';

export default function App() {
  return (
    <div className="flex flex-col justify-evenly bg-gray-100">
      <Header />
      <div className="flex ml-20 mr-5 mt-1 mb-52 max-w-7xl">
        <SideBar />
        <Feed />
      </div>
    </div>
  );
}
