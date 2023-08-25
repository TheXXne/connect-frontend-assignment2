import type { NextPage } from 'next';
import Image from 'next/image'
import axios from 'axios';
import {useState} from "react";
import ModalBasic from '../src/components/ModalBasic';
import {NATIONAL_CODE} from '../src/constant/nationalCode';
import styles from '/styles/Creator.module.css';
import {LocationIcon, ViewIcon, LikeIcon, AvatarShowIcon, Button} from '@closet-design-system/core-connect';
import Header from '../src/components/Header';
import SearchBox from "../src/components/SearchBox";
import SortingBox from "../src/components/SortingBox";
import TabBar from "../src/components/TabBar";

const Creator: NextPage = ({ creatorList, followerList }: any) => {
  console.log(creatorList)
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = (e: any) => {
    setModalOpen(true);
  };

  return (
    <div>
      <Header/>
      <div className={styles.div}>
        <SearchBox/>
        <SortingBox/>
        <TabBar/>
        <div className={styles.numDiv}>
          <span className={styles.numText}>{creatorList.creators.length} creators</span>
        </div>
        <div className={styles.entireDiv}>
          {creatorList.creators.map((creator: any, index: any) => {
            return (
                <div className={styles.outerDiv}>
                  <div className={styles.innerDiv}>
                    <div className={styles.infoOuterDiv}>
                      <div className={styles.infoInnerDiv}>
                        <div className={styles.photoDiv}>
                          <a className={styles.photo} style={{borderRadius: '50%', overflow: 'hidden'}}>
                            <Image
                              src={creator.photo}
                              alt="Not Set"
                              width="80"
                              height="80"
                              objectFit="cover"
                              objectPosition="center"
                            />
                          </a>
                        </div>
                        <div className={styles.infoRSideOuter}>
                          <div className={styles.infoRSideInner}>
                            <span className={styles.nameSpan}>
                              <a className={styles.nameText}>{creator.creator}</a>
                            </span>
                            <div className={styles.ocuSpan}>
                              <span className={styles.occText}>{creator.occupations}</span>
                            </div>
                            <div className={styles.countryDiv}>
                              <div className={styles.locationIcon}><LocationIcon size={'16px'}/></div>
                              <span className={styles.countryText}>{creator.country}</span>
                            </div>
                            <div className={styles.introductionDiv}>
                              <span className={styles.introductionSpan}>
                                <p className={styles.introductionText}>{creator.introduction}</p>
                              </span>
                            </div>
                            <div className={styles.connectionDiv}>
                              <button className={styles.followBtn}>Follow</button>
                              <div className={styles.splitDiv}></div>
                              <div className={styles.countsDiv}>
                                <div className={styles.viewIconDiv}>
                                  <div className={styles.viewIcon}><ViewIcon size={'16px'}/></div>
                                  <span className={styles.viewCount}>{creator.viewCount}</span>
                                </div>
                                <div className={styles.likeCountDiv}>
                                  <div className={styles.likeIcon}><LikeIcon size={'16px'}/></div>
                                  <span className={styles.likeCount}>{creator.likeCount}</span>
                                </div>
                                <div className={styles.followerCountDiv}>
                                  <div className={styles.avatarShowIcon}><AvatarShowIcon size={'16px'}/></div>
                                  <button className={styles.followerCountBtn}>
                                    <span className={styles.followerCount}>{creator.followerCount}</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*아이템란*/}
                    <div>
                      <div>
                        <div>
                          <button></button>
                          <button></button>
                          <div>
                            <div>
                              <div>
                                아이템 개별 카드 하나
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                // <div>
                //     <div>
                //       {creator.items.map((item: any, index: any) => {
                //         return (
                //             <div key={index}>
                //               <div>item name: {item.name}</div>
                //               <Image
                //                   src={item.imagePath}
                //                   alt="Not Set"
                //                   width="143"
                //                   height="190"
                //                   objectFit="cover"
                //                   objectPosition="center"
                //               />
                //             </div>
                //         )
                //       })}
                //     </div>
                //   </div>
                // </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const { userId } = context.query;
  const creatorResponse = await axios.post('http://localhost:3000/api/creator');
  const followerResponse = await axios.get('http://localhost:3000/api/follower',
      { params: { userId: 354 }}
  );
  const creatorList = creatorResponse.data.creatorList;
  const followerList = followerResponse.data.followerList;

  creatorList.creators.map((creator: any, index: any) => {
    if (creator.introduction.ops?.length) {
      creator.introduction = creator.introduction.ops[0].insert;
    } else {
      creator.introduction = "";
    }
  });

  creatorList.creators.map((creator: any, index: any) => {
    NATIONAL_CODE.map((nation: any, index: any) => {
      if (creator.country === nation.value) {
        creator.country = nation.label;
      }
    });
  });

  creatorList.creators.map((creator: any, index: any) => {
    let occupationStr = '';
    if (creator.occupations.length) {
      creator.occupations.map((occu: any, index: any) => {
        occupationStr += occu.name + ",";
      })
      creator.occupations = occupationStr.substring(0, occupationStr.length-1);
    }
  });

  return {
    props: {
      creatorList: creatorList,
      followerList: followerList,
    },
  };
}

export default Creator;
