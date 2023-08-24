import styles from 'styles/SortingBox.module.css';
import {ArrowTriangleDownIcon} from "@closet-design-system/core-connect";

export default function SortingBox() {
    return (
        <div className={styles.outerDiv}>
            <div className={styles.innerDiv}>
                <div className={styles.occupationDiv}>
                    <span className={styles.criteria}>Occupation</span>
                    <div className={styles.dropdownOuterDiv}>
                        <div className={styles.dropdownInnerDiv}>
                            <span className={styles.allText}>All</span>
                            <div className={styles.arrow}>
                                <ArrowTriangleDownIcon/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.regionDiv}>
                    <span className={styles.criteria}>Region</span>
                    <div className={styles.dropdownOuterDiv}>
                        <div className={styles.dropdownInnerDiv}>
                            <span className={styles.allText}>All</span>
                            <div className={styles.arrow}>
                                <ArrowTriangleDownIcon/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.reset}>RESET</div>
        </div>
    );
}