import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import UserCard from "./UserCard";

const UserListAxios = () => {
  const [usersaxios, setUsersaxios] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsersaxios(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    // const fetchUser = async () => {
    //   try {
    //     const { data } = await axios.get(
    //       "https://jsonplaceholder.typicode.com/users"
    //     );
    //     console.log(data);
    //     setUsersaxios(data);
    //     setLoading(false);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // fetchUser();
  }, []);
  if (loading) {
    return <Spinner animation="border" variant="danger" />;
  }

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {usersaxios.map((user, i) => (
        <UserCard key={i} user={user} />
      ))}
    </div>
  );
};

export default UserListAxios;
