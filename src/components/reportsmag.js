import axios from "axios";
import React, {useState,useEffect} from "react";


const Report=()=>{
    const [report,setReport]=useState([]);

    useEffect(()=>{
        const Res=async()=>{
            const {data}=await axios.get("http://127.0.0.1:8000/api/report/")
            // console.log(data);
            setReport(data);
        }
        Res();
    },[])
    // console.log(report)
    const rep=report.filter((x)=>{
        return x.type=="Report"})
    // console.log('hbu',rep)

    const mag=report.filter((x)=>{
        return x.type=="magazine"})
    const dis=rep.map((x,index)=>{
        return (
            <div key={index}>
                <a iframe="true" id="pdf-js-viewer"  target="_blank" href={x.file+"#toolbar=0"} >
                <img src="https://static.wixstatic.com/media/d32015_2e37764e6ad94ac9a581759ff2c6d1d0~mv2.png/v1/fill/w_180,h_150,al_c,lg_1,q_85/logo_edited.webp" alt="logo" />

                </a>
                <h1>{x.year}</h1>
            </div>

        )
    })

    const maa=mag.map((x,index)=>{
        return (
            <div key={index}>
                <a iframe="true" id="pdf-js-viewer"  target="_blank" href={x.file+"#toolbar=0"} >
                    <img src="https://static.wixstatic.com/media/d32015_2e37764e6ad94ac9a581759ff2c6d1d0~mv2.png/v1/fill/w_180,h_150,al_c,lg_1,q_85/logo_edited.webp" alt="logo" />
                </a>
                <h1>{x.year}</h1>
            </div>

        )
    })
    return (
        <div className="container">
            <div className="contain">
            <div className="c card7">
                    <h1>REPORTS</h1>
                    <div className="displa" >
                {dis}
                </div>
                <br/>
                <h1>MAGAZINE</h1>
                <div className="displa">

                {maa}
            </div>
            </div>
            
            </div> </div>
    )
}
export default Report;