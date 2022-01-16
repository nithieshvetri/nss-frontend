import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Volunteer=()=>{
    const [talent,setTalent]=useState([]);
    useEffect(()=>{
        const res=async()=>{
            const {data}=await axios.get("http://127.0.0.1:8000/api/vt/")
            console.log(data);
            setTalent(data);
        }
        res();
    },[])
console.log(talent)

const disp=talent.map((x,index)=>{
    console.log(x.file)

    const arr=x.file.split(".")
        arr.reverse();

    console.log(arr)
    return (
            <div  className="card" key={index}>
            <div className="c">        
            <div className="talent">
        
     {x.image1==null?null:<img src={x.image1}alt="bufvn" />}
        {x.image2==null?null:<img src={x.image2} alt="vbfj" />}
        </div>

        <div  className="vid" style={{display:'flex'}}>
        {arr[0]==='mp4'? <video controls >
      <source src={x.file} />
     </video>:<img src={x.file} alt="images" />}
     
     </div>
     <div className='niii'>
     <h1>{x.name}</h1>
     <h2>ARTIST</h2>
        </div>
        
        </div>
        </div>

    )
})
    return (
        <div className="container">
            <div className="card1" >
                {disp}
            </div>
        </div>
    )
}

export default Volunteer;