import "./App.css";
import "./index.css";
import ProductListsData from "./data.json";
import Cart from "./components/Cart";
import ProductLists from "./components/ProductLists";
import { useState } from "react";

function App() {
  const [productCounts, setProductCounts] = useState(
    ProductListsData.map(() => 0)
  );
  const [confirmOrder, setConfirmOrder] = useState(false);

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8 py-6">
        <div className="w-full lg:w-4/6">
          <ProductLists
            productCounts={productCounts}
            setProductCounts={setProductCounts}
          />
        </div>
        <div className="w-full lg:w-2/6">
          <Cart
            productCounts={productCounts}
            setProductCounts={setProductCounts}
            confirmOrder={confirmOrder}
            setConfirmOrder={setConfirmOrder}
          />
        </div>
      </div>
    </>
  );
}

export default App;
