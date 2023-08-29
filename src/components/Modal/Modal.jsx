import React from "react";
import styles from "./Modal.module.scss";
import PropTypes from "prop-types";
import Button from "../Button/Button";

const Modal = (props) => {
  const {header, closeButton, text, closeModal, actions, backgroundColor} =
    props;
  const containerStyle = {
    backgroundColor: backgroundColor,
  };

  console.log(text);
  console.log(actions);

  return (
    <div className={styles.wrapper}>
      <div onClick={closeModal} className={styles.background}></div>

      <div className={styles.modal} style={containerStyle}>
        <header>
          <p>{header.length < 33 ? header : header.slice(0, 33) + "...?"}</p>
          {closeButton ? (
            <div>
              <span onClick={closeModal} className={styles.closeSign}>
                &#10006;
              </span>
            </div>
          ) : null}
        </header>
        <section>
          <div className={styles.textWrapper}>{text}</div>
          <div className={styles.buttonWrapper}>{actions}</div>
        </section>
      </div>
    </div>
  );
};

Modal.propTypes = {
  header: PropTypes.string,
  closeButton: PropTypes.bool,
  text: PropTypes.object,
  closeModal: PropTypes.func,
  actions: PropTypes.element,
  backgroundColor: PropTypes.string,
};

Modal.defaultProps = {
  header: "",
  closeButton: false,
  text: {},
  closeModal: () => {},
  actions: (
    <>
      <Button text={"Ok"} backgroundColor={"orange"} />
      <Button text={"Cancel"} backgroundColor={"orange"} />
    </>
  ),
  backgroundColor: "#f54747",
};

export default Modal;
