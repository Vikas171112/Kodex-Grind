import { FiClock, FiCalendar, FiCheck, FiTrash2 } from "react-icons/fi";
import { useSessionContext } from "../context/SessionContext";

function SessionCard({ session }) {
  const { deleteSession, toggleComplete } = useSessionContext();
  console.log(deleteSession);
  const priorityStyles = {
    Low: "text-green-400 bg-green-500/10",
    Medium: "text-yellow-400 bg-yellow-500/10",
    High: "text-red-400 bg-red-500/10",
  };
  const subjectStyles = {
    DSA: "bg-cyan-500/20 text-cyan-400",
    "Web Dev": "bg-purple-500/20 text-purple-400",
    DBMS: "bg-pink-500/20 text-pink-400",
    OS: "bg-orange-500/20 text-orange-400",
  };
  return (
    <div
      className={`w-full bg-[#111827]/70 backdrop-blur-xl 
      border border-white/10 rounded-3xl p-6 shadow-lg text-white 
      hover:scale-[1.01] transition bg-[var(--card)] text-[var(--text)]
      ${session.completed ? "opacity-50 line-through" : ""}`}
    >
      <div className="flex justify-between items-start">
        <span
          className={`text-xs px-3 py-1 rounded-full ${subjectStyles[session.subject]}`}
        >
          {session.subject}
        </span>

        <span
          className={`text-xs  tracking-wider ${priorityStyles[session.priority]}`}
        >
          {session.priority.toUpperCase()} PRIORITY
        </span>
      </div>

      <h2 className="text-xl font-semibold mt-4">{session.topic}</h2>

      <p className="text-gray-400 text-sm mt-2">Study session planned.</p>

      <div className="border-t border-white/10 my-4"></div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4 text-gray-400 text-sm">
          <div className="flex items-center gap-1">
            <FiClock />
            <span>{session.duration}m</span>
          </div>

          <div className="flex items-center gap-1">
            <FiCalendar />
            <span>{session.date}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => toggleComplete(session.id)}
            className={`p-2 rounded-full transition 
    ${
      session.completed
        ? "bg-yellow-500/20 hover:bg-yellow-500/30"
        : "bg-white/10 hover:bg-green-500/20"
    }`}
          >
            {session.completed ? (
              <span className="text-yellow-400 text-sm">↩</span>
            ) : (
              <FiCheck className="text-green-400" />
            )}
          </button>

          <button
            onClick={() => deleteSession(session.id)}
            className="p-2 rounded-full bg-white/10 hover:bg-red-500/20"
          >
            <FiTrash2 className="text-red-400" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SessionCard;
