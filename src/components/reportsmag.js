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
                <a iframe="true" id="pdf-js-viewer"  target="_blank" href={`${x.file}`} > vjef k</a>
            </div>

        )
    })

    const maa=mag.map((x,index)=>{
        return (
            <div key={index}>
                <a iframe="true" id="pdf-js-viewer"  target="_blank" href={`${x.file}`} >pdf</a>
            </div>

        )
    })
    return (
        <div>
            <h1>REPORT</h1>{dis}
            <br/>
            <h1>MAGAZINE</h1>{maa}</div>
    )
}
export default Report;