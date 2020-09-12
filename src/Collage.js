import React, { useState } from "react";
import {Card} from "react-bootstrap";
import './Collage.css'
import 'fabric-canvas';

export default function Collage({drop,allowDrag}){
    return(
        <Card className="mr-2 collage">
            <Card.Body className="collage__canvas">
                <fabric-canvas  id="collage" onDrop={drop} onDragOver={allowDrag} style={{height:'100%',width:'100%'}}>

                </fabric-canvas>
            </Card.Body>
        </Card>
    )
}