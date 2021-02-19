import {Switch, Route} from "react-router-dom";


import "./PageView.css";
import Header from "./PageView_Components/Header/Header"; 

function PageView(){
    return(
        <div className="Page_view">
            <Header/>
            <Switch>
                <Route path="/Quan-ly-cau-hoi">quản lý câu hỏi</Route>
                <Route path="/Quan-ly-bai-viet">quản lý bài viết</Route>
                <Route path="/Bao-xau">báo xấu</Route>
                <Route path="/Yeu-cau">yêu cầu</Route>
                <Route path="/Quan-ly-chu-de">quản lý chủ đề</Route>
                <Route path="/Quan-ly-thanh-vien">quản lý thành viên</Route>
                <Route path="/Quan-ly-quan-tri">quản lý quản trị </Route>
                <Route path="/Cau-hoi-an"> câu hỏi bị ẩn</Route>
                <Route path="/Thong-ke">thống kê</Route>
            </Switch>
        </div>
    )
}

export default PageView;