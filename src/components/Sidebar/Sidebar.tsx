

import React from "react";
import { Button } from "../Button";
import { ChatItem } from "../ChatItem";
import { ChatUser } from "../ChatUser";
import { Header } from "../Header";
import { Searchbar } from "../Searchbar";
import { ChatIconSvg, EditIconSvg, FavoriteIconSvg, ImageIconSvg, MP3IconSvg, PdfIconSvg, ProfileIconSvg, VideoChatIconSvg, VideoIconSvg } from "../Svgs";
import { SidebarProps } from "./sidebar.interface";

export const Sidebar: React.FC<SidebarProps> = ({ receiverInfo, ChatItemInfo, senderName, senderImageSrc }) => {
  const mediaBtnsData = [
    {
      id: 20,
      btnText: "PDF",
      icon: <PdfIconSvg />
    },
    {
      id: 30,
      btnText: "VIDEO",
      icon: <VideoIconSvg />
    },
    {
      id: 40,
      btnText: "MP3",
      icon: <MP3IconSvg />
    },
    {
      id: 50,
      btnText: "IMAGE",
      icon: <ImageIconSvg />
    },
  ]

  return (

    <div className="w-[23%] flex flex-col items-center pt-[29px] bg-smokeWhite h-screen space-y-3.5">
      {receiverInfo ?
        <>
          <div className="w-[90%] flex flex-col items-center justify-center space-y-3.5">
            <Header ChatUserInfo={receiverInfo} actionIcons={[{ id: "1", icon: <EditIconSvg /> }]} className="w-[95%]" />
            <Searchbar />
            <span className="h-[1px] w-[90%] bg-lightGray"></span>
          </div>


          <div className="custom-scrollbar w-[95%] flex flex-col items-center space-y-3.5 overflow-y-scroll overflow-x-hidden">
            {ChatItemInfo?.map((chatItem) => (
              <ChatItem key={chatItem.id} {...chatItem} />
            ))}
          </div></> :
        <div className="flex flex-col items-center space-y-2 2xl:space-y-8">
          <div className="w-full flex justify-center 2xl:mt-[42px]">
            <Searchbar />
          </div>

          <ChatUser
            userName={senderName}
            profileImageSrc={senderImageSrc}
            profileImageSize="md"
            className="flex flex-col"
          />
          <div className="flex gap-x-3">
            <Button type="button" btnText="Chat" icon={<ChatIconSvg />} className=" text-[11px]" iconClass="chatting-btn" />
            <span className="h-[99px] border border-slate"></span>
            <Button type="button" btnText="Chat" icon={<VideoChatIconSvg />} className=" text-[11px]" iconClass="chatting-btn" />
          </div>

          <div className="flex justify-between w-[90%]">
            <Button type="button" btnText="View Friends" icon={<ProfileIconSvg />} className="flex text-[11px] gap-2" />

            <Button type="button" btnText="View Friends" icon={<FavoriteIconSvg color="black" width="14px" height="14px" />} className="flex text-[11px] gap-2" />

          </div>

          <p className="w-[90%] font-semibold">Attachments</p>
          <div className="flex flex-col items-center space-y-3.5 w-[90%]">
            <div className="w-full flex justify-between">
              {mediaBtnsData.map((data) => (
                <Button key={data.id} type="button" className="media-btn" icon={data.icon} btnText={data.btnText} />
              ))}
            </div>
            <Button type="button" btnText="View All" className="text-[10px] font-semibold border border-primary rounded-full w-[100px] h-[27px] text-primary" />
          </div>
        </div>
      }
    </div>

  );
};

export default Sidebar;
