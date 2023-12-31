import React, { useEffect } from 'react';
import "../../style/MyPage/MypageChat.scss";
import { useRecoilState, useRecoilValue } from 'recoil';
import { getChatRoomIdxAtom, getChatRoomListAtom, getRoomIdAtom, getUserNickAtom, person1State, person2State } from '../../recoil/Chat/ChatAtom';
import { getChatRoomList } from '../../apis/Chat/ChatApis';
import { JWTDecoding } from '../../apis/JWT/JWTDecoding';
import { decodeToken } from '../../hooks/JWT/JWTType';
import profile from "../../image/GuseulDetail/GuseulDetailImg01.jpg";
import { chatRoomList } from '../../hooks/Chat/ChatType';
import { useNavigate } from 'react-router-dom';

interface HandleChatProps {
    clickedIndex: number;
    RoomList: chatRoomList[];
}

function MyPageChat() {
    
    const [chatRoom , setChatRoom] = useRecoilState(getChatRoomListAtom);
    const [otherIdx , setOtherIdx] = useRecoilState<chatRoomList[]>(getChatRoomIdxAtom);
    const RoomList = useRecoilValue(getChatRoomListAtom);
    const [getRoomId , setRoomId] = useRecoilState(getRoomIdAtom);
    const [UserNick, setUserNick] = useRecoilState(getUserNickAtom);
    const [person1, setPerson1] = useRecoilState(person1State);
    const [person2, setPerson2] = useRecoilState(person2State);
    const navigate = useNavigate();
    // 구슬 idx
    const OtherMemIdx = RoomList.map(item => item.userIdx);
    const OtherMemNick = RoomList.map(item => item.nickname);

    // 로그인 한 유저 idx
    const myIdx = (JWTDecoding() as decodeToken).idx;

    const HandleChat = (clickedIndex:number) => {
        // 클릭한 인덱스 가져오는 코드
        const userIdx = OtherMemIdx[clickedIndex];
        const userNick = OtherMemNick[clickedIndex];
        let roomId;
        if(userIdx > myIdx){
            roomId = myIdx.toString() + "to" + userIdx.toString();
        }else{
            roomId = userIdx.toString() + "to" + myIdx.toString();
        }

        setRoomId(roomId);
        setPerson1(myIdx);
        setPerson2(userIdx);
        setUserNick(userNick);

        navigate(`/room/${roomId}`);
    }
    

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const res = await getChatRoomList();
                if (res && res.data) {
                    setChatRoom(res.data);
                    console.log(res);
                }
            } catch (error) {
                console.log(error);
            }
        };
        
        fetchData();
    },[]);

    return (
        <div className='MypageChat'>
            {
                RoomList.map((item, idx) => (
                <div className='MypageChatList' key={idx} onClick={() => HandleChat(idx)}>
                    <div className='MypageUserImg'>
                        <img src={`http://dopeboyzclub.ddns.net:7733/userprofile/${item.userPhoto}`} alt='profile' className='MypageChatImg'/>
                    </div>
                    <div className='MypageChatUserInfo'>
                        <span className='MypageChatNick'>{item.nickname}</span>
                        <span className='MypageChatRecent'>
                            {item.lastChat}
                        </span>
                    </div>
                    
                </div>
                ))}
        </div>
    );
}

export default MyPageChat;