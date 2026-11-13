"use client";
// app/components/LocalTime.jsx
import { useEffect, useState } from "react";

export default function LocalTime() {
  // ❌ BUG: new Date() here runs on the server AND the browser.
  // The two strings differ by a few seconds, so React throws a hydration error.
  // const now = new Date().toLocaleTimeString();

  // ✅ FIX: start empty so server and first browser render match,
  // then fill the real time after mount (only runs in the browser).
  const [now, setNow] = useState("");

  useEffect(() => {
    setNow(new Date().toLocaleTimeString());
  }, []);

  return <p>Current time: {now || "…"}</p>;
}