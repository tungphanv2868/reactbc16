import React, { Component } from 'react'
//kết nối đến redux
import { connect } from 'react-redux'
class KetQuaTroChoi extends Component {
  render() {
      console.log('props', this.props);
      let {banChon, soBanThang, tongSoBanChoi} = this.props.xucXacState;
    return (
      <div className='text-center'>
          <div>
              <span>Bạn chọn: <span
              className='text-success'>{banChon ? 'Tài' : 'Xĩu'}</span> </span>
          </div>
          <div>
              <span>Tổng số bàn thắng: <span
              className='text-danger'>{soBanThang}</span></span>
          </div>
          <div>
              <span>Tổng số bàn chơi: <span
              className='text-warning'>{tongSoBanChoi}</span></span>
          </div>
          <button className='btn btn-success' style={{marginTop:'20px'}} 
          onClick={()=>{
              const action = {
                  type: 'PLAY_GAME',
                  //mangXucXac: [{},{},{}]
              };
              //gửi action lên redux
              this.props.dispatch(action)
          }}>
              <div className='text-while pl-5 pr-5 pt-2 pb-2 display-4'>
                  Play game
              </div>
          </button>
      </div>
    )
  }
}

//Viết hàm lấy dữ liệu state từ redux về biến thành props component
const mapStateToProps = (rootReducer) => {
    return{
        xucXacState: rootReducer.XucXacReducer
    }
}
//kết nối với redux
export default connect(mapStateToProps)(KetQuaTroChoi);
