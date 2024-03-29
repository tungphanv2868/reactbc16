import logo from './logo.svg';
import './App.css';
import CartJSX from "./component/CartJSX";
import CartFunc from "./component/CartFunc.jsx";
import BaiTapLayout from './component/BaiTapLayout/BaiTapLayout';
import Databinding from './Databinding/Databinding';
import HandleEvent from './HandleEvent/HandleEvent';
import StateDemo from './StateDemo/StateDemo';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import DemoProps from './Props/DemoProps/DemoProps';
import ProductList from './Props/ShoesShop/ProductList';
import DemoXemChiTiet from './Props/DemoXemChiTiet/DemoXemChiTiet';
import BTVN_Component from './component/BTVN_Tung_ Component/BTVN_Component';
import BTGioHang from './DemoRedux/BTGioHang/BTGioHang';
import BTGlasses from './BaiTapGlasses/BTGlasses';
import BaiTapGameXucXac from './DemoRedux/BaiTapGameXucXac/BaiTapGameXucXac';
import BaiTapBookingTicket from './BaiTapBookingTicket/BaiTapBookingTicket';





//componet app sẽ là nơi chứa toàn bộ giao diện của ứng dụng
function App() {
  return (
    <div className="App">
      {/* <CartJSX/>
      <CartFunc/> */}

      {/* <BaiTapLayout/> */}
      {/* <Databinding/> */}
      {/* <HandleEvent/> */}

      {/* <StateDemo/> */}

      {/* <RenderWithMap/> */}

      {/* <DemoProps/> */}

      {/* <ProductList/> */}

      {/* buổi 4 */}
      {/* <DemoXemChiTiet/> */}
      
      {/* Buổi 5:redux */}
      {/* <BTGioHang/> */}

      {/* <BaiTapGameXucXac/> */}



      {/* BTVN */}
      {/* 1 */}
      {/* <BTVN_Component/> */}
      {/* 2 */}
      {/* <BTGlasses/> */}
      {/* 3 */}
      <BaiTapBookingTicket/>
      
    </div>
  );
}

export default App;
