import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Details = () => {
    const [isLoading, setIsLoading] = useState([true])
    const { id } = useParams()
    const [service, setService] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/Details/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    return (
        <div className="container d-flex my-3 justify-content-center rounded-3">
            <div>
                {
                    isLoading && <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                }
                <h1 className="my-4">Details</h1>
                <div class="card mb-3" style={{ maxWidth: "1000px" }}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={service?.picture} class="img-fluid h-100 rounded-3" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body fw-bold">
                                <h5 class="card-title fw-bolder">{service?.place}</h5>
                                <hr />
                                <p class="card-text">{service?.description}</p>
                                <p class="card-text"><small class="text-muted">Hotel : {service?.hotel}</small></p>
                                <p class="card-text"><small class="text-muted">Cost : {service?.price}</small></p>
                                <p class="card-text"><small class="text-muted">Guide : {service?.guide}</small></p>
                                <p class="card-text"><small class="text-muted">mail : {service?.email}</small></p>
                                <Link to={`/StartBooking/${service._id}`}><button className="btn btn-secondary fw-bolder">Book now!</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;