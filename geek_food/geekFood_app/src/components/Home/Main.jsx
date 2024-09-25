import House from "./images/house-image.avif"
import styles from "./Main.module.css"
import HomeCard from "./HomeCard"

const Main =()=>{
    return(
        <>
            <section className={styles['hero-section']}>
                <div className={styles['content']}>
                    <h1>Let us find your<br />
                    <span className={styles['colored']}>Forever Food.</span> </h1>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>

                    <div className={styles['btns-container']}>
                        <button className={styles['search-btn']}>Search Now</button>
                        <button className={styles['know-btn']} >Know more</button>
                    </div>
                </div>
            </section>
            
            <section className={styles["house-section"]}>
              
                    <div className={styles['image-container']}>
                        <img src={House} alt="house-image" />
                    </div>
                    <div className={styles['desc-container']}>
                        <div className={styles['desc-sub-container']}>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
                            <button className={styles['get-btn']}>Get in Touch</button>
                        </div>
                       
                    </div>
            </section>
            <section className={styles['home-cards']}>
                <div className={styles['cards-container']}>
                    <HomeCard desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis."}/>
                    <HomeCard desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores."}/>
                    <HomeCard desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt."}/>
                    <HomeCard desc={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum."}/>
                    <HomeCard desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!"}/>
                    <HomeCard desc={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima."}/>
                </div>
                
            </section>
        </>
        
    )
}
export default Main;