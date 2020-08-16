import React from 'react'
import './style.css'

import Filters from './filter'
import ItemList from './itemlist'

const ListScreen = () => {
    return (
        <div className="App">
            {/* <header className="App-header">
                <p>
                    Hello Abhishek
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
          </a>
            </header> */}

            {navtab()}

            <Filters />
            <ItemList />
        </div>
    )
}

export default ListScreen

const navtab = () => {
    return (
        <nav>
            <ul>
                <li><a>LOGO</a></li>
                {/* <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li> */}
                <input type="text" className="search" placeholder="Search Product" />
                <li className="user-login"><a href="#username">User Name</a></li>
                 <li className="user-login"><a href="#contact">Cart</a></li>      
            </ul>

        </nav>
    )
}