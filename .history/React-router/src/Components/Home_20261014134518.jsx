import { Outlet, useNavigate } from 'react-router';

const Home = () => {
  return (
    <div>
      <h1>Hey I Am Home </h1>
      <div>
        <button onClick={()=> } className="px-3 py-2 bg-blue-500 rounded-xl text-white">
          dabaoo
        </button>
      </div>

      <Outlet />
    </div>
  );
};

export default Home;
