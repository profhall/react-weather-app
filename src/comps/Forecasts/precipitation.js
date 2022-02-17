import React from 'react';
import {Col,Row} from 'react-bootstrap';


const precipitation = ({rain,humidity}) => {
    return (
    <Row className="justify-content-between mb-5 " style={{"height":'10%'}}>
        <Col className=" my-2 bg-dark  "  xs={5} >
            <h5>Rain: {rain}%</h5>
        </Col>

        <Col className="my-2 bg-dark " xs={5} >
            <h5>Humididty: {humidity}%</h5>
        </Col>
    </Row>
    );
};

export default precipitation;