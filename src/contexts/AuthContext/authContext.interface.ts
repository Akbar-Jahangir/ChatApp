export interface AuthContextProps {
  userName: string;
  userId: string;
  profilePicUrl: string;
  setUserName: (name: string) => void;
  setUserId: (id: string) => void;
  setProfilePicUrl: (url: string) => void;
}
