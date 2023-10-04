import React from 'react'
import Post from '../../components/Post/Post';
import post from './../utils/post.json';
import './Postblog.css';
import Navbar from '../../components/Navbar/Navbar';

const Postblog = () => {
  return (<>
  
  <h1 className='heading'>New Magazine Blog</h1>
    <div className='d-flex flex-wrap justify-content-around container margin'>
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

export default Postblog
