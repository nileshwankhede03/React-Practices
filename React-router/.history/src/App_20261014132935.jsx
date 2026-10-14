import AppRoutes from './routes/AppRoutes.jsx';
import Navbar from './Components/Navbar.jsx';
const App = () => {
  return (
    <div className="h-screen bg-gray-300 p-3">
      <Navbar />
      <div className='flex items-center jus'>
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
