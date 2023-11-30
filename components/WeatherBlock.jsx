import { SunIcon, CloudIcon } from "@heroicons/react/24/outline";

export default function WeatherBlock({ weather }) {
  return (
    <div className="flex flex-col border px-5 py-4 text-center rounded-xl items-center w-full shadow-lg border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.1)] backdrop-blur-sm">
      <p>{weather.temp} F</p>
      {renderWeatherIcon(weather.conditions)}
      <p>{weather.day}</p>
    </div>
  );
}

function renderWeatherIcon(condition) {
  if (condition === "sunny") {
    return <SunIcon className="h-8 w-8" />;
  }
  if (condition === "rainy") {
    return <CloudIcon className="h-8 w-8" />;
  }
  if (condition === "cloudy") {
    return <CloudIcon className="h-8 w-8" />;
  }
}
