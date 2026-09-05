type TestimonialCardProps = {
  name: string;
  review: string;
};

export default function TestimonialCard({
  name,
  review,
}: TestimonialCardProps) {
  return (
    <div className="rounded-xl overflow-hidden border shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <p className="mt-6 mx-auto text-gray-600">"{review}"</p>

      <h3 className="mt-4 font-semibold">{name}</h3>
    </div>
  );
}