export default function Footer() {
  return (
    <footer className="bg-white mt-24">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img src="/logo.svg" className="h-8 mr-3" alt="FlowBite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                Zagg
              </span>
            </a>

            <p className="max-w-sm text-gray-700 mt-3">
              Specializes in providing high-quality, stylish products for your
              wardrobe
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Shop
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    All Categories
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Winter Collection
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Discount
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Company
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline ">
                    About Us
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Affiliates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2023{" "}
            <a href="/" className="hover:underline">
              Nostra™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 items-center space-x-5 sm:justify-center sm:mt-0">
            <img
              src="/logos/mastercard.svg"
              alt="Mastercard's Logo"
              className="w-8 h-8"
            />
            <img
              src="/logos/visa.svg"
              alt="Visa's Logo"
              className="w-10 h-10"
            />
            <img
              src="/logos/paypal.svg"
              alt="Paypal's Logo"
              className="w-12 h-12"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
