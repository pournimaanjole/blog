import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
  const [product, setProduct] = useState([])
  const [search, setseach] = useState()
  useEffect(() => {
    if (!(JSON.parse(localStorage.getItem("token")))) {
      window.location.href = '/login'
    }
  }, [])

  const loadproducts = async () => {

    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((data) => {
        setProduct(data.products)

      });

  }

  useEffect(() => {
    loadproducts();
  }, [])

  useEffect(() => {

    const serachProduct = product.filter((singleProduct) => {

      let title = singleProduct.title.toLocaleLowerCase();
      let searchterm = search.toLocaleLowerCase();
      return title.includes(searchterm)
    })
    setProduct(serachProduct)

  }, [search])

  
  return (
    <div>

      <input type='text'
        onChange={(e) => {
          setseach(e.target.value)
        }}
        value={search}
      />
      <div>


        {
          product.map((product, index) => {
            const { id, title, description, brand, category, price, rating, stock, thumbnail, images, discountPercentage } = product
            return (<>
              <img src={thumbnail} />
              <h2>{title}</h2>
              <Link to={`/product/${id}`}>order now</Link>

            </>)
          })
        }

      </div>
    </div>
  )
}
