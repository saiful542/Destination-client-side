import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useServices from '../../../Hooks/useServices';

const ManageService = () => {
    const [services, setServices] = useState([]);
    const [count, setCount] = useState([]);
    const [isLoading, setIsLoading] = useState([true])
    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => {
                setCount(data.count);
                setServices(data.services)
            })
            .finally(() => {
                setIsLoading(false)
            })

    }, [])


    // DELETE
    const deleteHandle = (id) => {
        const proceed = window.confirm('Are you want to delete?')
        if (proceed) {
            const url = `http://localhost:5000/services/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingServices = services.filter(service => service._id !== id)
                        setServices(remainingServices)

                    }
                })
                .finally(() => {
                    setIsLoading(false)
                })
    
        }

    }


    return (
        <div className="container" >

            {
                isLoading && <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            }
            {

                <div className="pt-4">

                    {
                        services.map(service => <div key={service._id}>
                            <div>
                                <div class="card mb-3" style={{ maxWidth: "1000px" }}>
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src={service?.picture} class="img-fluid h-100" alt="..." />
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
                                                <button onClick={() => deleteHandle(service._id)} className="btn btn-danger fw-bolder">Delete!</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            }
        </div>
    );
};

export default ManageService;