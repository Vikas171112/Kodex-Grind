import { useState } from "react";
import { createContext, useContext } from "react";

const SessionContext = createContext();

export function SessionContextProvider({ children }) {
  const [sessions, setSessions] = useState([]);
  const [subjectFilter, setSubjectFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  console.log("Sunject filter from context", subjectFilter);

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
  const filteredSessions = sessions.filter((s) => {
    const subjectMatch = subjectFilter === "All" || s.subject === subjectFilter;
    const priorityMatch =
      priorityFilter === "All" || s.priority === priorityFilter;
    return subjectMatch && priorityMatch;
  });
  return (
    <SessionContext.Provider
      value={{
        sessions,
        createSession,
        deleteSession,
        toggleComplete,
        filteredSessions,
        setSubjectFilter,
        subjectFilter,
        setPriorityFilter,
        subjectFilter,
        priorityFilter,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}
export const useSessionContext = () => useContext(SessionContext);
