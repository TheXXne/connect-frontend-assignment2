import styles from 'styles/Header.module.css';
import connectLogo from '../../public/logo.svg';
import Image from "next/image";
import {
    AlarmIcon,
    AvatarShowIcon,
    Button,
    BulletIcon,
    CartIcon,
    ArrowTriangleDownIcon,
} from '@closet-design-system/core-connect';

export default function Header() {
    return (
        <div className={styles.nav}>
            <div className={styles.lSideHeader}>
                <Image src={connectLogo} alt='CONNECT Logo' width={80} height={16} />
                <a className={styles.navStore}>STORE</a>
                <a className={styles.navGallery}>GALLERY</a>
                <a className={styles.navCreator}>CREATOR</a>
                <a className={styles.navApp}>
                    <span>APPS</span>
                    <div><ArrowTriangleDownIcon/></div>
                </a>
                <a className={styles.navSupport}>
                    <span>SUPPORT</span>
                    <div><ArrowTriangleDownIcon/></div>
                </a>
            </div>
            <div className={styles.rSideHeader}>
                <Button size="xs" shape="fill">
                    <span className={styles.navUpload}>Upload</span>
                </Button>
                <CartIcon/>
                <AlarmIcon/>
                <AvatarShowIcon/>
                <BulletIcon/>
            </div>
        </div>
    );
}