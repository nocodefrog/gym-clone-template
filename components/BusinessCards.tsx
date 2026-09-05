import { businessCards, businessCardsSection } from "@/data/businessCards";
import BusinessCard from "./BusinessCard";

export default function BusinessCards() {
  return (
    <section 
    id="programs"
    className="max-w-6xl mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl font-bold text-center">
        {businessCardsSection.title}
      </h2>

      <div className="grid gap-6 mt-10 md:grid-cols-3">
   {businessCards.map((card) => (
  <BusinessCard
    key={card.title}
    title={card.title}
    location={card.location}
    price={card.price}
    image={card.image}
    buttonText={businessCardsSection.buttonText}
  />
))}
      </div>
    </section>
  );
}