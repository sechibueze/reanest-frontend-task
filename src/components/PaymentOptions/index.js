import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
import "./PaymentOptions.scss";
const PaymentOptions = () => {
  return (
    <div className="payment-wrapper">
      <span className="p-intro">
        <Fragment> MAKE PAYMENTS</Fragment>
        <FontAwesomeIcon
          icon={["fas", "info-circle"]}
          size="0.25x"
          style={{
            color: "white",
            backgroundColor: "blue",
          }}
        />
      </span>
      <div className="payment-options-container">
        <span className="arrow">
          {" "}
          <FontAwesomeIcon icon={["fas", "angle-left"]} size="2x" />{" "}
        </span>
        <ul className="payment-icons">
          <li>
            <span>
              {" "}
              <FontAwesomeIcon icon={["far", "handshake"]} size="2x" />{" "}
            </span>
            <span className="po-name"> Donations &amp; charities </span>
          </li>
          <li>
            <span>
              {" "}
              <FontAwesomeIcon icon={["far", "bookmark"]} size="2x" />{" "}
            </span>
            <span className="po-name"> Insurance </span>
          </li>
          <li>
            <span>
              {" "}
              <FontAwesomeIcon icon={["far", "credit-card"]} size="2x" />{" "}
            </span>
            <span className="po-name"> Payment services </span>
          </li>
          <li>
            <span>
              {" "}
              <FontAwesomeIcon icon={["fas", "certificate"]} size="2x" />
            </span>
            <span className="po-name"> Agents &amp; dealers </span>
          </li>
          <li>
            <span>
              {" "}
              <FontAwesomeIcon icon={["far", "gem"]} size="2x" />{" "}
            </span>
            <span className="po-name"> Visa &amp; Emabassy payments</span>
          </li>
        </ul>
        <span className="arrow">
          {" "}
          <FontAwesomeIcon icon={["fas", "angle-right"]} size="2x" />{" "}
        </span>
      </div>
    </div>
  );
};

export default PaymentOptions;
