import "./globals.css";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";

export const metadata = {
  title: "ราชวิทยาลัยเภสัชกรรมแห่งประเทศไทย",
  description: "The Royal College of Pharmacy of Thailand",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}