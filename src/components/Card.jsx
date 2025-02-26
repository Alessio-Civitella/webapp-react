import { Link } from "react-router-dom";
const BASE_URL = "http://localhost:3000/";

export function Card({
  id,
  slug,
  title,
  director,
  genre,
  release_year,
  image,
}) {
  return (
    <div
      key={id}
      className="card max-w-sm bg-white shadow-lg rounded-lg p-6 m-4 transition-transform transform hover:scale-105 hover:shadow-xl"
    >
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      {/* Usa image per il path corretto */}
      <img
        src={`${BASE_URL}${image}`}
        alt={`${title}`}
        className="w-full object-contain rounded-lg mt-4"
      />
      <p className="text-gray-600 mt-2">
        <span className="font-medium">Director:</span> {director}
      </p>
      <p className="text-gray-600 mt-1">
        <span className="font-medium">Genre:</span> {genre}
      </p>
      <p className="text-gray-600 mt-1">
        <span className="font-medium">Release Year:</span> {release_year}
      </p>
      <Link
        className="px-2 py-1 text-sm text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-md hover:from-blue-600 hover:to-purple-600"
        to={`/movies/${slug}`}
      >
        Dettagli
      </Link>
    </div>
  );
}