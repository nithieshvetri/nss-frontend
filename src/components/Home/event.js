import React,{useState,useEffect} from 'react';
import axios from 'axios';

import {BsArrowLeftCircleFill
    ,BsArrowRightCircleFill
    } from 'react-icons/bs';
    
const Event=(props)=>{
    const [even,setEven]=useState([]);
    const [x,setX]=useState(0)
    useEffect(()=>{
        setX(0)
        const res=async()=>{
            const {data}=await axios.get("http://127.0.0.1:8000/api/upcomingevent/");
            console.log(data)
            setEven(data)
        };
        res()
    },[])
    // console.log(border1)
    
    
    useEffect(() => {
        setTimeout(handlerRight, 10000);
    
        // return ( setTimeout(handlerRight, 2000))
    
    }, [x,even])
    // console.log(x)
     const handlerRight=()=>{
    
         if(x<even.length-1){
             setX(x+1)
         }
         if(x>=even.length-1){
             setX(0)
         }
     }
    const handlerLeft=()=>{
        console.log(x)
    
        if(x<=0){
    setX(even.length-1)
        }
        if(x<=even.length-1 && x>0){
            setX(x-1)
        }
        // if(x<0){
        //     setX(even.length-2)
        // }
    }
    
    
    
        return (
            <div className="nith" >
                {/* <button onClick={setX(x+1)}>n k</button> */}
                <div>
                    <div className="event" style={{padding:'20px'}}>
                        <h1>UPCOMING EVENTS</h1>
                        <div className="slid">
                    <p className=" arrow haril" onClick={handlerLeft}><BsArrowLeftCircleFill size={50}
     /></p>
                         <p  className="arrow harir" onClick={handlerRight} ><BsArrowRightCircleFill size={50}
    /></p>
                    

                {even.length>0?
                <div className='even'>
                <h1>{even[x].event}</h1>
                <h1>{even[x].date}</h1></div>:null}

            </div>
            </div>
            
</div>            
            </div>
        )
    }
    

export default Event;