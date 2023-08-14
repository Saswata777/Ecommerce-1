import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const SingleProducts = ({prod}) => {
  return (
    <Card key={prod.id} style={{ width: '18rem', marginTop:'10px'}} >
                <Card.Img variant="top" src={`${prod.imageUrl}`} alt={prod.name} />
                <Card.Body>
                  <Card.Title>{prod.name}</Card.Title>
                  {/* <Card.Text>{prod.description}</Card.Text> */}
                  <ListGroup variant="flush">
                        <ListGroup.Item>₹ {prod.price}</ListGroup.Item>
                        <ListGroup.Item>InStock: {prod.inStock}</ListGroup.Item>
                        <ListGroup.Item>Rating: {prod.ratings}</ListGroup.Item>
                  </ListGroup>
                  <Button variant="primary">Add to cart</Button>
                </Card.Body>
              </Card>
  )
}

export default SingleProducts