import React from 'react';
import {Row,Col } from 'react-bootstrap';


const suntimes = ({sun}) => {
    return (
        <Row className="justify-content-between " style={{"height":'10%'}}>
            <Col className="my-2 bg-dark " xs={5} >
                <h5>Sunrise: {sun.rise}AM</h5>
            </Col>

            <Col className="bg-dark  my-2 " xs={5} >
                <h5>Sunset: {sun.set}PM</h5>
            </Col>
        </Row>
    );
};

export default suntimes;