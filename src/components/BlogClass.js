import React, { Component } from "react";
import Prod from "./Item"
import client from '../sanity'


export default class BlogClass extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: []
        }
    }

    async componentDidMount() {
        try {
            const response = await client.fetch(` *[_type == 'product']`);
            this.setState({ products: response })
        } catch(e) {
            console.log(e)
        }
    }
    render() {
        return(
            <div>
                {this.state.products.map((product, index) => {
                    return(
                        <Prod product={product} />
                    )
                })}
            </div>
        )
    }
}