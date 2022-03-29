import React, { Component } from 'react'
import BTFooter from './BTFooter'
import BTHeader from './BTHeader'
import BTNavL from './BTNavL'
import BTNavR from './BTNavR'

export default class BaiTapLayout extends Component {
  render() {
      //Nội dung của component phải được chứa trong 1 thẻ nào đó bao phủ
    return (
      <div>
          <div>Bài Tập Layout</div>
          <BTHeader/>
          
          <div className='d-flex' style={{height: '75vh'}}>
              <div className='w-50'>
                <BTNavL/>
              </div>
              <div className='w-50'>
                <BTNavR/>
              </div>
          </div>
            <BTFooter/>
      </div>
    )
  }
}
