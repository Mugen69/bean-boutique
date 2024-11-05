import {
  ShoppingCartIcon,
  MenuIcon,
  SearchIcon,
  XIcon,
  StarIcon,
} from "lucide-react";
import React, { useState } from "react";
import { render } from "react-dom";
export default function BeanBoutique() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      comment:
        "The Ethiopian Yirgacheffe is absolutely divine! Best coffee I've ever had.",
      date: "2024-01-15",
    },
    {
      id: 2,
      name: "Mike Peters",
      rating: 4,
      comment:
        "Great selection and fast shipping. The Chemex makes perfect coffee every time.",
      date: "2024-01-10",
    },
    {
      id: 3,
      name: "Emily Chen",
      rating: 5,
      comment:
        "The monthly subscription has introduced me to so many amazing coffees!",
      date: "2024-01-05",
    },
  ];
  const products = [
    {
      id: 1,
      name: "Ethiopian Yirgacheffe",
      price: 18.99,
      description: "Floral, bright, citrus notes",
      image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9",
    },
    {
      id: 2,
      name: "Colombian Supremo",
      price: 16.99,
      description: "Sweet caramel, balanced body",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd",
    },
    {
      id: 3,
      name: "Guatemala Antigua",
      price: 17.99,
      description: "Chocolate, spicy undertones",
      image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7",
    },
    {
      id: 4,
      name: "Costa Rica Tarrazu",
      price: 19.99,
      description: "Bright acidity, honey sweetness",
      image: "https://images.unsplash.com/photo-1621555470436-d36e9683bdb4",
    },
    {
      id: 5,
      name: "Kenya AA",
      price: 21.99,
      description: "Wine-like acidity, berry notes",
      image: "https://images.unsplash.com/photo-1578849278619-e73505e9610f",
    },
    {
      id: 6,
      name: "Sumatra Mandheling",
      price: 20.99,
      description: "Earthy, full-bodied, spicy",
      image: "https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a",
    },
  ];
  const equipment = [
    {
      id: 7,
      name: "Chemex Pour-Over",
      price: 45.99,
      description: "Classic pour-over coffee maker",
      image: "https://images.unsplash.com/photo-1544233726-9f1d2b27be8b",
    },
    {
      id: 8,
      name: "French Press",
      price: 29.99,
      description: "Traditional immersion brewer",
      image: "https://images.unsplash.com/photo-1522992319-0365e5f11656",
    },
    {
      id: 9,
      name: "Burr Grinder",
      price: 99.99,
      description: "Premium ceramic burr grinder",
      image: "https://images.unsplash.com/photo-1506682025334-be4f5661d47f",
    },
    {
      id: 10,
      name: "Gooseneck Kettle",
      price: 35.99,
      description: "Precision pour control",
      image: "https://images.unsplash.com/photo-1521302080334-4bebac2763a6",
    },
    {
      id: 11,
      name: "AeroPress",
      price: 29.99,
      description: "Versatile brewing system",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    },
    {
      id: 12,
      name: "Scale",
      price: 24.99,
      description: "Digital precision scale",
      image: "https://images.unsplash.com/photo-1517080716802-0b9aea4bf834",
    },
  ];
  const events = [
    {
      id: 13,
      name: "Cupping Session",
      date: "2024-02-15",
      price: 25,
      description: "Learn to taste coffee like a pro",
      image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31",
    },
    {
      id: 14,
      name: "Brewing Workshop",
      date: "2024-02-20",
      price: 35,
      description: "Master pour-over techniques",
      image: "https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6",
    },
    {
      id: 15,
      name: "Latte Art Class",
      date: "2024-02-25",
      price: 40,
      description: "Create beautiful coffee art",
      image: "https://images.unsplash.com/photo-1534415378365-1e2d59e35282",
    },
  ];
  const subscriptions = [
    {
      id: 16,
      name: "Monthly Explorer",
      price: 24.99,
      description: "1 bag monthly, rotating origins",
      image: "https://images.unsplash.com/photo-1498804103079-a6351b050096",
    },
    {
      id: 17,
      name: "Weekly Enthusiast",
      price: 89.99,
      description: "4 bags monthly, custom selection",
      image: "https://images.unsplash.com/photo-1504630083234-14187a9df0f5",
    },
    {
      id: 18,
      name: "Barista Bundle",
      price: 149.99,
      description: "Coffee + equipment quarterly",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735",
    },
  ];
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };
  const filteredProducts = [...products, ...equipment].filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <StarIcon
        key={index}
        className={`h-5 w-5 ${index < rating ? "text-yellow-400" : "text-gray-300"}`}
      />
    ));
  };
  return (
    <div className="w-full min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold">Bean Boutique</h1>

            <div className="hidden md:flex space-x-8">
              <a href="#products" className="hover:text-gray-600">
                Coffee
              </a>
              <a href="#equipment" className="hover:text-gray-600">
                Equipment
              </a>
              <a href="#events" className="hover:text-gray-600">
                Events
              </a>
              <a href="#subscriptions" className="hover:text-gray-600">
                Subscriptions
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <SearchIcon
                className="h-6 w-6 cursor-pointer"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              />
              <ShoppingCartIcon
                className="h-6 w-6 cursor-pointer"
                onClick={() => setIsCartOpen(!isCartOpen)}
              />
              <div className="md:hidden">
                <MenuIcon
                  className="h-6 w-6 cursor-pointer"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {isSearchOpen && (
        <div className="fixed top-16 left-0 w-full bg-white shadow-md p-4 z-40">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 border rounded"
            autoFocus
          />
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg max-w-md">
            <h2 className="text-2xl font-bold mb-4">
              Welcome to Bean Boutique!
            </h2>
            <p className="mb-4">Sign up for 10% off your first order</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border rounded mb-4"
            />
            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="pt-20 px-4">
        <section className="max-w-7xl mx-auto mb-16">
          <div className="h-[60vh] rounded-lg overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
              alt="Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">
                  Craft Coffee Experience
                </h2>
                <p className="text-xl mb-8">
                  Discover our artisanal coffee selection
                </p>
                <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="max-w-7xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Coffee Selection</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-2">{product.description}</p>
                  <p className="font-bold mb-4">${product.price}</p>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 w-full"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="equipment" className="max-w-7xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8">Brewing Equipment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {equipment.map((item) => (
              <div key={item.id} className="border rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <p className="font-bold mb-4">${item.price}</p>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 w-full"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="reviews" className="max-w-7xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="border rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {renderStars(review.rating)}
                </div>
                <p className="text-gray-600 mb-4">{review.comment}</p>
                <div className="flex justify-between items-center">
                  <p className="font-bold">{review.name}</p>
                  <p className="text-gray-500">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="events" className="max-w-7xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event) => (
              <div key={event.id} className="border rounded-lg overflow-hidden">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold mb-2">{event.name}</h3>
                  <p className="text-gray-600 mb-2">{event.description}</p>
                  <p className="mb-2">Date: {event.date}</p>
                  <p className="font-bold mb-4">${event.price}</p>
                  <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 w-full">
                    Register
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="subscriptions" className="max-w-7xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8">Coffee Subscriptions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subscriptions.map((sub) => (
              <div key={sub.id} className="border rounded-lg overflow-hidden">
                <img
                  src={sub.image}
                  alt={sub.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold mb-2">{sub.name}</h3>
                  <p className="text-gray-600 mb-2">{sub.description}</p>
                  <p className="font-bold mb-4">${sub.price}/month</p>
                  <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 w-full">
                    Subscribe
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {isCartOpen && (
        <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg z-50 p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Shopping Cart</h2>
            <XIcon
              className="h-6 w-6 cursor-pointer"
              onClick={() => setIsCartOpen(false)}
            />
          </div>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p>${item.price}</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="mt-4">
                <p className="font-bold mb-4">
                  Total: $
                  {cartItems
                    .reduce((sum, item) => sum + item.price, 0)
                    .toFixed(2)}
                </p>
                <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 w-full">
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      <footer className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">About Us</h3>
              <p>Crafting perfect coffee experiences since 2010</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Visit Us</h3>
              <p>123 Coffee Street</p>
              <p>Beantown, BN 12345</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <p>info@beanboutique.com</p>
              <p>(555) 123-4567</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 cursor-pointer">
    Instagram
  </a>
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 cursor-pointer">
    Facebook
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 cursor-pointer">
    Twitter
  </a>
</div>

            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
render(<BeanBoutique />, document.getElementById("root"));
