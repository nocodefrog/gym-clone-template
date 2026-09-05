import { location } from "@/data/location";

export default function Location() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl font-bold text-center">
        {location.title}
        
        </h2>

      <p className="mt-6 mx-auto text-gray-600 text-center" >
        {location.address}
      </p>

      <iframe
        src={location.mapUrl}
        className="mt-8 w-full h-96 rounded-xl"
        loading="lazy"
      />
    </section>
  );
}