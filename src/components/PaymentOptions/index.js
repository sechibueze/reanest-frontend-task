import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
import "./PaymentOptions.scss";
const PaymentOptions = ({ billPayment }) => {
  const icons = [
    ["far", "handshake"],
    ["far", "bookmark"],
    ["far", "credit-card"],
    ["fas", "certificate"],
    ["far", "gem"],
    ["fas", "angle-right"],
  ];
  return (
    <div className="payment-wrapper">
      <span className="p-intro">
        <Fragment> {billPayment.title} </Fragment>
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
          <FontAwesomeIcon icon={["fas", "angle-left"]} size="2x" />
        </span>
        <ul className="payment-icons">
          {billPayment.items.map((item, idx) => {
            const { id, title } = item;

            return (
              <li key={id}>
                <span>
                  {" "}
                  <FontAwesomeIcon icon={icons[idx]} size="2x" />{" "}
                </span>
                <span className="po-name"> {title && title} </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PaymentOptions;
