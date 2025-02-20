import React, { useContext } from "react";
import { Sidebar } from "../components/Sidebar";
import DemoImg from "../assets/Images/DemoImg.png";
import { ChatItemProps } from "../interfaces/chatItem.interface";
import { ChatUserProps } from "../interfaces/userCard.interface";
import { ChatWindow } from "../components/ChatWindow";
import { AuthContext } from "../contexts/AuthContext";
import useUserDB from "../hooks/useUserDB";

const Home: React.FC = () => {
  const { userId,userName, profilePicUrl } = useContext(AuthContext);
  const {storedUsers} =useUserDB()
console.log(storedUsers);

  const chatUserInfo: ChatUserProps[] = [{
    id:userId,
    userName:  userName,
    profileImageSrc: profilePicUrl,
    profileImageSize: "sm",
    className: "flex items-center text-primary gap-3",

  }]

  return (
    <div className="w-full flex justify-between">
      {/* Left Sidebar */}

      <Sidebar receiverInfo={chatUserInfo} ChatItemInfo={storedUsers} />
      <ChatWindow />
      {/* Right Sidebar */}
      <Sidebar senderImageSrc={DemoImg} senderName="Jon Doe" />



    </div>
  );
};

export default Home;
