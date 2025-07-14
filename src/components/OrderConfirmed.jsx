import ProductListsData from "../data.json";
import orderConfirmedSvg from "../assets/icon-order-confirmed.svg";

function OrderConfirmed({ productCounts, setProductCounts, setConfirmOrder }) {
  const totalAmount = ProductListsData.reduce((sum, item, index) => {
    return sum + productCounts[index] * item.price;
  }, 0);
  const visibleItems = ProductListsData.filter(
    (_, index) => productCounts[index] > 0
  );
  const dynamicHeightClass =
    visibleItems.length > 2 ? "h-[361.58px]" : "h-full";

  return (
    <div className="w-dvw h-dvh bg-[#00000047] overflow-hidden fixed top-0 left-0 flex items-end md:items-center justify-center">
      <div className="w-full lg:w-xl bg-white rounded-t-xl lg:rounded-xl overflow-hidden px-6 md:px-10 py-8 lg:py-12">
        <figure>
          <img src={orderConfirmedSvg} alt="Order confirmed" />
        </figure>
        <h2 className="mt-7 text-4xl font-bold text-[#260f08] capitalize">
          order confirmed
        </h2>
        <p className="mt-2 text-base font-normal text-[#ad8985]">
          We hope you enjoy your food!
        </p>
        <ul
          className={`bg-[#fcf8f5] w-full ${dynamicHeightClass} p-6 mt-6 rounded-md overflow-x-hidden overflow-y-auto`}
        >
          {ProductListsData.map((data, index) => {
            //   console.log(index);
            if (productCounts[index] > 0) {
              return (
                <li
                  key={index}
                  className="flex justify-between items-center border-b-[0.8px] border-[#e2dddc] pb-5"
                >
                  <div className="flex gap-2.5">
                    <figure className="w-20 h-20 overflow-hidden rounded-md">
                      <img
                        className="w-full h-full object-cover"
                        src={data.image.desktop}
                        alt={data.name}
                      />
                    </figure>
                    <div className="flex flex-col items-start">
                      <h3>{data.name}</h3>
                      <div className="flex gap-1">
                        <p className="text-base font-semibold text-[#c73a0f]">
                          {productCounts[index]}x
                        </p>
                        <p className="ml-4.5 text-base font-normal text-[#ad8985]">
                          @ <span className="font-medium">${data.price}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="ml-2.5 text-base font-semibold text-[#87635a]">
                    ${productCounts[index] * data.price}
                  </p>
                </li>
              );
            }
          })}
          <div className="flex items-center justify-between mt-6">
            <h2 className="text-lg font-medium text-[#87635a] capitalize">
              order total
            </h2>
            <p className="text-2xl font-bold text-[#260f08]">
              ${totalAmount.toFixed(2)}
            </p>
          </div>
        </ul>
        <button
          onClick={() => {
            setProductCounts(productCounts.map(() => 0));
            setConfirmOrder(false);
          }}
          className="text-center text-base font-semibold text-white bg-[#c73a0f] rounded-full w-full py-4 mt-6 lg:my-6 capitalize cursor-pointer"
        >
          start new order
        </button>
      </div>
    </div>
  );
}

export default OrderConfirmed;
