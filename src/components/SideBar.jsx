import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import image from '../assets/images/LogoToyHouse.png';
import ContentWrapper from './ContentWrapper';
import CategoriesInDb from './CategoriesInDb';
import SizesInDb from './SizesInDb';
import AgesInDb from './AgesInDb';
import LastProductInDb from './LastProductInDb';
import ContentRowMovies from './ContentRowMovies';
import NotFound from './NotFound';
import ProductList from './ProductList';
import SearchProducts from './SearchProducts';



function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-danger sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/" style={{'height':'150px'}} >
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image}/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - ToyHouse</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>
 
                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Opciones</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                <Link className="nav-link" to="/TablesInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Tablas en la Base de datos</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/LastProductInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Ultimo Producto</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/ContentRowMovies">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Cantidades de registros</span></Link>
                </li>
                <li className="nav-item nav-link">
                    <Link className="nav-link" to="/products">
                        <i className="fas fa-search"></i>
                        <span>Productos</span>
                    </Link>
                </li>
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/search">
                        <i className="fas fa-search"></i>
                        <span>Busqueda de productos</span></Link>
                </li>
                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/TablesInDb">
                    <div>
                        <CategoriesInDb />
                        <SizesInDb/>
                        <AgesInDb/>  
                    </div>
                </Route>
                <Route path="/LastProductInDb">
                    <LastProductInDb />
                </Route>
                <Route path="/ContentRowMovies">
                    <ContentRowMovies />
                </Route>
                <Route path="/search">
                    <SearchProducts />
                </Route>
                <Route path="/products">
                    <ProductList />
                </Route>
                <Route component={NotFound} />
            </Switch>
            {/*<!-- End Microdesafio 2 -->*/}
        </React.Fragment>
    )
}
export default SideBar;