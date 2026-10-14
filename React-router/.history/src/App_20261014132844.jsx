import AppRoutes from './routes/AppRoutes.jsx';
import Navbar from './Components/Navbar.jsx';
const App = () => {
  return (
    <div className="h-screen bg-gray-300 p-3">
      <Navbar />
      <AppRoutes />
    </div>
  );
};

export default App;
