import React from "react";
import { UserCardProps } from "../../interfaces/UserCard.interface";
import BlankImg from "../../assets/Images/blankImg.png";
import { OnlineIconSvg } from "../Svgs";

export const UserCard: React.FC<UserCardProps> = ({
  userName = "John Doe",
  profileImageSrc,
  onlineStatus,
  MessageText,
  className,
  profileImageSize,
  
}) => {
  return (
    <>
      <div className="flex justify-between">
        <div className={className}>
          <img
            src={profileImageSrc || BlankImg}
            alt="profilePic"
            className={profileImageSize || `w-[45px] h-[45px]`}
          />
          <div>
            <h3>{userName}</h3>
            {MessageText && (
              <p className="text-gray text-xs max-w-[130px] line-clamp-2">
                {MessageText}
              </p>
            )}
          </div>
          {onlineStatus && <OnlineIconSvg />}
        </div>
      </div>
    </>
  );
};
