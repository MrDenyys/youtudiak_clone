import YouTuDiak from "../assets/YouTuDiak.png"
import searchIcon from "../assets/search-interface-symbol.png"
import makeVideo from "../assets/camera.png"
import message from "../assets/bell.png"
import user from "../assets/user.png"
import styles from "../components/header.module.css"

function Header (){
    return (
        <div className={styles.header}>
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
                <button type="button"><img src={makeVideo} alt="" className={styles.button} /></button>
                <button type="button"><img src={message} alt=""  className={styles.button} /></button>
                <button type="button"><img src={user} alt="" className={styles.button}/></button>
            </div>
        </div>
    )
}

export default Header