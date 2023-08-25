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
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = (e: any) => {
    setModalOpen(true);
  };

  return (
    <div>
      <Header/>
      <div className={styles.creatorDiv}>
        <SearchBox/>
        <SortingBox/>
        <TabBar/>
        <div>creatos number</div>
        {creatorList.creators.map((creator: any, index: any) => {
          return (
              <div>
                <div>
                  <div>
                    <div>
                      <Image
                          src={creator.photo}
                          alt="Not Set"
                          width="71"
                          height="95"
                          objectFit="cover"
                          objectPosition="center"
                      />
                    </div>
                    <div>
                      <p>{creator.creator}</p>
                      <div>{
                        creator.occupations.map((occupation: any, index: any) => {
                          return (
                              <span key={index}>{occupation.name} ,</span>
                          )
                        })
                      }
                      </div>
                      <div>
                        <LocationIcon/><p>{creator.country}</p>
                      </div>
                      <div>
                        {creator.introduction}
                      </div>
                      <div>
                        <Button size="xs" shape="quiet">Follow</Button>
                        <div>
                          <ViewIcon/><p>{creator.viewCount}</p>
                        </div>
                        <div>
                          <LikeIcon/><p>{creator.likeCount}</p>
                        </div>
                        <div>
                          <AvatarShowIcon/>
                          <p onClick={showModal}>
                            {creator.followerCount}
                            {modalOpen && <ModalBasic setModalOpen={setModalOpen} key={index} value={creator.userId}/>}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    {creator.items.map((item: any, index: any) => {
                      return (
                          <div key={index}>
                            <div>item name: {item.name}</div>
                            <Image
                                src={item.imagePath}
                                alt="Not Set"
                                width="143"
                                height="190"
                                objectFit="cover"
                                objectPosition="center"
                            />
                          </div>
                      )
                    })}
                  </div>
                </div>
              </div>
          )
        })}
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

  return {
    props: {
      creatorList: creatorList,
      followerList: followerList,
    },
  };
}

export default Creator;
