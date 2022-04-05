import React, { Component } from 'react'
import SanPham from '../../Props/DemoXemChiTiet/SanPham'

//kết nối với redux
import { connect } from 'react-redux';

class SanPhamRedux extends Component {
    render() {
        let { sanPham } = this.props;
        return (
            <div className='card'>
                <img src={sanPham.hinhAnh} alt="..." className='w-100' height={300} />
                <div className='card-body'>
                    <p>{sanPham.tenSP}</p>
                    <p>{sanPham.giaSP}</p>
                    <button className='btn btn-success' onClick={()=>{
                        this.props.themGioHang(sanPham)
                    }}>Thêm giỏ hảng</button>
                </div>
            </div>
        )
    }
}
//mapDispatchToProps: là hàm tạo ra 1 props là 1 hàm dùng để đưa giá trị lên redux store
const mapDispatchToProps = (dispatch) => {
    return {
        themGioHang: (spClick) => {
            console.log('spClick', spClick);
            //Đưa dữ liệu lên redux
            const action ={
                type: 'THEM_GIO_HANG',//thuộc tính bắt buộc type
                spClick:spClick
            }
            //dùng hàm dispatch đưa dữ liệu lên
            dispatch(action);
        }
    }
}

export default connect(null, mapDispatchToProps)(SanPhamRedux)

