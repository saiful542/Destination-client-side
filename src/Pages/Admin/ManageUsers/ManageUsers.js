import React, { useEffect, useState } from 'react';

const ManageUsers = () => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState([])
    const [isLoading, setIsLoading] = useState([true])
    // const [status, setStatus] = useState([true])

    useEffect(() => {
        fetch(`http://localhost:5000/users`)
            .then(res => res.json())
            .then(data => setUsers(data.users))
            .finally(() => {
                setIsLoading(false)
            })

    }, [users])

    const handleApprove = (id) => {
        const url = `http://localhost:5000/users/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('updated successfully')
                    setUser(data);
                }
            })
            .finally(() => {
                setIsLoading(false)
            })

    }


    const handleUser = (id) => {
        const proceed = window.confirm('Are you want to delete?')
        if (proceed) {
            const url = `http://localhost:5000/users/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('booking canceled successfully')
                        const remainingUsers = users.filter(booking => booking._id !== id)
                        setUsers(remainingUsers)

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
                <div className="pt-4" >

                    {
                        users.map(user => <div key={user._id} className="w-100 d-flex flex-column justify-content-center align-items-center">
                            <div className="w-100" style={{ maxWidth: "40rem" }} >
                                <div class="card mb-3 w-100" style={{ borderRadius: "2rem", overflow: "hidden" }}>
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            {
                                                user.image ? <img src={user?.image} class="img-fluid h-100" alt="Use_image" />
                                                    :
                                                    <img src="https://www.prajwaldesai.com/wp-content/uploads/2021/02/Find-Users-Last-Logon-Time-using-4-Easy-Methods.jpg" class="img-fluid h-100" alt="Use_image" />
                                            }
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body fw-bold">
                                                <h5 class="card-title fw-bolder">{user?.name}</h5>
                                                <hr />
                                                {
                                                    user.comment ? <p class="card-text">comment :{user?.comment}</p>
                                                        : <p></p>
                                                }
                                                <p class="card-text"><small class="text-muted">Phone : {user?.phone}</small></p>
                                                <p class="card-text"><small class="text-muted">Booked : {user?.bookedId}</small></p>

                                                <p class="card-text"><small class="text-muted">mail : {user?.email}</small></p>
                                                <p class="card-text"><small class="text-muted">status : {user?.status}</small></p>
                                                <button onClick={() => handleApprove(user._id)} className={`btn fw-bolder ${(user.status === "pending") ? `btn-warning` : `btn-success`}`}>{user.status}</button>

                                                <button onClick={() => handleUser(user._id)} className="btn btn-danger ms-4">delete</button>
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

export default ManageUsers;