import { Button } from "@/components/ui/button";
import NavBar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="pt-2 border-b border-blue-100"></div>
      <Hero />
    </>
  );
}
