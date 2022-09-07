import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./common/header/Header";
import Pages from "./pages/Pages";
import Data from "./components/Data";
import { useState } from "react";
import Cart from "./common/Cart/Cart";
import Sdata from "./components/shops/Sdata";
import AuthContext from "./context/AuthContext";

function App() {
  const { productItems } = Data;
  const { shopItems } = Sdata;
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)));
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }]);
    }
  };

  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);

    if (productExit.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)));
    }
  };

  const contextValueObject = {
    cartItem,
    addToCart,
    productItems,
    shopItems,
    decreaseQty
  };
  return (
    <>
      <Router>
        <AuthContext.Provider value={contextValueObject}>
          <Header />
          <Switch>
            <Route path='/' exact>
              <Pages />
            </Route>
            <Route path='/cart' exact>
              <Cart  />
            </Route>
          </Switch>
        </AuthContext.Provider>
      </Router>
    </>
  );
}

export default App;
