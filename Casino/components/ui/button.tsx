import React from "react";

export function Button({ children, className = "", ...props }: any) {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded font-semibold transition ${className}`}
    >
      {children}
    </button>
  );
}