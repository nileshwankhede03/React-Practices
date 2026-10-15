import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProductDetail = () => {
  let { id } = useParams();

  const [singleSelectedData, setSingleSelectedData] = useState(null);
  console.log(singleSelectedData);

  const getSingleProductData = async () => {
    try {
      let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setSingleSelectedData(res.data);
    } catch (error) {
      console.log('error is product detail : ', error);
    }
  };

  useEffect(() => {
    getSingleProductData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 px-4 py-10">
      <div className="mx-auto max-w-6xl rounded-2xl bg-white p-6 shadow-sm md:p-10">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          {/* Product Image */}
          <div className="flex h-80 items-center justify-center rounded-xl bg-gray-50 p-8 md:h-[450px]">
            <img
              src={singleSelectedData?.image}
              alt={singleSelectedData?.title}
              className="h-full w-full object-contain"
            />
          </div>

          {/* singleSelectedData Information */}
          <div className="space-y-5">
            <span className="inline-block rounded-full bg-orange-100 px-4 py-1.5 text-sm font-medium capitalize text-orange-600">
              {singleSelectedData?.category}
            </span>

            <h1 className="text-2xl font-bold leading-relaxed text-gray-900 md:text-3xl">
              {singleSelectedData?.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <span className="text-xl text-yellow-500">★</span>

              <span className="font-semibold text-gray-800">
                {singleSelectedData?.rating?.rate}
              </span>

              <span className="text-sm text-gray-500">
                ({singleSelectedData?.rating?.count} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="border-y border-gray-100 py-5">
              <p className="text-3xl font-bold text-orange-500">
                ${Number(singleSelectedData?.price).toFixed(2)}
              </p>

              <p className="mt-2 text-sm text-green-600">In stock</p>
            </div>

            {/* Description */}
            <div>
              <h2 className="mb-2 text-lg font-semibold text-gray-800">
                Description
              </h2>

              <p className="text-sm leading-7 text-gray-500">
                {singleSelectedData?.description}
              </p>
            </div>

            {/* Quantity UI */}
            <div>
              <p className="mb-3 text-sm font-semibold text-gray-700">
                Quantity
              </p>

              <div className="flex items-center gap-4">
                <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-xl hover:bg-gray-100">
                  −
                </button>

                <span className="text-lg font-semibold">1</span>

                <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-xl hover:bg-gray-100">
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 pt-3 sm:flex-row">
              <button className="flex-1 rounded-xl bg-orange-500 px-6 py-3.5 font-semibold text-white transition hover:bg-orange-600">
                Add to Cart
              </button>

              <button className="flex-1 rounded-xl border border-gray-300 px-6 py-3.5 font-semibold text-gray-700 transition hover:bg-gray-50">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
