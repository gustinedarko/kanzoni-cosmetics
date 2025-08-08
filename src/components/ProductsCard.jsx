import { Link } from "react-router";

export default function ProductsCard({ image, name, id, price, nameTwo }) {
  return (
    <>
      <Link to={`/products/${id}`} className="block">
        <div className="bg-amber-50 p-4 rounded-lg shadow-md">
          <div className="relative h-48 bg-gray-300 rounded overflow-hidden group transition">
            <img src={image} alt={name} className="w-full h-full object-cover" />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-80 transition duration-300">
              <span className="text-white text-lg font-semibold">View Product</span>
            </div>
          </div>
          <p className="mt-2 text-center text-lg font-medium">{name}</p>
          <p className="mt-1 text-gray-600 text-center text-lg">{nameTwo}</p>
          {/* <p className="mt-2 text-center text-lg font-medium">{name}</p> */}
          <p className="mt-1 text-center text-[#453979] text-lg font-medium">Gh₵ {price}</p>
        </div>
      </Link>
    </>
  );
}