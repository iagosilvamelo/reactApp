import React, { Component } from 'react';
import api from '../../services/api';
import './style.css';

export default class Main extends Component {
    state = {
        products: []
    };

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get("/Product");
        this.setState({ products: response.data.docs });
    };

    render() {
        const { products } = this.state;
        return (
            <section>
                <h1>Main page</h1>
                <h3>Contagem de produtos: { products.length }</h3>

                <div className="product-list">
                    {products.map( product => (
                        <article key={ product._id }>
                            <strong>{ product.title }</strong>
                            <p>{ product.description }</p>

                            <a href="#">Acessar</a>
                        </article>
                    ))}
                </div>
            </section>
        )
    }
}