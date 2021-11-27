import React from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Header = () => {
    const { user, LogOut } = useAuth()
    return (
        <div>
            <nav className="navbar navbar-expand-lg  container-fluid navbar-dark " style={{backgroundColor:"#00162b"}}>
                <div className="container-fluid">
                    <Link className="p-1 links" to="/Home"><h2><i className="fa fa-road animate__animated animate__fadeIn  "></i><span className="fw-bolder " >Destination</span></h2></Link>
                    <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i class="fas fa-bars" style={{ color: "#fff", fontSize: "28px" }}></i></span>
                    </button>
                    <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="links" to="/Home" ><span className="fw-bolder">Home</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="links" to="/AboutUs"><span className="fw-bolder">About</span></NavLink></li>
                            <li className="nav-item">
                                <NavLink className="links" to={`/MyBooking/${user.email}`}><span className="fw-bolder">My bookings</span></NavLink></li>
                        </ul>
                        <NavLink className="links" to="/Admin"><button className="btn btn-secondary fw-bolder">Admin</button></NavLink>
                        {
                            !user.email ? <NavLink className="links" to="/Login"><button className="btn btn-primary">Login</button></NavLink>
                                : <button onClick={LogOut} className="btn btn-danger me-3">Logout</button>

                        }
                        {
                            user.photoURL ? <img className="mx-3" style={{ width: "50px", height: '50px', borderRadius: "50px 50px" }} src={user.photoURL} alt="" />
                                : <img className="mx-3" style={{ width: "50px", height: '50px', borderRadius: "50px 50px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRerBR3bfynBVdF2gjoii3i_8yI4KOdK5_cxw&usqp=CAU" alt="" />
                        }
                        <h3>{user.displayName}</h3>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;