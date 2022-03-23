import React,{ useRef,useEffect,useState } from 'react';
import ProductCard from './ProductCard';

//import noPoster from '../assets/images/no-poster.jpg';

function SearchProducts(){



	// Credenciales de API
	const [products, setProducts] = useState([])
	const [keyword, setKeyword] = useState("")

	useEffect(() => {
		fetch(`http://localhost:4000/api/productsSearch/${keyword}`)
		.then(response=>response.json())
		.then(data=>{
			if(keyword){
				setProducts(data.data)
			}
			else{
				setProducts([])	
			}
		})
	},[keyword])
	

	const inputRef=useRef()
	const nuevaBusqueda=(e)=>{
		e.preventDefault()
		let inputValue=inputRef.current.value
		
		setKeyword(inputValue)
		console.log(keyword);
		inputRef.current.value=""
	}


	return(
		<div className="container-fluid">
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Buscador */}
							<form method="GET" onSubmit={nuevaBusqueda}>
								<div className="form-group">
									<label htmlFor="">Buscar por nombre:</label>
									<input ref={inputRef} type="text" className="form-control" />
								</div>
								<button className="btn btn-info">Search</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Productos para la palabra: {keyword}</h2>
						</div>
						{/* Listado de películas */}
						{
							products.length > 0 && products.map((product, i) => {
								return (
									<ProductCard
									key={i} 
									name={product.name}
									image={product.image}
									price={product.price}
									detailedDescription={product.detailedDescription}
									/>
								)
							})
						}
					</div>
					{ !products.length&& <div className="alert alert-warning text-center">No se encontraron productos</div>}
				</>
			
		</div>
	)
}

export default SearchProducts;
