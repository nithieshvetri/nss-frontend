import React,{useState,useEffect} from 'react';
import axios from 'axios';
const National=()=>{
    const [digital,setDigital]=useState([]);
    useEffect(()=>{
        const response=async()=>{
            const {data}=await axios.get("http://127.0.0.1:8000/api/nlm/")
            console.log(data);
            setDigital(data)
        };
        response();
    },[]);
    digital.reverse();
    const display=digital.map(x=>{
        return (
            <div key={x.id} className="c">
                <div className="tables">
                <table>
                <thead>
			<tr>
			<th >DATE</th>
			<th >PLACE</th>
			{/* <th >NO OF UNITS</th> */}
			<th >PHOTO</th>
			</tr>
            </thead>
            <tbody>
			
				<tr>
					<td >{x.date}</td>
					<td >{x.place}</td>
					{/* <td >{val.nt}</td> */}
					<td >
                        <div className="tab">
                        <img src={x.image1} alt="National digital literacy"  />
                        <img src={x.image2} alt="National digital literacy"  />
                        <img src={x.image3} alt="National digital literacy"  />
                        <img src={x.image4} alt="National digital literacy"  />
</div>
                        </td>
				</tr>
				</tbody>
			
                </table>
                </div>
            </div>
        )
    })

    return (
        <div className="container">
            <div className="card1">
                {display}
            </div>
        </div>
    );
};

export default National;