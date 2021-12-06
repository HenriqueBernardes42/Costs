import { FaFacebook , FaInstagram, FaLinkedin} from "react-icons/fa"

import styles from "./Footer.module.css"

export default function Footer(){
    return(
        <footer className={styles.Footer}>
           <ul>
               <li><FaFacebook/></li>
               <li><FaInstagram/></li>
               <li><FaLinkedin/></li>
            </ul>
            <p className={styles.Copy}><span>Costs</span> &copy; 2021</p>
        </footer>
    )
}