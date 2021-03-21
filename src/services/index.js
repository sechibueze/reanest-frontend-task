import axios from "axios";
export const fetchData = async () => {
  const uri = "http://601d848abe5f340017a19c29.mockapi.io/dashboard";
  axios
    .get(uri)
    .then(({ data }) => {
      console.log("result ", data);
      return data;
    })
    .catch((err) => {
      console.log("An error has occured ", { err });
      return err;
    });
};
