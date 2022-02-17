import React,{ useEffect, useState} from 'react';
import { Row, Collapse,Col } from 'react-bootstrap';

const Header = ({weather,weatherNow,temp,currentY,condition, location, DayOfWeek, highsNlows}) => {
    const [open, setOpen] = useState(true);

    useEffect(() => {
        console.log("Y changed", currentY)
        if (currentY > 45 ){
            console.log("collapse", window.innerWidth)
            setOpen(false )
        }
        else{setOpen(true)}
        
      }, [currentY]);
    return (
        <Row  className="justify-content-center" style= {{backgroundImage: `url('${weather[weatherNow].headerBG}')`,
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
    );
};

export default Header;