import React, { useState, useEffect,useRef } from 'react';
import {Container, Row, Collapse,Col } from 'react-bootstrap';
import TenDay from '../Forecasts/tenDay';
import Hourly from '../Forecasts/hourly';
import Suntimes from '../Forecasts/suntimes';
import Precipitation from '../Forecasts/precipitation';
import weather from "../../data/weather.json"
import Header from './Header';
import Nav from './Nav';
import OtherLocs from './OtherLocs';

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
console.log(weather)

const LocationPage = () => {
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
    const [locPageOpen, setLocPageOpen] = useState(false);
    const prevScrollY = useRef(0);
    const [goingUp, setGoingUp] = useState(false);
    const [weatherNow, setWeatherNow] = useState("sunny")

    const [currentY, setY]= useState(0)

    useEffect(() => {
        console.log("Y changed", currentY)
        console.log( locPageOpen)
        if (currentY > 45 ){
            console.log("collapse", window.innerWidth)
            setOpen(false )
            
        }
        else{setOpen(true)}
        
      }, [currentY,locPageOpen]);

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
  

   

    
    return (
        <Container onScroll={onScroll} className="bg-dark h-100 text-light " fluid style={{
            
            'overflowY':'auto'

        }}>
            <Nav  currentY = {currentY} open={locPageOpen} setLocPageOpen={setLocPageOpen} />
            <Row className="justify-content-center" style={{"display": locPageOpen ? 'none': ''}} >
                <Col className="text-center  m-1" sm={12} style={{zIndex:1, "position": "fixed", }} >
                    <Header weather={weather} weatherNow={weatherNow} temp={temp} currentY={currentY} condition={condition} location={location} DayOfWeek={DayOfWeek} highsNlows={highsNlows}/>
                    <Hourly highsNlows={highsNlows}/> 
                </Col>
            </Row>

            <Row className="justify-content-center py-3" style={{ "marginTop": window.innerWidth > 775 ? "28em":"25em", "overflowY":'auto',"display": locPageOpen ? 'none': ''}}>
                <TenDay day={day} highsNlows={highsNlows}/>
                <Suntimes sun ={sun}/>
                <Precipitation rain={rain} humidity={humidity}/>
            </Row>
            <OtherLocs open={locPageOpen}/>
        </Container>
    );
};

export default LocationPage;