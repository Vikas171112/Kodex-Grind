import { useState } from "react";
import { useSessionContext } from "../context/SessionContext";
import SessionCard from "./SessionCard";
import FilterCapsule from "./FilterCapsule";

function SessionList() {
  const {
    sessions,
    filteredSessions,
    setSubjectFilter,
    subjectFilter,
    priorityFilter,
    setPriorityFilter,
  } = useSessionContext();
  console.log(filteredSessions);
  console.log(subjectFilter, "from session list");

  const subjects = ["All", "DSA", "Web Dev", "DBMS", "OS"];
  const priorities = ["All", "Low", "Medium", "High"];

  const isDisabled = sessions.length === 0;

  return (
    <div className="w-full text-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Active Sessions</h2>
        <span className="text-sm text-gray-400">
          {filteredSessions?.length} sessions
        </span>
      </div>

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

      {isDisabled && (
        <p className="text-gray-500 text-sm mb-4">
          Add a session to enable filters
        </p>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {filteredSessions?.length > 0 ? (
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
