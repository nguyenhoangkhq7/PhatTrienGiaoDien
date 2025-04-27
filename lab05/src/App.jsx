import { useEffect, useState } from "react";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch recipes from TheMealDB API (category: Dessert for variety)
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert"
        );
        const data = await response.json();

        // Map the data to a format suitable for display (limit to 12 items)
        const fetchedRecipes = data.meals.slice(0, 12).map((meal) => ({
          id: meal.idMeal,
          title: meal.strMeal,
          url: meal.strMealThumb,
        }));

        setRecipes(fetchedRecipes);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Danh sách món tráng miệng
      </h1>
      {loading ? (
        <p className="text-center text-lg text-gray-600">Đang tải...</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipes.map((item) => (
            <li
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-200"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 text-sm hover:underline"
                >
                  Xem ảnh
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
