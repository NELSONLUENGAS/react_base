import React from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = ({ products }) => {
	return (
		<>
			<div className="products-grid">
				{products.length &&
					products.map((product) => (
						<Product
							key={product.id}
							id={product.id}
							title={product.title}
							price={product.price}
							description={product.description}
							image={product.image}
						/>
					))}
			</div>
		</>
	);
};

export default Products;
