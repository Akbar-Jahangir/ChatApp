import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { ChatIconSvg, EditIconSvg, FavoriteIconSvg, ImageIconSvg, MP3IconSvg, PdfIconSvg, ProfileIconSvg, VideoChatIconSvg, VideoIconSvg } from "../../components/Svgs";
import { Searchbar } from "../../components/Searchbar";
import DemoImg from "../../assets/Images/DemoImg.png";
import { ChatItem } from "../../components/ChatItem";
import { ChatItemProps } from "../../interfaces/chatItem.interface";
import { UserProfileCard } from "../../components/Card";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

const Home: React.FC = () => {
  const chatItems: ChatItemProps[] = [
    {
      id: "1",
      profileImageSrc: DemoImg,
      userName: "Paul Wilson",
      timeStamp: "10:35 AM",
      messageText: "That’s Great. I am Looking forward",
      messageStatus: "sent",
    },
    {
      id: "2",
      profileImageSrc: DemoImg,
      userName: "Paul Wilson",
      timeStamp: "10:35 AM",
      messageText: "That’s Great. I am Looking forward",

    },
    {
      id: "3",
      profileImageSrc: DemoImg,
      userName: "Paul Wilson",
      timeStamp: "10:35 AM",
      messageText: "That’s Great. I am Looking forward",
      messageStatus: "received",
    },
    {
      id: "4",
      profileImageSrc: DemoImg,
      userName: "Paul Wilson",
      timeStamp: "10:35 AM",
      messageText: "That’s Great. I am Looking forwardddddddddddddddddddddddddddddddd",
      messageStatus: "sent",
    },

  ];



  return (
    <>
      <div className="flex justify-between">
        {/* Left Sidebar */}
        <Sidebar>
          <div className="w-[90%] flex justify-between gap-2 px-2">
            <UserProfileCard userName="David Peters"
              profileImageSrc={DemoImg}
              profileImageSize="sm"
              className="flex items-center text-primary gap-3" />
            <Button type="button" icon={<EditIconSvg />} />
          </div>
          <Searchbar />
          <span className="h-[1px] w-[90%] bg-lightGray"></span>
          <div className="custom-scrollbar border-lightGray w-[90%] overflow-y-scroll overflow-x-hidden">
            {chatItems.map((chatItem) => (
              <div key={chatItem.id}>
                <ChatItem  {...chatItem} />
              </div>
            ))}
          </div>
        </Sidebar>
        <div className="w-[50%] flex justify-center">
          <div className="w-[90%] mt-[14px]">
            <Header userCardInfo={[{ userName: "Dianne Jhonson", className: "gap-3  pb-1.5", onlineStatus: true, profileImageSrc: DemoImg }]} />
            <p className="w-full h-[1px] bg-slate"></p>
          </div>

        </div>
        {/* Right Sidebar */}
        <Sidebar>
          <div className="flex flex-col items-center space-y-6 2xl:space-y-8">
            <div className="w-full flex justify-center 2xl:mt-[42px]">
              <Searchbar />
            </div>
            <UserProfileCard
              userName="David Peters"
              profileImageSrc={DemoImg}
              profileImageSize="md"
              className="flex flex-col"
            />
            <div className="flex gap-x-3">
              <Button type="button" labelText="Chat" icon={<ChatIconSvg />} className=" text-[11px]" iconClass="chatting-btn" />
              <span className="h-[99px] border border-slate"></span>
              <Button type="button" labelText="Chat" icon={<VideoChatIconSvg />} className=" text-[11px]" iconClass="chatting-btn" />
            </div>

            <div className="flex justify-between w-[90%]">
              <Button type="button" labelText="View Friends" icon={<ProfileIconSvg />} className="flex text-[11px] gap-2" />

              <Button type="button" labelText="View Friends" icon={<FavoriteIconSvg color="black" width="14px" height="14px" />} className="flex text-[11px] gap-2" />

            </div>

            <p className="w-[90%] font-semibold">Attachments</p>
            <div className="flex flex-col items-center space-y-3.5 w-[90%]">
              <div className="w-full flex justify-between">
                <Button type="button" className="media-btn" icon={<PdfIconSvg />} labelText="PDF" />
                <Button type="button" className="media-btn" icon={<VideoIconSvg />} labelText="VIDEO" />
                <Button type="button" className="media-btn" icon={<MP3IconSvg />} labelText="MP3" />
                <Button type="button" className="media-btn" icon={<ImageIconSvg />} labelText="IMAGE" />
              </div>
              <Button type="button" labelText="View All" className="text-[10px] font-semibold border border-primary rounded-full w-[100px] h-[27px] text-primary" />
            </div>
          </div>
        </Sidebar>
      </div>
    </>
  );
};

export default Home;
