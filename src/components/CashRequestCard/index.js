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

export default CashRequestCard;
