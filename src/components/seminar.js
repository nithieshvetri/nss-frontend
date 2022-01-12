import axios from 'axios';
import React, {useState,useEffect} from 'react';

const Sem=()=>{

  const [Sems,setSems]=useState([]);
  useEffect(()=>{
      const Response=async()=>{
          const {data}=await axios.get("http://127.0.0.1:8000/api/seminar/");
          setSems(data);
      };
      Response();
  },[])

  Sems.reverse();

  console.log(Sems)
  const display=Sems.map((x,index)=>{
    // let ar=x.video.split("be/");
    // let a=ar[1]
    // // console.log(ar[1])

    return (
        <div  className="grid1 " key={index}>
        {/* <div className="fit">  */}

        
        <img src={x.photo}></img>

        <h2 style={{color:'black',textAlign:'center',padding:'10px 10px'}}>{x.date}</h2>

        <p >{x.description}</p>
        </div>
        // </div>
        
    )
})
return (

    <div className='container' >
    <div className="card2  c" >
    {display}</div>
    </div>
)
};

export default Sem;



















































// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
  
// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     paper: {
//       padding: theme.spacing(2),
//       textAlign: 'center',
//       color: theme.palette.text.secondary,
//     },
//     root: {
//       flexGrow: 1,
//     },
//   }),
// );
  
// export default function FullWidthGrid() {
//   const classes = useStyles();
  
//   return (
//     <div style={{ width: '60%', backgroundColor: 'white', 
//     padding: '10px' }}>
//       <Grid container>

//       <Grid item xs={12} sm={6}>
//         <Paper className={classes.paper}>
//           <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" height="160px" width="180px"></img>
//             <p style={{ fontSize:'20px' , fontWeight:'bold' , color:'black'}}>18/04/2021</p>
//             <p style={{ fontSize:'15px' , textAlign:'left'}}>OUR NSS VOLUNTEERS HAS ORGANISED AN GUEST LECTURE ON "STRATEGY TO PREPARE FOR GOVERNMENT COMPETITIVE EXAMS" HANDLED BY C.B.KARTHIKA DEEPA, REGIONAL DIRECTOR VETRI IAS STUDY CIRCLE COIMBATORE.</p>
//             </Paper>
//       </Grid>

//        </Grid>
//      </div> 
//    );
//  }
