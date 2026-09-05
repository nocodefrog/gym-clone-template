import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";
import { servicesSection } from "@/data/services";

export default function Services() {
  return (
    <section
    id="services"
    className="max-w-6xl mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl font-bold text-center">
        {servicesSection.title}
      </h2>

      <div className="grid gap-6 mt-10 md:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}