import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='news-letter'>
      <h1>Get Exclusive Offer On Your Email</h1>
      <p>Subscribe to our newsletter and stay update</p>
      <div>
        <input type="emial" placeholder='Your Email id' />
        <button>Subcribe</button>
      </div>
    </div>
  )
}

export default NewsLetter