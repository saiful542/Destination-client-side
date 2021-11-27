import React from 'react';
import { Link } from 'react-router-dom';

const AdminNav = () => {
    return (
        <div className="container">
            <h1 className="fw-bolder ">Admin Panel</h1>
            <nav class="navbar navbar-dark bg-dark" style={{ borderRadius: "2rem" }}>
                <div class="container-fluid">
                    <Link to="/ManageServices"><button style={{borderRadius:"2rem"}} class="navbar-brand m-1 h1 btn-primary">services</button></Link>
                    <Link to="/AddService"><button style={{borderRadius:"2rem"}}   class="navbar-brand m-1 h1 btn-primary">Add service</button></Link>

                    <Link to="/ManageUsers"><button style={{borderRadius:"2rem"}}  class="navbar-brand m-1 h1 btn-primary">Users</button></Link>

                </div>
            </nav>

        </div>
    );
};

export default AdminNav;