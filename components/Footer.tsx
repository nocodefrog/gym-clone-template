import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto border-t mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        <p className="mt-6 mx-auto text-gray-600">
          {site.companyName}
        </p>

        <p className="mt-6 text-gray-600">
         © {new Date().getFullYear()} {site.companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}