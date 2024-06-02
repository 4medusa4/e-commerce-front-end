import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import './CartItems.css'

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext)
  return (
    <div className='cart-items'>
      <div className='cart-item-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className='cart-item-format cart-item-format-main'>
                <img className='cart-icon-product-icon' src={e.image} alt='' />
                <p>{e.name}</p>
                <p>Rs.{e.new_price}</p>
                <button className='cart-items-quantity'>
                  {cartItems[e.id]}
                </button>
                <p>Rs.{e.new_price * cartItems[e.id]}</p>
                <img
                  className='cart-items-remove-icon'
                  onClick={() => {
                    removeFromCart(e.id)
                  }}
                  src={remove_icon}
                  alt='Remove'
                />
              </div>
              <hr />
            </div>
          )
        }
        return null
      })}
      <div className='cart-items-down'>
        <div className='cart-items-total'>
          <h1>Cart Total</h1>
          <div>
            <div className='cart-items-total-items'>
              <p>Subtotal</p>
              <p>Rs.{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cart-items-total-items'>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className='cart-items-total-items'>
              <h3>Total</h3>
              <h3>Rs.{getTotalCartAmount()}</h3>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
          
        </div>
        <div className='cart-items-promo-code'>
            <p>If you have a promo code, Enter it here</p>
            <div className='cart-items-promo-box'>
              <input type='text' placeholder='Promo Code' />
              <button>Submit</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default CartItems
