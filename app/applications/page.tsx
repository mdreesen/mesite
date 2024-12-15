import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Applications | White Raven Web Developer",
  description: "Full Stack Web Developer",
};

const insuranceFeature = {
  frontend: ["Next.js"],
  design: ['Tailwind'],
  language: ['Typescript'],
  deployed: ['Vercel'],
  details: "Project for an insurance company to see details on who they are, what they provide, and how to help businesses."
}

const stratacacheFeatures = {
  frontend: ['Vue.js', 'Svelt'],
  design: ['SASS', 'CSS'],
  language: ['Typescript', 'Javascript'],
  extraFeatures: ['Vue Options API', "Vue Composition API"],
  details: "My position with this digital signage company is to make applications for fast food companies. I am the Lead Developer for Tim Horton's US and Subway US."
};

const farmdirectoryFeatures = {
  frontend: ['Next.js'],
  design: ['Tailwind'],
  language: ['Typescript'],
  database: ['MongoDB'],
  extraFeatures: ['Radar API', "React Google Maps", "Nodemailer", "Mailtrap", "React Share", "Next Auth", "Mongoose", "Uploadthing", "Nanoid"],
  details: "A Project to help local farmers be found and sell their product to users in their area."
};

const farmdirectoryAdminFeatures = {
  frontend: ['Next.js'],
  design: ['Tailwind'],
  language: ['Typescript'],
  database: ['MongoDB'],
  details: "A Project to dedicate admins to have control over its users and visualize data for The Farm Directory."
};

export default function Page() {

  const projectOne = (
    <div className="relative lg:row-span-2">
      <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
        <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
          <p className="mt-2 text-xl font-medium tracking-tight text-gray-950 max-lg:text-center">
            Insurance Profile
          </p>
          <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
            Linwood Business Solutions specializes in providing relationally-driven, insurance-based offerings to our enterprise partners. We seek to boost employer-employee relationships by maximizing “bottom line” insurance strategies.
          </p>

          <div className="max-w-lg text-sm/6 text-gray-600 max-lg:text-center py-4">
            <h3 className='text-gray-950 text-lg'>Features</h3>

            {insuranceFeature.frontend.map((item) => <p key={item}>{item}</p>)}
            {insuranceFeature.design.map((item) => <p key={item}>{item}</p>)}
            {insuranceFeature.language.map((item) => <p key={item}>{item}</p>)}
            {insuranceFeature.deployed.map((item) => <p key={item}>{item}</p>)}

            <h3 className='text-gray-950 text-lg mt-2'>About</h3>
            {insuranceFeature.details}
          </div>

          <div className="mt-10 flex items-center gap-x-6">
            <a href="https://www.linwoodbusinesssolutions.com/" target="_blank" className="text-sm/6 font-semibold text-gray-900">
              Website <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="mt-10 flex items-center gap-x-6">
            <a href="https://github.com/mdreesen/perrigo-insurance" target="_blank" className="text-sm/6 font-semibold text-gray-900">
              Github <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
          <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-white shadow-2xl">
            <Image
              alt="Linwood Business Solutions logo"
              width={200}
              height={200}
              src={'/assets/company_logos/linwood.webp'}
              className="w-[100%] object-top"
            />
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
    </div>
  );

  const projectTwo = (
    <div className="relative max-lg:row-start-1">
      <div className="absolute inset-px rounded-lg bg-gray-900 max-lg:rounded-t-[2rem]"></div>
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] py-4">
        <div className="px-8 pt-4 sm:px-10 sm:pt-6">
          <p className="mt-2 text-xl font-medium tracking-tight text-white max-lg:text-center">Digital Signage Solutions</p>
          <p className="mt-2 max-w-lg text-sm/6 text-white max-lg:text-center">
            Ensure customer loyalty and repeat visits with advanced digital menu board solutions
          </p>

          <div className="max-w-lg text-sm/6 text-white max-lg:text-center py-4">
            <h3 className='text-white text-lg'>Features</h3>

            {stratacacheFeatures.frontend.map((item) => <p key={item}>{item}</p>)}
            {stratacacheFeatures.design.map((item) => <p key={item}>{item}</p>)}
            {stratacacheFeatures.language.map((item) => <p key={item}>{item}</p>)}
            {stratacacheFeatures.extraFeatures.map((item) => <p key={item}>{item}</p>)}

            <h3 className='text-white text-lg mt-2'>About</h3>
            {stratacacheFeatures.details}
          </div>


        </div>
        <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
          <Image
            alt="Stratacache logo"
            width={200}
            height={200}
            src={'/assets/company_logos/stratacache.webp'}
            className="w-full max-lg:max-w-xs"
          />
        </div>
      </div>
    </div>
  );

  const projectThree = (
    <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
      <div className="absolute inset-px rounded-lg bg-white"></div>
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
        <div className="px-8 pt-8 sm:px-10 sm:pt-10">
          <p className="mt-2 text-xl font-medium tracking-tight text-gray-950 max-lg:text-center">Farm Directory Admin</p>
          <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
            Admin dashboard to control The Farm Directory
          </p>


          <div className="max-w-lg text-sm/6 text-gray-600 max-lg:text-center py-4">
            <h3 className='text-gray-600 text-lg'>Features</h3>

            {farmdirectoryAdminFeatures.frontend.map((item) => <p key={item}>{item}</p>)}
            {farmdirectoryAdminFeatures.design.map((item) => <p key={item}>{item}</p>)}
            {farmdirectoryAdminFeatures.language.map((item) => <p key={item}>{item}</p>)}
            {farmdirectoryAdminFeatures.database.map((item) => <p key={item}>{item}</p>)}

            <h3 className='text-gray-600 text-lg mt-2'>About</h3>
            {farmdirectoryAdminFeatures.details}
          </div>

          <div className="mt-10 flex items-center gap-x-6">
            <a href="https://admin-farm-directory.vercel.app/" target="_blank" className="text-sm/6 font-semibold text-gray-900">
              Website <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="mt-10 flex items-center gap-x-6">
            <a href="https://github.com/mdreesen/admin-farm-directory" target="_blank" className="text-sm/6 font-semibold text-gray-900">
              Github <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
          {/* Can place image here  if need be */}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
    </div>
  );

  const projectFour = (
    <div className="relative lg:row-span-2">
      <div className="absolute inset-px rounded-lg bg-white lg:rounded-r-[2rem]"></div>
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-r-[calc(2rem+1px)]">
        <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
          <p className="mt-2 text-xl font-medium tracking-tight text-gray-950 max-lg:text-center">
            The Farm Directory
          </p>
          <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
            Connecting farms to communities.
          </p>

          <div className="max-w-lg text-sm/6 text-gray-600 max-lg:text-center py-4">
            <h3 className='text-gray-600 text-lg'>Features</h3>

            {farmdirectoryFeatures.frontend.map((item) => <p key={item}>{item}</p>)}
            {farmdirectoryFeatures.design.map((item) => <p key={item}>{item}</p>)}
            {farmdirectoryFeatures.language.map((item) => <p key={item}>{item}</p>)}
            {farmdirectoryFeatures.database.map((item) => <p key={item}>{item}</p>)}
            {farmdirectoryFeatures.extraFeatures.map((item) => <p key={item}>{item}</p>)}

            <h3 className='text-gray-600 text-lg mt-2'>About</h3>
            {farmdirectoryFeatures.details}
          </div>

          <div className="mt-10 flex items-center gap-x-6">
            <a href="https://thefarmdirectory.com/" target="_blank" className="text-sm/6 font-semibold text-gray-900">
              Website <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="mt-10 flex items-center gap-x-6">
            <a href="https://github.com/mdreesen/farm-directory" target="_blank" className="text-sm/6 font-semibold text-gray-900">
              Github <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
          <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-white shadow-2xl">
            <Image
              alt="The Farm Directory logo"
              width={200}
              height={200}
              src={'/assets/company_logos/thefarmdirectory.webp'}
              className="text-center w-[100%] object-top"
            />
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-r-[2rem]"></div>
    </div>
  );

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-indigo-900">Designing for Impact</h2>
        <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
          Coding for Results.
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {projectOne}
          {projectTwo}
          {projectThree}
          {projectFour}
        </div>
      </div>
    </div>
  )
}
