import React,{useState,useEffect} from 'react';
import axios from 'axios';


const Awards=()=>{
    const [award, setAward]=useState([]);
    useEffect(()=>{
        const response=async()=>{
            const {data}=await axios.get("http://127.0.0.1:8000/api/awards/")
            // console.log(data);
            setAward(data);
        };
        response();

    },[])
    console.log(award)

    const display=award.map(x=>{
        return (
            <div className="cards" key={x.id}>
                <div className="im">
                <img src={x.image} alt="awards" />
                </div>
                <h5>{x.description}</h5>
                <h5>{x.date}</h5>
            </div>
        )
    })
    return (
        <div className="container">
            <div className="carr ">
            {display}
            </div>
        </div>
    )
};
export default Awards;