import { FaLeaf, FaGlobe, FaLock } from "react-icons/fa";
import { JSX } from "react/jsx-runtime";

export default function Features(): JSX.Element {
  const items = [
    { title: "Secure Payment", icon: <FaLock /> },
    { title: "Organic Certified", icon: <FaLeaf /> },
    { title: "Global Export", icon: <FaGlobe /> },
  ];

  return (
    <div className="container -mt-20 grid md:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <div
          key={i}
          className="bg-white p-6 rounded-2xl shadow-lg flex items-center gap-4"
        >
          <div className="text-green-600 text-2xl">
            {item.icon}
          </div>

          <div>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-sm text-gray-500">
              Premium agricultural export services
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}