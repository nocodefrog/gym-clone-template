import { about } from "@/data/about";
import { theme } from "@/data/theme";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-20 text-center"
    >
      <h2 className="text-3xl font-bold">
        {about.title}
      </h2>

      <p className="mt-6 mx-auto text-gray-600">
        {about.description}
      </p>

      <button
        className={`transition
duration-300
hover:scale-105 mt-8 rounded-lg px-6 py-3 ${theme.primary} ${theme.textOnPrimary} ${theme.primaryHover}`}
      >
        {about.button}
      </button>
    </section>
  );
}