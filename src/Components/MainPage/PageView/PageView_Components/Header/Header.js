import "./Header.css";
import SearchIcon from "../../../../../picture_icon/PageViewIcon/SearchIcon";
import BellIcon from "../../../../../picture_icon/PageViewIcon/bell.svg";
import MessagesIcon from "../../../../../picture_icon/PageViewIcon/MessagesIcon";
import ArrowDownIcon from "../../../../../picture_icon/PageViewIcon/ArrowDownIcon";


function Header(){
    return(
        <div className="PageView_header">
            <div>
                <input className="PageView_search" placeholder="Nhập từ khóa cần tìm kiếm">
                </input>
                <SearchIcon/>
            </div>
            
            <div className="Header_bell_container">
                <div className="Header_bell">
                    <img src={BellIcon}/>
                    <p>Thông báo</p>
                </div>
                <div className="Header_messages">
                    <MessagesIcon/>
                    <p>Tin nhắn</p>
                </div>
                <div className="Admin_picture"></div>
                <div className="Admin_info_header">
                    <div className="Admin_name">Tam Hoang</div>
                    <div className="Admin_email">tamhoang139@gmail.com</div>
                </div>
                <ArrowDownIcon/>
            </div>
        </div>
    )
}

export default Header;