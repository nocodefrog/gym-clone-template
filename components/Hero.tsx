import { site } from "@/data/site";
import { theme } from "@/data/theme";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen">
     

<Image
  src={site.heroImage}
  alt={site.heroImageAlt}
  fill
  priority
  className="object-cover"
/>

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center">
        <div>
          <h1 className="text-5xl font-bold text-white">
            {site.tagline}
          </h1>

          <p className="mt-6 mx-auto text-gray-600">
            {site.description}
          </p>

          <button className={`transition
duration-300
hover:scale-105 rounded-lg px-6 py-3 ${theme.primary} ${theme.textOnPrimary} ${theme.primaryHover}`}>
            {site.cta}
          </button>
        </div>
      </div>
    </section>
  );
}