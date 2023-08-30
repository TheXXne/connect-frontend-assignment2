import styles from 'styles/TabBar.module.css';
import { InfoIcon, Select } from '@closet-design-system/core-connect';

export default function SortingBox() {
    return (
        <div className={styles.outerDiv}>
            <div className={styles.leftSideDiv}>
                <span className={styles.recentSpan}>
                    <span className={styles.recentText}>Recent</span>
                </span>
                <span className={styles.allTimeSpan}>
                    <span className={styles.allTimeText}>All Time</span>
                </span>
            </div>
            <div className={styles.rightSideDiv}>
                <div className={styles.sortDiv}>
                    <div className={styles.infoDiv}>
                        <button className={styles.infoBtn}><InfoIcon size={'16px'}/></button>
                    </div>
                    <sapn className={styles.sortText}>Sort by</sapn>
                </div>
                <div className={styles.viewOuterDiv}>
                    <div className={styles.viewInnerDiv}>
                        <Select options={[
                            {
                                "value": "test1",
                                "label": "Views"
                            },
                            {
                                "value": "test2",
                                "label": "Likes"
                            },
                            {
                                "value": "test3",
                                "label": "Followers"
                            }
                        ]} placeholder={"Views"}  width={160}/>
                    </div>
                </div>
            </div>
        </div>
    );
}