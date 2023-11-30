import FoodBlock from "./FoodBlock";
import SubHeader from "./SubHeader";

const SAMPLE_FOOD = [
  {
    name: "Burgers",
    description: "The best burgers in town",
    image: "/assets/background/burger.avif",
  },
  {
    name: "Ice Cream",
    description: "The worst ice-cream around",
    image: "/assets/background/ice-cream.avif",
  },
  {
    name: "Pizza",
    description: "This 'Za be gettin down",
    image: "/assets/background/pizza.avif",
  },
  {
    name: "BBQ",
    description: "BBQ ain't need no rhyme",
    image: "/assets/background/bbq.avif",
  }
]

export default function FoodBar() {
  return(
    <div className="mt-20 relative">
      <SubHeader>Get it Delivered!</SubHeader>
      <div className="grid gap-5 grid-cols-2 lg:grid-cols-4">
        {SAMPLE_FOOD.map((food) => <FoodBlock key={food.name} food={food}/>)}
      </div>
    </div>
  )
}