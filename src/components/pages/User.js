import axios from "axios";
import { useState, useEffect } from "react";
import Loder from "../Loding/Loding";

const User = () => {
  const [users, setUsers] = useState({
    isLoding: false,
    data: [],
    isError: "",
  });

  const getUsers = () => {
    setUsers({
      ...users,
      isLoding: true,
    });

    axios
      .get("https://restcountries.com/v3.1/all")
      .then((data) => {
        setUsers({
          ...users,
          isLoding: false,
          data: data.data,
        });
      })
      .catch((err) => {
        if (err) {
          setUsers({
            isLoding: false,
            data: [],
            isError: err.message,
          });
        }
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Loder />
      <h2>lkjhbn</h2>
    </>
  );
};
export default User;
