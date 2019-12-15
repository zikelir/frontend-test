import React, { Component } from 'react';
import { Router, Link } from "@reach/router"
import './categoriesList.css';

class CategoriesList extends Component {
    state = {
        categories: ["Action", "Adventure", "Comedy", "Fantasy"]
    }

    render() {
        const { categories } = this.state;
        console.log(categories)
        return (
            <div className="categories-page">
                <div className="categories-title">Welcome to <div className="product-name">Dream Movie</div>! Please select the category.</div>
                <div className="category-cards">
                    {categories.map((item, index) => {
                        return (
                            <Link to={`movies/`} className={`category-card ${item}`}>
                                {item}
                            </Link>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default CategoriesList;
