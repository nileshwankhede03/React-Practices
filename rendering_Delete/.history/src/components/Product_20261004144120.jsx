const Product = ({ product }) => {
  console.log(product);
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <img
        src="https://picsum.photos/seed/tabletstand/400/300"
        alt="pics"
        className="h-56 w-full object-cover"
      />

      {/* Content */}
      <div className="p-5">
        <h2 className="mb-2 text-xl font-bold text-gray-800">Tablet Stand</h2>

        <p className="mb-4 text-sm leading-6 text-gray-500">
          Foldable aluminum tablet stand with adjustable viewing angles.
        </p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">₹649</span>

          <button className="rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
