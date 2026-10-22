"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// แถบเมนูบนสุด: แสดงปุ่มตามสถานะการ Login
export default function Navbar() {
  const pathname = usePathname();
  const [user, setUser] = useState(null);

  // ตรวจสถานะ Login ใหม่ทุกครั้งที่เปลี่ยนหน้า
  useEffect(() => {
    fetch("/api/me")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => setUser(data))
      .catch(() => setUser(null));
  }, [pathname]);

  const link = (href, label) => (
    <Link href={href} className={pathname === href ? "nav-link active" : "nav-link"}>
      {label}
    </Link>
  );

  return (
    <header className="navbar">
      <Link href="/" className="brand">
        <span className="brand-dot" /> Auth Demo
      </Link>
      <nav className="nav-links">
        {link("/", "Home")}
        {user ? (
          link("/dashboard", "Dashboard")
        ) : (
          <>
            {link("/login", "Login")}
            <Link href="/register" className="nav-cta">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
