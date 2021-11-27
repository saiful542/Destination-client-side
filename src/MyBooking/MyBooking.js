import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

const MyBooking = () => {
    const { mail } = useParams()
    const [bookings, setBookings] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const history = useHistory()

    useEffect(() => {
        fetch(`http://localhost:5000/users/${mail}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })

            .then(res => {
                if (res.status === 200) {
                    return res.json();
                }
                else if (res.status === 401) {
                    alert('unauthorized user')
                    history.push('/Login')
                }
            })
            .then(data => setBookings(data))
            .finally(() => {
                setIsLoading(false)
            })
    }, [])
    // DELETE
    const deleteHandle = (id) => {
        const proceed = window.confirm('Are you want to cancel?')
        if (proceed) {
            const url = `http://localhost:5000/users/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('booking canceled successfully')
                        const remainingBookings = bookings.filter(booking => booking._id !== id)
                        setBookings(remainingBookings)

                    }
                })
                .finally(() => {
                    setIsLoading(false)

                })
        }

    }


    return (
        <div className="container">
            <h1 className="text-white">My Bookings</h1>
            {
                isLoading && <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            }
            {
                bookings.map(booking => <div className="d-flex align-items-center justify-content-center">
                    <div class="card my-3" style={{ maxWidth: "400px" }}>
                        <img src={booking?.bookedImage} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{booking.bookedPlace}</h5>
                            <button onClick={() => deleteHandle(booking._id)} className="btn btn-secondary">Cancel booking</button>
                        </div>
                    </div>
                </div>)

            }
        </div>
    );
};

export default MyBooking;