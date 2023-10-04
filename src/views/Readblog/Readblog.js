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
     
    <h1>{data.tittle}</h1>
    <img src={data.img} className='img ' />
    </div>
<h2>similar blogs</h2>
    <div className='d-flex flex-wrap justify-content-around container '>
    {
      post.map((blogdata, index) => {
        const {id, img, tittle, year } = blogdata;
        return (
        <>
          <Post key={index} id={id} img={img} tittle={tittle} year={year} />
        </>
        )
      })

      }
      
      </div>
    </>
  )
}

export default Readblog
