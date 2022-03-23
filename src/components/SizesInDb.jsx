import React,{useRef, useEffect, useState} from 'react';
function SizesInDb() {

  const [apidata,setApiData]=useState([]) 
  useEffect(()=>{
      fetch(`http://localhost:4000/api/sizes`)
      .then(response=>response.json())
      .then(data=>{
          setApiData(data.sizes)     
      })

  },[])
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
             Talles en la base de datos
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
          {apidata.map((size,i)=>{
            if(size.name!=null){
             return(              
              <div key={i} className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">{size.name}</div>
                </div>
              </div>
            ) 
            }           
          })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SizesInDb;
