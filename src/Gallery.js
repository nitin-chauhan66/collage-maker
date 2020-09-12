import React from "react";
import './Gallery.css'
import { Card, Spinner ,Col,Row, Button} from "react-bootstrap";
export default function Gallery({images,pending,error,dragFunc,refresh}){
    return(
       <Card className="gallery">
           
           <Card.Body>
               <Row className="justify-content-between">
                   <Card.Title>
                       Gallery
                   </Card.Title>
                   <Button variant="primary" onClick={()=>refresh()}>Refresh</Button>
               </Row>
               <Row className="justify-content-center gallery__container">
               {pending?(
            <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
            </Spinner>):images.map(image=>{
                   return (
                       <Col sm="6">
                       <img src={image.url} className="gallery__image" key={image.id} id ={image.id} onDragStart={(event)=>dragFunc(event)} draggable={true}/>
                       </Col>
                   )
               })}
               </Row>
            </Card.Body>
       </Card>
    )
}