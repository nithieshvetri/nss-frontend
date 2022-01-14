import React,{useState,useEffect} from 'react';
import axios from 'axios';
const Committe=()=>{
    const [commit,setCommit]=useState([])
    useEffect(()=>{
        const Response=async()=>{
            const {data}=await axios.get("http://127.0.0.1:8000/api/ac/")
            setCommit(data);
        };
        Response();
    },[])
    

    const display=commit.map(x=>{
        let arr=x.name.split('/n');
        return (
            <div className="n" key={x.id}>
                <div><h3>{x.S_No}</h3></div>
               <div className="pp">{arr.map((y,index)=>{
                    return (
                        <div key={index}>
                            <div><p>{y}</p></div>
                        </div>
                    )
                })}</div>
                <div className="np"><p>{x.position}</p></div>
            </div>
        )
    })
    console.log(commit)
    return(
        <div className="container">
        <div className=" card23 carddd">
            <div>
            <h2>Advisory Committee</h2>
            <p>       An Advisory Committee has been constituted to advice on programme planning and development under the Chairmanship of the Principal. It meets half yearly and first meeting at the beginning of each academic year. 

</p>
</div>
        </div>
        <div className="card23 c">
            {display}

        </div>
        </div>
    )
};

export default Committe;