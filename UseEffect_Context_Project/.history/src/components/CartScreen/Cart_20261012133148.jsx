const Cart = ({ selectedProduct }) => {
    console.log(object)
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-6xl flex flex-col gap-4">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">Shopping Cart</h1>

        {selectedProduct.map((elem) => (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
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
        {/* Order Summary */}
        <div className="h-fit rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-bold text-gray-800">
            Order Summary
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between text-gray-500">
              <span>Subtotal</span>
              <span className="font-medium text-gray-800">$154.55</span>
            </div>

            <div className="flex justify-between text-gray-500">
              <span>Shipping</span>
              <span className="font-medium text-green-600">Free</span>
            </div>

            <div className="flex justify-between text-gray-500">
              <span>Tax</span>
              <span className="font-medium text-gray-800">$0.00</span>
            </div>
          </div>

          <div className="my-5 border-t" />

          <div className="flex justify-between">
            <span className="text-lg font-bold text-gray-800">Total</span>

            <span className="text-xl font-bold text-orange-500">$154.55</span>
          </div>

          <button className="mt-6 w-full rounded-lg bg-orange-500 py-3 font-semibold text-white hover:bg-orange-600">
            Proceed to Checkout
          </button>

          <button className="mt-4 w-full text-sm text-gray-500 hover:text-orange-500">
            ← Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
