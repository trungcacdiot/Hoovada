import "./HeaderTitle.css";


function HeaderTitle({title}){
    return(
        <div className="header_quan_ly_cau_hoi">
            <div className="header_title">
                {title}
                <div className="title_decor"></div>
            </div>
        </div>
    )
}

export default HeaderTitle;