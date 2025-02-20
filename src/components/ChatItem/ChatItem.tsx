import React from "react";
import { ChatItemProps } from "../../interfaces/chatItem.interface";
import BlankImg from "../../assets/Images/blankImg.png";
import { TikMarkIconSvg } from "../Svgs";

export const ChatItem: React.FC<ChatItemProps> = ({
  profileImageSrc,
  userName = "John Doe",
  timeStamp,
  messageStatus,
  messageText,
  unreadMessagesCount = 4,
}) => {
  return (
    <div className="w-[95%] flex justify-center hover:bg-slate rounded-sm">
      <div className="flex gap-2 w-[95%] py-1">
        <img
          src={`${profileImageSrc || BlankImg}`}
          alt="pic"
          className="w-[45px] h-[45px] rounded-full"
        />

        <div className="w-[100%]">

          <div className="flex justify-between w-full">
            <p className="text-primary font-semibold text-[14px]">{userName}</p>
            {messageText &&
              <p className="text-lightSlate text-[9px] self-center">

                {timeStamp}
              </p>
            }
          </div>

          <div className="flex justify-between w-full">
            <p className="text-gray text-[9px] max-w-[142px] line-clamp-2">
              {messageText}
            </p>
            <div className="text-lightSlate text-[9px]">
              {" "}
              {messageStatus === "sent" ? (
                <span className="bg-lavenderBlue rounded-full w-[15px] h-[15px] flex justify-center items-center">
                  <TikMarkIconSvg />
                </span>
              ) : messageStatus === "received" ? (
                <p className="bg-primary rounded-full text-white
                 w-[15px] h-[15px] flex justify-center items-center text-[10px]">
                  {unreadMessagesCount <= 9 ? unreadMessagesCount : "9+"}</p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
