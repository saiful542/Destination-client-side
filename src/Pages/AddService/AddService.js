import axios from 'axios';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset()   //reset form
                }
            })
    }
    return (
        <div >


            <h1 className="text-white fw-bolder">add service</h1>
            <div className="d-flex justify-content-center">
                <form className=" my-5 text-white d-flex flex-column  justify-content-center align-items-center w-100  " onSubmit={handleSubmit(onSubmit)}>
                    
                        <input style={{borderRadius:"1rem"}} className="my-2 w-75 p-2" {...register("place")} placeholder="place" />
                        <textarea style={{borderRadius:"1rem"}} className="my-2 w-75 p-2" {...register("description")} placeholder="description" />
                        <input style={{borderRadius:"1rem"}} className="my-2 w-75 p-2" {...register("hotel")} placeholder="hotel" />
                        <input style={{borderRadius:"1rem"}} className="my-2 w-75 p-2" type="number" {...register("price")} placeholder="price" />
                        <input style={{borderRadius:"1rem"}} className="my-2 w-75 p-2" {...register("guide")} placeholder="guide" />
                        <input style={{borderRadius:"1rem"}} className="my-2 w-75 p-2" type="email" {...register("email")} placeholder="mail" />
                        <input style={{borderRadius:"1rem"}} className="my-2 w-75 p-2" {...register("picture")} placeholder="image url" />
                        <button className="btn btn-secondary px-5 fw-bolder fs-4">
                            Add
                        </button>
                </form>
            </div>
        </div>
    );
};

export default AddService;


{/* <form className=" d-flex flex-column  py-4 align-items-center my-5 text-white " onSubmit={handleSubmit(onSubmit)}>
                    <div className="d-flex  align-items-center w-100 justify-content-around " style={{ maxWidth: "600px" }}><h4 className="fw-bolder">Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4><input className="my-2 ms-1 w-50 p-2"  {...register("name")} placeholder="type your name here" /></div>

                    <div className="d-flex  align-items-center  w-100 justify-content-around " style={{ maxWidth: "600px" }}><h4 className="fw-bolder">Phone&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4><input type="number" className="my-2 ms-1 w-50 p-2" {...register("phone")} placeholder="number here" /></div>

                    <div className="d-flex  align-items-center w-100 justify-content-around " style={{ maxWidth: "600px" }}><h4 className="fw-bolder">Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4><input className="my-2 ms-1 w-50 p-2" {...register("email")} value={user.email} /></div>

                    <div className="d-flex  align-items-center w-100 justify-content-around " style={{ maxWidth: "600px" }}><h4 className="fw-bolder">Comment</h4><textarea className="my-2 ms-1 w-50 p-2" {...register("comment")} placeholder="comment here" /></div> */}
