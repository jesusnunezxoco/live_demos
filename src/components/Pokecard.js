import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

export default function Pokecard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Link to={`/pokemon/${props.id}`}>
        <Card.Img variant="top" src={props.image} />
      </Link>
      <Card.Body>
        <Card.Title>
          {props.name} #{props.id}
        </Card.Title>
      </Card.Body>
    </Card>
  );
}
