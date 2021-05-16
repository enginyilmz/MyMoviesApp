import "./Navbar.css";
import { Route, Switch, NavLink } from "react-router-dom";
import HomePage from "../../.././pages/HomePage/HomePage";
import AboutPage from "../../.././pages/AboutPage/AboutPage";
import MovieDetails from "../../.././pages/MovieDetails/MovieDetails";
//import "bootstrap/js/dist/collapse.js";
import {Collapse} from "bootstrap";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink to='/' className='navbar-brand'>
                        My Movies App
              </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink exact to='/' activeClassName='active' className='nav-link'>
                                    Home
              </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to='/about' activeClassName='active' className='nav-link'>
                                    About
              </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <Switch>
                <Route path='/' component={HomePage} exact />
                <Route path='/about' component={AboutPage} exact />
                <Route path='/movieDetails/:id' component={MovieDetails} />
            </Switch>
        </>
    );
};

export default Navbar;
