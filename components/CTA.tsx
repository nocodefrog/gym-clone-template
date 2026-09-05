import { cta } from "@/data/cta";
import { theme } from "@/data/theme";

export default function CTA() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-center">
      <div className="rounded-2xl bg-black text-white p-10 text-center">
        <h2 className="text-3xl font-bold mx-auto">
          {cta.title}
        </h2>

        <p className="mt-6 mx-auto text-gray-600">
          {cta.description}
        </p>

        <button className={`transition
duration-300
hover:scale-105 rounded-lg px-6 py-3 mx-auto ${theme.primary} ${theme.textOnPrimary} ${theme.primaryHover}`}>
          {cta.button}
        </button>
      </div>
    </section>
  );
}