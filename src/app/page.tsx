"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ROUTES } from "./constants";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push(ROUTES.login);
  }, []);

  return null;
}
