"use client";

import { useState } from "react";
import { createClient } from "../../lib/supabase-browser";

export default function ResetPasswordPage() {
  const supabase = createClient();

  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function updatePassword() {
    if (password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      password,
    });

    setLoading(false);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Password changed successfully. You can now login.");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-5">
        <h1 className="text-2xl font-bold">
          Reset Password
        </h1>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="New password"
          className="w-full border rounded-lg p-3"
        />

        <button
          type="button"
          onClick={updatePassword}
          disabled={loading}
          className="w-full rounded-lg bg-black text-white p-3"
        >
          {loading ? "Updating..." : "Change Password"}
        </button>

        {message && (
          <p className="text-sm">
            {message}
          </p>
        )}
      </div>
    </main>
  );
}
