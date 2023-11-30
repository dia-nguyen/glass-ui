import Image from "next/image";

export default function MovieBlock({ movie }) {
  return (
    <div
      className={`p-5 relative flex items-end justify-end w-full rounded-xl overflow-hidden group hover:-translate-y-1 shadow-md ease-in-out transition-transform h-[480px]`}
    >
      <div className="h-full z-10">
        <p className="text-3xl text-white">{movie.title}</p>
        <p className="text-xs text-gray-300 mt-2">{movie.description}</p>
      </div>

      <Image
        width={100}
        height={100}
        src={movie.icon}
        alt={movie.name}
        className="invert mt-4 z-10 group-hover:scale-125 group-hover:-translate-x-5 group-hover:-translate-y-5 ease-in-out transition-transform"
      />
      <div
        className="w-full h-full top-0 left-0 absolute opacity-30"
        style={{
          background:
            `linear-gradient(to top, ${movie.color}, transparent)`,
        }}
      ></div>
      <Image
        src={movie.background}
        alt={movie.title}
        layout="fill"
        objectFit="cover"
        className={`-z-10 group-hover:scale-110 ease-in-out transition-transform`}
      />
    </div>
  );
}
