"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Correct hook for App Router

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/signup");
  }, [router]); // Add router as a dependency


}
