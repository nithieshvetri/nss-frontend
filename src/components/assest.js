import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Asset=()=>{

    const [data,setdata]=useState([])
    useEffect(()=>{
        const asse=async()=>{
            const {data}=await axios.get("http://127.0.0.1:8000/api/assets/")
            console.log(data);
            setdata(data);
        };
        asse()
    },[])
    if(data.length!==0){
    console.log(data[0].file);}
    return (
        <div className="container">
            <div className="card1" style={{minWidth:'75%',marginBottom:'0px'}}>
            {data[0]?<iframe src={data[0].file+"#toolbar=0"} style={{width: '100%',height: '100vh'}} ></iframe>:null}
        </div>
        </div>
    )
}
export default Asset

