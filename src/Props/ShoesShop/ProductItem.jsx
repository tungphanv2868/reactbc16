import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
      let {product} = this.props;
    return (
      <div className='card'>
          <div className='w-100'>
              <img src={product.image} className='w-100' alt="..." />
          </div>
          <div className='ml-2'>
              <p>{product.name}</p>
              <p>{product.price}</p>
              <button className='btn btn-dark text-while'>
                  <i class='fa fa-cart-arrow-down'></i>
                  Add to cards
              </button>
          </div>
      </div>
    )
  }
}
