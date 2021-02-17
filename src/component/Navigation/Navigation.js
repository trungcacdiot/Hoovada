import Logo from "../../picture_icon/Logo";
import NavigationMenu from "../../picture_icon/NavigationMenu";
import "./Navigation.css";
import TongQuanIcon from "../../picture_icon/TongQuanIcon";
import QuestionIcon from "../../picture_icon/QuestionIcon";


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
                <div className="Question_title">Quản lý Câu hỏi</div>
                <div className="Navigation_line"></div>
            </div>  
        </div>
    )
}
export default Navigation;