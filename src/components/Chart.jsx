import React,{ useRef,useEffect,useState } from 'react';
import ChartRow from './ChartRow';

function Chart (){

const [apidata,setApiData]=useState([]) 
  useEffect(()=>{
      fetch(`http://localhost:4000/api/products`)
      .then(response=>response.json())
      .then(data=>{
          setApiData(data.products)
      })
  },[])

    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Precio</th>
                                <th>Categoria</th>
                                <th>Talles</th>
                                <th>Edad</th>                             
                            </tr>
                        </thead>
                        <tbody>
                            {
                            apidata.map(( product , i) => {
                                console.log(product.relations);
                                return <ChartRow { ...product} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;