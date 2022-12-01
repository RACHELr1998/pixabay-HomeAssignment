import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import ImageCard from "../ImageCard/ImageCard";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../redux/actions";
import GenericModal from "../Modal/Modal";
import "./ImagesList.css";

const ImagesList = () => {
  const dispatch = useDispatch();

  const images = useSelector((state) => state.images);

  const next = useSelector((state) => state.next);

  const previous = useSelector((state) => state.previous);

  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);

  function prevPage() {
    try {
      if (previous) {
        setDisableNext(false);
        dispatch(actions.next(previous.page));
        if (previous.page === 1) {
          setDisablePrev(true);
        }
      }
    } catch (err) {
      alert(err.message);
    }
  }

  function nextPage() {
    try {
      if (next) {
        setDisablePrev(false);
        dispatch(actions.next(next.page));
      } else {
        setDisableNext(true);
      }
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className="ImagesList">
      <div className="BtnDiv">
        <Button disabled={disablePrev} onClick={prevPage}>
          prev
        </Button>
        <GenericModal type="category" />
        <Button disabled={disableNext} onClick={nextPage}>
          next
        </Button>
      </div>
      <Container>
        <div className="DivImages">
          {images.map((image) => {
            return <ImageCard key={image.id} image={image} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default ImagesList;
