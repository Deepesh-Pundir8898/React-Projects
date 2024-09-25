import styles from "./HomeCard.module.css"
import Author from "./images/card-author.avif"

const HomeCard = (props)=>{
    return (
        <div className={styles['card-container']}>
            <div className={styles['desc']}>
           {props.desc}
            </div>
            <div className={styles['author-details']}>
                <div className={styles['author-img']}>
                    <img src={Author} alt="" />
                </div>
                <div className={styles["author-about"]}>
                    <p className={styles['auhtor-name']}>Gladis Lennon</p>
                    <p className={styles['desigination']}>Head of SEO</p>
                </div>
            </div>
        </div>
    )
}
export default HomeCard;