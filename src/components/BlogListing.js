import React, {useState, useEffect, Component } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Prod from './Item'
import client from '../sanity'

// const DateSpan = styled.span`
//   display: none;
//   color: #999;
//   margin-left: 0.5em;

//   @media (min-width: 520px) {
//     display: inline;
//   }
// `;

// const StyledBlogListing = styled.ul`
//   list-style: none;
// `;

// const StyledBlogItem = styled.li`
//   font-size: 1.8rem;
//   // text-decoration: none;
//   margin-bottom: 0.5em;
// `;
// const StyledBlogLink = styled(Link)``;

// const BlogListing = (props) => {

//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     onLoad()
//   }, [])

//   async function onLoad() {
//     try {
//       const productsTwo = await client.fetch(` *[_type == 'product']`);
//       console.log(productsTwo);
//       // setProducts(productsTwo);
    
//     }
//     catch (e) {
//       if (e !== "No current product") {
//         alert(e)
//       }
//     }
//   }
//   return(
//     <React.Fragment>
//       {console.log(products)}
//       {products.map((product, index) => {
//       return(
//       <Prod product={product}/>
//   )})}
//     </React.Fragment>
//   )
// }
// export default BlogListing;

export default class BlogClass extends Component {

  constructor(props) {
      super(props);

      this.state = {
          products: [],
          cart: []
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
