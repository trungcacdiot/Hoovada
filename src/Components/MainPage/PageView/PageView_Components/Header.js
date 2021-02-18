import SearchIcon from "../../../../picture_icon/PageViewIcon/SearchIcon";
import BellIcon from "../../../../picture_icon/PageViewIcon/BellIcon";
import MessagesIcon from "../../../../picture_icon/PageViewIcon/MessagesIcon";

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
                    <BellIcon/>
                    <p>Thông báo</p>
                </div>
                <div className="Header_messages">
                    <MessagesIcon/>
                    <p>Tin nhắn</p>
                </div>
                <div className="Admin_picture"></div>
            </div>
            
        </div>
    )
}

export default Header;