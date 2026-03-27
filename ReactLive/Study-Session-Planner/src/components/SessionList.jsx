import { useState } from "react";
import { useSessionContext } from "../context/SessionContext";
import SessionCard from "./SessionCard";
import FilterCapsule from "./FilterCapsule";

function SessionList() {
  const { sessions } = useSessionContext();

  const [subjectFilter, setSubjectFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");

  const subjects = ["All", "DSA", "Web Dev", "DBMS", "OS"];
  const priorities = ["All", "Low", "Medium", "High"];

  const isDisabled = sessions.length === 0;

  // 🔥 FILTER LOGIC
  const filteredSessions = sessions.filter((s) => {
    const subjectMatch = subjectFilter === "All" || s.subject === subjectFilter;

    const priorityMatch =
      priorityFilter === "All" || s.priority === priorityFilter;

    return subjectMatch && priorityMatch;
  });

  return (
    <div className="w-full text-white">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Active Sessions</h2>
        <span className="text-sm text-gray-400">
          {filteredSessions.length} sessions
        </span>
      </div>

      {/* 🔥 FILTERS */}
      <div className="flex gap-3 mb-6">
        <FilterCapsule
          label="Subject"
          options={subjects}
          value={subjectFilter}
          onChange={setSubjectFilter}
          disabled={isDisabled}
        />

        <FilterCapsule
          label="Priority"
          options={priorities}
          value={priorityFilter}
          onChange={setPriorityFilter}
          disabled={isDisabled}
        />
      </div>

      {/* EMPTY STATE MESSAGE */}
      {isDisabled && (
        <p className="text-gray-500 text-sm mb-4">
          Add a session to enable filters
        </p>
      )}

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredSessions.length > 0 ? (
          filteredSessions.map((session) => (
            <SessionCard key={session.id} session={session} />
          ))
        ) : (
          <p className="text-gray-400">No sessions found</p>
        )}
      </div>
    </div>
  );
}

export default SessionList;
