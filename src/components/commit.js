import React, {useState,useEffect} from 'react';
import axios from 'axios';

const Advisory=()=>{
const [advisory,setAdvisory]=useState([]);

useEffect(() => {
    const Response=async()=>{
        const {data}=await axios.get('http://127.0.0.1:8000/api/ac/');

        console.log(data)
        setAdvisory(data)
    };
    Response()
    
}, [])
console.log(advisory)



const adv=advisory.map((x,index)=>{
    return (
        <div  className="card" key={index}>
            <div className="c" style={{paddingLeft:'100px',width:'100%', textAlign:'justify'}}>
            <div className='disp'>
            <p style={{color:'RED'}}><b>S.NO:</b>  {x.S_No}   </p>
            <p style={{color:'black'}}> <b>NAME AND DESIGNATION:</b> <b>{x.name}</b></p>
            <p style={{color:'black'}}><b>POSITION:</b> {x.position}</p>
            </div>
            </div>
        </div>
      
    )
})


    return  (
        <div className='container'>
        <div className="card1">
        <h3 style={{color:'black',textAlign:'center',padding:'5px',paddingTop:'50px',fontSize:'50px', color:'red'}}>ADVISORY COMMITTEE</h3>
        
        <p style={{color:'darkblue', wordWrap:'normal',paddingRight:'250px',paddingLeft:'250px'}}>An Advisory Committee has been constituted to advice on programme planning and development under the Chairmanship of the Principal.
         It meets half yearly and first meeting at the beginning of each academic year.The committee consists of:<br></br></p>
        {adv}
        </div>
        </div>
        
    )
}

export default Advisory;