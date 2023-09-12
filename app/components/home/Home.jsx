import React from 'react'
import styles from "./styles.module.css"
import doctor from "@/public/doctor.png"
import Image from 'next/image'
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.data}>
            <div className={styles.med}>
                <img src="https://cdn-icons-png.flaticon.com/128/11496/11496770.png" alt="med"/>
                <span>All Medicines Here</span>
            </div>
            <h1>Cheak Your Health</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis repellendus cumque excepturi laborum inventore facilis earum nostrum tempore vero architecto?</p>
            <div className={styles.start}>
            <button>Get Started</button>
            <span>An Appointmant</span>
            <img src="https://cdn-icons-png.flaticon.com/128/2989/2989988.png" alt="arr" />
            </div>
        </div>
      </div>
      <div className={styles.right}>
      </div>
        <Image className = {styles.docter}src={doctor} alt="img" />

    </div>
  )
}

export default Home