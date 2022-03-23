import React from 'react';
import SmallCard from './SmallCard';


function ContentRowMovies(){
    return (
    
        <div className="row d-flex flex-wrap">
                <SmallCard title="Cantidad total de productos" type="products" color="primary" />
                <SmallCard title="Cantidad total de usuarios" type="users" color="secondary" />
                <SmallCard title="Cantidad total de categorias de productos" type="categories" color="warning"  />
                <SmallCard title="Cantidad total de talles" type="sizes" color="danger" />
                <SmallCard title="Cantidad total de rangos de edades para productos" type="ages" color="success" />
        </div>
    )
}
export default ContentRowMovies;