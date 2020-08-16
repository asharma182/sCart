import React from 'react'
import './style.css'
const Filters = (props: any) => {
    return (
        <div className="filter">
            <header><a>Filter</a></header>
            <div className="filter-colour">
                <span>Colour</span>

            </div>

            <div className="filter-colour">
                <span>Brand</span>

            </div>

            <div className="filter-colour">
                <span>Price</span>
                <div className="price-select">
                    <select id="sf-size-min" name="sf-size-min" className="price-dropdown">
                        <option >min</option>
                        <option label="0" value="0">0</option>
                        <option label="5000" value="5000">5,000</option>
                        <option label="10000" value="10000">10,000</option>
                        <option label="15000" value="15000">15,000</option>
                        <option label="20000" value="20000">20,000</option>
                        <option label="25000" value="25000">25,000</option>
                    </select>
                    <select id="sf-size-max" name="sf-size-max" className="price-dropdown">
                        <option >max</option>
                        <option label="0" value="0">0</option>
                        <option label="5000" value="5000">5,000</option>
                        <option label="10000" value="10000">10,000</option>
                        <option label="15000" value="15000">15,000</option>
                        <option label="20000" value="20000">20,000</option>
                        <option label="25000" value="25000">25,000</option>
                    </select>
                </div>
            </div>

            <div className="filter-colour">
                <span>Discount</span>

            </div>
        </div>
    )
}

export default Filters