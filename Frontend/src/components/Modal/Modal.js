import React, { useState, forwardRef, useImperativeHandle } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions";
import Info from "../Info/Info";
import "./Modal.css";

const GenericModal = forwardRef(({ type, image }, ref) => {
  const [show, setShow] = useState(false);

  const categories = useSelector((state) => state.categories);

  const dispatch = useDispatch();

  useImperativeHandle(ref, () => ({
    handleShow() {
      setShow(true);
    },
  }));

  const handleClose = (category) => {
    if (category) {
      dispatch(actions.setCategory(category));
    }
    setShow(false);
  };

  return (
    <div className="GenericModal">
      {type === "category" ? (
        <Button
          variant="primary"
          onClick={() => {
            setShow(true);
          }}
        >
          Select Category
        </Button>
      ) : (
        <></>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {type === "category" ? "Select category" : "Image Info"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {type === "category" ? (
            categories.map((category) => (
              <Button
                className="CategoryBtn"
                key={category}
                variant="secondary"
                onClick={() => {
                  handleClose(category);
                }}
              >
                {category}
              </Button>
            ))
          ) : (
            <Info image={image}></Info>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
});

export default GenericModal;
