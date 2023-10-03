import React from 'react'
import Post from '../../components/Post/Post';
import post from './../utils/post.json';

const Postblog = () => {
  return (<>
    <div>
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
