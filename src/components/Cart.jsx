import { useState } from "react";
import emptyCartImage from "../assets/illustration-empty-cart.svg";
import removeProductFromCartSvg from "../assets/icon-remove-item.svg";
import carbonNeutralSvg from "../assets/icon-carbon-neutral.svg";
import ProductListsData from "../data.json";
import OrderConfirmed from "./OrderConfirmed";

function Cart({ productCounts, setProductCounts }) {
  const isCartEmpty = productCounts.every((count) => count === 0);
  const totalItems = productCounts.reduce((sum, val) => sum + val, 0);

  const removeProductFromCartFunction = (index) => {
    const updateCounts = [...productCounts];
    updateCounts[index] = 0;
    setProductCounts(updateCounts);
  };

  const totalAmount = ProductListsData.reduce((sum, item, index) => {
    return sum + productCounts[index] * item.price;
  }, 0);

  const [confirmOrder, setConfirmOrder] = useState(false);

  return (
    <div className="bg-white rounded-xl overflow-hidden p-6 mb-10">
      <h2 className="text-2xl font-bold text-[#c73a0f] capitalize">
        your cart({totalItems})
      </h2>
      {isCartEmpty ? (
        <div className="text-center mt-4">
          <figure>
            <img
              src={emptyCartImage}
              alt="Empty cart"
              className="mx-auto w-1/2"
            />
          </figure>
          <h3 className="mt-4 text-[#ad8985] font-medium text-base">
            Your added item will appear here
          </h3>
        </div>
      ) : (
        <div className="mt-4">
          <ul>
            {ProductListsData.map((data, index) => {
              if (productCounts[index] > 0) {
                return (
                  <li
                    className="flex border-b-[0.8px] border-[#e2dddc] py-4"
                    key={index}
                  >
                    <div className="w-10/12">
                      <h3 className="text-lg font-semibold text-[#260f08]">
                        {data.name}
                      </h3>
                      <div className="flex">
                        <p className="text-base font-semibold text-[#c73a0f]">
                          {productCounts[index]}x
                        </p>
                        <p className="ml-4.5 text-base font-normal text-[#ad8985]">
                          @{data.price}
                        </p>
                        <p className="ml-2.5 text-base font-semibold text-[#87635a]">
                          ${productCounts[index] * data.price}
                        </p>
                      </div>
                    </div>
                    <div className="w-2/12 flex items-center justify-center">
                      <button
                        className="flex items-center justify-center border-2 border-[#ad8985] p-1 w-[20px] h-[20px] rounded-full cursor-pointer"
                        onClick={() => removeProductFromCartFunction(index)}
                      >
                        <img src={removeProductFromCartSvg} alt="" />
                      </button>
                    </div>
                  </li>
                );
              }
              return null;
            })}
          </ul>
          <div className="flex items-center justify-between my-8">
            <h2 className="text-lg font-medium text-[#87635a] capitalize">
              order total
            </h2>
            <p className="text-2xl font-bold text-[#260f08]">
              ${totalAmount.toFixed(2)}
            </p>
          </div>
          <div className="flex items-center justify-center gap-x-1.5 py-5 bg-[#fcf8f5] rounded-md overflow-hidden">
            <img src={carbonNeutralSvg} alt="Carbon neutral" />
            <p className="text-base font-medium text-[#87635a]">
              This is a{" "}
              <span className="font-semibold text-[#260f08]">
                Carbon-neutral
              </span>{" "}
              delivery
            </p>
          </div>

          <button
            onClick={() => setConfirmOrder(true)}
            className="text-center text-base font-semibold text-white bg-[#c73a0f] rounded-full w-full py-4 my-6 capitalize hover:bg-[#992b0a] transition-colors cursor-pointer"
          >
            confirm order
          </button>
          {confirmOrder && (
            <OrderConfirmed
              productCounts={productCounts}
              setProductCounts={setProductCounts}
              setConfirmOrder={setConfirmOrder}
            />
          )}
        </div>
      )}
    </div>
  );
}
export default Cart;
