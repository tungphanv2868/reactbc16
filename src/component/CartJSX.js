import React, { Component } from 'react'

export default class CartJSX extends Component {
  render() {
    return (
      <div className='card w-25'>
          <img src='https://picsum.photos/200' alt='...' className='w-100'/>
          <div className='card-body'>
              <p>Iphone</p>
              <p>1000$</p>
          </div>
      </div>
    )
  }
}
