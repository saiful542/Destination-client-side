import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const StartBooking = () => {
    const { id } = useParams();
    const { user } = useAuth()
    const [service, setService] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/Details/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.bookedId = id;
        data.image = user.photoURL;
        data.status = 'pending'
        data.bookedPlace = service.place;
        data.bookedImage = service.picture;
        axios.post('http://localhost:5000/users', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset()   //reset form
                }
            })
    }
    return (
        <div>


            <h1 className="mt-5">Book your destination!!</h1>
            <div >
                <form className=" d-flex flex-column  py-4 align-items-center my-5 text-white " onSubmit={handleSubmit(onSubmit)}>
                    <div className="d-flex  align-items-center w-100 justify-content-around " style={{ maxWidth: "600px" }}><h4 className="fw-bolder">Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4><input className="my-2 ms-1 w-50 p-2 rounded-3"  {...register("name")} placeholder="type your name here" /></div>

                    <div className="d-flex  align-items-center  w-100 justify-content-around " style={{ maxWidth: "600px" }}><h4 className="fw-bolder">Phone&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4><input type="number" className="my-2 ms-1 w-50 p-2 rounded-3" {...register("phone")} placeholder="number here" /></div>

                    <div className="d-flex  align-items-center w-100 justify-content-around " style={{ maxWidth: "600px" }}><h4 className="fw-bolder">Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4><input className="my-2 ms-1 w-50 p-2 rounded-3" {...register("email")} value={user.email} /></div>

                    <div className="d-flex  align-items-center w-100 justify-content-around " style={{ maxWidth: "600px" }}><h4 className="fw-bolder">Comment</h4><textarea className="my-2 ms-1 w-50 p-2 rounded-3" {...register("comment")} placeholder="comment here" /></div>


                    <button className="btn btn-warning mt-5 fw-bolder">
                        Confirm!!
                    </button>
                </form>
            </div>
        </div>
    );
};

export default StartBooking;