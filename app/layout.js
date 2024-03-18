import "./globals.css";

export const metadata = {
  title: "Nextecom",
  description: "Eccomerce app using NextJs Full Stack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
