import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function StatePage() {

    const [places,setPlaces] = useState([]);

useEffect(()=>{
    axios.get("http://localhost:8080/wpn/get/place?name=ap").then(

(res)=>{
    setPlaces(res.data);
}

    );
},[]);


  return (
    <div>
        {places.map((eachPlace)=>(
            <div className="card mb-3" style-ref="max-width: 540px;">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={eachPlace.imgUrl} className="img-fluid rounded-start" alt="..." /> 
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{eachPlace.name}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
        ))}
      
    </div>
  )
}
