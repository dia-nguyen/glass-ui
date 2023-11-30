import AppBlock from "./AppBlock";
import SubHeader from "./SubHeader";

const SAMPLE_APPS = [
  {
    name: "Cloudly",
    category: "Weather",
    icon: "/assets/icons/cloudy.svg",
    background: "/assets/background/cloudly.avif",
  },
  {
    name: "Mathio",
    category: "Calc",
    icon: "/assets/icons/mathio.svg",
    background: "/assets/background/mathio.avif",
  },
  {
    name: "Cashy",
    category: "Bank",
    icon: "/assets/icons/cashy.svg",
    background: "/assets/background/cashy.avif",
  },
  {
    name: "Fly-er-io-ly",
    category: "Travel",
    icon: "/assets/icons/fly.svg",
    background: "/assets/background/fly.avif",
  },
  {
    name: "Gamey",
    category: "Games",
    icon: "/assets/icons/gamey.svg",
    background: "/assets/background/gamey.avif",
  },
  {
    name: "Chatty",
    category: "Video Chat",
    icon: "/assets/icons/chatty.svg",
    background: "/assets/background/chatty.avif",
  },
];

export default function AppBar() {
  return (
    <div className="mt-20">
      <SubHeader>What&apos;s Appening?</SubHeader>
      <div className="grid gap-3 grid-cols-3 lg:grid-cols-6">
        {SAMPLE_APPS.map((app) => (
          <AppBlock key={app.name} app={app} />
        ))}
      </div>
    </div>
  );
}
