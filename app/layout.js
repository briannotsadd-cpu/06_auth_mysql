import "./style.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Auth Demo | DIT205",
  description: "Login & Register with Next.js and MySQL (TiDB Cloud)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>
        <Navbar />
        <main className="page">{children}</main>
        <footer className="footer">
          DIT205 Web Application Development · Krittaphas Changsiri 6806886
        </footer>
      </body>
    </html>
  );
}
