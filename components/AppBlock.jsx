import CustomBlock from "./CustomBlock";
import Image from "next/image";

export default function AppBlock({ app }) {
  return (
    <CustomBlock
      bg={app.background}
      alt={app.name}
      customStyle={"h-[120px]"}
      bgStyle={"grayscale"}
    >
      <div className="p-3 w-full h-full z-10">
        <p className="text-sky-400 text-xs uppercase">{app.category}</p>
        <p class="text-lg leading-5">{app.name}</p>
        <Image
          width={35}
          height={35}
          src={app.icon}
          alt={app.name}
          className="invert mt-4"
        />
      </div>

      <div
        className="w-full h-full top-0 left-0 absolute"
        style={{
          background: "rgba(0,0,0,0.5)",
        }}
      ></div>
    </CustomBlock>
  );
}
