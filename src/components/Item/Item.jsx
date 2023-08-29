import React from "react";
import classNames from "classnames";
import styles from "./Item.module.scss";
import Button from "../Button/Button";
import { ITEMS_KEY } from "../../assets/constants/keys";
import { useDispatch, useSelector } from "react-redux";
import {
  changeIsFavouriteFromLocalStorage,
  getItemFromLocalStorage,
} from "../../utils/localStorageHelper";
import { ReactComponent as SvgStarChecked } from "../../assets/svg/star-is-checked.svg";
import { ReactComponent as SvgStarIsntChecked } from "../../assets/svg/star-isnt-checked.svg";
import {
  addToFavourites,
  deleteFromFavourites,
} from "../../redux/favourite/actionCreators";
import {
  changePreviousModal,
  setAddedModal,
  setDeleteModal,
} from "../../redux/modal/actionCreators.js";
import { setActiveItem } from "../../redux/items/actionCreators";
import PropTypes from "prop-types";

const Item = props => {
  const { url, title, description, price, color, id, closeButton } = props;

  const dispatch = useDispatch();

  const isFavourite = useSelector(
    state =>
      state.favourites?.favourites?.find(item => item.id === id)?.isFavourite
  );
  const count = useSelector(
    state => state.cart?.cart?.find(item => item.id === id)?.count
  );

  return (
    <div className={styles.itemWrapper}>
      <div
        className={styles.svgWrapper}
        onClick={() => {
          changeIsFavouriteFromLocalStorage(ITEMS_KEY, id);

          if (isFavourite) {
            dispatch(
              deleteFromFavourites(getItemFromLocalStorage(ITEMS_KEY, id))
            );
          } else {
            dispatch(addToFavourites(getItemFromLocalStorage(ITEMS_KEY, id)));
          }
        }}>
        {isFavourite ? <SvgStarChecked /> : <SvgStarIsntChecked />}
      </div>
      <div className={styles.imgWrapper}>
        <img src={url} alt={title} />
      </div>
      {closeButton ? (
        <div className={classNames(styles.closeSign)}>
          <span
            onClick={() => {
              dispatch(setActiveItem({ itemName: title, id: id }));
              dispatch(setDeleteModal(true));
              dispatch(changePreviousModal());
            }}>
            &#10006;
          </span>
          <p>{count}</p>
        </div>
      ) : null}
      <div className={styles.contentWrapper}>
        <h3>{title}</h3>
        <p>
          {title.length < 30 ? description : description.slice(0, 30) + "..."}
        </p>
        <div>
          <p>{price}</p>
          <Button
            backgroundColor={color}
            clickFunction={() => {
              dispatch(setActiveItem({ itemName: title, id: id }));
              dispatch(setAddedModal(true));
              dispatch(changePreviousModal());
            }}
            text={"Add to cart"}
          />
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  id: PropTypes.string,
  closeButton: PropTypes.bool.isRequired,
};

Item.defaultProps = {
  url: "",
  title: "",
  description: "",
  price: 0,
  color: "000000",
  id: "",
};

export default Item;
