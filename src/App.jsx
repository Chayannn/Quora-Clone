import Header from './components/Header/Header';
import Feed from './components/MiddleContainer/Feed';

export default function App() {
  return (
    <div className="flex flex-col bg-gray-100">
      <Header />
      <Feed/>
    </div>
  );
}
