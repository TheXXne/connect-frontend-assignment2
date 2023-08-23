import type { NextPage } from 'next';
import Image from 'next/image'
import axios from 'axios';
import {useState} from "react";
import ModalBasic from '../src/components/ModalBasic';
import {NATIONAL_CODE} from '../src/constant/nationalCode';

const Creator: NextPage = ({ creatorList, followerList }: any) => {
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = (e: any) => {
    setModalOpen(true);
  };

  return (
    <div>
      <div>
        {creatorList.creators.map((creator: any, index: any) => {
          return (
              <div>
                <div key={index}>
                  <Image
                      src={creator.photo}
                      alt="Not Set"
                      width="286"
                      height="380"
                      objectFit="cover"
                      objectPosition="center"
                  />
                  <p>creator:{creator.userId}</p>
                  <p>creator:{creator.creator}</p>
                  <p>occupations: {
                    creator.occupations.map((occupation: any, index: any) => {
                      return (
                          <div key={index}>{occupation.name}</div>
                      )
                    })
                  }
                  </p>
                  <p>country: {creator.country}</p>
                  <div>
                    introduction : {creator.introduction}
                  </div>
                  <p>viewCount: {creator.viewCount}</p>
                  <p>likeCount: {creator.likeCount}</p>
                  <p onClick={showModal}>followerCount: {creator.followerCount}
                    {modalOpen && <ModalBasic setModalOpen={setModalOpen} userId={creator.userId}/>}
                  </p>
                  <p>isFollowing: {creator.isFollowing}</p>
                  <span>items</span>
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
    if( creator.introduction.ops?.length ) {
      creator.introduction = creator.introduction.ops[0].insert;
    } else {
      creator.introduction = "";
    }
  })

  return {
    props: {
      creatorList: creatorList,
      followerList: followerList,
    },
  };
}

export default Creator;
