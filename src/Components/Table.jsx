import React from "react";

function Table() {
  // List of movies with their respective ratings
  const movies = [
    { name: "Die Hard", genre: "Action", rating: "4/5" },
    { name: "Mad Max: Fury Road", genre: "Action", rating: "3/5" },
    { name: "The Mask", genre: "Comedy", rating: "3/5" },
    { name: "Superbad", genre: "Comedy", rating: "4/5" },
    { name: "Se7en", genre: "Thriller", rating: "5/5" },
    { name: "Gone Girl", genre: "Thriller", rating: "2/5" },
  ];

  // Function to generate star symbols based on rating
  const renderStars = (rating) => {
    const starCount = parseInt(rating.split("/")[0], 10); // Get the number before "/"
    return "⭐".repeat(starCount); // Repeat the star symbol
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-white border border-gray-500 border-collapse">
        <thead>
          <tr>
            <th className="border border-gray-500 px-4 py-2">Movie Name</th>
            <th className="border border-gray-500 px-4 py-2">Genre</th>
            <th className="border border-gray-500 px-4 py-2">Rating</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={index}>
              <td className="border border-gray-500 px-4 py-2">{movie.name}</td>
              <td className="border border-gray-500 px-4 py-2">
                {movie.genre}
              </td>
              <td className="border border-gray-500 px-4 py-2">
                <span aria-hidden="true">{renderStars(movie.rating)}</span>
                <span className="ml-2">{movie.rating}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
