import React, { useState, createContext } from "react";
import { ContextProviderProps } from "../../interfaces/contextProvider.interface";
import { AuthContextProps } from "./authContext.interface";

// Default values for AuthContext
const defaultAuthContext: AuthContextProps = {
  userName: "",
  userId: "",
  profilePicUrl: "",
  setUserName: () => {},
  setUserId: () => {},
  setProfilePicUrl: () => {},
};

// Create and export the context
export const AuthContext = createContext<AuthContextProps>(defaultAuthContext);

export const AuthProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [userName, setUserName] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [profilePicUrl, setProfilePicUrl] = useState<string>("");

  return (
    <AuthContext.Provider
      value={{ userName, userId, profilePicUrl, setUserName, setUserId, setProfilePicUrl }}
    >
      {children}
    </AuthContext.Provider>
  );
};
