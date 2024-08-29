import BlackCollection from "@/components/mainpage/blackCollection";
import Hero from "@/components/mainpage/hero";
import NewItems from "@/components/mainpage/newItems";
import AppBar from "@/components/sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="mx-10 mt-4">
        <Hero />
        <NewItems />
        <BlackCollection />
      </div>
    </main>
  );
}
