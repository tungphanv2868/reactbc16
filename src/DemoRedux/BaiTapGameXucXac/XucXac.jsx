import React, { Component } from 'react'
//kết nối đến redux
import { connect } from 'react-redux'
class XucXac extends Component {

    renderKetQua = () => {
        let tongDiem = this.props.mangXucXac.reduce((diem, xucXac) => {
            return diem + xucXac.diem;
        }, 0)
        let ketQua = tongDiem > 11 ? 'Tài' : 'Xĩu';

        return <p className='display-4 text-center'>{ketQua} - {tongDiem}</p>

    }

    render() {
        console.log('propsXucXac', this.props);

        return (
            <div className='row mt-3 text-center' style={{ paddingTop: '20px' }}>
                <div className='col-4'>
                    <button className='btn btn-danger'>
                        <div className='display-4 p-5' onClick={() => {
                            //Tạo ra 1 action gửi lên store
                            const action = {
                                type: 'DAT_CUOC',
                                banChon: true
                            }
                            //Dùng this.props.dispatch để gửi dữ liệu lên redux
                            this.props.dispatch(action);
                        }}>Tài</div>
                    </button>
                </div>

                <div className='col-4 '>
                    {this.props.mangXucXac.map((XucXac, index) => {
                        return <img key={index} width={50} height={50} src={XucXac.src} alt='...'></img>
                    })}

                    {/* <img width={50} height={50} src="./img/GameXucXac/video_19_game_xuc_xac/1.png" alt="" />
                    <img width={50} height={50} src="./img/GameXucXac/video_19_game_xuc_xac/1.png" alt="" />
                    <img width={50} height={50} src="./img/GameXucXac/video_19_game_xuc_xac/1.png" alt="" /> */}
                    <div className='mt-3'>
                        {this.renderKetQua()}
                    </div>
                </div>


                <div className='col-4'>
                    <button className='btn btn-danger'>
                        <div className='display-4 p-5' onClick={() => {
                            //Tạo ra 1 action gửi lên store
                            const action = {
                                type: 'DAT_CUOC',
                                banChon: false
                            }
                            //Dùng this.props.dispatch để gửi dữ liệu lên redux
                            this.props.dispatch(action);
                        }}>Xĩu</div>
                    </button>
                </div>

            </div>
        )
    }
}
const mapStateToProps = (rootReducer) => {
    return {
        mangXucXac: rootReducer.XucXacReducer.mangXucXac
    }
}

export default connect(mapStateToProps)(XucXac);

/**
    xử lý dispatch: 
    + cách 1: định nghĩa hàm mapDispatchToProps truyền vào tham số thứ 2 của
    hàm connect 
    + cách 2 : Bỏ trống tham số thứ 2 (Nếu truyền mapDispatch thì sẽ không sử dụng được cách này)
 */

