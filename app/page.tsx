import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { darkscene } from '@/lib/darkscene';

export const metadata: Metadata = {
  title: "Home | White Raven Web Developer",
  description: "Full Stack Web Developer",
};

export default function Page() {
  darkscene();

  return (
    <div className="bg-white">
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <div className="mb-10 sm:mb-10 sm:flex">
                  <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Who I am.{' '}
                    <Link href="/about" className="whitespace-nowrap font-semibold text-indigo-900">
                      <span aria-hidden="true" className="absolute inset-0" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
                <h1 className="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                  Your Web's Friendly Neighborhood Developer.
                </h1>
                <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                  A Full Stack Developer Passionate About Pixel-Perfect Designs and Seamless User Interactions.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link href="/applications" className="text-sm/6 font-semibold text-gray-900">
                    Check Out Projects <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            alt="White Raven homepage image of computer monitor and desk"
            width={1000}
            height={1000}
            priority
            src={'/assets/homepage.webp'}
            className="hidden md:block aspect-[3/2] object-cover lg:aspect-auto lg:size-full"
          />
        </div>
      </div>
    </div>
  )
}
