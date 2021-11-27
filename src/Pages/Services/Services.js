import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Services = (props) => {
    let {  description, picture,  place,_id} = props.service || {};

    return (
        <div className="">
            <Col className="animate__animated animate__backInDown">
                <Card className="shadow-lg" >
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>{place}</Card.Title>
                        <hr />
                        <small>{description}</small>
                        <br />
                        <br />
                        <NavLink to={`/Details/${_id}`}><button className="btn btn-secondary" >Details</button></NavLink>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Services;