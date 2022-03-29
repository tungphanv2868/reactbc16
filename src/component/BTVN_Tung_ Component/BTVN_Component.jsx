import React, { Component } from 'react'
import BTVN_Footer from './BTVN_Footer'
import BTVN_Header from './BTVN_Header'
import BTVN_S1 from './BTVN_S1'
import BTVN_S2 from './BTVN_S2'


export default class BTVN_Component extends Component {
  render() {
    return (
        <div>
            
            <BTVN_Header/>

            <div>
                <div>
                    <BTVN_S1/>
                </div>
                <div className='d-flex' style={{height: '75vh'}}>
                    <BTVN_S2/>
                </div>
            </div>
            <div style={{marginTop:'200px'}}>
                <BTVN_Footer/>  
            </div>
        </div>
    )
  }
}
