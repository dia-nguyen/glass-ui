import SubHeader from "./SubHeader";
import WeatherBlock from "./WeatherBlock";

const SAMPLE_WEATHER = [
  {
    day: "mon",
    temp: "70",
    conditions: "sunny"
  },
  {
    day: "tues",
    temp: "65",
    conditions: "cloudy"
  },
  {
    day: "wed",
    temp: "68",
    conditions: "rainy"
  },
  {
    day: "thurs",
    temp: "75",
    conditions: "sunny"
  },
  {
    day: "fri",
    temp: "72",
    conditions: "cloudy"
  },
  {
    day: "sat",
    temp: "70",
    conditions: "cloudy"
  },
  {
    day: "sun",
    temp: "70",
    conditions: "sunny"
  },
]

export default function WeatherBar() {
  return(
    <div className="mt-20 relative">
      <SubHeader>How&apos;s it look other there?</SubHeader>
      <div className="grid gap-3 grid-cols-7">
        {SAMPLE_WEATHER.map((weather, index)=> (
          <WeatherBlock key={index} weather={weather}/>
        ))}
      </div>
    </div>
  )
}