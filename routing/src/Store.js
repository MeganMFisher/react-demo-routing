import React, { Component } from 'react';
import {getProducts} from './services/products';
import { Link } from 'react-router';

class Store extends Component {
    constructor(props){
        console.log('CONSTRUCTING STORE COMPONENT')
        super(props)

        this.state = {
            products: []
        }
    }


    componentDidMount() {
        console.log('COMPONENT HAS MOUNTED')
        getProducts().then(products => {
            console.log('GOT PRODUCTS')
            this.setState({
                products: products
            })
        })
    }

    // lifecycle events

     componentWillMount(){ 
         //initial fire
        console.log('Component is about to mount')
    }

     componentWillUpdate(){ 
        console.log('Component is about to update')
    }

    componentDidUpdate(){ 
        console.log('Component has update')
    }


    render() {
        console.log('RENDERING COMPONENT')
        const products = this.state.products.map((product, i) => {
            return (<div key={i}>
            <Link to={"/product/" + product.id}>{product.title}</Link>
            </div>
            )
        });

        return (
            <div>
                <h1>RAAWWWRRRRRRR Store</h1>
                {products[0] ? products : 'loading...'}
            </div>
        )
    }
}

export default Store;