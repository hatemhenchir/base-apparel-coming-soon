import { useState } from "react";
import icon_arrow from "../images/icon-arrow.svg";
import icon_error from "../images/icon-error.svg";
import "../styles/Input.css";
const Input = () => {
  const [email, setEmail] = useState("");
  const [validation, setValidation] = useState(true);
  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  const handleClick = (event) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (pattern.test(email)) {
      setValidation(true);
    } else {
      setValidation(false);
    }
  };
  return (
    <div className="test">
      <form
        className="form"
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          handleClick(e);
        }}
      >
        <input
          className={`${!validation ? "input_failed" : ""}`}
          type="email"
          placeholder="Email Address"
          onChange={handleChange}
        />
        <div className="container_image">
          <img
            src={icon_error}
            alt=""
            className={`icon_error ${!validation ? "notOk" : ""}`}
          />
        </div>
        <button type="submit">
          <img src={icon_arrow} alt="" />
        </button>
      </form>
      <p className={`validation ${!validation ? "notOk" : ""}`}>
        Please provide a valide email
      </p>
    </div>
  );
};
export default Input;
