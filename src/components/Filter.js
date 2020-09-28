import React, { Component } from 'react';
import {connect} from 'react-redux';
import {filterProducts, sortProducts} from '../actions/productActions';

class Filter extends Component {
    render() {
        return (
            !this.props.filteredProducts?(
            <div>Loading...</div>
            ):(

            <div className="filter">
                <div className="filter-result">{this.props.filteredProducts.length} Products</div>
                <div className="filter-sort">
                    Order {" "}
                    <select value={this.props.sort} onChange={(e)=>this.props.sortProducts(this.props.filteredProducts, e.target.value)}>
                        <option value="latest">Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option> 
                        </select>
                        </div>
                <div className="filter-models">
                    Filter {" "}
                    <select value={this.props.models} onChange={(e)=>this.props.filterProducts(this.props.products, e.target.value)}>
                    <option value="">All</option>
                    <option value="XS">2015</option>
                    <option value="S">2016</option>
                    <option value="M">2017</option>
                    <option value="L">2018</option>
                    <option value="XL">2019</option>
                    <option value="XXL">2020</option>
                    </select> </div>
            </div>
            )
        )
    }
}
export default connect((state)=>({
    models: state.products.models,
    sort: state.products.sort,
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
}),
{
    filterProducts,
    sortProducts,

}
)(Filter);
     

