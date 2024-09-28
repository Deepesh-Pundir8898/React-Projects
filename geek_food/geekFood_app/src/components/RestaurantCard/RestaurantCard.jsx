import styles from './RestaurantCard.module.css';

const RestaurantCard = (props)=>{
    return (
        <div className={styles["card-container"]}>
            <div className={styles["card-details-container"]}>
                <div className={styles['restaurantContainer']}>
                    <h2>{props.name}</h2>
                    <span className={styles["star"]}>
                        {
                            Array(5).fill().map((_, index) => {
                                if (index < Math.floor(props.rating)) {
                                    
                                    return <i key={index} className="fa-solid fa fa-star" />;
                                } else if (index < Math.ceil(props.rating) && props.rating % 1 !== 0) {
                                   
                                    return <i key={index} className="fa-solid fa-star-half-stroke" />;
                                } else {
                                    
                                    return <i key={index} className="fa-regular fa-star" />;
                                }
                            })
                        }
                        
                    </span>
                </div>
               <div className={styles['address']}>
                    <i className="fa-solid fa-location-dot"></i>
                    <span>{props.address}, {props["address line 2"]}</span>
               </div>
               <div className={styles["location"]}>
                   <span>{props.outcode} {props.postcode}</span>
               </div>
            </div>
            <div className={styles["cuisen-container"]}>
                <div className={styles["utensil-container"]}>
                    <i className="fa-solid fa-utensils"></i>
                    <span>{props['type_of_food']}</span>
                </div>
                <a href="#">Visit Menu</a>
            </div>
        </div>
    );
};

export default RestaurantCard;