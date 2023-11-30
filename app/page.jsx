import HeroBanner from "@/components/HeroBanner";
import WeatherBar from "@/components/WeatherBar";
import FoodBar from "@/components/FoodBar";
import AppBar from "@/components/AppBar";
import MoviesBar from "@/components/MoviesBar";

export default function Home() {
  return (
    <main className="container px-5 z-10 text-white mb-5 sm:mx-auto">
      <HeroBanner />
      <WeatherBar />
      <FoodBar />
      <AppBar />
      <MoviesBar />
    </main>
  );
}
