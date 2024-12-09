import Link from "next/link"
const footerNavigation = {
  main: [
    { name: 'Main', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Applications', href: '/applications' },
  ]
}

export default function Footer() {

    return (
      <footer className="bg-gray-900">
      <div className="bg-gray-900 mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav aria-label="Footer" className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6">
          {footerNavigation.main.map((item) => (
            <Link key={item.name} href={item.href} className="text-white hover:text-gray-900">
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="mt-16 flex justify-center gap-x-10">
        </div>
        <p className="mt-10 text-center text-sm/6 text-white">
          &copy; {new Date().getFullYear()} White Raven, Inc. All rights reserved.
        </p>
      </div>
    </footer>
    )
}
