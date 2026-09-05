import { testimonials } from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";
import { testimonialsSection } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl font-bold text-center">
        {testimonialsSection.title}
      </h2>

      <div className="transition
duration-300
hover:scale-105 grid gap-6 mt-10 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.name}
            name={testimonial.name}
            review={testimonial.review}
          />
        ))}
      </div>
    </section>
  );
}