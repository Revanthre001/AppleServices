import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              {/* <Apple className="h-8 w-8" /> */}
              <span className="font-semibold text-xl">Apple Services</span>
            </Link>
            <div className="flex items-center space-x-8">
              <Link href="/products" className="hover:text-gray-300">
                Products
              </Link>
              <Link href="/services" className="hover:text-gray-300">
                Services
              </Link>
              {/* <NotificationBell /> */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
