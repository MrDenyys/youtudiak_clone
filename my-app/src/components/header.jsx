import YouTuDiak from "../assets/YouTuDiak.png"
import searchIcon from "../assets/search-interface-symbol.png"
import makeVideo from "../assets/camera.png"
import message from "../assets/bell.png"
import user from "../assets/user.png"

function Header (){
    return (
        <div className="header">
            <div className="leftSide">
                <img src={YouTuDiak} alt="" />
            </div>
            <div className="centerSide">
                <div className="searchWraper">
                    <input type="text" placeholder="search" className="searchInput"/>
                    <button type="button" className="searchButton"><img src={searchIcon} alt="" className="searchImgInsideButton"/></button>
                </div>
            </div>
            <div className="rightSide">
                <button type="button"><img src={makeVideo} alt="" className="makeVideoHeaderBar" /></button>
                <button type="button"><img src={message} alt=""  className="messageHeaderBar" /></button>
                <button type="button"><img src={user} alt="" className="userHeaderBar"/></button>
            </div>
        </div>
    )
}

export default Header