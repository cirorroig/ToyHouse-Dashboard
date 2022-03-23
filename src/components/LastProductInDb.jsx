import React,{ useRef,useEffect,useState } from 'react';

function LastProductInDb(props){
    const [apiData,setApiData]=useState([])
    useEffect(()=>{
        fetch("http://localhost:4000/api/products/last")
        .then(response=>response.json())
        .then(data=>{
            setApiData(data.data)
            
        })
    },[])
    return(
        
        <div className="col-lg-6 mb-4">
            
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto creado</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={apiData.image}/>
                    </div>
                    <p>{apiData.detailedDescription}</p>
                    
                </div>
            </div>
        </div>
    )
}

export default LastProductInDb;
