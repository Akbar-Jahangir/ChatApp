import { ChatItemProps } from "../../interfaces/chatItem.interface"
import { ChatUserProps } from "../../interfaces/userCard.interface"

export interface SidebarProps {
  receiverInfo?:ChatUserProps[]
  senderName?:string
  senderImageSrc?:string
  ChatItemInfo?:ChatItemProps[]
}
