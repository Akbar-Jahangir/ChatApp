import React from "react";
import { HeaderProps } from "./header.interface";

import { UserCard } from "../Card";

export const Header: React.FC<HeaderProps> = ({
  actionIcons,
  userCardInfo = [
    {
      userName: "Guest User",
      
    },
  ],
}) => {
  return (
    <header className="flex items-center justify-between w-[100%]">
      {userCardInfo?.map((data,index) => (
        <div  key={data.id || `user-${index}`}>
        <UserCard
          
          id={data.id}
          userName={data.userName}
          profileImageSrc={data.profileImageSrc}
          onlineStatus={data.onlineStatus}
          className={data.className}
          profileImageSize={data.profileImageSize}
        />
        </div>
      ))}
      <div className="flex">
        {actionIcons?.map((icon) => (
          <div key={icon.id}>{icon.icon}</div>
        ))}
      </div>
    </header>
  );
};
