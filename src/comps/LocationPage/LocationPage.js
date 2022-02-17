import React, { useState, useEffect,useRef } from 'react';
import { Container, Row, Collapse,Col, Button, Navbar, ListGroup } from 'react-bootstrap';
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

const today = daysOfWeek[1];

const LocationPage = () => {
    const [backGround, setBackground] = useState("#202020")
    const [temp, setTemp] = useState(55)
    const [condition, setCondition] = useState("Clear")
    const [location, setLoc] = useState("Smyrna")
    const [DayOfWeek, setDay] = useState(today)
    const [sun, setSun] = useState({"rise":"7:30","set":"7:00"})
    const [highsNlows, setHighsNLows] = useState({"high":65,"low":35})
    const [rain, setRain] = useState(88)
    const [humidity, setHumid] = useState(66)
    // const [hourlyForecast, setHourlyForecast] = useState({"high":65,"low":35})
    const [open, setOpen] = useState(true);
    
    const prevScrollY = useRef(0);
    const [goingUp, setGoingUp] = useState(false);
    const [currentY, setY]= useState(0)

    useEffect(() => {
        console.log("Y changed", currentY)
        if (currentY > 75 ){
            console.log("collapse", window.innerWidth)
            setOpen(false )
            
        }
        else{setOpen(true)}
        
      }, [currentY]);

    const onScroll = (e) => {
      const currentScrollY = e.target.scrollTop;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }
      prevScrollY.current = currentScrollY;
      console.log(goingUp, currentScrollY);
      setY(currentScrollY)
    };
  

    const HourlyForecast = (hours) =>{
        let forecast = []
        for(let i=0;i<hours;i++){
            forecast.push(
                <ListGroup.Item className="bg-transparent  text-light text-center my-2" style={{"minWidth":'20%'}}>
                    <p>{i == 0 ? "Now" : i}</p>
                    <img style={{"width":"2em"}} src={TestIcon}/>
                    <p>Temp</p>
                </ListGroup.Item>
            )
        }
        return forecast
    }

    const tenDayForecast = (hours) =>{
        let forecast = []
        for(let i=1;i<=hours;i++){
            forecast.push(
                <ListGroup.Item className="justify-content-between d-flex flex-row bg-transparent  text-light " style={{}}>
                    <h5 className="w-25  text-start">{daysOfWeek[i>7 ? i-7 : i]} </h5>
                    <img className="" style={{"height":"3em"}} src={TestIcon}/>
                    <h5 className="w-25 ">{highsNlows.low}      {highsNlows.high}</h5>
                </ListGroup.Item>
            )
        }
        return forecast
    }
    
    return (
        <Container onScroll={onScroll} className="h-100 text-light " fluid style={{
            "backgroundColor":`${backGround}`,
            'overflowY':'auto'

        }}>
            <Navbar  className="justify-content-between h-10 border bg-dark p-1" fixed="bottom" >
                {currentY}
               
            
            </Navbar>
            <Row className="justify-content-center  " >
                <Col className="text-center bg-dark  m-1   "   sm={12} style={{zIndex:10, "position": "fixed"}} >
                    <Row  className="justify-content-center "  >
                            <p className="mt-5 " >
                                <span className="display-3 " > {location}</span> <br/>
                            <span className="" style={{}}>{condition}</span>
                            </p>
                            
                            <p className="display-1" style={{"display":currentY<90?'':"none"}} >{temp} &deg; </p>
                        
                        <Collapse in={open} dimension="height">
                                <Row id="example-collapse-text"  className="bg-transparent m-2 justify-content-between"  style={{"height":'10%'}}>
                                    <Col className=" bg-transparent"  xs={6}>
                                        <p className="text-justify">{
                                        DayOfWeek}  <span className='text-uppercase'>Today</span>
                                        </p> 
                                    </Col>
                                    <Col  className="bg-transparent" xs={4}>
                                        {highsNlows.high}    {highsNlows.low}
                                    </Col>
                                </Row>
                        </Collapse>
                    
                    </Row>
                    <Row className="justify-content-center   h-25" >
                        <Col className="bg-transparent  " >
                            <ListGroup horizontal className="" style={{"overflowX":'auto'}}>
                                {HourlyForecast(10)}
                            </ListGroup>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className="justify-content-center py-3" style={{ "marginTop": "27em", "overflowY":'auto'}}>

                <Row className="justify-content-center  " >
                    <Col className="bg-transparent  m-2 text-center" sm >
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