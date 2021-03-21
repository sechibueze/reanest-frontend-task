import React, { useEffect, useState, Fragment } from "react";
import CashRequestCard from "../../components/CashRequestCard";
import CategoryList from "../../components/CategoryList";
import Navbar from "../../components/Navbar";
import PaymentOptions from "../../components/PaymentOptions";
import ProductLayout from "../../components/ProductLayout";
import Sidebar from "../../components/Sidebar";
import WalletInfoCard from "../../components/WalletInfoCard";

import "./Dashboard.scss";
const Dashboard = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    console.log("Use effect");
    async function fetchData() {
      const uri = "https://601d848abe5f340017a19c29.mockapi.io/dashboard";
      const res = await fetch(uri);
      res
        .json()
        .then((res) => {
          setLoading(false);
          setData(res);
        })
        .catch((err) => {
          console.log("err ", err);
          setLoading(false);
          setError(err);
        });
    }
    fetchData();
  }, []);
  if (loading) return <h2>Loading...</h2>;
  if (error) return <h1> An error has occurred </h1>;
  if (!data) return <h1>loading data</h1>;
  return (
    <Fragment>
      <Navbar />
      <div className="wrapper">
        <Sidebar />
        <main className="dashboard-main">
          <div className="card-wrapper">
            <WalletInfoCard walletInfo={data.wallet} />
            <CashRequestCard cashRequestData={data.loan} />
          </div>
          <PaymentOptions billPayment={data.billspayment} />
          <CategoryList />
          <ProductLayout transactions={data.transactions} />
        </main>
      </div>
    </Fragment>
  );
};

export default Dashboard;
