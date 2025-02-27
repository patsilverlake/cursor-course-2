import { Metadata } from "next";
import Footer from "./_components/footer";
import Header from "./_components/header";

export const metadata: Metadata = {
  title: "Marketing - Your Product Name",
  description: "Discover how our solution can help you achieve your goals faster and easier."
};

export default async function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <div className="flex-1">{children}</div>

      <Footer />
    </div>
  );
}
