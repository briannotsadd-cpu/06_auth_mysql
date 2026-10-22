"use client";

import { useState, useEffect } from "react";

export default function DashboardPage() {
  const [user, setUser] = useState(null);

  // โหลดข้อมูลผู้ใช้ที่ Login อยู่จาก API
  useEffect(() => {
    fetch("/api/me")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  // ให้เซิร์ฟเวอร์ลบ cookie แล้วไปหน้า login
  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    window.location.href = "/login";
  };

  if (!user) {
    return <p className="muted center">Loading...</p>;
  }

  const initials = (user.fullname || "?")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="auth-box wide">
      <div className="profile">
        <div className="avatar large">{initials}</div>
        <div>
          <h1>Welcome, {user.fullname}</h1>
          <p className="muted">You are signed in.</p>
        </div>
      </div>
      <dl className="info">
        <div><dt>Member ID</dt><dd>#{user.id}</dd></div>
        <div><dt>Full name</dt><dd>{user.fullname}</dd></div>
        <div><dt>Email</dt><dd>{user.email}</dd></div>
      </dl>
      <button onClick={handleLogout} className="btn btn-ghost">Logout</button>
    </div>
  );
}
