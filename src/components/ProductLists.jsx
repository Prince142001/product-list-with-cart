import ProductListsData from "../data.json";
import addToCartSvg from "../assets/icon-add-to-cart.svg";
import incrementSvg from "../assets/icon-increment-quantity.svg";
import decrementSvg from "../assets/icon-decrement-quantity.svg";

function ProductLists({ productCounts, setProductCounts }) {
  const incrementCount = (index) => {
    const updatedCounts = [...productCounts];
    updatedCounts[index]++;
    setProductCounts(updatedCounts);
  };

  const decrementCount = (index) => {
    const updatedCounts = [...productCounts];
    if (updatedCounts[index] > 0) updatedCounts[index]--;
    setProductCounts(updatedCounts);
  };

  return (
    <>
      <h2 className="text-[#260f08] text-3xl font-bold capitalize mb-6">
        deserts
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {ProductListsData.map((data, index) => (
          <li key={index} className="group">
            <div className="relative rounded-lg group-hover:ring-2 group-hover:ring-[#c73a0f] transition-all">
              <picture className="w-full">
                <source media="(max-width: 767px)" srcSet={data.image.mobile} />
                <source
                  media="(max-width: 1023px)"
                  srcSet={data.image.tablet}
                />
                <source
                  media="(min-width: 1024px)"
                  srcSet={data.image.desktop}
                />
                <img
                  src={data.image.desktop}
                  alt={data.name}
                  className="w-full object-cover rounded-lg"
                />
              </picture>

              <div className="group-hover:hidden flex items-center justify-center gap-2 w-[65%] py-2.5 px-7 border-2 border-[#c9aea6] rounded-full bg-white absolute left-1/2 -bottom-5 -translate-x-1/2 transition-all">
                <img src={addToCartSvg} alt="Add to cart" />
                <p className="text-sm font-semibold">Add to Cart</p>
              </div>

              <div className="hidden group-hover:flex justify-between items-center gap-1 w-[65%] py-2.5 px-4 border-2 border-[#c73a0f] rounded-full bg-[#c73a0f] absolute left-1/2 -bottom-5 -translate-x-1/2 transition-all">
                <button
                  onClick={() => decrementCount(index)}
                  className="flex items-center justify-center border-2 border-white p-1 w-[18px] h-[18px] rounded-full cursor-pointer"
                >
                  <img
                    src={decrementSvg}
                    alt="Decrement"
                    className="w-full h-full object-contain"
                  />
                </button>
                <span className="text-white text-base font-medium">
                  {productCounts[index]}
                </span>
                <button
                  onClick={() => incrementCount(index)}
                  className="flex items-center justify-center border-2 border-white p-1 w-[18px] h-[18px] rounded-full cursor-pointer"
                >
                  <img
                    src={incrementSvg}
                    alt="Increment"
                    className="w-full h-full object-cover"
                  />
                </button>
              </div>
            </div>

            <div className="mt-9">
              <h3 className="text-[#c9aea6] text-sm font-normal">
                {data.category}
              </h3>
              <h2 className="text-lg font-medium">{data.name}</h2>
              <p className="text-lg font-semibold text-[#c73a0f]">
                ${data.price}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductLists;
