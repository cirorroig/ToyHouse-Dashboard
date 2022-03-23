import React,{useRef, useEffect, useState} from 'react';
import ProductCard from "./ProductCard" 
function ProductList() {

  const [apidata,setApiData]=useState([])
  const [count, setCount] = useState(0) 
  useEffect(()=>{
      fetch(`http://localhost:4000/api/products`)
      .then(response=>response.json())
      .then(data=>{
          setApiData(data.products)
          setCount(data.count)    
      })
  },[])
  return (
      <div className='text-align-center'>
          <h1>{count} productos totales</h1>
        <div className='container-fluid row align-items-start' >
          
          {
            apidata.map((product,i)=>{
                return(
                    <ProductCard key={i} 
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    detailedDescription={product.detailedDescription}
                    />
                    )
                })
          }
        </div>
      </div>       
  )
}

export default ProductList;