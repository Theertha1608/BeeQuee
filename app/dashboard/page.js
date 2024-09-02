"use client";
import BlackCollection from "@/components/mainpage/blackCollection";
import Hero from "@/components/mainpage/hero";
import NewItems from "@/components/mainpage/newItems";
import AppBar from "@/components/sidebar";
import Image from "next/image";

const Dashboard = () => {
  return (
    <main>
      <div className="mt-4">
        <Hero />
        <NewItems />
        <BlackCollection />
      </div>
    </main>
  );
};

export default Dashboard;
