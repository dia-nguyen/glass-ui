import Clock from "@/components/Clock";
import Notification from "@/components/Notification";
import NavigationLinks from "./NavigationLinks";

export default function HeroBanner(){
  return (
    <div className="mt-56">
      <Clock/>
      <Notification/>
      <NavigationLinks/>
    </div>
  )
}