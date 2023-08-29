import React from "react";
import Item from "../Item/Item";
import styles from "./ItemsContainer.module.scss";
import {useSelector} from "react-redux";

const ItemsContainer = () => {
  const items = useSelector((state) => state.items.items);

  return (
    <div className={styles.container}>
      {items.map(({name, id, description, price, url, color}) => (
        <Item
          key={id}
          id={id}
          url={url}
          title={name}
          description={description}
          price={price}
          color={color}
          closeButton={false}
        />
      ))}
    </div>
  );
};

export default ItemsContainer;
