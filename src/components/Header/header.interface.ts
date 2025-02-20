import { ChatUserProps } from "../../interfaces/userCard.interface";

export interface HeaderProps {
  ChatUserInfo?: ChatUserProps[];
  actionIcons?: { id: string; icon: React.ReactNode }[];
  className?:string
}
