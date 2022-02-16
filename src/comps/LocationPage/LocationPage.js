import React, { useState } from 'react';
import { Container, Row, Col, Navbar, ListGroup } from 'react-bootstrap';
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

    const tenDayForecast = (hours) =>{
        let forecast = []
        for(let i=0;i<hours;i++){
            forecast.push(
                <ListGroup.Item className="bg-transparent  border text-light text-center my-1" style={{}}>
                    
                    <img style={{"height":"2em"}} src={TestIcon}/>
                </ListGroup.Item>
            )
        }
        return forecast
    }
    
    return (
        <Container className="h-100 text-light" fluid style={{
            "backgroundColor":`${backGround}`,
            'overflowY':'auto'

        }}>
            <Navbar  className="justify-content-center h-10 border bg-dark" fixed="bottom" >
                Nav
            
            </Navbar>
            <Row className="justify-content-center " >
                <Row className="h-50 justify-content-center ">
                    <Col className="text-center bg-transparent border m-2  " sm={12} style={{"height":'80%'}} >
                        <p className="mt-5 display-5" >{location}</p>
                        <p className="">{condition}</p>
                        <p className="display-1" >{temp} &deg; </p>
                    </Col>
                    <Row  className="bg-transparent border m-2 justify-content-between"  style={{"height":'10%'}}>
                        <Col className=" bg-transparent"  xs={6}>
                            <p className="text-justify">{
                            DayOfWeek}  <span className='text-uppercase'>Today</span>
                            </p> 
                        </Col>
                        <Col  className="bg-transparent" xs={4}>
                            {highsNlows.high}    {highsNlows.low}
                        </Col>
                    </Row>
                </Row>
                <Row className="justify-content-center  h-25">
                    <Col className="bg-transparent  m-2" >
                        <ListGroup horizontal className="h-75" style={{"overflowX":'auto'}}>
                            {HourlyForecast(10)}
                        </ListGroup>
                    </Col>
                </Row>
            </Row>
            <Row className="justify-content-center">

                <Row className="justify-content-center  " style={{}}>
                    <Col className="bg-transparent border m-2 text-center" sm >
                    <ListGroup  className="h-100" style={{}}>
                            {tenDayForecast(10)}
                    </ListGroup>
                    </Col>
                </Row>
            

            <Row className="justify-content-between " style={{"height":'10%'}}>
                <Col className=" bg-transparent my-2" xs={5} >
                    Sunrise: {sun.rise}AM
                </Col>

                <Col className="bg-transparent my-2 " xs={5} >
                    Sunset: {sun.set}PM
                </Col>
            </Row>

            <Row className="justify-content-between  mb-5 " style={{"height":'10%'}}>
                <Col className="bg-transparent my-2 "  xs={5} >
                    Rain: {rain}%
                </Col>

                <Col className="bg-transparent my-2 " xs={5} >
                    Humididty: {humidity}%
                </Col>
            </Row>
            </Row>
        </Container>
    );
};

export default LocationPage;