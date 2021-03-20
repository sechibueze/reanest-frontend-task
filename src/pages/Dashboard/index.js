import { Fragment } from "react";
import CashRequestCard from "../../components/CashRequestCard";
import CategoryList from "../../components/CategoryList";
import Navbar from "../../components/Navbar";
import PaymentOptions from "../../components/PaymentOptions";
import ProductLayout from "../../components/ProductLayout";
import Sidebar from "../../components/Sidebar";
import WalletInfoCard from "../../components/WalletInfoCard";
import "./Dashboard.scss";
const Dashboard = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="wrapper">
        <Sidebar />
        <main className="dashboard-main">
          <div className="card-wrapper">
            <WalletInfoCard />
            <CashRequestCard />
          </div>
          <PaymentOptions />
          <CategoryList />
          <ProductLayout />
        </main>
      </div>
    </Fragment>
  );
};

export default Dashboard;
