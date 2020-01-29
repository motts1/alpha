import React, { useEffect, useState } from 'react';
import imageUrlBuilder from "@sanity/image-url"
import client from '../sanity'
import BlockContent from "@sanity/block-content-to-react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col } from 'react-bootstrap'

const builder = imageUrlBuilder(client)
function urlFor(_ref) {
    return builder.image(_ref)
}

const Prod = (props) => {
    console.log(props);
    const { product } = props;
    return (
        <Col xs={12} md={4}>
            <React.Fragment>
                <div style={{
                    border: 'none',
                    borderRadius: '3px',
                    backgroundColor: 'blue',
                    boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 4px 0px",
                    fontSize: "20px",
                    paddingLeft: 6,
                    paddingRight: 6,
                    minWidth: 400,
                    maxWidth: 400,
                    textAlign: 'center',
                    marginLeft: 6,
                    marginRight: 6,
                    marginBottom: 2,
                    maxHeight: 800,
                    minHeight: 600,
                    color: 'black',
                }}>
                     <div>
                     <p style={{ fontSize: '30px', fontWeight: 'bold' }}> {product.title}
                        </p>
                        <div>
                            <img id="productimage" src={urlFor(product.image).height(400).width(300)} alt="productimage" /></div>
                        <p> ${product.price}.</p>
                        <p> {product.color}</p>
                        <p> {product.size} </p>
                        {/* <div style={{ maxHeight: 200 }}> <BlockContent blocks={product.description} projectId="qu2nwquy" dataset="kcj" /></div> */}
                        <div> id: {product.id}</div>
                        <div> # {product.sku}</div>
                        {/* <button onClick={() => addItem(product)} style={{ backgroundColor: 'black' }} > add to cart </button> */}
                        <div> {product.categories}</div>
</div>
                 </div>
             </React.Fragment>
         </Col>
     )
 }
export default Prod;