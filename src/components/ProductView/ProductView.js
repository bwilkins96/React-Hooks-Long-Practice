import { React, useEffect, useState } from 'react';
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import './ProductView.css'

function ProductView({ products }) {

    // TODO: Replace with state variable
    const [sideOpen, setSideOpen] = useState(true);
    const [product, setProduct] = useState(false);

    useEffect(() => {
        console.log(`product changed to`, product);
        if (product) { setSideOpen(true) }
    }, [product]);

    useEffect(() => {
        console.log(`sideOpen changed to ${sideOpen}`);
        if (!sideOpen) { setProduct(false) }
    }, [sideOpen]);

    console.log("rendering ProductView");
    return (
        <div className="product-view">
            <div className="product-main-area">
                <h1>Products</h1>
                <div className="product-list">
                    {products.map(item =>
                        <ProductListItem
                            key={item.id}
                            product={item}
                            isSelected={product.id === item.id}
                            onClick={() => setProduct(item)}
                        />
                    )}
                </div>
            </div>
            <div className="product-side-panel">
                <div className="product-side-panel-toggle-wrapper">
                    <div className="product-side-panel-toggle"
                         onClick={() => setSideOpen(!sideOpen)}>
                        {sideOpen ? '>' : '<'}
                    </div>
                </div>
                <ProductDetails product={product} visible={sideOpen} />
            </div>
        </div>
    );
}

export default ProductView;
