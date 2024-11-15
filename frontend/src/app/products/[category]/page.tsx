import Link from "next/link";

export default function Page() {
  const category = "iphone";

  const products = {
    iphone: [
      {
        id: "iphone-15-pro",
        name: "iPhone 15 Pro",
        price: 999,
        image:
          "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=500&h=300",
      },
      {
        id: "iphone-15",
        name: "iPhone 15",
        price: 799,
        image:
          "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=500&h=300",
      },
    ],
    macbook: [
      {
        id: "macbook-pro-16",
        name: 'MacBook Pro 16"',
        price: 2499,
        image:
          "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=500&h=300",
      },
      {
        id: "macbook-air",
        name: "MacBook Air",
        price: 999,
        image:
          "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=500&h=300",
      },
    ],
    ipad: [
      {
        id: "ipad-pro",
        name: "iPad Pro",
        price: 799,
        image:
          "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=500&h=300",
      },
      {
        id: "ipad-air",
        name: "iPad Air",
        price: 599,
        image:
          "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=500&h=300",
      },
    ],
    accessories: [
      {
        id: "airpods-pro",
        name: "AirPods Pro",
        price: 249,
        image:
          "https://images.unsplash.com/photo-1588156979435-379b9d802b0a?auto=format&fit=crop&q=80&w=500&h=300",
      },
      {
        id: "magic-keyboard",
        name: "Magic Keyboard",
        price: 299,
        image:
          "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=500&h=300",
      },
    ],
  };

  const categoryProducts = products[category as keyof typeof products] || [];
  const categoryName = category?.charAt(0).toUpperCase() + category?.slice(1);
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">{categoryName} Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoryProducts.map((product) => (
          <Link
            key={product.id}
            href={`/products/${category}/${product.id}`}
            className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600">Starting from ${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
