"use client";

import { useState } from "react";

type Status = "none" | "backlog" | "playing" | "dropped";

export default function GameActions() {
  const [status, setStatus] = useState<Status>("none");

  const handleStatusChange = (newStatus: Status) => {
    setStatus(newStatus === status ? "none" : newStatus);
  };

  return (
    <div className="mt-6">
      <p className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
        Add to your collection:
      </p>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleStatusChange("backlog")}
          className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            status === "backlog"
              ? "bg-purple-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
          {status === "backlog" ? "In Backlog" : "Add to Backlog"}
        </button>
        <button
          onClick={() => handleStatusChange("playing")}
          className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            status === "playing"
              ? "bg-green-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {status === "playing" ? "Currently Playing" : "Playing"}
        </button>
        <button
          onClick={() => handleStatusChange("dropped")}
          className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            status === "dropped"
              ? "bg-red-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
            />
          </svg>
          {status === "dropped" ? "Dropped" : "Dropped"}
        </button>
      </div>
      {status !== "none" && (
        <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
          Status will be saved when backend is implemented.
        </p>
      )}
    </div>
  );
}
