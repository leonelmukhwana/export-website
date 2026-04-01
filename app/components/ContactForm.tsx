import { JSX } from "react/jsx-runtime";

export default function Contact(): JSX.Element {
  return (
    <section className="bg-green-50 py-20">
      <div className="container grid md:grid-cols-2 gap-10">
        
        {/* LEFT */}
        <div>
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600">
            Contact us for fresh organic agricultural exports worldwide.
          </p>

          <div className="mt-6 space-y-2 text-gray-700">
            <p>📍 Muranga, Kenya</p>
            <p>📞 +254 700 000000</p>
            <p>✉️ info@wendofresh.com</p>
          </div>
        </div>

        {/* FORM */}
        <form className="bg-white p-6 rounded-2xl shadow-lg space-y-4">
          <input className="w-full p-3 border rounded" placeholder="Name" />
          <input className="w-full p-3 border rounded" placeholder="Email" />
          <textarea className="w-full p-3 border rounded" placeholder="Message" />
          <button className="w-full bg-green-600 text-white py-3 rounded-full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}