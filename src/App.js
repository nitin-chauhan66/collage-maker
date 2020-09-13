import React, { useState } from 'react';
import './App.css';
import { Row,Col } from 'react-bootstrap';
import Collage from './Collage';
import Gallery from './Gallery';
import useFetch from './usefetch';
import {fabric} from "fabric-canvas";


function App() {
  const [id,setId] = useState(1);
  document.title = "Collage Maker";
  const {images,loading,error} = useFetch(id);
  function refresh(){
    const id = parseInt(Math.random()*10);
    setId(id);
  }
  function allowDrop(e) {
    e.preventDefault();
  }
  
  function drag(e) {
    e.dataTransfer.setData("image", e.target.id);
  }
  
  function drop(e) {
    e.preventDefault();
    const data = e.dataTransfer.getData("image");
    const image = document.getElementById(data);
    const ratio = image.height/image.width;
    const Newimage  = new fabric.Image(image, {
      width: 300*ratio, height: 300*ratio,
      top:100,
      left:100
    });
    console.log(Newimage);
    e.target.add(Newimage);
  }
  function clickHandler(e){
    const image = document.getElementById(e.target.id);
    const ratio = image.height/image.width;
    const Newimage  = new fabric.Image(image, {
      width: 300*ratio, height: 300*ratio,
      top:100,left:100
    });
    document.getElementById("collage").add(Newimage);
    document.getElementById("collage").canvas.setActiveObject(Newimage);
  }
  return (
    <div className="app">
      <h1>Collage Maker</h1>
      <Row>
        <Col>
          <Collage 
          drop={drop} 
          allowDrag={allowDrop}/>
        </Col>
        <Col>
            <Gallery 
            images={images} 
            pending={loading} 
            error={error} 
            dragFunc={drag}
            refresh={refresh}
            clickHandler={clickHandler} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
