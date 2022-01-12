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
    if(data)
    console.log(data[0].file);
    return (
        <div>
            {data?<iframe src={data.file} width="800" height="600"></iframe>:null}
        </div>
    )
}
export default Asset

