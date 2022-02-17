import React, {useState} from 'react';
import { Collapse,Card } from 'react-bootstrap';

const OtherLocs = ({open}) => {

    return (
        <div style={{minHeight: '100%', "zIndex":4, "display": open ? "initial":"none"}}>
        <Collapse in={open} dimension="height">
          <div id="page-collapse">
            <h3>Saved Locations</h3>
          </div>
        </Collapse>
      </div>
    );
};

export default OtherLocs;