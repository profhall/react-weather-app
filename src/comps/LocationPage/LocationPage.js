import React, { useState, useEffect,useRef } from 'react';
import { Container, Row, Collapse,Col, Navbar, ListGroup } from 'react-bootstrap';
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
const day = 5

const LocationPage = () => {
    const [backGround, setBackground] = useState("#202020")
    const [temp, setTemp] = useState(55)
    const [condition, setCondition] = useState("Clear")
    const [location, setLoc] = useState("Smyrna")
    const [DayOfWeek, setDay] = useState(daysOfWeek[day])
    const [sun, setSun] = useState({"rise":"7:30","set":"7:00"})
    const [highsNlows, setHighsNLows] = useState({"high":65,"low":35})
    const [rain, setRain] = useState(5)
    const [humidity, setHumid] = useState(25)
    // const [hourlyForecast, setHourlyForecast] = useState({"high":65,"low":35})
    const [open, setOpen] = useState(true);
    const prevScrollY = useRef(0);
    const [goingUp, setGoingUp] = useState(false);

    const [currentY, setY]= useState(0)

    useEffect(() => {
        console.log("Y changed", currentY)
        if (currentY > 45 ){
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
                    <p>{i == 0 ? "Now" : `${i} PM`}</p>
                    <img style={{"width":"2em"}} src={TestIcon}/>
                    <p>{highsNlows.high}</p>
                </ListGroup.Item>
            )
        }
        return forecast
    }


    const tenDayForecast = () =>{
        let forecast = []
        for(let i=day;i<=((10-day)+day) ;i++){
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
            <Row className="justify-content-center border" >
                <Col className="text-center border  m-1"   sm={12} style={{zIndex:1, "position": "fixed", }} >
                    <Row  className="justify-content-center" style= {{backgroundImage: "url('https://images.unsplash.com/photo-1514519273132-6a1abd48302c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format')",
"backgroundRepeat": "no-repeat","backgroundSize": "100%"}}  >
                            <p className="mt-5 " >
                                <span className="display-3 " > {location}</span> <br/>
                            <span className="" style={{}}>{condition}</span>
                            </p>
                            
                            <p className="display-1" style={{"display":currentY<45?'':"none"}} >{temp} &deg; </p>
                        
                        <Collapse in={open} dimension="height">
                                <Row id="example-collapse-text"  className="bg-transparent m-2 justify-content-between"  style={{"height":'10%'}}>
                                    <Col className=""  xs={6}>
                                        <h5 className="text-start">
                                            {DayOfWeek}  <span className='text-uppercase'>Today</span>
                                        </h5> 
                                    </Col>
                                    <Col  className="" xs={4}>
                                       <h5>{highsNlows.high}    {highsNlows.low}</h5>
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
                <Col className="my-2" xs={5} >
                    <h5>Sunrise: {sun.rise}AM</h5>
                </Col>

                <Col className=" my-2 " xs={5} >
                    <h5>Sunset: {sun.set}PM</h5>
                </Col>
            </Row>

            <Row className="justify-content-between  mb-5 " style={{"height":'10%'}}>
                <Col className=" my-2 "  xs={5} >
                    <h5>Rain: {rain}%</h5>
                </Col>

                <Col className="my-2 " xs={5} >
                    <h5>Humididty: {humidity}%</h5>
                </Col>
            </Row>
            </Row>
        </Container>
    );
};

export default LocationPage;