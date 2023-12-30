import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Product.css'
const Product = () => {
  const { id } = useParams()
  const [product, setproduct] = useState({})
  const [quantity, setQuantity] = useState(1)
  const loadproduct = async () => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then((data) => {
        setproduct(data)
      });
  }
  useEffect(() => {
    loadproduct();
  }, [])
  const { title, description, brand, category, price, rating, stock, thumbnail, images, discountPercentage } = product

  const orsernow = async ()=>[
    
  ]
  return (
    <div className='product-div'>
      <div className='main-div'>
        <div className='left-div'>
          <div className='img-map'>
            {
              images?.map((imgage) => {
                return (<>
                  <img src={imgage} className='left-img' />
                </>)
              })
            }
          </div>
          <div><img src={thumbnail} /></div>
        </div>
        <div className='right-div'>
          <div className='right-div-display'>
            <div>
              <h2>{title}</h2>
            </div>
            <div className='border'>
              <span className='brand'>Brand : </span><span className='bran-name'>{brand}</span>


            </div>

            <div className='border'> <span className='brand'>Category : </span><span className='bran-name'>{category}</span></div>
            <div className='border'>
              <span className='brand'>Price : </span> <span className='bran-name'>{price}</span>

            </div>
            <div className='border'>
              <span className='brand'>About Product : </span> <span className='bran-name'>{description}</span>
            </div>

            <div className='border'>
<span onClick={()=>{
if(quantity===1){
  return
}
  setQuantity(quantity-1)
}} className='increment'>-</span>

<span className='increment'>{quantity}</span>
<span onClick={()=>{
  
  setQuantity(quantity+1)
}} className='increment'>+</span>
            </div>
            <div>
            <button type='button' className='ordernow' onClick={orsernow}>Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
