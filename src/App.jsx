import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import BagPage from "./pages/BagPage";
import AccountPage from "./pages/AccountPage";
import ProductDetails from "./components/product/ProductDetails";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

export const AppContext = React.createContext();

const App = () => {
  const storedBagItems = JSON.parse(localStorage.getItem("bagItems")) || [];
  const [bagCount, setBagCount] = useState(storedBagItems.length);

  const initialBagItems = storedBagItems.map((item) => ({
    ...item,
    quantity: item.quantity || 1,
  }));

  const [bagItems, setBagItems] = useState(initialBagItems);

  const removeItemFromBag = (itemId) => {
    setBagItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const increaseBagItemQuantity = (id) => {
    setBagItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 0) + 1 } : item
      );
    });
  };

  const decreaseBagItemQuantity = (id) => {
    setBagItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === id && (item.quantity || 0) > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  useEffect(() => {
    const totalCount = bagItems.reduce((count, item) => count + (item.quantity || 1), 0);
    setBagCount(totalCount);

    localStorage.setItem("bagItems", JSON.stringify(bagItems));
  }, [bagItems, setBagCount]);

  const contextValue = {
    bagCount,
    setBagCount,
    bagItems,
    setBagItems,
    removeItemFromBag,
    increaseBagItemQuantity,
    decreaseBagItemQuantity,
  };


  return (
    <AppContext.Provider value={contextValue}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/Account" element={<AccountPage />} />
          <Route path="/Bag" element={<BagPage />} />
          <Route path="/details/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </Router>
    </AppContext.Provider>
  );
};

export default App;
