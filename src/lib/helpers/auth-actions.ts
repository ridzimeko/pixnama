"use client";
import { authClient } from "@/lib/auth-client";

export async function signInWithGoogle() {
  return authClient.signIn.social({ provider: "google" });
}