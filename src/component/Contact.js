import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Contact = () => {
  return (
    <div className='section' >
    <div className='contact'  >

    <div class="cird" style={{display:'flex', justifyContent:'center', marginTop:'150px', paddingLeft:'10px', marginBottom:"150px"}}>
   
        <Form>
        <h1 style={{ fontFamily:'Bangers', color:'#35a5af', fontSize:'80px', textShadow: '3px 5px 2px rgba(0, 0,0,0.15)'}}>Contact:</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name:</Form.Label>
        <Form.Control type="email" placeholder="Enter Name" />
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name:</Form.Label>
        <Form.Control type="email" placeholder="Enter lastName" />
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </div>
    </div>
  )
}

export default Contact