import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import post from './../utils/post.json';

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

  return (<>
    <div>
     readblog{id}
    
    </div>
    </>
  )
}

export default Readblog
