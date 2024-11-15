import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="space-y-16 py-12">
        {/* Hero Section */}
        <section className="relative h-[600px]">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auhref=format&fit=crop&q=80&w=2070&h=1000"
              alt="Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-4">
                Welcome to Apple Services
              </h1>
              <p className="text-xl mb-8">
                Your trusted partner for all Apple product sales and services
              </p>
              <div className="space-x-4">
                <Link
                  href="/products"
                  className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
                >
                  Browse Products
                </Link>
                <Link
                  href="/services"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Customer Feedback
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.service}</p>
                  </div>
                </div>
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700">{testimonial.comment}</p>
              </div>
            ))} */}
          </div>
        </section>

        {/* Feedback Form */}
        <section className="max-w-7xl mx-auto px-4">
          {/* <FeedbackForm /> */}
        </section>
      </div>
    </div>
  );
}
