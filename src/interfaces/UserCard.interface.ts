export interface UserCardProps {
  id?:string
  profileImageSrc?: string;
  profileImageSize?: string;
  userName: string;
  MessageText?: string;
  onlineStatus?: boolean;
  className?: string;
}
