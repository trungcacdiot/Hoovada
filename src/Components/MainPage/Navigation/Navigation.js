import "./Navigation.css";
import Logo from "../../../picture_icon/Logo";
import NavigationMenu from "../../../picture_icon/NavigationMenu";
import TongQuanIcon from "../../../picture_icon/NavigationIcon/TongQuanIcon";
import QuestionIcon from "../../../picture_icon/NavigationIcon/QuestionIcon";
import BaiVietIcon from "../../../picture_icon/NavigationIcon/BaiVietIcon";
import BaoXauIcon from "../../../picture_icon/NavigationIcon/BaoXauIcon";
import YeuCauIcon from "../../../picture_icon/NavigationIcon/YeuCauIcon";
import QuanLyChuDeIcon from "../../../picture_icon/NavigationIcon/QuanLyChuDeIcon";
import QuanLyThanhVienIcon from "../../../picture_icon/NavigationIcon/QuanLyThanhVienIcon";
import QuanLyQuanTriIcon from "../../../picture_icon/NavigationIcon/QuanLyQuanTriIcon";
import HideIcon from "../../../picture_icon/NavigationIcon/HideIcon";
import ThongKeIcon from "../../../picture_icon/NavigationIcon/ThongKeIcon";


function Navigation(){
    return(
        <div>
            <div className="Navigation_logo_container">
                <Logo/>
                <div className="Navigation_logo_container_admin" >ADMIN</div>
                <NavigationMenu/>
            </div>

            <div className="Navigation_component">
                <TongQuanIcon/>
                <div className="Tong_quan_title">Tổng quan</div>
                <div className="Navigation_line"></div>
            </div>  

            <div className="Navigation_component">
                <QuestionIcon/>
                <div className="title">Quản lý Câu hỏi</div>
                <div className="Navigation_line"></div>
            </div>

            <div className="Navigation_component">
                <BaiVietIcon/>
                <div className="title">Quản lý Bài viết</div>
                <div className="Navigation_line"></div>
            </div>

            <div className="Navigation_component">
                <BaoXauIcon/>
                <div className="title">Báo xấu/trùng lặp</div>
                <div className="Navigation_line"></div>
            </div>

            <div className="Navigation_component">
                <YeuCauIcon/>
                <div className="title">Yêu cầu</div>
                <div className="Navigation_line"></div>
            </div> 

            <div className="Navigation_component">
                <QuanLyChuDeIcon/>
                <div className="title">Quản lý Chủ để</div>
                <div className="Navigation_line"></div>
            </div> 

            <div className="Navigation_component">
                <QuanLyThanhVienIcon/>
                <div className="title">Quản lý Thành viên</div>
                <div className="Navigation_line"></div>
            </div> 

            <div className="Navigation_component">
                <QuanLyQuanTriIcon/>
                <div className="title">Quản lý Quản trị</div>
                <div className="Navigation_line"></div>
            </div>    

            <div className="Navigation_component">
                <HideIcon/>
                <div className="title">Câu trả lời đã bị ẩn</div>
                <div className="Navigation_line"></div>
            </div>  

            <div className="Navigation_component">
                <ThongKeIcon/>
                <div className="title">Thống kê & báo cáo</div>
                <div className="Navigation_line"></div>
            </div>  

        </div>
    )
}
export default Navigation;