import { useFlags } from "flagsmith/react";

export default function Home() {
  const flags = useFlags(["stream-stats"]);
  if (flags["stream-stats"].enabled) return <h1>Flag enabled</h1>;
  return <h1>Flag disabled</h1>;
}
