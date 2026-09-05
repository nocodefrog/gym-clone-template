import { contact } from "@/data/contact";
import { theme } from "@/data/theme";
export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl font-bold" >{contact.title}</h2>

      <form className="mt-10 max-w-2xl mx-auto space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full rounded-lg border p-4"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full rounded-lg border p-4"
        />

        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full rounded-lg border p-4"
        ></textarea>

        <button
         className={`transition
duration-300
hover:scale-105 rounded-lg  px-6 py-3 ${theme.primary} ${theme.textOnPrimary} ${theme.primaryHover}`}
        >
          {contact.button}
        </button>
      </form>
    </section>
  );
}