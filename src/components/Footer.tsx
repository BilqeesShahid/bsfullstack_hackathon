import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black mt-12 font-Helvetica Neue">
      <div className="container px-5 py-8 mx-auto">
        {/* Main Footer Sections */}
        <div className="flex flex-wrap md:text-left text-center order-first">
          {/* FIND A STORE Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-lg font-medium tracking-tight text-white mb-10 mt-10">
              FIND A STORE
            </h2>
            <nav className="list-none">
              <li className="mb-4">
                <Link href="/" className="text-base font-medium text-white hover:text-white/70">
                  BECOME A MEMBER
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/signin" className="text-base font-medium text-white hover:text-white/70">
                  SIGN UP FOR EMAIL
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/ordersummary" className="text-base font-medium text-white hover:text-white/70">
                  Send Us Feedback
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base font-medium text-white hover:text-white/70">
                  STUDENT DISCOUNT
                </Link>
              </li>
            </nav>
          </div>

          {/* GET HELP Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-lg font-medium tracking-tight text-white mb-10 mt-10">
              GET HELP
            </h2>
            <nav className="list-none">
              <li className="mb-4">
                <Link href="/" className="text-base font-medium text-[#757575]">
                  Order Status
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/" className="text-base font-medium text-[#757575]">
                  Delivery
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/" className="text-base font-medium text-[#757575]">
                  Returns
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/" className="text-base font-medium text-[#757575]">
                  Payment Options
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/" className="text-base font-medium text-[#757575]">
                  Contact Us On Nike.com Inquiries
                </Link>
              </li>
              <li>
                <Link href="/" className="text-base font-medium text-[#757575]">
                  Contact Us On All Other Inquiries
                </Link>
              </li>
            </nav>
          </div>

          {/* ABOUT ME Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-lg font-medium tracking-tight text-white mb-10 mt-10">
              ABOUT ME
            </h2>
            <nav className="list-none">
              <li className="mb-4">
                <Link href="/" className="text-base font-medium text-[#757575]">
                  News
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/" className="text-base font-medium text-[#757575]">
                  Careers
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/" className="text-base font-medium text-[#757575]">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="/" className="text-base font-medium text-[#757575]">
                  Sustainability
                </Link>
              </li>
            </nav>
            </div>
            </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col sm:flex-row gap-5 items-center justify-between mt-10">
          {/* Logo and Location */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center">
              <Image src="/footer1.png" alt="logo1" width={20} height={18} />
            </Link>
            <span className="text-[12px] text-white">Pakistan</span>
          </div>

          {/* Copyright */}
          <p className="text-xs font-normal tracking-tight text-[#757575] mt-4 sm:mt-0">
          &#169;2023 Nike, Inc. All Rights Reserved
          </p>

          {/* Social Media Icons */}
          <span className="flex sm:ml-auto sm:mt-0 mt-4 justify-center  sm:justify-start space-x-5">
            <a href="#" className="w-8 h-8 text-gray-500 hover:text-white">
              {/* Facebook Icon */}
              <svg
                fill="currentColor"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-white">
              {/* Twitter Icon */}
              <svg
                fill="currentColor"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-white">
              {/* Instagram Icon */}
              <svg
                fill="none"
                stroke="currentColor"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-white">
              {/* LinkedIn Icon */}
              <svg
                fill="currentColor"
                stroke="currentColor"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx={4} cy={4} r={2} />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
