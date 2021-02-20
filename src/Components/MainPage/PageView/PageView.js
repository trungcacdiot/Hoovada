import {Switch, Route} from "react-router-dom";


import "./PageView.css";
import Header from "./Header"; 
import QuanLyCauHoi from "../../QuanLyCauHoi/QuanLyCauHoi";
import QuanLyBaiViet from "../../QuanLyBaiViet/QuanLyBaiViet";
import BaoXau from "../../BaoXau/BaoXau";
import YeuCau from "../../YeuCau/YeuCau";
import QuanLyChuDe from "../../QuanLyChuDe/QuanLyChuDe";
import QuanLyThanhVien from "../../QuanLyThanhVien/QuanLyThanhVien"
import QuanLyQuanTri from "../../QuanLyQuanTri/QuanLyQuanTri";
import TraLoiBiAn from "../../TraLoiBiAn/TraLoiBiAn";
import ThongKe from "../../ThongKe/ThongKe";

function PageView(){
    return(
        <div className="Page_view">
            <Header/>
            <Switch>
                <Route path="/Quan-ly-cau-hoi"><QuanLyCauHoi/></Route>
                <Route path="/Quan-ly-bai-viet"><QuanLyBaiViet/></Route>
                <Route path="/Bao-xau"><BaoXau/></Route>
                <Route path="/Yeu-cau"><YeuCau/></Route>
                <Route path="/Quan-ly-chu-de"><QuanLyChuDe/></Route>
                <Route path="/Quan-ly-thanh-vien"><QuanLyThanhVien/></Route>
                <Route path="/Quan-ly-quan-tri"><QuanLyQuanTri/> </Route>
                <Route path="/Cau-hoi-an"><TraLoiBiAn/></Route>
                <Route path="/Thong-ke"><ThongKe/></Route>
            </Switch>
        </div>
    )
}

export default PageView;