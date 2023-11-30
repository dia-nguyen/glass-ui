import NavigationItem from "./NavigationItem";

export default function NavigationLinks() {
  return (
    <div className="flex gap-3">
      <NavigationItem>Weather</NavigationItem>
      <NavigationItem>Food</NavigationItem>
      <NavigationItem>Apps</NavigationItem>
      <NavigationItem>Movies</NavigationItem>
    </div>
  )
}