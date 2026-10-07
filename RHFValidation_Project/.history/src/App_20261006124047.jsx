import Navbar from './components/Navbar.jsx';
import UserCard from './components/UserCard.jsx';

const App = () => {
  return (
    <div className="p-3 h-screen bg-gray-700">
      <Navbar />
      <UserCard />
    </div>
  );
};

export default App;
