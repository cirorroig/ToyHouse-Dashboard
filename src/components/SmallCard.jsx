import React,{ useRef,useEffect,useState } from 'react';

function SmallCard(props){

    const [apidata,setApiData]=useState([]) 
    useEffect(()=>{
        fetch(`http://localhost:4000/api/${props.type}`)
        .then(response=>response.json())
        .then(data=>{
            setApiData(data)
            
        })
        
    },[])
    return(
        <div className="col-md-4 mb-4 container-fluid">
            <div className={`card border-left-${props.color} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-${props.color} text-uppercase mb-1`}>{props.title}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{apidata.count}</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        
    )
}



export default SmallCard;