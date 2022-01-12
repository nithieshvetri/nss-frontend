import React, {useState,useEffect} from 'react';
import axios from 'axios';
const Sapling=()=>{
const [plant,setPlant]=useState([]);
useEffect(() => {
    const Response=async()=>{
        const {data}=await axios.get('http://127.0.0.1:8000/api/sapling/');
        console.log(data)
        setPlant(data)
    };
    Response()    
}, [])
console.log(plant)
plant.reverse();
const sap=plant.map((x,index)=>{
    return (
        <div  className="card" key={index}>
            <div className="c"> 
            <h3 style={{color:'black',textAlign:'center',padding:'5px',paddingTop:'50px'}}>{x.event}</h3>
            <div className="flexs">
            <img src={x.image1} alt="sapp0" />
            <div className='disp'>
            <p style={{color:'red',padding:'5px'}}>{x.count} SAPLINGS</p>
            <p>{x.About}</p>
            <p>DATED ON:{x.year}</p>
            </div>
            </div>
            </div>
        </div>
    )
})
    return  (
        <div className='container'>
        <div className="card1">
        {sap}</div>
        </div>
    )
}
export default Sapling;