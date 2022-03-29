import React, { Component } from 'react'

export default class CardProduct extends Component {
  render() {
    return (
        //this.props: là thuộc tính có sẳn của react class component dùng 
        //để nhận giá trị từ component cha truyền vào

        /*
            this.props là thuộc tính không thể gắn giá trị (readoly)
        */
       //this.props.name = 'abc';
       //Phân biệt state và props
       //+ Giống nhau: đều là thuộc tính có sẳn của react class component
       //=> dùng để chứa dữ liệu render lên giao diện
       /*
            + khác :
            this.state dùng để chứa giá trị thay dổi trên giao diện và có thể gán lại
            được thông qua phương thức setState.this.props nhận dữ liệu từ component
            cha truyền vào và không thể gán lại giá trị được (readoly value)
       */
      <div className='card'>
          <img src={this.props.img} alt="..." />
          <div className='card-body'>
              <p>{this.props.name}</p>
              <p>{this.props.price}</p>              
              <button className='btn btn-success'>Add to card</button>
          </div>
      </div>
    )
  }
}
