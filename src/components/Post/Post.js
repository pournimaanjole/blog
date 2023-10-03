import React from 'react'
import './Post.css';
import { Link } from 'react-router-dom';


const Post = ({id,img,tittle,year}) => {
  return (<>
    <div className='postcard'>
      <img src={img} className='postimg'></img>

     <Link to={`/postblog/readblog/${id}`}><h4>{tittle}</h4></Link> 
      <h5>{year}</h5>
    </div>
    </>
  )
}

export default Post
