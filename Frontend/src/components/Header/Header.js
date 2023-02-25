import React from 'react';
import './Header.css';
import logo from '../img/image1.svg';
import basket from '../img/Vector.svg'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';




export default function Header(props) {
  const cart = useSelector(store => store.basket.basket)



  return (
      <div className='header'>
      <div className='header_wrapper'>
        <div className='logo_button'>
          <Link to='/'><img src={logo} alt='logo' width='72' height='72'/></Link>
        <Link to='/products/all' className='btn'>Catalog</Link>
        </div>
        <nav className='header_nav'>
          <ul className='header_nav_list'>
            <Link to='/categories/all' className='header_nav_item'>Categories</Link>
            <li className='header_nav_item' onClick={props.handleClick}>Coupon</li>
            <Link to='/categories/sales'  className='header_nav_item' >Stock</Link>
            <li className='header_nav_item'>Contacts</li>
          </ul>
          <div class="hamburger-menu">
					<input id="menu__toggle" type="checkbox" />
					<label class="menu__btn" for="menu__toggle">
					  <span></span>
					</label>
					<ul class="menu__box">
            <li class="menu__item"><Link to='/categories/all'>Categories</Link></li>
            <li class="menu__item" onClick={props.handleClick}>Coupon</li>
            <li class="menu__item">Stock</li>
            <li class="menu__item">Contacts</li>
					</ul>
				  </div>
          <Link to='/basket'>
            <div>
              <img src={basket} alt='basket' width='26.55' height='29.4'/>
              {cart.reduce((sum, value ) => sum + value.count, 0)}
            </div>
            </Link>
        </nav>

      </div>
    </div>
  )
}
