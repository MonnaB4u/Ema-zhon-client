import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Shipment from './components/Shipment/Shipment';
import { createContext } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Admin from './components/Admin/Admin';
import AddProduct from './components/Admin/AddProduct/AddProduct';
import OrderList from './components/Admin/OrderList/OrderList';
import LoginMain from './components/Login/LoginMain';
import Sucess from './components/Sucess/Sucess';

export const UserContext = createContext();

function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      {/* <Header></Header> */}
        <Switch>
       
          <Route path="/shop"> <Shop></Shop> </Route>
          <Route path="/review"> <Review></Review> </Route>
          <Route path="/inventory"> <Inventory></Inventory> </Route>
          <Route path="/login">  <LoginMain></LoginMain> </Route>
          <Route path="/shipment">  <Shipment></Shipment> </Route>
          <Route exact path="/">  <Shop></Shop> </Route>
          <Route path="/product/:productKey"> <ProductDetail></ProductDetail> </Route>
          <Route path="/admin"><Admin></Admin> </Route>
          <Route path="/addProduct"><AddProduct></AddProduct> </Route>
          <Route path="/orderList"> <OrderList></OrderList> </Route>
          <Route path="/sucess"> <Sucess></Sucess> </Route>
          <Route path="*"> <NotFound></NotFound> </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;