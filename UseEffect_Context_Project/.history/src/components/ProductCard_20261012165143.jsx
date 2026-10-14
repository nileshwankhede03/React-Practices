const ProductCard = ({
  product,
  setSelectedProduct,
  isInCart,
}) => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
      <div className="flex h-64 items-center justify-center bg-gray-50 p-5">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="space-y-3 p-5">
        <p className="text-sm capitalize text-orange-500">{product.category}</p>

        <h2 className="line-clamp-1 text-lg font-semibold text-gray-800">
          {product.title}
        </h2>

        <p className="line-clamp-2 text-sm text-gray-500">
          {product.description}
        </p>

        <div className="flex items-center gap-2">
          <span className="text-yellow-500">★</span>
          <span className="text-sm font-medium">{product.rating?.rate}</span>
          <span className="text-sm text-gray-400">
            ({product.rating?.count} reviews)
          </span>
        </div>

        <div className="flex items-center justify-between border-t pt-4">
          <p className="text-2xl font-bold text-gray-900">${product.price}</p>

          {isInCart ? (
            <div className="flex items-center gap-3">
              <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 text-lg font-medium text-gray-700 transition hover:bg-orange-500 hover:text-white">
                −
              </button>

              <span className="min-w-6 text-center text-base font-semibold text-gray-800">
                1
              </span>

              <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 text-lg font-medium text-gray-700 transition hover:bg-orange-500 hover:text-white">
                +
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                setSelectedProduct((prev) => [...prev, product]);
              }}
              className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-600"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
