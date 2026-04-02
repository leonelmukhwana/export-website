import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { JSX } from "react/jsx-runtime";

export default function Contact(): JSX.Element {
  return (
    <section className="bg-green-50 py-20">
      <div className="container grid md:grid-cols-2 gap-10">

        {/* LEFT COLUMN */}
        <div>
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600">
            Contact us for fresh organic agricultural exports worldwide.
          </p>

          <div className="mt-6 space-y-3 text-gray-700">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-green-600" />
              Muranga, Kenya
            </p>

            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-600" />
              +254791 903 507
            </p>

            <p className="flex items-center gap-2">
              <FaEnvelope className="text-green-600" />
              jm7260891@gmail.com
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN / FORM */}
        <div>
          <form className="bg-white p-6 rounded-2xl shadow-lg space-y-4">
            <input type="text" name="name" className="w-full p-3 border rounded" placeholder="Name" />
            <input type="email" name="email" className="w-full p-3 border rounded" placeholder="Email" />
            <textarea name="message" className="w-full p-3 border rounded" placeholder="Message" />
            <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-full">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}