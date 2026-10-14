import React from 'react'

const Cart = () => {
  return (
    <div>
<section class="min-h-screen bg-gray-100 px-4 py-10">
  <div class="mx-auto max-w-6xl">

    <!-- Heading -->
    <h1 class="mb-8 text-3xl font-bold text-gray-800">
      Shopping Cart
    </h1>

    <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">

      <!-- Cart Items -->
      <div class="space-y-5 lg:col-span-2">

        <!-- Product 1 -->
        <div class="flex flex-col gap-5 rounded-xl bg-white p-5 shadow-sm sm:flex-row sm:items-center">

          <div class="flex h-32 w-full items-center justify-center rounded-lg bg-gray-50 p-3 sm:w-32 sm:shrink-0">
            <img
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
              alt="Backpack"
              class="h-full w-full object-contain"
            />
          </div>

          <div class="flex-1">
            <h2 class="text-lg font-semibold text-gray-800">
              Fjallraven Backpack
            </h2>

            <p class="mt-1 text-sm text-gray-500">
              Category: Men's Clothing
            </p>

            <p class="mt-3 text-xl font-bold text-orange-500">
              $109.95
            </p>
          </div>

          <div class="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
            <div class="flex items-center gap-3">
              <button class="flex h-8 w-8 items-center justify-center rounded border hover:bg-gray-100">
                -
              </button>

              <span class="font-medium">1</span>

              <button class="flex h-8 w-8 items-center justify-center rounded border hover:bg-gray-100">
                +
              </button>
            </div>

            <button class="text-sm font-medium text-red-500 hover:text-red-700">
              Remove
            </button>
          </div>
        </div>

        <!-- Product 2 -->
        <div class="flex flex-col gap-5 rounded-xl bg-white p-5 shadow-sm sm:flex-row sm:items-center">

          <div class="flex h-32 w-full items-center justify-center rounded-lg bg-gray-50 p-3 sm:w-32 sm:shrink-0">
            <img
              src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX_SY._UY_t.png"
              alt="T-shirt"
              class="h-full w-full object-contain"
            />
          </div>

          <div class="flex-1">
            <h2 class="text-lg font-semibold text-gray-800">
              Men's Casual T-Shirt
            </h2>

            <p class="mt-1 text-sm text-gray-500">
              Category: Men's Clothing
            </p>

            <p class="mt-3 text-xl font-bold text-orange-500">
              $22.30
            </p>
          </div>

          <div class="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
            <div class="flex items-center gap-3">
              <button class="flex h-8 w-8 items-center justify-center rounded border hover:bg-gray-100">
                -
              </button>

              <span class="font-medium">2</span>

              <button class="flex h-8 w-8 items-center justify-center rounded border hover:bg-gray-100">
                +
              </button>
            </div>

            <button class="text-sm font-medium text-red-500 hover:text-red-700">
              Remove
            </button>
          </div>
        </div>

      </div>

      <!-- Order Summary -->
      <div class="h-fit rounded-xl bg-white p-6 shadow-sm">
        <h2 class="mb-5 text-xl font-bold text-gray-800">
          Order Summary
        </h2>

        <div class="space-y-4 text-sm">
          <div class="flex justify-between">
            <span class="text-gray-500">Subtotal</span>
            <span class="font-medium">$154.55</span>
          </div>

          <div class="flex justify-between">
            <span class="text-gray-500">Shipping</span>
            <span class="font-medium text-green-600">Free</span>
          </div>

          <div class="flex justify-between">
            <span class="text-gray-500">Tax</span>
            <span class="font-medium">$0.00</span>
          </div>
        </div>

        <div class="my-5 border-t"></div>

        <div class="flex justify-between">
          <span class="text-lg font-bold text-gray-800">
            Total
          </span>

          <span class="text-xl font-bold text-orange-500">
            $154.55
          </span>
        </div>

        <button class="mt-6 w-full rounded-lg bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600">
          Proceed to Checkout
        </button>

        <a
          href="/"
          class="mt-4 block text-center text-sm text-gray-500 hover:text-orange-500"
        >
          ← Continue Shopping
        </a>
      </div>

    </div>
  </div>
</section>
)
}

export default Cart
