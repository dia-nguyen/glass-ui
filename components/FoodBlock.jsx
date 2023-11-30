import CustomBlock from "./CustomBlock";

export default function FoodBlock({ food }) {
  return (
    <CustomBlock bg={food.image} alt={food.name} customStyle={"h-[180px]"}>
      <div className="text-right p-5 z-10 group-hover:-translate-y-3 ease-in-out transition-all">
        <p class="text-xl">{food.name}</p>
        <p className="text-sky-400 text-xs">{food.description}</p>
      </div>
      <div
        className="w-full h-full top-0 left-0 absolute"
        style={{
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0,0,0,0.2))",
        }}
      ></div>
    </CustomBlock>
  );
}
