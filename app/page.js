import Link from "next/link";

// หน้าแรก: แสดงชื่อ นามสกุล รหัสนักศึกษา และลิงก์ไปยังทุกหน้า
export default function Home() {
  return (
    <>
      <section className="hero">
        <p className="eyebrow">DIT205 · Web Application Development</p>
        <h1>Auth Demo</h1>
        <p className="lead">
          ระบบสมัครสมาชิกและเข้าสู่ระบบด้วย Next.js, MySQL (TiDB Cloud) และ JWT
          ที่ deploy บน Vercel
        </p>

        <div className="student-card">
          <div className="avatar">KC</div>
          <div>
            <div className="student-name">กฤตภาส จางศิริ</div>
            <div className="student-sub">Krittaphas Changsiri</div>
            <div className="student-id">Student ID: 6806886</div>
          </div>
        </div>

        <div className="actions">
          <Link href="/register" className="btn">Register</Link>
          <Link href="/login" className="btn btn-ghost">Login</Link>
        </div>
      </section>

      <section className="grid">
        <Link href="/register" className="card">
          <h3>Register</h3>
          <p>สร้างบัญชีใหม่ รหัสผ่านเก็บเป็น bcrypt hash</p>
        </Link>
        <Link href="/login" className="card">
          <h3>Login</h3>
          <p>เข้าสู่ระบบ รับ JWT ผ่าน httpOnly cookie</p>
        </Link>
        <Link href="/dashboard" className="card">
          <h3>Dashboard</h3>
          <p>พื้นที่สมาชิก ต้อง Login ก่อนเข้าถึง</p>
        </Link>
      </section>
    </>
  );
}
