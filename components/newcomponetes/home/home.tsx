import React from "react";
import HeroSection from "../sidebarComponentes/HeroSection";
import TopArticals from "../sidebarComponentes/TopArticals";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Footer from "./footer";

const Home = () => {
  return (
    <div>
      {" "}
      <main className="main-layout bg-card">
        <HeroSection />
        <section className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-2 text-primary">
            Featured Articles
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover our most popular articles curated just for you.
          </p>
          <TopArticals />{" "}
          <div>
            <Link href="/articles">
              <Button
                size="lg"
                className="bg-primary cursor-pointer hover:bg-gray-300"
              >
                Read Articles
              </Button>
            </Link>
          </div>
          <Footer  /> 
        </section>
      </main>
    </div>
  );
};

export default Home;
