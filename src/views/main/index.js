import React, { Component } from 'react';
import api from '../../services/api';
import './style.css';

export default class Main extends Component {
    state = {
        products: [],
        productInfo: {},
        page: 1
    };

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/Product?page=${page}`);
        const { docs, ...productInfo } = response.data;

        this.setState({ products: docs, productInfo, page });
    };

    prevPade = () => {
        const { page } = this.state;
        if (page === 1) return;
        const pageNumber = page - 1;
        this.loadProducts(pageNumber);
    };

    nextPade = () => {
        const { page, productInfo } = this.state;
        if (page === productInfo.page) return;
        const pageNumber = page + 1;
        this.loadProducts(pageNumber);
    };

    render() {
        const { products } = this.state;
        return (
            <section>
                <div className="product-list">
                    {products.map( product => (
                        <article key={ product._id }>
                            <strong>{ product.title }</strong>
                            <p>{ product.description }</p>

                            <a href="#">Acessar</a>
                        </article>
                    ))}

                    <div className="actions">
                        <button onClick={ this.prevPade }>Anterior</button>
                        <button onClick={ this.nextPade }>Próximo</button>
                    </div>
                </div>
            </section>
        )
    }
}