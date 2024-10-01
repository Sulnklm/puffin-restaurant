import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg primary-bg-color">
                <div className="container-fluid mx-lg-3">
                    <a className="navbar-brand fw-bolder text-white" href="#">Puffin</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto flex-colum align-items-center">
                            <li className="nav-item mb-4 mb-lg-0 mx-lg-2">
                                <a className="nav-link text-white" aria-current="page" href="#">About</a>
                            </li>
                            <li className="nav-item mb-4 mb-lg-0 mx-lg-2">
                                <a className="nav-link text-white" href="#">Menu</a>
                            </li>
                            <li className="nav-item mb-4 mb-lg-0 mx-lg-2">
                                <a className="nav-link text-white" href="#">Contact</a>
                            </li>
                            <li className='mb-4 mb-lg-0 ms-lg-2'>
                                <button type="button" className="btn btn-light primary-color rounded-pill">Order Now</button>   
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;