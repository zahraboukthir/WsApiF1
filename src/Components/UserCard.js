import React from "react";
import { Button, Card, CardImg } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const UserCard = ({ user }) => {
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
        <Link to={`/Profile/${user.id}`}>
          <Button variant="danger">See profile</Button>
        </Link>
      </Card>
    </div>
  );
};

export default UserCard;
