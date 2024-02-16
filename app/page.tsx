"use client";
import Button from "./components/Button";
import Massive from "./components/Massive";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button onClick={() => alert("Hello, world!")}>Click me!</Button>
      {/* <Massive /> */}
    </main>
  );
}
