import { combineReducers, createStore } from "redux";
import GioHang from "../Props/DemoXemChiTiet/GioHang";

import { GioHangReducer } from "./reducers/GioHangReducers";
const stateGioHangDefault = [
    {maSP: 2, tenSP: 'Meizu 16Xs', hinhAnh: './img/meizuphone.jpg', soLuong: 1, giaBan: 7600000},
]

const rootReducer = combineReducers({
    //các state của ứng dụng đặt tại đây
    gioHangState: GioHangReducer,
    //nhiều state
    stateB : (state = 0, action) => {
        console.log('action', action);
        return state;
    },
    statec : (state = '', action) => {
        console.log('action', action);
        return state;
    },

});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());