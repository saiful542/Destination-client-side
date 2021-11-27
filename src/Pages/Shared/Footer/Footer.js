import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-5 d-flex">
                            <h5>Tes<i class="fab fa-tumblr-square"></i>Org.</h5>

                            <div class="row">
                                <div class="col-6 ">
                                    <ul class="list-unstyled">
                                        <li><Link href="">Services</Link></li>
                                        <li><Link href="">Benefits</Link></li>
                                        <li><Link href="">Counties</Link></li>
                                        <li><Link href="">Team</Link></li>
                                    </ul>
                                </div>
                                <div class="col-6">
                                    <ul class="list-unstyled">
                                        <li><Link href="">Documentation</Link></li>
                                        <li><Link href="">Support</Link></li>
                                        <li><Link href="">Legal Terms</Link></li>
                                        <li><Link href="">About</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <br />
                        </div>
                        <div class="col-md-2">
                            <h5 class="text-md-right">Contact Us</h5>
                            <hr />
                            <ul class="nav d-flex align-items-center justify-content-center">
                                <li class="nav-item "><Link to="" class="nav-link pl-0"><i class="fab fa-facebook fa-lg"></i></Link></li>
                                <li class="nav-item"><Link to="" class="nav-link"><i class="fab fa-twitter fa-lg"></i></Link></li>
                                <li class="nav-item"><Link to="" class="nav-link"><i class="fab fa-instagram fa-lg"></i></Link></li>
                            </ul>
                        </div>
                        <div class="col-md-5">
                            <form>
                                <fieldset class="form-group pb-2">
                                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                                </fieldset>
                                <fieldset class="form-group">
                                    <textarea class="form-control" id="exampleMessage" placeholder="Message"></textarea>
                                </fieldset>
                                <fieldset class="form-group text-xs-right">
                                    <button type="button" class="btn btn-secondary btn-md mt-3 fw-bold">Send</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;