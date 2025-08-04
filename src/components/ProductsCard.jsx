import { Link } from "react-router";

export default function ProductsCard({ image, name, id, price }) {
  return (
    <>
    <Link to={`/products/${id}`} className="block">
      <div className="h-48 bg-gray-300 rounded overflow-hidden shadow hover:shadow-lg transition">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <p className="mt-2 text-center text-lg font-medium">Ghc {price}</p>
      <p className="mt-2 text-center text-lg font-medium">{name}</p>
    </Link>
    </>
  );
}