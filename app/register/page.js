"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // ส่งข้อมูลฟอร์มไปยัง API หากสำเร็จไปหน้า login
  const handleRegister = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullname, email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        router.push("/login");
      } else {
        setMessage(data.message);
      }
    } catch {
      setMessage("Cannot reach the server. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="auth-box">
      <h1>Create account</h1>
      <p className="muted">สมัครสมาชิกเพื่อเข้าใช้งาน Dashboard</p>
      <form onSubmit={handleRegister}>
        <label>
          Full name
          <input
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            placeholder="Your full name"
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 6 characters"
            minLength={6}
            required
          />
        </label>
        <button type="submit" className="btn" disabled={loading}>
          {loading ? "Creating..." : "Register"}
        </button>
      </form>
      {message && <p className="error">{message}</p>}
      <p className="muted center">
        Already have an account? <Link href="/login">Login</Link>
      </p>
    </div>
  );
}
