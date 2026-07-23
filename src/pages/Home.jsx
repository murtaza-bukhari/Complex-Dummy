import { Hero } from "../components/Hero";
import { Why } from "../components/Why";
import { Location } from "../components/Location";
import { Testimonials } from "../components/Testimonials";
import { Footer } from "../components/Footer";


import "./page-styles/home.css";

export const Home = () => {
  return (
    <main className="home-page">

      <Hero />
      <Why />
      <Location />
      <Testimonials />
      <Footer />

    </main>
  );
};