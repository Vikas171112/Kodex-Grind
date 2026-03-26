import { useSessionContext } from "../context/SessionContext";
import SessionCard from "./SessionCard";

function SessionList() {
  const { sessions } = useSessionContext();

  return (
    <div className="w-full">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-white text-xl font-semibold">Active Sessions</h2>

        <span className="text-sm text-gray-400">
          {sessions.length} sessions
        </span>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-6">
        {sessions.length > 0 ? (
          sessions.map((session) => (
            <SessionCard key={session.id} session={session} />
          ))
        ) : (
          <p className="text-gray-400">No sessions yet</p>
        )}
      </div>
    </div>
  );
}

export default SessionList;
