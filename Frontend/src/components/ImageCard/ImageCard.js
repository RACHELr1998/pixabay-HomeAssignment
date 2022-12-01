import React, { useRef } from "react";
import Card from "react-bootstrap/Card";
import GenericModal from "../Modal/Modal";
import "./ImageCard.css";

const ImageCard = ({ image }) => {
  const childRef = useRef();

  return (
    <div className="ImageCard">
      <Card.Img
        className="CardImage"
        variant="top"
        src={image.webformatURL}
        onClick={() => childRef.current.handleShow()}
      />
      <GenericModal image={image} ref={childRef}></GenericModal>
    </div>
  );
};

export default ImageCard;
