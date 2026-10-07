import { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({});
  const [product, setProduct] = useState([]);
  console.log('FormData -> ', formData);

  const handleChange = (e) => {
    // console.log(e);
    let { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setProduct([...product, formData]);

    setFormData({
      name: '',
      price: '',
      email: '',
      image:'',
  });

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add User</h2>

      <form onSubmit={handleFormSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>

          <input
            onChange={handleChange}
            value={formData?.name}
            name="name"
            type="text"
            placeholder="Enter name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price
          </label>

          <input
            onChange={handleChange}
            value={formData?.price}
            name="price"
            type="number"
            placeholder="Enter price"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>

          <input
            onChange={handleChange}
            name="email"
            value={formData?.email}
            type="email"
            placeholder="Enter email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Image URL
          </label>

          <input
            onChange={handleChange}
            value={formData?.image}
            name="image"
            type="text"
            placeholder="Enter image URL"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default  default Form;
