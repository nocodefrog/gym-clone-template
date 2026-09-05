import Image from "next/image";
import { theme } from "@/data/theme";

type BusinessCardProps = {
  title: string;
  location: string;
  price: string;
  image: string;
  buttonText: string;
};

export default function BusinessCard({
  title,
  location,
  price,
  image,
  buttonText,
}: BusinessCardProps) {
  return (
    <div className="rounded-xl overflow-hidden border shadow-lg 
    transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      <Image
        src={image}
        alt={title}
        width={800}
        height={500}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-6 mx-auto text-gray-600">{location}</p>
        <p className="mt-6 mx-auto text-gray-600">{price}</p>
        <button className={`transition duration-300 hover:scale-105 rounded-lg px-6 py-3 ${theme.primary} ${theme.textOnPrimary} ${theme.primaryHover}`}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}