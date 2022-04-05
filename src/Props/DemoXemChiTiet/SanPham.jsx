import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        //Dùng props để lấy thoong tin từ component cha chuyền vào
        let { sanPham } = this.props;
        return (
            <div className='card'>
                <img src={sanPham.hinhAnh} alt="..." height={300} />
                <div className='card-body'>
                    <h3>{sanPham.tenSP}</h3>
                    <p>{sanPham.giaBan.toLocaleString()}</p>
                    <button className='btn btn-success' onClick={() => {
                        // this.xemChiTiet(dienThoai);
                        this.props.xemChiTiet(sanPham);
                    }}>Xem chi tiết</button>

                    <button className='btn btn-danger ml-2'
                        onClick={() => {
                            this.props.themGioHang(sanPham);
                        }}>Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }
}
