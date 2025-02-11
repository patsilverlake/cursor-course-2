"use server";

import { Footer } from "@/components/nav/footer";
import { Navbar } from "@/components/nav/navbar";

export default async function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
