import React from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";


const Alerts = () => {

    const alertData = [
        "Airpressure From THINGSEE_AIR - HIGH: 909.25",
        "Lumins From THINGSEE_AIR - LOW: 13.00",
        "Tvoc From THINGSEE_AIR - LOW: 48.00"
    ]

    return (
        <div style={{position:"relative" , top:"-90px"}}>
        
            <center><h2>Alerts</h2></center>
                <ul>
                    {alertData.map((ele, i) => {
                        return (
                            <div style={{ fontWeight: 'bold' }} key={i}>
                                <i class="bi bi-exclamation-triangle"></i>  {ele}
                            </div>
                        )
                    })}
                </ul>
            
        </div>
    )
}
export default Alerts