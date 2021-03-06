import React from "react";
import Product from "../components/Product";
import data from "../data";

export default function HomePage() {
	return (
		<div>
			<div id="div-2" className="ad-slot-home-page"></div>
			<div className="row center">
				{data.products.map((product) => (
					<Product key={product.id} product={product}></Product>
				))}
			</div>
		</div>
	);
}
