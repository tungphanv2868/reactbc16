import React, { Component } from 'react'
//kết nối redux
import { connect } from 'react-redux'
import SanPham from '../../Props/DemoXemChiTiet/SanPham'

class GioHangRedux extends Component {
    render() {
        console.log('this.props', this.props)
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>mã sp</th>
                        <th>tên sp</th>
                        <th>HÌnh ảnh</th>
                        <th>giá bán</th>
                        <th>số luong</th>
                        <th>thành tiền</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.gioHang.map((spGH, index) => {

                        return <tr key={index}>
                            <td>{spGH.maSP}</td>
                            <td>{spGH.tenSP}</td>
                            <td>
                                <img src={spGH.hinhAnh} alt="..." width={50} height={50} />
                            </td>
                            <td>{spGH.giaBan}</td>
                            <td>
                                <button className='btn btn-primary mr-2 'onClick={()=>{
                                    this.props.tangGiamSoLuong(spGH.maSP,1)
                                }}>+</button>
                                {spGH.soLuong}
                                <button className='btn btn-primary mr-2'onClick={()=>{
                                    this.props.tangGiamSoLuong(spGH.maSP,-1)
                                }}>-</button>
                            </td>

                            <td>{spGH.giaBan * spGH.soLuong}</td>
                            <td>
                                <button className='btn btn-danger' onClick={()=>{
                                    this.props.xoaGioHang(spGH.maSP)
                                }}>Xóa</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        )
    }
}
//Lấy state từ redux về biến thành props component
const mapStateProps = (rootReducer) => {
    //Muốn lấy dữ liệu nào về thì tạo ra thuộc tính lấy giá trị từ reduxs
    return {
        gioHang: rootReducer.gioHangState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHang: (maSPClick) => {
            console.log('maSPClick', maSPClick);
            const action = {
                type: 'XOA_GIO_HANG',
                maSPClick
            }
            //đưa dữ liệu lên redux
            dispatch(action);   
        },
        tangGiamSoLuong: (maSPClick,soLuong) => {
            console.log(maSPClick,soLuong);
            const action = {
                type: 'TANG_GIAM_SO_LUONG',
                maSPClick,
                soLuong
            }
            //dùng hàm dispatch từ redux để đưa dữ liệu lên store
            dispatch(action);
        }
    }
}

//cú pháp tạo ra 1 component có lien kết redux
export default connect(mapStateProps,mapDispatchToProps)(GioHangRedux);