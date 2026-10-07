const UserCard = ({ product, handleDelete }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
      <img
        src={product?.image}
        alt="User"
        className="w-full h-52 object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800">{product?.name}</h2>

        <p className="text-gray-500 mt-1">{product?.email}</p>

        <p className="text-lg font-bold text-green-600 mt-3">
          ₹{product?.price}
        </p>

        <div className="flex gap-3 mt-5">
          <button
            onClick={() => {
              handleEdit(product.id);
            }}
            className="flex-1 bg-blue-600 text-white py-2 rounded-lg
            hover:bg-blue-700"
          >
            Edit
          </button>

          <button
            onClick={() => {
              handleDelete(product.id);
            }}
            className="flex-1 bg-red-500 text-white py-2 rounded-lg
            hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
