import React from "react";
import { HeaderProps } from "./header.interface";
import { Button } from "../Button";
import { ChatUser } from "../ChatUser";

export const Header: React.FC<HeaderProps> = ({
  ChatUserInfo,
  actionIcons,
  className
}) => {
  return (
    <div className={className}>
    <header className="flex items-center justify-between w-[100%]">
      {ChatUserInfo?.map((data, index) => (
        <div key={data.id || `user-${index}`}>
          <ChatUser
            id={data.id}
            userName={data.userName}
            profileImageSrc={data.profileImageSrc}
            onlineStatus={data.onlineStatus}
            className={data.className}
            profileImageSize={data.profileImageSize}
          />
        </div>
      ))}
      <div className="flex gap-2.5">
        {actionIcons?.map((icon) => (
          <Button type="button" icon={icon.icon} key={icon.id} className="hover:bg-slate p-1  flex justify-center items-center rounded" />
        ))}

      </div>
    </header>
    </div>
  );
};
