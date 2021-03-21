import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            <FontAwesomeIcon icon="bars" color="white" />
          </span>
          <span className="wallet-action-text"> Withdraw</span>
        </li>
        <li>
          <span className="wa-icon">
            <FontAwesomeIcon icon="bars" color="white" />
          </span>
          <span className="wallet-action-text"> Fund wallet</span>
        </li>
        <li>
          <span className="wa-icon">
            <FontAwesomeIcon icon="bars" color="white" />
          </span>
          <span className="wallet-action-text"> Transactions</span>
        </li>
      </ul>
    </div>
  );
};

export default WalletInfoCard;
