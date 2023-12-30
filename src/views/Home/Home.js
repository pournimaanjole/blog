import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
export default function Home() {
  const [product, setProduct] = useState([])

  // const [search, setseach] = useState()
  useEffect(() => {
    if (!(JSON.parse(localStorage.getItem("token")))) {
      window.location.href = '/login'
    }
  }, [])

  const loadproducts = async () => {

    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((data) => {
        setProduct(data?.products)

      });

  }

  useEffect(() => {
    loadproducts();
  }, [])

  // useEffect(() => {
  //       fetch(`https://dummyjson.com/products/search?q=${search}`)
  //           .then(res => res.json())
  //           .then((data) => {
               
  //             setProduct(data?.products)

  //           });
          
  //   }, [search])

  
  return (
    <div>
<Navbar/>
      {/* <input type='text'
        onChange={(e) => {
          setseach(e.target.value)
        }}
        value={search}
      /> */}


      <div className='display-product'>


        {
          product.map((product, index) => {
            const { id, title, description, brand, category, price, rating, stock, thumbnail, images, discountPercentage } = product
            return (<>
               <div className='item'>
              <div className='imgproduct'>
              <img src={thumbnail} className='img'  
           
            />
              </div>

              <p>{title}</p>
             <p className='price'>{price}</p>
             <Link to={`/product/${id}`}>buynow</Link>
             </div>

            </>)
          })
        }

      </div>
    </div>
  )
}
