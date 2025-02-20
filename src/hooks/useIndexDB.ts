import { useEffect, useState } from "react";

const DB_NAME = "chatApp";
const STORE_NAME = "messages";

const useIndexedDB = () => {
  const [messages, setMessages] = useState<string[]>([]);

  const openDB = (): Promise<IDBDatabase> => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, 1);

      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME, { keyPath: "id", autoIncrement: true });
        }
      };

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject("Failed to open IndexedDB");
    });
  };

  const saveMessage = async (message: string) => {
    try {
      const db = await openDB();
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      store.add({ message, timestamp: Date.now() });
      tx.oncomplete = () => fetchMessages();
    } catch (error) {
      console.error("Error saving message:", error);
    }
  };

  const fetchMessages = async () => {
    try {
      const db = await openDB();
      const tx = db.transaction(STORE_NAME, "readonly");
      const store = tx.objectStore(STORE_NAME);
      const request = store.getAll();

      request.onsuccess = () => {
        setMessages(request.result.map((msg: any) => msg.message));
      };
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return { messages, saveMessage };
};

export default useIndexedDB;
