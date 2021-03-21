import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { testData } from "../../_data";
import "./WalletInfoCard.scss";
const WalletInfoCard = ({ walletInfo }) => {
  const {
    balance: { title, currency, value },
  } = walletInfo;
  return (
    <div className="wallet-info">
      <div className="wallet-info-meta">
        <span className="wi-title"> {walletInfo.title} </span>
        <span> Feb 2, 2021 </span>
      </div>
      <div className="wallet-balance">
        <p className="wb-text"> {title} </p>
        <p className="wb-value"> {`${currency} ${value}`} </p>
      </div>
      <ul className="wallet-actions">
        <li>
          <span className="wa-icon">
            <FontAwesomeIcon icon="money-check-alt" color="white" />
          </span>
          <span className="wallet-action-text"> Withdraw</span>
        </li>
        <li>
          <span className="wa-icon">
            <FontAwesomeIcon icon="credit-card" color="white" />
          </span>
          <span className="wallet-action-text"> Fund wallet</span>
        </li>
        <li>
          <span className="wa-icon">
            <FontAwesomeIcon icon="landmark" color="white" />
          </span>
          <span className="wallet-action-text"> Transactions</span>
        </li>
      </ul>
    </div>
  );
};
WalletInfoCard.defaultProps = {
  walletInfo: testData.wallet,
};
export default WalletInfoCard;
