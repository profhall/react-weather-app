import React, { useState } from 'react';
import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
import TestIcon from  "../../images/thunderstorm.png"


const LocationPage = () => {
    const [backGround, setBackground] = useState("#202020")
    const [temp, setTemp] = useState(55)
    const [condition, setCondition] = useState("Clear")
    const [location, setLoc] = useState("Smyrna")
    const [DayOfWeek, setDay] = useState("Thursday")
    const [sun, setSun] = useState({"rise":"7:30","set":"7:00"})
    const [highsNlows, setHighsNLows] = useState({"high":65,"low":35})
    const [rain, setRain] = useState(88)
    const [humidity, setHumid] = useState(66)
    // const [hourlyForecast, setHourlyForecast] = useState({"high":65,"low":35})

    const HourlyForecast = (hours) =>{
        let forecast = []
        for(let i=0;i<hours;i++){
            forecast.push(
                <ListGroup.Item className="bg-transparent  text-light text-center my-3" style={{"minWidth":'20%'}}>
                    <p>{i == 0 ? "Now" : i}</p>
                    <img style={{"width":"45%"}} src={TestIcon}/>
                    <p>Temp</p>
                </ListGroup.Item>
            )
        }
        return forecast
    }
    
    return (
        <Container className="h-100 text-light" fluid style={{
            "backgroundColor":`${backGround}`,
            "minHeight":"100%",
            'overflowY':'auto'

        }}>
            <Row className="h-50 justify-content-md-center ">
                <Col className="text-center bg-transparent border m-2  " sm={12} style={{"height":'80%'}} >
                    <p class="mt-5 display-5" >{location}</p>
                    <p class="">{condition}</p>
                    <p class="display-1" >{temp} &deg; </p>
                </Col>
                <Row  className="bg-transparent border m-2 justify-content-between"  style={{"height":'10%'}}>
                    <Col className=" bg-transparent"  sm={6}>
                        <h4>{
                        DayOfWeek}  <span className='text-uppercase'>Today</span>
                        </h4> 
                    </Col>
                    <Col  className="bg-transparent" sm={4}>
                        {highsNlows.high}    {highsNlows.low}
                    </Col>
                </Row>
            </Row>
            <Row className="justify-content-md-center  h-25">
                <Col className="bg-transparent  m-2" >
                    <ListGroup horizontal className="h-75" style={{"overflowY":'auto'}}>
                        {HourlyForecast(10)}
                     </ListGroup>
                </Col>
            </Row>

            <Row className="justify-content-md-center  h-50">
                <Col className="bg-transparent border m-2 text-center" sm >
                    10-Dayy Forecast
                </Col>
            </Row>

            <Row className="justify-content-md-center  " style={{"height":'10%'}}>
                <Col className=" bg-transparent border m-2" sm={5} >
                    {sun.rise}AM
                </Col>

                <Col className="bg-transparent border m-2 " sm={5} >
                    {sun.set}PM
                </Col>
            </Row>

            <Row className="justify-content-md-center  " style={{"height":'10%'}}>
                <Col className="bg-transparent border m-2" sm={5} >
                    {rain}%
                </Col>

                <Col className="bg-transparent border m-2 " sm={5} >
                    {humidity}%
                </Col>
            </Row>
        </Container>
    );
};

export default LocationPage;