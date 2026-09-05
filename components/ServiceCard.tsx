type ServiceCardProps = {
  title: string;
  description: string;
};

export default function ServiceCard({
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="rounded-xl overflow-hidden border shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-6 mx-auto text-gray-600">
        {description}
      </p>
    </div>
  );
}