import { Outlet, useNavigate } from 'react-router';

const Home = () => {
  const navigate = useNavigate();
  console.log(navigate);
  return (
    <div>
      <h1>Hey I Am Home </h1>
      <div>
        <button
          onClick={() => navigate('/cources')}
          className="px-3 py-2 bg-blue-500 rounded-xl text-white"
        >
          dabaoo
        </button>
      </div>

      <Outlet />
    </div>
  );
};

export default Home;
