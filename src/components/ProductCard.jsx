import React,{useRef, useEffect, useState} from 'react';
function ProductCard(props) {

  return (
                    <div className="col-sm-6 col-md-4 my-4 ">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h5 className="m-0 font-weight-bold text-gray-800">{props.name}</h5>
                            </div>
                            <div className="card-body">
                                <div className="text-center">
                                    <img 
                                        className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
                                        src={props.image}
                                        alt={props.name} 
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                    />
                                </div>
                                <p>${props.price}</p>
                                <p>{props.detailedDescription}</p>
                            </div>
                        </div>
                    </div>
    
        
  )
}

export default ProductCard;