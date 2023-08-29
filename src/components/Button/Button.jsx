import React from "react";
import styles from "./Button.module.scss";
import PropTypes from "prop-types";

const Button = (props) => {
  const {text, clickFunction, backgroundColor} = props;

  return (
    <button
      style={{backgroundColor}}
      onClick={clickFunction}
      className={styles.button}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  clickFunction: PropTypes.func,
  backgroundColor: PropTypes.string,
};

Button.defaultProps = {
  text: "",
  clickFunction: () => {},
  backgroundColor: "#000000",
};

export default Button;
