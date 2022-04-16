import React, { Component } from 'react'
import GlassesIem from '../BaiTapGlasses/GlassesIem'
const data =
    [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./img/glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./img/glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./img/glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./img/glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./img/glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./img/glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./img/glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./img/glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./img/glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]

export default class BTGlasses extends Component {

    state = {
        chiTiet: {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./img/glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }


    xemChiTiet = (sanPhamClick) => {
        this.setState({
            chiTiet: sanPhamClick
        })
    }

    renderSanPham = () => {
        return data.map((sp, index) => {
            return <div className='col-2 mt-2' key={index}>
                <GlassesIem sp={sp} xemChiTiet={this.xemChiTiet} />
            </div>
        })
    }

    render() {
        let { id, name, url, desc } = this.state.chiTiet;
        return (
            <div >
                <div style={{ position: "fixed", backgroundSize: '100%', width: '100%', height: '100%', backgroundImage: "url('./img/glassesImage/background.jpg')" }}>
                    <div style={{ position: 'fixed', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)' }}>
                        <div style={{ textAlign: 'center', position: 'relative', backgroundColor: 'rgba(0,0,0,0.6)' }}  >
                            <h3 className='text-white' style={{ padding: '20px 0' }}>TRY GLASSES APP ONLINE</h3>
                        </div>

                        <div style={{ width: '60%', margin: ' 0 auto' }} className='mt-5'>

                            <div style={{ float: 'left', width: '40%', position: 'relative', marginBottom: '100px' }}>
                                <img src="./img/glassesImage/model.jpg" style={{ height: '300px', width: '73%' }} ></img>
                                <div style={{ position: 'absolute', top: '70px', left: '58px' }}>
                                    <img src={url} style={{ width: '150px' }}></img>
                                </div>
                                <div style={{ position: 'absolute', bottom: 0, right: '100px', backgroundColor: 'orange' }}>
                                    <h5 style={{ paddingLeft: '10px', color: 'blue' }}>{name}  </h5>
                                    <div style={{ width: '90%', margin: ' 0 auto' }}>
                                        <p>{desc}</p>
                                    </div>
                                </div>
                            </div>
                            <div style={{ float: 'right', width: '40%' }} >
                                <img src='./img/glassesImage/model.jpg' style={{ height: '300px', width: '73%' }} ></img>

                            </div>

                            <div className='row ' style={{ clear: 'both', backgroundColor: 'white', padding: '15px 0' }}>
                                {this.renderSanPham()}
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        )
    }
}
