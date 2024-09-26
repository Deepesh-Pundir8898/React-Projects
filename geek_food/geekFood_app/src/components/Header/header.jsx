import headerLogo from "./header-images/header-logo.svg";
import styles from "./header.module.css";


const Header = (props)=>{
    
    return (
        <nav>
            <div className={styles["header"]}>
            <a href="#">
                <img src={headerLogo} alt="" />
                <span>GeekFoods</span>
            </a>
            <ul className={styles["menu-container"]}>
                <li><a href={props.page} onClick={()=>props.setCurrentPage('home')} className={props.page=="home"?styles['active']:""}>Home</a></li>
                <li><a href={props.page} onClick={()=>props.setCurrentPage('quote')} className={props.page=="quote"?styles['active']:""}>Quote</a></li>
                <li><a href="">Resturants</a></li>
                <li><a href="">Foods</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <button className={styles['get-started-btn']}>Get Started</button>
            <div className={styles['mobile-view']}>
                <span></span><span></span><span></span>
            </div>
        </div>
        </nav>
        
    )
}
export default Header