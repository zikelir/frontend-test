import React, { Component } from 'react';
import { Link } from "@reach/router"
import './categoriesList.css';

class CategoriesList extends Component {
    state = {
        categories: ["Action", "Adventure", "Comedy", "Fantasy"]
    }

    render() {
        const { categories } = this.state;
        return (
            <div className="categories-page">
                <div className="categories-title">Welcome to <div className="product-name">Dream Movie</div>! Please select the category.</div>
                <div className="category-cards">
                    {categories.map((item, index) => {
                        return (
                            <Link to={`movies/:${item}`} className={`category-card ${item}`} key={index} category={item}>
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
