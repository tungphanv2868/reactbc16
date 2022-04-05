import React, { Component } from 'react'

export default class GlassesIem extends Component {
    render() {
        let { sp } = this.props;
        return (
            <button style={{ outline: 'none', border: 'none', backgroundColor: 'white' }}>

                <img src={sp.url} style={{ width: '100%' }} onClick={() => {
                    this.props.xemChiTiet(sp);
                }}></img>
            </button>


        )
    }
}
