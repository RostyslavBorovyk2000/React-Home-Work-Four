import React from "react";
import styles from "./Header.module.scss";
import {ReactComponent as CartIconSvg} from "../../assets/svg/cart.svg";
import {ReactComponent as StarIconSvg} from "../../assets/svg/star-is-checked.svg";
import {NavLink} from "react-router-dom";
import classNames from "classnames";
import {useSelector} from "react-redux";

const Header = () => {
  const isFavouriteLength = useSelector(
    (state) => state.favourites?.favourites?.length
  );
  const cartCounter = useSelector((state) => state.cart?.cartCounter);

  return (
    <section className={styles.header}>
      <nav>
        <ul>
          <li>
            <NavLink
              className={({isActive}) =>
                classNames(styles.link, {[styles.active]: isActive})
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({isActive}) =>
                classNames(styles.link, {[styles.active]: isActive})
              }
              to={"/favourite"}
            >
              Favourite
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({isActive}) =>
                classNames(styles.link, {[styles.active]: isActive})
              }
              to={"/cart"}
            >
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={classNames(styles.iconWrapper)}>
        <div>
          <StarIconSvg />
          <p>{isFavouriteLength}</p>
        </div>
        <div>
          <CartIconSvg />
          <p>{cartCounter}</p>
        </div>
      </div>
    </section>
  );
};

export default Header;
