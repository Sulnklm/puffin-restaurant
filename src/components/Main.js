import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {
    return (
            <div className='banner'>
                <div className='w-100 h-100 d-flex justify-content-center align-items-center shadow-lg'>
                    <div>
                        <h1 className='display-3 d-flex justify-content-center text-center text-white fw-semibold text-shadow'>Welcome to Puffin</h1>
                        <h4 className='h3 d-flex justify-content-center text-center text-white text-shadow d-none d-md-block'>Discover the true taste of Italy that will captivate your taste buds </h4>
                        <div className='d-flex justify-content-center mt-4'>
                            <button type="button" className="btn btn-light primary-color rounded-pill  fw-semibold">Order Now</button> 
                        </div>
                    </div>
                </div>  
            </div>
    );
};

export default Main;