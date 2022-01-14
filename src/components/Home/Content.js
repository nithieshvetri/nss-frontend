import React from 'react';
import Slide from './Slide';
import Event from './event';
import Radium, { StyleRoot } from 'radium';


const Content=()=>{
    return (
        <StyleRoot>
        <div>
            <Slide api={"home"} margin1={"0px"} width1={"100%"} border1={""} />
            <br/>
            <br/>
            <br/>
            <Slide api={"service"} margin1={"15px"} width1={"100%"} border1={"10px solid gray"} />
            <br/><br/>
            <Event/>
            </div>
            </StyleRoot>
    )
}

export default Content;