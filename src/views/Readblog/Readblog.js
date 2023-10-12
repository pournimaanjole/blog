import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import post from './../utils/post.json';
import Post from '../../components/Post/Post';
import './Readblog.css'

const Readblog = () => {
 const {id} = useParams();
 const [data,setdata] = useState({});
 useEffect(()=>{
 post.forEach((post)=>{
if(post.id == id){
  setdata(post);
}
 })
 
 },[id]);

 console.log(data);
 console.log(data.img);

  return (<>
  
    <div className='readblog-div'>
     
    <h1 className='tittlename'>{data.tittle}</h1>
    <img src={data.img} className='img ' />
   <div className='divsecond'>
   <h1 className='headingtittle'>{data.heading}</h1>
   <p > { data.text}</p>
   <p>{ data.text2}</p>
   </div>
    </div>

    </>
  )
}

export default Readblog
