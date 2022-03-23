import React,{useRef, useEffect, useState} from 'react';
function AgesInDb() {

  const [apidata,setApiData]=useState([]) 
  useEffect(()=>{
      fetch(`http://localhost:4000/api/ages`)
      .then(response=>response.json())
      .then(data=>{
          setApiData(data.ages)     
      })
  },[])

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
             Edades en la base de datos
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
          {apidata.map((age,i)=>{
            return( 
            <div key={i} className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">{age.name}</div>
              </div>
            </div>)
          })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgesInDb;
