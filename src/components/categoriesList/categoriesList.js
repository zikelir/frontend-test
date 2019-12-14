import React, { Component } from 'react';

class CategoriesList extends Component {
    state = {
        categories: ["Action","Adventure","Animation","Comedy","Fantasy","Horror","Mystery"]
    }

    render() {
        const { categories } = this.state;
        console.log(categories)
        return (
                categories.map((item, index) => {
                    return (<div>{item}</div>)
                })            
          )
    }
}

export default CategoriesList;
