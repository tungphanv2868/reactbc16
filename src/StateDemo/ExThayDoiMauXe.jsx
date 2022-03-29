import React, { Component } from 'react'

export default class ExThayDoiMauXe extends Component {

  state = {
    imgCar: './img/products/black-car.jpg'
  }

  handleChangeColor = (color) => {
    let newImgCar = `./img/products/${color}-car.jpg`
    this.setState({
      imgCar : newImgCar
    })
  }

  

  render() {
    return (
      <div className='container'>
          <h3>Bài Tập 3: Thay đổi màu xe</h3>
          <div className='row'>
            <div className='col-6'>
              <img src={this.state.imgCar} alt="..." className='w-100'/>
              
            </div>
            <div className='col-6'>
              <div className='row'>
                <div className='col-3'>
                  <button className={{backgroundColor:'black', color:'while'}} onClick={()=>{
                    this.handleChangeColor('black');
                  }}>Black-car</button>
                </div>
                <div className='col-3'>
                <button className={{backgroundColor:'red', color:'while'}} onClick={()=>{
                  this.handleChangeColor('red');}}>red-car</button>
                </div>
                <div className='col-3'>
                  <button className={{backgroundColor:'silver', color:'while'}} onClick={()=>{
                    this.handleChangeColor('silver');}}>silver-car</button>
                </div>
                <div className='col-3'>
                <button className={{backgroundColor:'#ccc', color:'while'}} onClick={()=>{
                  this.handleChangeColor('#ccc');}}>steel-car</button>
                </div>
              </div>
              
            </div>
          </div>
          
      </div>
    )
  }
}
