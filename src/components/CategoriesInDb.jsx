import React,{useRef, useEffect, useState} from 'react';
function CategoriesInDb(props) {

  const [apidata,setApiData]=useState([]) 
  useEffect(()=>{
      fetch(`http://localhost:4000/api/categories`)
      .then(response=>response.json())
      .then(data=>{
          setApiData(data.categories)     
      })
  },[])
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
             Categorias en la base de datos
          </h5>
        </div>
        <div className="card-body">
          <div className="row">

          {apidata.map((category,i)=>{
            return( 
            <div key={i} className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">{category.name}</div>
              </div>
            </div>)
          })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesInDb;
