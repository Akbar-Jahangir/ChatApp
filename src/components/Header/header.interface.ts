import { UserCardProps } from "../../interfaces/UserCard.interface";

export interface HeaderProps {
  userCardInfo:UserCardProps[]
  actionIcons?: { id: string; icon: React.ReactNode }[];
}
