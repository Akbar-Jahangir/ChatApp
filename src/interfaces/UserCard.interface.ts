export interface UserCardProps {
  id?: string;
  profileImageSrc?: string;
  profileImageSize?: "sm" | "md";
  userName: string;
  onlineStatus?: boolean;
  className?: string;
}
