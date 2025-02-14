import React from "react";
import { HeaderProps } from "./header.interface";

import { UserProfileCard } from "../Card";
import { Button } from "../Button";
import { BellIconSvg, FavoriteIconSvg, SearchIconSvg } from "../Svgs";

export const Header: React.FC<HeaderProps> = ({
  userCardInfo = [
    {
      userName: "Guest User",

    },
  ],
}) => {
  return (
    <header className="flex items-center justify-between w-[100%]">
      {userCardInfo?.map((data, index) => (
        <div key={data.id || `user-${index}`}>
          <UserProfileCard
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
        <Button type="button" icon={<SearchIconSvg />} />
        <Button type="button" icon={<FavoriteIconSvg color="#BABABA" width="22px" height="22px" />} />
        <Button type="button" icon={<BellIconSvg />} />
      </div>
    </header>
  );
};
