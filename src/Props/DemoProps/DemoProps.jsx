import React, { Component } from 'react'
import CardProduct from './CardProduct'
import UserDetail from './UserDetail'

export default class DemoProps extends Component {

    hocVien = {
        hoTen:'Nguyễn Văn A',
        ngaySinh: '10-10-2010',
        email:'nguyenvana@gmail.com',
        soDienThoai:'0909090909',
        hinhAnh: 'https://i.pravatar.cc?u=22',
    }

    danhSachHocVien = [
        {
            hoTen:'Nguyễn Văn A',
            ngaySinh: '10-10-1999',
            email:'nguyenvana@gmail.com',
            soDienThoai:'0909090909',
            hinhAnh: 'https://i.pravatar.cc?u=22',
        }, 
        {
            hoTen:'Nguyễn Văn B',
            ngaySinh: '10-10-2010',
            email:'nguyenvanb@gmail.com',
            soDienThoai:'0909090909',
            hinhAnh: 'https://i.pravatar.cc?u=23',
        },
        {
            hoTen:'Trần Thị C',
            ngaySinh: '10-10-2010',
            email:'tranthic@gmail.com',
            soDienThoai:'0909090909',
            hinhAnh: 'https://i.pravatar.cc?u=24',
        }
    ]
    
    renderHocVien = () =>{
        let result = this.danhSachHocVien.map((hv, index) => {
            return <div className='col-6 mt-2' key={index}>
                <UserDetail hocVien={hv}/>
            </div>
        })
        return result;
    }

  render() {
    return (
      <div className='container'>
          <h3>Demo Props</h3>
          <div className='w-25'>
              <CardProduct name="Iphone" price="1000" img="https://i.pravatar.cc?u=5"/>
          </div>

          <div className='w-25'>
              <CardProduct name="SamSung" price="2000" img="https://i.pravatar.cc?u=10"/>
          </div>

          <hr />
          <h3>Thông tin cá nhân</h3>
          <UserDetail hocVien={this.hocVien}/>

          <hr />
          <h3>Danh sách học viên</h3>
          <div className='row'>
              {this.renderHocVien()}
          </div>

      </div>
    )
  }
}
