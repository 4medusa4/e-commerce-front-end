import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import cart from '../Assets/cart_icon.png'
import logo from '../Assets/logo.png'
import './Navbar.css'


export const Navbar = () => {
  const [menu, setMenu] = useState('shop')
  const {getTotalCartItems} = useContext(ShopContext)

  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <img src={logo} alt='Logo' />
      </div>
      <ul className='navbar-menu'>
        <li
          onClick={() => {
            setMenu('shop')
          }}
        >
          <Link className='navbar-menu-link' to='/'>Shop</Link>
          {menu === 'shop' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('mens')
          }}
        >
          <Link className='navbar-menu-link'to='/mens'>Mens</Link>
          {menu === 'mens' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('womens')
          }}
        >
          <Link className='navbar-menu-link' to='/womens'>Womens</Link>
          {menu === 'womens' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('kids')
          }}
        >
          <Link className='navbar-menu-link' to='/kids'>Kids</Link>
          {menu === 'kids' ? <hr /> : <></>}
        </li>
      </ul>
      <div className='navbar-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart} alt='Cart' /></Link>
        <div className='navbar-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
