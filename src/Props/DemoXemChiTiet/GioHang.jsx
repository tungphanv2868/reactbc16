import React, { Component } from 'react'
import SanPham from './SanPham';

export default class GioHang extends Component {
    render() {
        let { gioHang,xoaGioHang,tangGiamSoLuong } = this.props; //
        console.log(gioHang);
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Mã sản phẩm</th>
                        <th>Tên sản phẩm</th>
                        <th>Hình ảnh</th>
                        <th>Giá bán</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {gioHang.map((spGH, index) => {
                        return <tr key={index}>
                            <td>{spGH.maSP}</td>
                            <td>{spGH.tenSP}</td>
                            <td><img src={spGH.hinhAnh} alt="..." width={50} height={50} /></td>
                            <td>{spGH.giaBan.toLocaleString()}</td>
                            <btton className='btn btn-primary mr-2' 
                            onClick={()=>{
                                tangGiamSoLuong(spGH.maSP,1)
                            }}>+</btton>

                            {spGH.soLuong}

                            <button className='btn btn-primary ml-2'
                            onClick={()=>{
                                tangGiamSoLuong(spGH.maSP,-1)
                            }}>-</button>
                            <td>{(spGH.giaBan * spGH.soLuong.toLocaleString())}</td>
                            <td><button className='btn btn-danger'
                                onClick={()=>{
                                    xoaGioHang(spGH.maSP)
                                }}>Xóa</button></td>
                        </tr>
                    })}
                </tbody>
            </table>

        )
    }
}
