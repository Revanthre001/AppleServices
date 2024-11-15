export default function Page() {
  const services = [
    {
      id: "repair",
      name: "Repair Services",
      description: "Professional repair for all Apple devices",
      // icon: Wrench,
      image:
        "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=500&h=300",
    },
    {
      id: "screen-replacement",
      name: "Screen Replacement",
      description: "Quick and reliable screen replacement service",
      // icon: Smartphone,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=500&h=300",
    },
    {
      id: "upgrade",
      name: "Hardware Upgrade",
      description: "Upgrade your device performance",
      // icon: Laptop,
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=500&h=300",
    },
    {
      id: "diagnostic",
      name: "Diagnostic Service",
      description: "Comprehensive device diagnostics",
      // icon: Clock,
      image:
        "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80&w=500&h=300",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* {services.map((service) => (
          <Link
            key={service.id}
            to={`/services/${service.id}`}
            className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <service.icon className="h-6 w-6 text-blue-600 mr-2" />
                <h2 className="text-xl font-semibold">{service.name}</h2>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </Link>
        ))} */}
      </div>
    </div>
  );
}
