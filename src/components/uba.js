import axios from 'axios';
import React, {useState,useEffect} from 'react';

const Uba=()=>{
    const [Uba,setUba]=useState([]);
    useEffect(()=>{
        const Response = async()=>{
          const {data}=await axios.get("http://127.0.0.1:8000/api/uba/");
          setUba(data);
        };
        Response();
    },[])
    Uba.reverse();
    console.log(Uba);
    const show= Uba.map((x,index)=>{
        return(
            <div className='uba' key={index}>
                <div className='uba_body'>
                    <h1 className='uba_head'>{x.eventy}</h1>
                    <h1 className='uba_date'>{x.date}</h1>
                    <p></p>
                    <div className='uba_img'>
                        <img src={x.image1}></img>
                        <img src={x.image2}></img>
                        <img src={x.image3}></img>
                        <img src={x.image4}></img>
                    </div>
                </div>
            </div>
        )
    })

    return(
        <div className='container'>
            {show}
        </div>
    )
};

export default Uba;