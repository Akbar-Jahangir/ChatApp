import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { EditIconSvg } from "../../components/Svgs";
import { Searchbar } from "../../components/Searchbar";
import DemoImg from "../../assets/Images/DemoImg.png";
import { ChatItem } from "../../components/ChatItem";
import { ChatItemProps } from "../../interfaces/chatItem.interface";
import { UserCardProps } from "../../interfaces/UserCard.interface";
import { UserCard } from "../../components/Card";

const Home: React.FC = () => {
  const iconsList = [{ id: "edit", icon: <EditIconSvg /> }];
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

  const headerData: UserCardProps[] = [
    {
      userName: "David Peters",
      profileImageSrc: DemoImg,
      onlineStatus: false,
      className: "flex items-center text-primary gap-4",
    },
  ];

  return (
    <>
      <div className="flex justify-between">
        <Sidebar>
          <div className="w-[90%] flex justify-between gap-2 px-2">
            <Header userCardInfo={headerData} actionIcons={iconsList} />
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

        {/* Left Sidebar */}
        <Sidebar>
          <div className="flex flex-col items-center space-y-8">
            <div className="w-full flex justify-center mt-[42px]">
              <Searchbar />
            </div>
            <UserCard
              userName="David Peters"
              profileImageSrc={DemoImg}
              profileImageSize="w-[105px] h-[105px]"
              className="text-center"
            />
          </div>
        </Sidebar>
      </div>
    </>
  );
};

export default Home;
