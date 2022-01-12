import React from 'react';
import Slide from './Slide';

const Content=()=>{
    return (
        <div>
            <Slide api={"home"} margin1={"0px"} width1={"100%"} border1={""} />
            <br/>
            <br/>
            <br/>
            <Slide api={"service"} margin1={"15px"} width1={"100%"} border1={"10px solid gray"} />
            </div>
    )
}

export default Content;