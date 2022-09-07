import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../components/assets/images/logo.svg'
import AuthContext from '../../context/AuthContext'



const Search = () => {
    window.addEventListener('scroll',function(){
        const search = document.querySelector('.search');
        search.classList.toggle('active', window.scrollY > 100 )
    })
    
const context = useContext(AuthContext)
const {cartItem} = context

    
  return (
    <>
    <section className='search  '>
        <div className="container c_flex">
            <div className="logo width">
                <img src={logo} alt=''/>
            </div>
            <div className="search-box f_flex">
                <i className="fa fa-search"></i>
                <input type='text' placeholder='Search and hit enter...'></input>
                <span>All Category</span>
            </div>
            <div className="icon f_flex width">
                <i className="fa fa-user icon-circle"></i>
                <div className="cart">
                    <Link to={'/cart'}>
                        <i className="fa fa-shopping-bag icon-circle"></i>
                        <span>{cartItem.length === 0 ? '0' :cartItem.length}</span>
                    </Link>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Search