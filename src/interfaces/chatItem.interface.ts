export interface ChatItemProps {
  id: string;
  profileImageSrc?: string;
  userName: string;
  timeStamp?: string;
  messageText?: string;
  unreadMessagesCount?: number;
  messageStatus?: "received" | "sent" | null;
}
