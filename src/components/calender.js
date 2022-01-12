import axios from 'axios';
import React,{useState,useEffect} from 'react';
import logo from'./logo.png';
// import  './logo.png';
const Calender=()=>{
const [activity,setActivity]=useState([])
    useEffect(()=>{
        const Response=async()=>{
            const {data}=await axios.get('http://127.0.0.1:8000/api/activity/');
            setActivity(data)
        };
        Response()
    },[])
    const cal=activity.map((x,index)=>{
        return (
            <div key={index} >
            {/* <img src="logo.png" alt="nithiesh"/> */}
            <a iframe="true" href={x.pdf1+"#toolbar=0"}   target='_blank'><img src={logo} alt="mit" /></a>
            <h1>{x.year}</h1>
            </div>
        )
    })
    console.log(activity)
    return (
        <div>{cal}</div>
    )
}
export default Calender;