import { useContext, useState, useEffect } from "react";
import { signUpProps } from "../interfaces/signUp.interface";
import { AuthContext } from "../contexts/AuthContext";

const useUserDB = () => {
  const { setUserName, setUserId, setProfilePicUrl } = useContext(AuthContext);
  const [storedUsers, setStoredUsers] = useState<signUpProps[]>([]);

  const openDB = (): Promise<IDBDatabase> => {
    return new Promise((resolve, reject) => {
      const openRequest = indexedDB.open("chatApp", 1);

      openRequest.onupgradeneeded = () => {
        const db = openRequest.result;
        if (!db.objectStoreNames.contains("users")) {
          const store = db.createObjectStore("users", { keyPath: "userId" });
          store.createIndex("userId", "userId", { unique: true });
          store.createIndex("name", "name", { unique: false });
          store.createIndex("email", "email", { unique: true });
          store.createIndex("password", "password", { unique: false });
          store.createIndex("profilePicUrl", "profilePicUrl", { unique: false });
        }
      };

      openRequest.onsuccess = () => resolve(openRequest.result);
      openRequest.onerror = () => reject("Failed to open IndexedDB");
    });
  };

  const signUpUser = async (userData: signUpProps) => {
    try {
      const db = await openDB();
      const transaction = db.transaction("users", "readwrite");
      const store = transaction.objectStore("users");
      const emailIndex = store.index("email");

      const emailCheckRequest = emailIndex.get(userData.email);
      emailCheckRequest.onsuccess = async () => {
        if (emailCheckRequest.result) {
          alert("User already exists! Please login.");
        } else {
          const request = store.put(userData);
          request.onsuccess = async () => {
            alert("You have successfully registered! Welcome aboard.");
            await getAllUsers(); // Fetch updated user list
          };
          request.onerror = () => console.error("Error adding user");
        }
      };

      emailCheckRequest.onerror = () => console.log("Error checking email existence");
    } catch (error) {
      console.error(error);
    }
  };

  const getAllUsers = async () => {
    try {
      const db = await openDB();
      const transaction = db.transaction("users", "readonly");
      const store = transaction.objectStore("users");

      return new Promise<signUpProps[]>((resolve, reject) => {
        const request = store.getAll();
        request.onsuccess = () => {
          const users = request.result;
          setStoredUsers(users);
          resolve(users);
        };
        request.onerror = () => reject("Error fetching all users");
      });
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const loginUser = async (email: string, password: string, navigate: (path: string) => void) => {
    try {
      const db = await openDB();
      const transaction = db.transaction("users", "readonly");
      const store = transaction.objectStore("users");
      const emailIndex = store.index("email");

      const emailCheckRequest = emailIndex.get(email);
      emailCheckRequest.onsuccess = async () => {
        const userRecord = emailCheckRequest.result;
        if (userRecord && userRecord.password === password) {
          setUserName(userRecord.name);
          setUserId(userRecord.userId);
          setProfilePicUrl(userRecord.profilePicUrl);

          alert("Login successful! Welcome back.");
          navigate("/home");

          // Ensure the latest users list is fetched
          await getAllUsers();
        } else {
          alert("Invalid email or password.");
        }
      };

      emailCheckRequest.onerror = () => console.log("Error checking email existence");
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch users when component first loads
  useEffect(() => {
    getAllUsers();
  }, []);

  return { loginUser, signUpUser, storedUsers, getAllUsers };
};

export default useUserDB;
