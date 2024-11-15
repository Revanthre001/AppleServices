export default function Page() {
  const categories = [
    {
      id: 'iphone',
      name: 'iPhone',
      // icon: Smartphone,
      image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&q=80&w=500&h=300'
    },
    {
      id: 'macbook',
      name: 'MacBook',
      // icon: Laptop,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=500&h=300'
    },
    {
      id: 'ipad',
      name: 'iPad',
      // icon: Tablet,
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=500&h=300'
    },
    {
      id: 'accessories',
      name: 'Accessories',
      // icon: Package,
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=500&h=300'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* {categories.map((category) => (
          <Link
            key={category.id}
            to={`/products/${category.id}`}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div className="text-white">
                <category.icon className="h-8 w-8 mb-2" />
                <h2 className="text-xl font-semibold">{category.name}</h2>
              </div>
            </div>
          </Link>
        ))} */}
      </div>
    </div>
  );
}
