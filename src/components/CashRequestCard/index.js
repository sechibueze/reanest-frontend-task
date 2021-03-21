import PropTypes from "prop-types";
import { testData } from "../../_data";
import "./CashRequestCard.scss";
const CashRequestCard = ({ cashRequestData }) => {
  return (
    <div className="cash-request-card">
      <p> {cashRequestData.title} </p>
      <a className="cash-request-cta" href={cashRequestData.cta.link}>
        {" "}
        {cashRequestData.cta.title}{" "}
      </a>
    </div>
  );
};
CashRequestCard.defaultProps = {
  cashRequestData: testData.loan,
};
CashRequestCard.propTypes = {
  cashRequestData: PropTypes.object.isRequired,
};
export default CashRequestCard;
