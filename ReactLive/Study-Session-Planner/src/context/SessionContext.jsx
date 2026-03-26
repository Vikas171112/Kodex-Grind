import { useState } from "react";
import { createContext, useContext } from "react";

const SessionContext = createContext();

export function SessionContextProvider({ children }) {
  const [sessions, setSessions] = useState([]);
  const createSession = (data) => {
    const newSession = {
      id: Date.now(),
      ...data,
      completed: false,
    };
    setSessions((prev) => [...prev, newSession]);
    console.log("Session Created Successfully");
  };
  const deleteSession = (id) => {
    setSessions((prev) => prev.filter((session) => session.id !== id));
  };
  const toggleComplete = (id) => {
    setSessions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, completed: !s.completed } : s)),
    );
  };

  return (
    <SessionContext.Provider
      value={{ sessions, createSession, deleteSession, toggleComplete }}
    >
      {children}
    </SessionContext.Provider>
  );
}
export const useSessionContext = () => useContext(SessionContext);
