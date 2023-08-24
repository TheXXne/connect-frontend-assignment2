import styles from '../../styles/ModalBasic.module.css';
import axios from "axios";
import {NextPage} from "next";

function ModalBasic({ setModalOpen, id, title, content, writer, userId }: any): JSX.Element {
    console.log("MODAL!!!!!!!!!!!!!!!!!!!!!MODAL", userId)
    const followerResponse = axios.get('http://localhost:3000/api/follower',
        { params: { userId: 354 }}
    );
    // 모달 끄기
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className={styles.container}>
            <button className={styles.close} onClick={closeModal}>
                X
            </button>
            <p>모달창입니다.</p>
        </div>
    );
}

export async function getServerSideProps(context: any) {
    const { userId } = context.query;
    const followerResponse = await axios.get('http://localhost:3000/api/follower',
        { params: { userId: 354 }}
    );
    const followerList = followerResponse.data.followerList;

    return {
        props: {
            followerList: followerList,
        },
    };
}

export default ModalBasic;