import MovieBlock from "./MovieBlock";
import SubHeader from "./SubHeader";

const SAMPLE_MOVIES = [
  {
    title: "Protectors of the Milky Way",
    description: "A tale of some people watching over a large portion of space.",
    icon: "/assets/icons/galaxy.svg",
    background: "/assets/background/galaxy.avif",
    color: "blue",
  },
  {
    title: "Hole People",
    description: "Some people leave their holes to disrupt some things.",
    icon: "/assets/icons/lord.svg",
    background: "/assets/background/lord.avif",
    color: "purple",
  },
  {
    title: "Pot Of Hair",
    description: "A boy with a dent in his head tries to stop a bad guy. And by bad I mean bad at winning.",
    icon: "/assets/icons/harry.svg",
    background: "/assets/background/harry.avif",
    color: "orange",
  },
  {
    title: "Area Fights",
    description: "A long drawn out story of some people fighting over some space. Cuz there isn't enough of it.",
    icon: "/assets/icons/star-wars.svg",
    background: "/assets/background/star-wars.avif",
    color: "green",
  },
];

export default function MoviesBar() {
  return (
    <div className="mt-20">
      <SubHeader>Popcorn Time!</SubHeader>
      <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
        {SAMPLE_MOVIES.map((movie) => (
          <MovieBlock key={movie.title} movie={movie} />
        ))}
      </div>
    </div>
  );
}
