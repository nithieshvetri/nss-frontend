import axios from 'axios';
import React, {useState,useEffect} from 'react';
const Camp=()=>{
    const [camps,setCamps]=useState([]);
    useEffect(()=>{
        const Response=async()=>{
            const {data}=await axios.get("http://127.0.0.1:8000/api/camps/");
            setCamps(data);
        };
        Response();
    },[])
    camps.reverse();
    // console.log(camps)
    const display=camps.map((x,index)=>{
        let ar=x.video.split("be/");
        let a=ar[1]
        // console.log(ar[1])
        return (
            <div  className="card" key={index}>
            <div className="c c2"> 
            <h3 style={{color:'black',textAlign:'center'}}>{x.date}</h3>
            <div >
            <div  className="dis">
            <p >{x.description}</p>
            {/* <div className="frame1"> */}
            <iframe src={`https://www.youtube.com/embed/${a}`} title={x.description} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>
            {/* </div> */}
            </div>
            </div>
        </div>
        )
    })
    return (

        <div className='container'>
        <div className="card3 ">
        {display}</div>
        </div>
    )
};
export default Camp;