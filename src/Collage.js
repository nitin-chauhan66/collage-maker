import React, { useState } from "react";
import {Card,Row,Button} from "react-bootstrap";
import './Collage.css'
import 'fabric-canvas';
import { saveAs } from 'file-saver';

export default function Collage({drop,allowDrag}){
    const collage = document.getElementById('collage'); 
    function resetCanvas(){
       collage.canvas.clear();
    }
    function saveImage(e){
        collage.canvas.setBackgrount('transparent')
        const url = collage.canvas.toDataURL({
            format: 'jpeg',
            quality: 1
        });
        
            saveAs(url, "image.jpg");
        
    }
    return(
        <Card className="mr-2 collage">
             
            <Card.Body >
            <Row className="justify-content-between">
                    <Card.Title className="mt-2">Collage</Card.Title>
                    <a onClick={(e)=>saveImage(e)} download="collage.jpeg">
                    <Button variant="primary">
                    <i class="fa fa-download" aria-hidden="true"></i>
                    </Button>
                    </a>
                    <Button variant="primary" onClick={resetCanvas}>
                   <i class="fa fa-refresh" aria-hidden="true"></i>
                   </Button>
                </Row>
                

                <Row style={{height:'500px'}}>
                <fabric-canvas className="collage__canvas" 
                id="collage" 
                onDrop={drop} 
                onDragOver={allowDrag}
                >
                </fabric-canvas>
                </Row>
            </Card.Body>
        </Card>
    )
}