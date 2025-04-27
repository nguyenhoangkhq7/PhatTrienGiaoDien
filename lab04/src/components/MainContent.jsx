import React, { useState, useEffect } from "react";
import "../App.css";
import { FaRegBookmark } from "react-icons/fa";

const MainContent = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch dữ liệu từ TheMealDB API
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        // Gọi API để lấy danh sách món ăn (ví dụ: tìm kiếm món ăn thuộc danh mục "Seafood")
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
        );
        const data = await response.json();

        // Lấy tối đa 8 món ăn để hiển thị
        const fetchedRecipes = data.meals.slice(0, 8).map((meal) => ({
          id: meal.idMeal,
          name: meal.strMeal,
          image: meal.strMealThumb,
          time: Math.floor(Math.random() * (32 - 14 + 1)) + 14, // Giả lập thời gian (14-32 phút)
        }));

        setRecipes(fetchedRecipes);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      {/* Tabs Section */}
      <div className="flex space-x-4 mb-6">
        <button className="text-pink-500 font-semibold border-b-2 border-pink-500 pb-2">
          Saved Recipes
        </button>
        <button className="text-gray-600 hover:text-pink-500 pb-2">
          Folders
        </button>
        <button className="text-gray-600 hover:text-pink-500 pb-2">
          Recipes by GENEVIEVE
        </button>
      </div>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{recipe.name}</h3>
                <FaRegBookmark className="text-pink-500 text-xl" />
              </div>
              <span className="text-sm text-gray-500">
                {recipe.time} minutes
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 space-x-2">
        <button className="px-3 py-1 text-gray-600 hover:text-pink-500">
          «
        </button>
        <button className="px-3 py-1 bg-pink-500 text-white rounded-md">
          1
        </button>
        <button className="px-3 py-1 text-gray-600 hover:text-pink-500">
          2
        </button>
        <button className="px-3 py-1 text-gray-600 hover:text-pink-500">
          3
        </button>
        <button className="px-3 py-1 text-gray-600 hover:text-pink-500">
          4
        </button>
        <button className="px-3 py-1 text-gray-600 hover:text-pink-500">
          ...
        </button>
        <button className="px-3 py-1 text-gray-600 hover:text-pink-500">
          10
        </button>
        <button className="px-3 py-1 text-gray-600 hover:text-pink-500">
          11
        </button>
        <button className="px-3 py-1 text-gray-600 hover:text-pink-500">
          »
        </button>
      </div>
    </main>
  );
};

export default MainContent;
