import React, { useState } from "react";
import BlankImg from "../../assets/Images/blankImg.png"
import { ChatMessageProps } from "./ChatMessage.interface";



export const ChatMessage: React.FC<ChatMessageProps> = ({ sentMessage, receivedMessage, profileImageSrc }) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const maxChars = 500; // Set your max character limit

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <div className={`w-[94%] flex  ${sentMessage ? "justify-end" : "justify-start"}`}>
            <div className={`my-6 `}>
                {sentMessage && (
                    <div className="flex items-end gap-x-1">
                        <p className="bg-primary text-black rounded-[10px] rounded-bl-none p-2  max-w-[265px] break-words">
                            {isExpanded || sentMessage.length <= maxChars
                                ? sentMessage
                                : `${sentMessage.slice(0, maxChars)} `}
                            {sentMessage.length > maxChars && (
                                <button
                                    onClick={toggleReadMore}
                                    className="text-smokeWhite text-sm"
                                >
                                    {isExpanded ? "Read less" : "Read more"}
                                </button>
                            )}
                        </p>
                        <img src={profileImageSrc || BlankImg} className="w-[25px] h-[25px] rounded-full " />
                    </div>
                )}
                {receivedMessage && (
                    <div className="flex items-end gap-x-1">
                        <img src={profileImageSrc || BlankImg} className="w-[25px] h-[25px] rounded-full" />
                        <p className="bg-lavenderBlue text-black rounded-[10px] rounded-bl-none p-2  max-w-[265px] break-words">
                            {isExpanded || receivedMessage.length <= maxChars
                                ? receivedMessage
                                : `${receivedMessage.slice(0, maxChars)} `}
                            {receivedMessage.length > maxChars && (
                                <button
                                    onClick={toggleReadMore}
                                    className="text-primary text-sm"
                                >
                                    {isExpanded ? "Read less" : "Read more"}
                                </button>
                            )}
                        </p>
                    </div>
                )}
            </div>

        </div>
    );
};


