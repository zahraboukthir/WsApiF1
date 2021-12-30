import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardImg, Spinner } from "react-bootstrap";

const Profile = ({ match }) => {
  const [user, setuser] = useState([]);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${match.params.id}`
        );

        console.log(data);
        setuser(data);
        setLoad(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [match]);
  if (load) {
    return <Spinner animation="border" variant="danger" />;
  }
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <span className="profil">{user.name[0]}</span>
        <CardImg
          top
          width="100%"
          src="https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png"
          alt="Card image cap"
        />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>{user.username}</Card.Text>
          <Card.Text>{user.email}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profile;
