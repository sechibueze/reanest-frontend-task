// import React, { useEffect, useState } from "react";
import { Dashboard } from "./pages";
// import axios from "axios";

const App = () => {
  //   const [data, setData] = useState(null);
  //   const [error, setError] = useState(null);
  //   const [loading, setLoading] = useState(false);
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const uri = "https://601d848abe5f340017a19c29.mockapi.io/dashboard";
  //       setLoading(true);

  //       axios
  //         .get(uri)
  //         .then(({ data }) => {
  //           console.log("result ", data);
  //           setData(data);
  //           setLoading(false);
  //         })
  //         .catch((err) => {
  //           console.log("An error has occured ", { err });
  //           setError(true);
  //           setLoading(false);
  //         });
  //     };
  //     fetchData();
  //   }, []);
  //   if (error) return <h1> An error has occurred </h1>;
  //   if (loading) return <h2>Loading...</h2>;
  return <Dashboard data={"pass here when endpoint it comes up"} />;
};

export default App;
