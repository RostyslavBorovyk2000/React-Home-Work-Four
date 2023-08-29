import React from "react";
import Item from "../../components/Item/Item";
import styles from "./FavouritePages.module.scss";
import classNames from "classnames";
import {useSelector} from "react-redux";

const FavouritePages = () => {
  const favourites = useSelector((state) => state?.favourites?.favourites);

  return (
    <section className={classNames(styles.container)}>
      {favourites?.map(({name, id, description, price, url, color}) => (
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
    </section>
  );
};

export default FavouritePages;
