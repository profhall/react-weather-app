import React from 'react';
import {ListGroup, Col,Row} from 'react-bootstrap';
import TestIcon from  "../../images/sun.png"


const hourly = ({highsNlows}) => {
    let forecast = []
        for(let i=0;i<10;i++){
            forecast.push(
                <ListGroup.Item key={i} className="bg-transparent  text-light text-center my-2" style={{"minWidth":'20%'}}>
                    <p>{i === 0 ? "Now" : `${i} PM`}</p>
                    <img alt="" style={{"width":"2em"}} src={TestIcon}/>
                    <p>{highsNlows.high}</p>
                </ListGroup.Item>
            )
        }
        
    
    return (
        <Row className="justify-content-center h-25" >
            <Col className="bg-dark " >
            <ListGroup horizontal className="" style={{"overflowX":'auto'}}> 
                {forecast}
            </ListGroup>
            </Col>
        </Row>
    
    )
    
};

export default hourly;