const Cart = ({ selectedProduct }) => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">Shopping Cart</h1>

        {selectedProduct.map((elem) => (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 ga">
            {/* Cart Items */}
            <div className="space-y-5 lg:col-span-2">
              {/* Product */}
              <div className="flex flex-col gap-5 rounded-xl bg-white p-5 shadow-sm sm:flex-row sm:items-center">
                <div className="flex h-32 items-center justify-center rounded-lg bg-gray-50 p-3 sm:w-32">
                  <img
                    src={elem?.image}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="flex-1">
                  <p className="mb-2 text-sm text-orange-500">
                    {elem?.category}
                  </p>

                  <h2 className="text-lg font-semibold text-gray-800">
                    {elem?.title}
                  </h2>

                  <p className="mt-2 text-xl font-bold text-gray-900">
                    ${elem?.price}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <button className="h-8 w-8 rounded border">−</button>
                    <span>1</span>
                    <button className="h-8 w-8 rounded border">+</button>
                  </div>

                  <button className="text-sm text-red-500">Remove</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
