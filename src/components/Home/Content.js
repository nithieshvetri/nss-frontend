import React from 'react';
import Slide from './Slide';
import Event from './event';
// import Services from './slide1';


const Content=()=>{
    return (
        <div>
            <Slide  api={"home"} classs={"home"} />
            <br/>
            <br/>
            <br/>
            <Slide api={"service"} classs={"nith-service"}  />
            <br/><br/>
            <Event/>
            </div>
    )
}

export default Content;