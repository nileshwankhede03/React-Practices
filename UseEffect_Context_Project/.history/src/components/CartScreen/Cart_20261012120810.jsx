const Cart = ({ cart, setCart }) => {
  const increaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <div className="mb-4 text-6xl">🛒</div>

        <h2 className="text-2xl font-bold text-gray-800">Your Cart is Empty</h2>

        <p className="mt-2 text-gray-500">
          Add some products to see them here.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">
          Shopping Cart ({cart.length})
        </h1>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
          {/* Cart Products */}
          <div className="space-y-5 lg:col-span-2">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-5 rounded-xl bg-white p-5 shadow-sm sm:flex-row sm:items-center"
              >
                <div className="flex h-32 w-full shrink-0 items-center justify-center rounded-lg bg-gray-50 p-3 sm:w-32">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="mb-2 text-xs capitalize text-orange-500">
                    {item.category}
                  </p>

                  <h2 className="line-clamp-2 font-semibold text-gray-800">
                    {item.title}
                  </h2>

                  <p className="mt-3 text-xl font-bold text-gray-900">
                    ${item.price.toFixed(2)}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="h-8 w-8 rounded border hover:bg-gray-100"
                    >
                      −
                    </button>

                    <span className="font-medium">{item.quantity}</span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="h-8 w-8 rounded border hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-sm font-medium text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-bold text-gray-800">
              Order Summary
            </h2>

            <div className="flex justify-between text-gray-500">
              <span>Subtotal</span>
              <span className="font-medium text-gray-800">
                ${total.toFixed(2)}
              </span>
            </div>

            <div className="mt-4 flex justify-between">
              <span className="text-gray-500">Shipping</span>
              <span className="font-medium text-green-600">Free</span>
            </div>

            <div className="my-5 border-t" />

            <div className="flex justify-between">
              <span className="text-lg font-bold">Total</span>
              <span className="text-xl font-bold text-orange-500">
                ${total.toFixed(2)}
              </span>
            </div>

            <button className="mt-6 w-full rounded-lg bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
