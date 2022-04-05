import React, { Component } from 'react'
import GioHang from './GioHang'
import SanPham from './SanPham'

export default class DemoXemChiTiet extends Component {

    dsSanPham = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]

    //xác định sản phẩm chi tiết là dữ liệu thay đổi => state
    state = {
        sanPhamChiTiet: {
            "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP",
            "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg"
        },

        gioHang: [
            { maSP: 2, tenSP: 'Meizu 16Xs', hinhAnh: './img/meizuphone.jpg', soLuong: 1, giaBan: 7600000 }
        ]
    }
    //state đặt ở đâu thì hàm gọi setState sẽ đặt cùng với state

    xemChiTiet = (sanPhamClick) => {
        this.setState({
            sanPhamChiTiet: sanPhamClick
        })
    }

    tangGiamSoLuong = (maSPClick,soLuong)=>{
        console.log('maSPClick',maSPClick);
        console.log('soLuong',soLuong);
        let {gioHang} = this.state;
        //tìm ra sản phẩm
        let spGH = gioHang.find(sp => sp.maSP === maSPClick);
        if(spGH){
            //+ số lượng
            spGH.soLuong += soLuong;
            if(spGH.soLuong < 1){
                if(window.confirm('bạn có muốn xóa sp không ??')){
                    //xử lý xóa khi số lương sau khi trừ nhỏ hơn 1
                    gioHang = gioHang.filter(sp => sp.maSP !== maSPClick);
                    this.setState({
                        gioHang:gioHang
                    })
                    return
                }
                spGH.soLuong += 1;
            }
        }
        this.setState({
            gioHang:gioHang
        })
    }

    //Định nghĩa hàm xoaGioHang tại nơi chứa state gioHang
    xoaGioHang = (maSPClick) => {
        console.log('maSPClick', maSPClick);
        //xóa => tìm ra sản phẩm có mã chứa trong giỏ hàng và xóa đi

        let {gioHang} = this.state;

        //cách 1: dùng findIndex
        // let index = gioHang.findIndex(sp=> sp.maSP === maSPClick);
        // if(index != -1){
        //     if(window.confirm('bạn có muốn xóa sản phẩm khỏi giỏ hàng??')){
        //         gioHang.splice(index,1)
        //     }
        // }
        //setState

        //cách 2: 
        if (window.confirm('bạn có muốn xóa sản phẩm khỏi giỏ hàng??')){
            gioHang = gioHang.filter(sp => sp.maSP !== maSPClick);
        }
        

        this.setState({
            gioHang:gioHang
        })
        
    }

    themGioHang = (sanPhamClick) => {
        console.log('sanPhamClick', sanPhamClick);
        //từ sản phẩm click tạo ra sản phẩm có thuộc tính số lượng
        let spGioHang = { ...sanPhamClick, soLuong: 1 };

        //Lấy ra giỏ hàng từ state và xử lý
        let { gioHang } = this.state;
        //kt sp có trong giỏ hàng hay chưa
        let spGH = gioHang.find(sp => sp.maSP === sanPhamClick.maSP);
        if (spGH) { //có trong giỏ hàng
            spGH.soLuong += 1;
        } else {
            //không tồn tại trong giỏ hàng
            gioHang.push(spGioHang);
        }
        //setState
        this.setState({
            gioHang: gioHang
        })
    }

    tinhTongSoLuong = () => {
        let tongSoLuong = this.state.gioHang.reduce((soLuong,spGioHang,index) =>{
            return soLuong += spGioHang.soLuong;
        }, 0)
        return tongSoLuong;
    }

    render() {
        let { maSP, tenSP, manHinh, cameraSau, cameraTruoc, giaBan, heDieuHanh, hinhAnh, ram, rom } = this.state.sanPhamChiTiet;
        return (
            <div className='container'>
                <div className='text-right'>
                    <span className='text-danger' style={{ cursor: 'pointer' }}>Giỏ hàng({this.tinhTongSoLuong()})</span>
                </div>
                <GioHang gioHang={this.state.gioHang} 
                xoaGioHang={this.xoaGioHang} tangGiamSoLuong={this.tangGiamSoLuong}/>

                <h3 className='text-center'>Danh Sách sản phẩm</h3>
                <div className='row'>
                    {this.dsSanPham.map((dienThoai, index) => {
                        return <div className='col-4' key={index}>
                            <SanPham themGioHang={this.themGioHang}
                                sanPham={dienThoai} xemChiTiet={this.xemChiTiet}/>
                        </div>
                    })}

                </div>

                <div className='mt-5 row'>
                    <div className='col-4'>
                        <h3>{tenSP}</h3>
                        <img src={hinhAnh} alt="..." className='w-100' height={300} />
                    </div>
                    <h3>Thông số kỹ thuật</h3>
                    <div className='col-8'>
                        <table className='table'>
                            <tbody>
                                <tr>
                                    <th>Màn hình</th>
                                    <th>{manHinh}</th>
                                </tr>
                                <tr>
                                    <th>hệ điều hành</th>
                                    <th>{heDieuHanh}</th>
                                </tr>
                                <tr>
                                    <th>camera trước</th>
                                    <th>{cameraTruoc}</th>
                                </tr>
                                <tr>
                                    <th>camera sau</th>
                                    <th>{cameraSau}</th>
                                </tr>
                                <tr>
                                    <th>Ram</th>
                                    <th>{ram}</th>
                                </tr>
                                <tr>
                                    <th>Rom</th>
                                    <th>{rom}</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
