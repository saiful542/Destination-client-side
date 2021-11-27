import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../Hooks/useServices';
import Services from '../Services/Services';

const Home = () => {
    const { services, count } = useServices();
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div class="card bg-dark text-white w-100 rounded-0" >
                <img style={{ height: "600px" }} src="https://i.ibb.co/1ZhGYPK/aden-lao-HIRELq-NJk-Uw-unsplash-1-1.jpg" class="card-img" alt="banner img" />
                <div class="card-img-overlay text-dark fw-bolder fs-2 text-white">
                    <h5 class="card-title">The journey is the destination</h5>

                    <p class="card-text">If we were meant to be in one place we'd have roots instead of feet.

                        You must go on adventures to find out where you truly belong.</p>

                    <br />
                    <p class="card-text text-warning">Explore the world with us!!</p>
                </div>
            </div>
            <h1 className="fw-bolder mt-5 p-2 text-warning">Oure Services</h1>
            <div style={{ maxWidth: "90rem " }} className="d-flex justify-content-center">

                <Row xs={1} md={2} lg={4} className="p-1 g-4 d-flex align-items-center justify-content-center w-100">
                    {
                        services.map(service => <Services
                            key={service._id}
                            service={service}>

                        </Services>)
                    }
                </Row>
            </div>
            <div className="row text-white mt-5 g-2 mb-5" style={{ backgroundColor: "#292c2f", borderRadius: "2rem" }}>

                <div className="col-md-6 text-start my-5 px-4  container fw-bold bg-dark h-100">
                    <h3 className="heading mt-5"><span className="text-warning fw-bolder">Our planet</span> is
                        <br />
                        something
                        <br />
                        unbelievable.</h3>
                    <p className="fs-5">We handpicked hundreds of the most spectacular
                        <br /> summer destinations all over the globe. Relax your body
                        <br /> and soul in the most remote corners of the world.</p>
                </div>
                <div className="col-md-6">
                    <img style={{ borderRadius: "2rem" }} className="card-body h-100 img-fluid " src="https://i.ibb.co/RCyR077/home1.jpg" alt="" />

                </div>
            </div>

            <div className="container d-lg-flex justify-content-around align-items-center my-5 bg-success py-3 bg-opacity-50 rounded-3">
                <div ><h1 style={{ fontSize: "8rem" }}><i class="fas fa-route"></i></h1></div>
                <div><h1 className="fw-bolder text-warning">20% Discount for today!!<i class="fas fa-tags m-2"></i>
                    <br />Grab yours now!!</h1></div>
            </div>

            <div className="mt-5 mb-0 ">
                <h1 style={{fontSize:"5rem"}}><i class="fas fa-globe-americas "></i></h1>
                <br />
                <h1>Happy travelling...</h1>
            </div>

        </div>
    );
};

export default Home;