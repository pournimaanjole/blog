import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const Product = () => {
  const {id} = useParams()
  const [allproduct,setAllProduct] = useState([])
  const [product,setproduct] = useState({})

  const loadproduct = async () =>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data)=>{
      setAllProduct(data?.products)
    });
  }
  useEffect(()=>{
loadproduct();
  })

   useEffect(()=>{
    allproduct.forEach((data)=>{
if(data.id == id){
  setproduct(data)
  console.log(data)
}
    })
   },[id])


  return (
    <div>
      <div>
     <h1>{product.title}</h1>
      </div>
    </div>
  )
}

export default Product
