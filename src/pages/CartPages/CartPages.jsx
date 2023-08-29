import React, {useEffect} from "react";
import {getItemsFromLocalStorage} from "../../utils/localStorageHelper";
import Item from "../../components/Item/Item";
import styles from "./CartPages.module.scss";
import classNames from "classnames";
import {useSelector} from "react-redux";

const CartPages = () => {
  const cartItems = useSelector((state) => state.cart?.cart);

  return (
    <section className={classNames(styles.container)}>
      {cartItems.map(({name, id, description, price, url, color}) => (
        <Item
          key={id}
          id={id}
          url={url}
          title={name}
          description={description}
          price={price}
          color={color}
          closeButton={true}
        />
      ))}
    </section>
  );
};

export default CartPages;
