import React from "react";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {setAddedModal, setDeleteModal} from "../../redux/modal/actionCreators";
import {
  addToCart,
  changeCartCounter,
  deleteFromCart,
} from "../../redux/cart/actionCreators";
import {
  getItemFromLocalStorage,
  changeCountItemFromLocalStorageItems,
} from "../../utils/localStorageHelper";
import {ITEMS_KEY} from "../../assets/constants/keys";
import PropTypes from "prop-types";

const ModalContainer = () => {
  const dispatch = useDispatch();
  const deleteModalIsOpen = useSelector(
    (state) => state.modal.deleteModalIsOpen
  );
  const addedModalIsOpen = useSelector((state) => state.modal.addedModalIsOpen);
  const modalMark = useSelector((state) => state.modal.previousModal);

  const itemInfo = useSelector((state) => state.items?.activeItem);

  return (
    <div>
      {deleteModalIsOpen ? (
        <Modal
          header={`Do you want to delete ${itemInfo.itemName}?`}
          closeButton={true}
          text={<p>Are you sure you want to delete "{itemInfo.itemName}"?</p>}
          closeModal={() => {
            dispatch(setDeleteModal(false));
          }}
          actions={
            <>
              <Button
                backgroundColor={"#910303"}
                text={"Ok"}
                clickFunction={() => {
                  changeCountItemFromLocalStorageItems(
                    ITEMS_KEY,
                    itemInfo.id,
                    modalMark
                  );
                  dispatch(
                    deleteFromCart(
                      getItemFromLocalStorage(ITEMS_KEY, itemInfo.id)
                    )
                  );
                  dispatch(changeCartCounter());
                  dispatch(setDeleteModal(false));
                }}
              />
              <Button
                backgroundColor={"#910303"}
                text={"Cancel"}
                clickFunction={() => {
                  dispatch(setDeleteModal(false));
                }}
              />
            </>
          }
        />
      ) : addedModalIsOpen ? (
        <Modal
          backgroundColor={"lightgreen"}
          header={`Do you want to add the "${itemInfo.itemName}"?`}
          closeButton={false}
          text={
            <>
              <p>Do you want to add the "{itemInfo.itemName}"?</p>
              <p>If so - click "Added"</p>
            </>
          }
          closeModal={() => {
            dispatch(setAddedModal(false));
          }}
          actions={
            <>
              <Button
                backgroundColor={"orange"}
                text={"Added"}
                clickFunction={() => {
                  changeCountItemFromLocalStorageItems(
                    ITEMS_KEY,
                    itemInfo.id,
                    modalMark
                  );
                  dispatch(
                    addToCart(getItemFromLocalStorage(ITEMS_KEY, itemInfo.id))
                  );
                  dispatch(changeCartCounter());
                  dispatch(setAddedModal(false));
                }}
              />
              <Button
                backgroundColor={"orange"}
                text={"Back"}
                clickFunction={() => {
                  dispatch(setAddedModal(false));
                }}
              />
            </>
          }
        />
      ) : null}
    </div>
  );
};

ModalContainer.propTypes = {
  header: PropTypes.string,
  closeButton: PropTypes.bool,
  text: PropTypes.element,
  closeModal: PropTypes.func,
  clickFunction: PropTypes.func,
  actions: PropTypes.element,
  backgroundColor: PropTypes.string,
};

ModalContainer.defaultProps = {
  header: "",
  closeButton: false,
  text: (
    <>
      <p></p>
    </>
  ),
  closeModal: () => {},
  clickFunction: () => {},
  actions: (
    <>
      <Button text={"Ok"} backgroundColor={"orange"} />
      <Button text={"Cancel"} backgroundColor={"orange"} />
    </>
  ),
  backgroundColor: "lightgreen",
};

export default ModalContainer;
