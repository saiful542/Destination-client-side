import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Invalid from './Pages/Invalid/Invalid';
import Admin from './Pages/Admin/Admin';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Details from './Pages/Services/Details/Details';
import AddService from './Pages/AddService/AddService';
import AdminNav from './Pages/Admin/AdminNav/AdminNav';
import ManageService from './Pages/Admin/ManageService/ManageService';
import ManageUsers from './Pages/Admin/ManageUsers/ManageUsers';
import MyBooking from './MyBooking/MyBooking';
import StartBooking from './Pages/StartBooking/StartBooking';
import AboutUs from './Pages/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route  path="/AboutUs">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/Home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/MyBooking/:mail">
              <MyBooking></MyBooking>
            </PrivateRoute>
            <PrivateRoute path="/StartBooking/:id">
              <StartBooking></StartBooking>
            </PrivateRoute>
            <PrivateRoute path="/Admin">
              <Admin></Admin>
            </PrivateRoute>
            <PrivateRoute path="/AddService">
              <AdminNav></AdminNav>
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/ManageServices">
              <AdminNav></AdminNav>
              <ManageService></ManageService>
            </PrivateRoute>
            <PrivateRoute path="/ManageUsers">
              <AdminNav></AdminNav>
              <ManageUsers></ManageUsers>
            </PrivateRoute>
            <PrivateRoute path="/Details/:id">
              <Details></Details>
            </PrivateRoute>
            <Route path="/Login">
              <Login></Login>
            </Route>
            <Route path="*">
              <Invalid></Invalid>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
