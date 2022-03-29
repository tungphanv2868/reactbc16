import React, { Component } from 'react'

export default class HandleEvent extends Component {
    showMessage = () => {
        alert('hello work !!!')
    }
    sayHello = (name) => {
        alert('Hi' + name);
    }

  render() {
    return (
      <div className='container'>
          <h3>Handle event</h3>
          <button id='btn' className='btn btn-success' onClick={this.showMessage}>Click me!!</button>
          <hr />
          <h3>Xử lý sự kiện có tham số</h3>
          <button className='btn btn-success' onClick={this.sayHello.bind(this,'Tùng')}>Say Hello</button>
          <button className='btn btn-primary' onClick={() => {this.sayHello('Văn Tùng'); //Gọi nhiều hàm cùng 1 lúc
        }}>Say Hello</button>
      </div>
    )
  }
}
