import Image from "next/image";
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-6 px-4 text-sm">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-6">

        {/* Logo + Description */}
        <div className="flex-1 min-w-[250px] flex flex-col gap-4">
          <Image
            src="/assets/images/logo/Vector.svg"
            alt="logo"
            width={35}
            height={35}
            className="text-white"
          />
          <p className="leading-relaxed">
            ALX is a platform where travelers can discover and book unique, comfortable, and affordable lodging options worldwide. From cozy city apartments and tranquil countryside retreats to exotic beachside villas, ALX connects you with the perfect place to stay for any trip.
          </p>
        </div>

        {/* Footer Columns */}
        <div className="flex flex-1 justify-between flex-wrap gap-6">

          {/* Explore */}
          <div>
            <h3 className="font-semibold mb-2 text-white">Explore</h3>
            <ul className="space-y-1 text-gray-300">
              <li>Apartments in Dubai</li>
              <li>Hotels in New York</li>
              <li>Villa in Spain</li>
              <li>Mansion in Indonesia</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-2 text-white">Company</h3>
            <ul className="space-y-1 text-gray-300">
              <li>About us</li>
              <li>Blog</li>
              <li>Career</li>
              <li>Customers</li>
              <li>Brand</li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold mb-2 text-white">Help</h3>
            <ul className="space-y-1 text-gray-300">
              <li>Support</li>
              <li>Cancel booking</li>
              <li>Refunds Process</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Legal Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-gray-600 text-xs flex flex-col gap-3 items-center text-center">
        <p>
          Some hotel requires you to cancel more than 24 hours before check-in.
          Check the details <Link href="/open" className="underline text-emeraldTint ml-1">here</Link>.
        </p>
        <ul className="flex gap-4 flex-wrap justify-center text-white">
          <li>Terms of Service</li>
          <li>Policy Service</li>
          <li>Cookies Policy</li>
          <li>Partners</li>
        </ul>
        <p className="text-center w-full pt-4 text-gray-500">
          © 2025 Daily Contents. All rights reserved.
        </p>
      </div>
    </footer>


  );
};

export default Footer;
