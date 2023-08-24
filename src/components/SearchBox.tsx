import styles from 'styles/SearchBox.module.css';
import {SearchIcon} from "@closet-design-system/core-connect";

export default function SearchBox() {
    return (
        <div className={styles.outerDiv}>
            <div className={styles.innerDiv}>
                <input className={styles.input} placeholder="Search for Creators"/>
                <div>
                    <div><SearchIcon/></div>
                </div>
            </div>
        </div>
    );
}