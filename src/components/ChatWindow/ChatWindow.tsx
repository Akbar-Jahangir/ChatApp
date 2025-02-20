import React, { useState } from 'react'
import { Button } from '../Button';
import { Input } from '../Input';
import { AttachmentIconSvg, BellIconSvg, CameraIconSvg, EmogiIconSvg, FavoriteIconSvg, SearchIconSvg, SendMessageIconSvg, VoiceIconSvg } from '../Svgs';
import DemoImg from "../../assets/Images/DemoImg.png"
import { ChatMessage } from '../ChatMessage';
import { Header } from '../Header';
import { ChatUserProps } from '../../interfaces/userCard.interface';



export const ChatWindow: React.FC = () => {
    const [message, setMessage] = useState<string>("")

    const chatUserInfo: ChatUserProps[] = [{

        profileImageSrc: DemoImg,
        profileImageSize: "sm",
        userName: "Jon Doe",
        onlineStatus: true,

    }]

    const messageTypeBtnData = [
        { id: 1, icon: < AttachmentIconSvg /> },
        { id: 2, icon: < CameraIconSvg /> },
        { id: 3, icon: < EmogiIconSvg /> },
    ]
    const messageData = [
        {
            receivedMessage: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of ",
            profileImageSrc: DemoImg
        },


        {
            sentMessage: "Ok",

        },
        {
            receivedMessage: "Ok. Should I send it over email as well after filling the details.",
            profileImageSrc: DemoImg
        },

        {
            sentMessage: "Ok. Should I send it over email as well after filling the details.",
            profileImageSrc: DemoImg
        },
        {
            receivedMessage: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            profileImageSrc: DemoImg
        },
        {
            receivedMessage: "Ok. Should I send it over email as well after filling the details.",

        },
        {
            sentMessage: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,",
            profileImageSrc: DemoImg
        },
        {
            receivedMessage: "Ok. Should I send it over email as well after filling the details.",
            profileImageSrc: DemoImg
        },
        {
            sentMessage: "Ok. Should I send it over email as well after filling the details.",
            profileImageSrc: DemoImg
        },
        {
            receivedMessage: "Ok. Should I send it over email as well after filling the details.",
            profileImageSrc: DemoImg
        },

    ]
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className="w-[54%] flex flex-col items-center relative h-screen">
            <div className="w-[95%] sticky top-0">
                <Header ChatUserInfo={chatUserInfo} actionIcons={[{ id: "1", icon: <SearchIconSvg /> }, { id: "2", icon: <FavoriteIconSvg width="22px" height="19px" color="#BABABA" /> }, { id: "3", icon: <BellIconSvg /> },]} className="w-full  pt-[14px] pb-[7px]" />
                <div className="h-[1px] w-full bg-lightGray"></div>
            </div>

            <div className='flex flex-col items-center w-[99%] mt-[27px] mb-[65px] overflow-y-scroll custom-scrollbar'>
                {messageData.map((message) => (
                    <ChatMessage receivedMessage={message.receivedMessage} profileImageSrc={message.profileImageSrc} sentMessage={message.sentMessage} />
                ))}

            </div>

            <div className='bg-lavenderBlue w-full flex justify-center py-1 2xl:py-7  absolute bottom-0'>
                <form
                    onSubmit={handleSubmit}
                    className="w-[95%] flex gap-x-2 px-3 items-end py-2"
                >
                    <div className='w-[95%] bg-white flex items-center rounded-full px-2'>
                        <Button type="submit" icon={<VoiceIconSvg />} className='mr-2' />
                        <Input
                            value={message}
                            placeholder="Write Something..."
                            type="text"
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-[90%] focus:outline-none border-r border-slate  max-h-[100px] break-words"
                        />


                        {messageTypeBtnData.map((data) => (
                            <Button key={data.id} type="button" icon={data.icon} className='p-1' />
                        ))}
                    </div>
                    <Button type="button" icon={<SendMessageIconSvg />} className='bg-primary w-10 h-10 rounded-full flex items-center p-2' />
                </form>

            </div>
        </div>
    )
}

