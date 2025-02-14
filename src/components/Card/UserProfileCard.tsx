import React from "react";
import { UserCardProps } from "../../interfaces/UserCard.interface";
import BlankImg from "../../assets/Images/blankImg.png";
import { OnlineIconSvg } from "../Svgs";

export const UserProfileCard: React.FC<UserCardProps> = ({
  userName = "John Doe",
  profileImageSrc,
  onlineStatus,
  className,
  profileImageSize,

}) => {
  return (
    <>
      <div className="flex justify-between">
        <div className={`${className} flex items-center gap-2`}>
          <img
            src={profileImageSrc || BlankImg}
            alt="profilePic"
            className={`${profileImageSize === "sm" ? "h-[45px] w-[45px]" : profileImageSize === "md" ? "h-[105px] w-[105px]" : "h-[45px] w-[45px]"} rounded-full`}
          />
          <div>
            <p className="text-[15px] font-semibold ">{userName}</p>

          </div>
          {onlineStatus && <OnlineIconSvg />}
        </div>
      </div>
    </>
  );
};
