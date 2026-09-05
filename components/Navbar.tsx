"use client";
import { useState } from "react";
import { navigation } from "@/data/navigation";
import { site } from "@/data/site";
import { theme } from "@/data/theme";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
   <nav className="sticky top-0 z-50 flex items-center justify-between border-b bg-black/90 p-6 backdrop-blur">
      <h1 className="text-4xl max-auto font-bold">{site.companyName}</h1>
<button 
  aria-label="Toggle navigation menu"
  className={` transition
duration-300
hover:scale-70 md:hidden text-3xl ${theme.textOnPrimary}`}
  onClick={() => setIsOpen(!isOpen)}
>
  {isOpen ? "✕" : "☰"}
</button>

      <div className="hidden gap-6 md:flex">
       
        {navigation.map((item) => (
  <a
  key={item.name}
  href={item.href}
  onClick={() => setIsOpen(false)}
  className="block border-b border-gray-700 px-6 py-4 text-white"
>
    {item.name}
  </a>
  
)
)}

      </div>
      {isOpen && (
  <div className="absolute left-0 top-full w-full bg-black md:hidden">
    {navigation.map((item) => (
      <a
        key={item.name}
        href={item.href}
        className="block border-b border-gray-700 px-6 py-4 text-white"
      >
        {item.name}
      </a>
    ))}
  </div>
)}
    </nav>
  );
}