import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Slide=()=>{
const [image,setImage]=useState([]);
const [x,setX]=useState(0)
useEffect(()=>{
    setX(0)
    const res=async()=>{
        const {data}=await axios.get("http://127.0.0.1:8000/api/home/");
        console.log(data)
        setImage(data)
    };
    res()
},[])
console.log(image)


useEffect(() => {
    setTimeout(handlerRight, 2000);

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

console.log(x)

    return (
        <div style={{position:'relative'}}>
            {/* <button onClick={setX(x+1)}>n k</button> */}
            <div>
                <p  onClick={handlerLeft}style={{margin:'10px',position:'absolute',top:'350px',left:'100px',color:'brown'}}>nn &gt;</p>
            {image.length>0?
            
            <img src={image[x].image}  style={{width:'100%',height:'550px'}}alt="bbj" />
            :null}
                <p  onClick={handlerRight} style={{margin:'10px',position:'absolute',top:'350px',right:'100px',color:'black'}}>nnk &gt;</p>
        </div>
        </div>
    )
}


export default Slide;