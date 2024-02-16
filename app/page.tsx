"use client";
import { Button, Massive } from "./components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button onClick={() => alert("Hello, world!")}>Click me!</Button>
      {/* <Massive /> */}
    </main>
  );
}
