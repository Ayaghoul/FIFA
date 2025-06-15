import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
const Player = ({ name, team, nationality, jerseyNumber, age, image }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{team}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{nationality}</ListGroup.Item>
          <ListGroup.Item>{jerseyNumber}</ListGroup.Item>
          <ListGroup.Item>{age}</ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};

export default Player;
