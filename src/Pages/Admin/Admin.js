import React, { useState } from 'react';
import { BrowserRouter, Link, NavLink,Switch,Route } from 'react-router-dom';
import AuthProvider from '../../Context/AuthProvider';

import useServices from '../../Hooks/useServices';
import AddService from '../AddService/AddService';
import AdminNav from './AdminNav/AdminNav';
import ManageService from './ManageService/ManageService';
import ManageUsers from './ManageUsers/ManageUsers';

const Admin = () => {
   
    return (
        <div className="container mt-4" >
            <AdminNav></AdminNav>
        </div>
    );
};

export default Admin;