export default function NavigationItem({ children }) {
  return (
    <div className="border rounded-full py-2 text-sm px-5 shadow-md border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.1)] backdrop-blur-sm">
      {children}
    </div>
  );
}
