import styles from 'styles/SearchBox.module.css';
import Image from "next/image";
import '@closet-design-system/core-connect';
import {SearchIcon} from "@closet-design-system/core-connect";

export default function SearchBox() {
    return (
        <div>
            <div className={styles.searchDiv}>
                <input className={styles.input} placeholder="Search for Creators"/>
                <div>
                    <div><SearchIcon/></div>
                </div>
            </div>
        </div>
    );
}