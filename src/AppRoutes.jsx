import React, {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import {useDispatch} from "react-redux";
import {getItemsAsyncFromAxios} from "./redux/items/actionCreators";
import FavouritePages from "./pages/FavouritePages/FavouritePages";
import {getFavouriteFromLocalStorage} from "./redux/favourite/actionCreators";
import ModalContainer from "./components/ModalContainer/ModalContainer";
import CartPages from "./pages/CartPages/CartPages";
import {getItemsForCounterFromLocalStorage} from "./redux/cart/actionCreators";

const AppRoutes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItemsAsyncFromAxios());
    dispatch(getFavouriteFromLocalStorage());
    dispatch(getItemsForCounterFromLocalStorage());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/favourite" element={<FavouritePages />} />
        <Route path="/cart" element={<CartPages />} />
      </Routes>
      <ModalContainer />
    </>
  );
};

export default AppRoutes;
