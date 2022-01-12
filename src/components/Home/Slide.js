import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {BsArrowLeftCircleFill
,BsArrowRightCircleFill
} from 'react-icons/bs';

const Slide=(props)=>{
const [image,setImage]=useState([]);
const [x,setX]=useState(0)
useEffect(()=>{
    setX(0)
    const res=async()=>{
        const {data}=await axios.get(`http://127.0.0.1:8000/api/${props.api}/`);
        console.log(data)
        setImage(data)
    };
    res()
},[])
// console.log(border1)


useEffect(() => {
    setTimeout(handlerRight, 10000);

    // return ( setTimeout(handlerRight, 2000))

}, [x,image])
// console.log(x)
 const handlerRight=()=>{

     if(x<image.length-1){
         setX(x+1)
     }
     if(x>=image.length-1){
         setX(0)
     }
 }
const handlerLeft=()=>{
    console.log(x)

    if(x<=0){
setX(image.length-1)
    }
    if(x<=image.length-1 && x>0){
        setX(x-1)
    }
    // if(x<0){
    //     setX(image.length-2)
    // }
}

console.log(props.width1)

    return (
        <div className="nith" style={{position:'relative',border:`${props.border1}`,margin:`${props.margin1}`}}>
            {/* <button onClick={setX(x+1)}>n k</button> */}
            <div>
                <p  onClick={handlerLeft}style={{margin:'10px',position:'absolute',top:'250px',left:'10px',color:'lightblue'}}><BsArrowLeftCircleFill size={50}
 /></p>
            {image.length>0?
            
            <img src={image[x].image}  style={{width:`${props.width1}`,height:'550px'}}alt="bbj" />
            :null}
                <p  onClick={handlerRight} style={{margin:'10px',position:'absolute',top:'250px',right:'10px',color:'lightblue'}}><BsArrowRightCircleFill size={50}
/></p>
        </div>
        
        </div>
    )
}


export default Slide;