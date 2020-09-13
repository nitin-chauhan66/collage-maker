import React from "react";
import './Gallery.css'
import { Card, Spinner ,Col,Row, Button} from "react-bootstrap";
export default function Gallery({images,pending,error,dragFunc,refresh,clickHandler}){
    return(
       <Card className="gallery">
           <Card.Body>
               <Row className="justify-content-between">
                   <Card.Title className="mt-2">
                       Gallery
                   </Card.Title>
                   <Button variant="primary" onClick={()=>refresh()}>
                   <i class="fa fa-refresh" aria-hidden="true"></i>
                   </Button>
               </Row>
               <Row className="justify-content-center gallery__container">
               {pending?(
            <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
            </Spinner>):images.map(image=>{
                   return (
                       <Col sm="6" key={image.id}>
                       <img src={'https://cors-anywhere.herokuapp.com/'+image.url}
                       className="gallery__image"  
                       id ={image.id} 
                       onDragStart={(event)=>dragFunc(event)} 
                       draggable={true}
                       onClick={clickHandler}
                       crossOrigin={'anonymous'}
                       />
                       </Col>
                   )
               })}
               </Row>
            </Card.Body>
       </Card>
    )
}