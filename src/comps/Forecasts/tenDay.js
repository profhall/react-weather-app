import React from 'react';
import { ListGroup, Col, Row } from 'react-bootstrap';
import TestIcon from  "../../images/sun.png"

const daysOfWeek ={
    1:"Sunday",
    2:"Monday",
    3:"Tuesday",
    4:"Wednesday",
    5:"Thursday",
    6:"Friday",
    7:"Saturday"
}
const tenDay = ({day,highsNlows}) => {
    let forecast = []
        for(let i=day; i<(10+day) ;i++){
            console.log()
            forecast.push(
                <ListGroup.Item key={i} className="justify-content-between d-flex flex-row bg-transparent  text-light " style={{}}>
                    <h5 className="w-25  text-start">{daysOfWeek[i>7 ? i-7 : i]} </h5>
                    <img alt="" className="" style={{"height":"3em"}} src={TestIcon}/>
                    <h5 className="w-25 ">{highsNlows.low}      {highsNlows.high}</h5>
                </ListGroup.Item>
            )
        }
        return  (
        <Row className="justify-content-center  " >
            <Col className="bg-dark  m-2 text-center" sm >
                <ListGroup  className="h-100" style={{}}>
                    {forecast}
                </ListGroup>
            </Col>
        </Row>
        );
};

export default tenDay;