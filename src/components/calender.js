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
            <a iframe="true" href={x.pdf1}   target='_blank'><img src="https://static.wixstatic.com/media/d32015_2e37764e6ad94ac9a581759ff2c6d1d0~mv2.png/v1/fill/w_180,h_150,al_c,lg_1,q_85/logo_edited.webp" alt="mit" /></a>
            <h1>{x.year}</h1>
            </div>
        )
    })
    console.log(activity)
    return (
        <div className="container">
            <div className="contain">
            <h1>ACTIVITY CALENDER</h1>
            <div className='c card6'>
                {cal}
            </div>
            </div>
        </div>
        // </div>
    )
    
}
export default Calender;