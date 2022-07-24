import React from 'react'
import StarImg from '../images/Star.png'


const Card = (props) => {   
   const Stock =  props.status

    return (
    <div className='card'>
        <div className='badge'>{ (Stock === 0) ? `Sold Out` : `Online` }</div>
        <img src={props.img} alt='' className='card-img'/>
        <div className='card-stats'>
        <img src={StarImg} alt="" />
        <span className='rating'> {props.rating} </span>
        <span className='span'> {props.reviewCount} </span>
        <span className='span'> {props.country} </span>
        </div>
        <p className='card-title'>{props.title}</p>
        <p className='card-price'><span className='bold'>{props.price}</span> / Person</p>
    </div>
  )
}

export default Card
