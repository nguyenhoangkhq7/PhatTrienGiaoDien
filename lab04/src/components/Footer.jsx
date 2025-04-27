import React from "react";
import "../App.css"; // Assuming Tailwind is already configured in your project

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white">
      <footer className="flex flex-col md:flex-row justify-between p-8 md:p-16 gap-8">
        {/* About Us Section */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">About Us</h2>
          <p className="mb-6">
            Welcome to our website, a wonderful place to explore and learn how
            to cook like a pro.
          </p>
          <div className="flex items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-md bg-white text-black w-full max-w-xs focus:outline-none"
            />
            <button className="bg-pink-500 text-white p-2 rounded-r-md">
              Send
            </button>
          </div>
        </div>

        {/* Learn More Section */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">Learn More</h2>
          <ul className="space-y-2">
            <li>Our Cooks</li>
            <li>See Our Features</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Recipes Section */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">Recipes</h2>
          <ul className="space-y-2">
            <li>What to Cook This Week</li>
            <li>Pasta</li>
            <li>Dinner</li>
            <li>Healthy</li>
            <li>Vegetarian</li>
            <li>Vegan</li>
            <li>Christmas</li>
          </ul>
        </div>

        {/* Shop Section */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">Shop</h2>
          <ul className="space-y-2">
            <li>Gift Subscription</li>
            <li>Send Us Feedback</li>
          </ul>
        </div>
      </footer>

      {/* Bottom Footer */}
      <div className="flex flex-col md:flex-row justify-between items-center p-4 md:p-8 bg-gray-900 border-t border-gray-700">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <span className="text-2xl">👑</span>
          <span className="font-bold text-lg">Chefify</span>
        </div>
        <p className="text-sm">2023 Chefify Company</p>
        <p className="text-sm">Terms of Service Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
