// import './App.css';
// const data = [
// { date:"08/01/2021", donated_to: "GOVERNMENT HOSPITAL, GOBICHETTIPALAYAM, ERODE", no:"41 UNITS",photo:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"},
// ]

import axios from 'axios';
import React,{useState,useEffect} from 'react';

const Blood=()=>{

const [data,setdata]=useState([]);
useEffect(()=>{
	const res=async()=>{
		const {data}=await axios.get("http://127.0.0.1:8000/api/bdc/")
		setdata(data);
	}
	res()
},[]);
console.log(data)
const disp=data.map((val,index)=>{
	return (
		<div  className="c" key={index}>
		<div className="tables blood">
		<table >
			<thead className="text">
			<tr>
			<th >DATE</th>
			<th >DONATED TO</th>
			<th >NO OF UNITS</th>
			<th >PHOTO</th>
			</tr>
			</thead>
			<tbody>
				<tr>
					<td >{val.date}</td>
					<td >{val.donated_to}</td>
					<td >{val.count}  UNITS</td>
					<td ><img src={val.photo} alt="null" height="160px" width="200px" /></td>
				</tr>
				</tbody>
			
			
		</table>
		</div>
		</div>
	);
	}
	
)



return (

	<div className="container">
		<div className="mob">
			<h4>DATE</h4>
			<h4>DONATED TO</h4>
			<h4>NUMBER OF UNITS</h4>
			<h4>PHOTOS</h4>
		</div>
		<div className="card1">
			{disp}
		</div>
	</div>
)
}

export default Blood;
