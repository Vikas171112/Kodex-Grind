import { useState } from "react";
import { createContext, useContext } from "react";

const SessionContext = createContext();

export function SessionContextProvider({ children }) {
  const [sessions, setSessions] = useState(() => {
    const stored = localStorage.getItem("sessions");
    return stored ? JSON.parse(stored) : [];
  });

  const [subjectFilter, setSubjectFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");

  const createSession = (data) => {
    const newSession = {
      id: Date.now(),
      ...data,
      completed: false,
    };

    const updated = [...sessions, newSession];

    setSessions(updated);

    localStorage.setItem("sessions", JSON.stringify(updated));
  };

  const deleteSession = (id) => {
    const updated = sessions.filter((session) => session.id !== id);

    setSessions(updated);

    localStorage.setItem("sessions", JSON.stringify(updated));
  };

  const toggleComplete = (id) => {
    const updated = sessions.map((s) =>
      s.id === id ? { ...s, completed: !s.completed } : s,
    );

    setSessions(updated);

    localStorage.setItem("sessions", JSON.stringify(updated));
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
        priorityFilter,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export const useSessionContext = () => useContext(SessionContext);
