import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

function FilterCapsule({ label, options, value, onChange, disabled }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Capsule */}
      <button
        onClick={() => !disabled && setOpen(!open)}
        className={`flex items-center gap-2 px-4 py-1 rounded-full 
        border text-sm transition
        ${
          disabled
            ? "bg-white/5 text-gray-500 cursor-not-allowed"
            : "bg-white/10 text-gray-300 hover:bg-white/20"
        }`}
      >
        <span className="text-gray-400">{label}:</span>
        <span className="text-white">{value}</span>
        <FiChevronDown className="text-xs" />
      </button>

      {/* Dropdown */}
      {!disabled && open && (
        <div
          className="absolute mt-2 w-40 bg-[#111827] border border-white/10 
                        rounded-xl shadow-lg z-50"
        >
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className="px-4 py-2 text-sm text-gray-300 hover:bg-white/10 cursor-pointer"
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FilterCapsule;
