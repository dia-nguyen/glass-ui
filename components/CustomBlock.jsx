import Image from "next/image";

export default function CustomBlock({
  children,
  bg,
  customStyle,
  bgStyle,
  alt,
}) {
  return (
    <div
      className={`relative flex items-end justify-end w-full px-1 rounded-xl overflow-hidden group hover:-translate-y-1 shadow-md ease-in-out transition-all ${customStyle}`}
    >
      {children}
      <Image
        src={bg}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className={`-z-10 ${bgStyle}`}
      />
    </div>
  );
}
