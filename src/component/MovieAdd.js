
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
const MovieAdd = ({ movies, setmovies }) => {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newmovie, setnewmovie] = useState({
     name:"",
     posteurl:"",
     description:"",
     rating:0
  });
  const handleAdd = () => {
   setmovies([...movies, newmovie]);
  };
  return (
    <div> <>
    <button variant="outline-info" onClick={handleShow} className='bbbbb'>
     +ADD MOVIE+
    </button>

    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body >
        
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Name</Form.Label>
        <Form.Control type="text" placeholder="Enter movie name" onChange={(e) =>setnewmovie({...newmovie, name:e.target.value})}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Posterurl</Form.Label>
        <Form.Control type="text" placeholder="Enter posterurl" onChange={(e) =>setnewmovie({...newmovie, posterurl:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter Description"  onChange={(e) =>setnewmovie({...newmovie, description:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>rating</Form.Label>
        <Form.Control type="text" placeholder="Enter rating" onChange={(e) =>setnewmovie({...newmovie, rating:e.target.value})} />
      </Form.Group>
    </Form>
    </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" 
        onClick={() => {
          handleAdd();
           handleClose();
           }}
           >
        Add Movie
        </Button>
      </Modal.Footer>
    </Modal>
  </></div>
  )
}

export default MovieAdd