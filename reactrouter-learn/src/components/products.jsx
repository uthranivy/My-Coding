import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class products extends Component {

  state = {
    products: [
      {id: 1, name: "Product 1"},
      {id: 2, name: "Product 2"},
      {id: 3, name: "Product 3"},
    ]
  }

  render(){ 
      return (
        <div className="container"> 
          <ul className="list-group">
            {this.state.products.map(product => (
              <li key={product.id} className="list-group-item">
                  <Link to={`/products/${product.id}`} > {product.name}</Link>
                  </li>
            ))} 
            </ul>
        </div>
      );
    } 
  }
  
  export default products;