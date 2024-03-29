import React from "react";
import '../styles/collections.css';

export default function CollectionsPage() {

    const product = {
        product1: {
            name: "product1",
            image: "this will be replaced with an image for product 1",
            desc: "this is a description for product 1",
            price: "$23",
        },
        product2: {
            name: "product2",
            image: "this will be replaced with an image for product 2",
            desc: "this is a description for product 2",
            price: "$50",
        },
        product3: {
            name: "product3",
            image: "this will be replaced with an image for product 3",
            desc: "this is a description for product 3",
            price: "$110",
        },
        product4: {
            name: "product4",
            image: "this will be replaced with an image for product 4",
            desc: "this is a description for product 4",
            price: "$35",
        },
        product5: {
            name: "product5",
            image: "this will be replaced with an image for product 5",
            desc: "this is a description for product 5",
            price: "$25",
        },
        product6: {
            name: "product6",
            image: "this will be replaced with an image for product 6",
            desc: "this is a description for product 6",
            price: "$70",
        },
        product7: {
            name: "product7",
            image: "this will be replaced with an image for product 7",
            desc: "this is a description for product 7",
            price: "$50",
        },
        product8: {
            name: "product8",
            image: "this will be replaced with an image for product 8",
            desc: "this is a description for product 8",
            price: "$55",
        },
        
    }

    const products = [product.product1, product.product2, product.product3, product.product4, product.product5, product.product6, product.product7, product.product8];

    return (
        <div id="collections" className="collections_container">
            {products.map((product, i) => (
                <div className="product_card">
                    <h1>{product.name}</h1>
                    <p>{product.desc}</p>
                    <p>{product.image}</p>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
    )
}