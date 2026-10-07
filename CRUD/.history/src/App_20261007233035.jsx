import Navbar from './components/Navbar';
import Form from './components/Form';
import UserCard from './components/UserCard';
import { useState } from 'react';

const App = () => {
  const [product, setProduct] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="max-w-xl mx-auto mb-12">
          <Form setProduct={setProduct} />
        </div>

        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Users</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <UserCard />
            <UserCard />
            <UserCard />
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
