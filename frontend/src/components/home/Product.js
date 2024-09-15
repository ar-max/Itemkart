
import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from 'react-stars'


const Product = ({product}) => {
  const options ={
    edit:false,
    color:"rgba(20,20,20,0.1)",
    activeColor:"blue",
    value:product.ratings,
    isHalf:true
}
  return (
    <>
        <Link className='productCard' to={`/product/${product._id}`}>
            <img src={product.images[0].url} />
            <p>{product.name}</p>
        <div>
        <ReactStars {...options} /> <span>({product.reviewNum})</span>
      </div>
      <span>{`₹${product.price}`}</span>
        </Link>
    </>
  )
}

export default Product