import React from "react";
import { useForm } from "react-hook-form";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useSessionContext } from "../context/SessionContext";

function SessionForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createSession } = useSessionContext();
  const onSubmit = (data) => {
    console.log("FORM DATA:", data);
    const today = new Date();
    const selectedDate = new Date(data.date);
    today.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      alert("Invalid Date");
      return;
    }
    createSession(data);
    reset();
  };

  return (
    <div className="w-full max-w-md bg-[#111827]/70 backdrop-blur-xl border bg-[var(--card)] text-[var(--text)] border-white/10 rounded-3xl p-6 shadow-xl">
      <h2 className="text-white text-xl font-semibold mb-6 flex items-center gap-2">
        <span className="text-purple-400 text-2xl">
          <IoIosAddCircleOutline />
        </span>
        Create Session
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="text-xs text-gray-400">TOPIC NAME</label>
          <input
            {...register("topic", { required: "Topic is required" })}
            placeholder="e.g. Asymptotic Analysis"
            className="w-full mt-1 bg-transparent border-b border-white/10 focus:border-purple-400 outline-none py-2 text-white"
          />
          {errors.topic && (
            <p className="text-red-400 text-xs">{errors.topic.message}</p>
          )}
        </div>

        <div>
          <label className="text-xs text-gray-400">SUBJECT</label>
          <select
            {...register("subject")}
            className="w-full mt-1 bg-transparent border-b border-white/10 py-2 text-white"
          >
            <option className="bg-[#0b1220]">DSA</option>
            <option className="bg-[#0b1220]">Web Dev</option>
            <option className="bg-[#0b1220]">DBMS</option>
            <option className="bg-[#0b1220]">OS</option>
          </select>
        </div>

        <div>
          <label className="text-xs text-gray-400">DURATION</label>
          <input
            type="number"
            {...register("duration", {
              required: "Duration required",
              min: { value: 10, message: "Min 10 mins" },
            })}
            className="w-full mt-1 bg-transparent border-b border-white/10 py-2 text-white"
          />
          {errors.duration && (
            <p className="text-red-400 text-xs">{errors.duration.message}</p>
          )}
        </div>

        <div>
          <label className="text-xs text-gray-400">PRIORITY</label>
          <select
            {...register("priority")}
            className="w-full mt-1 bg-transparent border-b border-white/10 py-2 text-white"
          >
            <option className="bg-[#0b1220]">Low</option>
            <option className="bg-[#0b1220]">Medium</option>
            <option className="bg-[#0b1220]">High</option>
          </select>
        </div>

        <div>
          <label className="text-xs text-gray-400">DATE</label>
          <input
            type="date"
            min={new Date().toISOString().split("T")[0]}
            {...register("date")}
          />
        </div>

        <button className="w-full mt-4 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold">
          Initialize Session
        </button>
      </form>
    </div>
  );
}

export default SessionForm;
