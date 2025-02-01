import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Applications | White Raven Web Developer",
  description: "Full Stack Web Developer",
};

const insuranceFeature = {
  title: "Insurance Profile",
  description: "Linwood Business Solutions specializes in providing relationally-driven, insurance-based offerings to our enterprise partners. We seek to boost employer-employee relationships by maximizing “bottom line” insurance strategies.",
  logoPath: { path: "/assets/company_logos/linwood.webp", alt: 'linwood logo' },
  frontend: ["Next.js"],
  design: ['Tailwind'],
  language: ['Typescript'],
  deployed: ['Vercel'],
  details: "Project for an insurance company to see details on who they are, what they provide, and how to help businesses."
}

const stratacacheFeatures = {
  title: "Digital Signage Solutions",
  description: "Ensure customer loyalty and repeat visits with advanced digital menu board solutions.",
  logoPath: { path: "/assets/company_logos/stratacache.webp", alt: 'Stratacache logo' },
  frontend: ['Vue.js', 'Svelt'],
  design: ['SASS', 'CSS'],
  language: ['Typescript', 'Javascript'],
  extraFeatures: ['Vue Options API', "Vue Composition API"],
  details: "My position with this digital signage company is to make applications for fast food companies. I am the Lead Developer for Tim Horton's US and Subway US."
};

const farmdirectoryFeatures = {
  title: "The Farm Directory",
  description: "Connecting farms to communities.",
  logoPath: { path: "/assets/company_logos/thefarmdirectory.webp", alt: 'The Farm Directory logo' },
  frontend: ['Next.js'],
  design: ['Tailwind'],
  language: ['Typescript'],
  database: ['MongoDB'],
  deployed: ['Vercel'],
  extraFeatures: ['Radar API', "React Google Maps", "Nodemailer", "Mailtrap", "React Share", "Next Auth", "Mongoose", "Uploadthing", "Nanoid", "Google Analytics", "Vercel Analytics"],
  details: "A Project to help local farmers be found and sell their product to users in their area."
};

const farmdirectoryAdminFeatures = {
  title: "Farm Directory Admin",
  description: "Admin dashboard to control The Farm Directory.",
  logoPath: { path: "/assets/company_logos/thefarmdirectory.webp", alt: 'The Farm Directory Admin logo' },
  frontend: ['Next.js'],
  design: ['Tailwind'],
  language: ['Typescript'],
  database: ['MongoDB'],
  deployed: ['Vercel'],
  details: "A Project to dedicate admins to have control over its users and visualize data for The Farm Directory."
};

const radminFeatures = {
  title: "Radmin",
  description: "Admin application to help businesses take control of their business.",
  logoPath: { path: "/assets/company_logos/radmin.webp", alt: 'Radmin logo' },
  frontend: ['Next.js'],
  design: ['Tailwind'],
  language: ['Typescript'],
  deployed: ['Vercel'],
  details: "A Project to dedicated to businesses to help them take control of their business. They can view customers, invoices, team members, and see their revenue."
};

const ascendFeatures = {
  title: "Ascend",
  description: "Set goals. Achieve greatness.",
  logoPath: { path: "/assets/company_logos/ascend.webp", alt: 'Ascend logo' },
  frontend: ['Next.js'],
  design: ['Tailwind'],
  language: ['Typescript'],
  database: ['MongoDB'],
  deployed: ['Vercel'],
  extraFeatures: ["Next Auth", "Mongoose", "PWA"],
  details: "A Project to dedicated to have a better you! Set your habits, affirmations. Track your weight, water intake for the day, set a fasting time, and books that you are reading or listening to.",
};

export default function Page() {

  const projectOne = (
    <div className="relative lg:row-span-2">
      <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
        <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
          <p className="mt-2 text-xl font-medium tracking-tight text-gray-950 max-lg:text-center">
            {insuranceFeature.title}
          </p>
          <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
            {insuranceFeature.description}
          </p>

          <div className="max-w-lg text-sm/6 text-gray-600 max-lg:text-center py-4">
            <h3 className='text-gray-950 text-lg'>Features</h3>

            {insuranceFeature.frontend.map((item: string) => <p key={item}>{item}</p>)}
            {insuranceFeature.design.map((item: string) => <p key={item}>{item}</p>)}
            {insuranceFeature.language.map((item: string) => <p key={item}>{item}</p>)}
            {insuranceFeature.deployed.map((item: string) => <p key={item}>{item}</p>)}

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
              alt={insuranceFeature.logoPath.alt}
              width={200}
              height={200}
              src={insuranceFeature.logoPath.path}
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
          <p className="mt-2 text-xl font-medium tracking-tight text-white max-lg:text-center">{stratacacheFeatures.title}</p>
          <p className="mt-2 max-w-lg text-sm/6 text-white max-lg:text-center">
            {stratacacheFeatures.description}
          </p>

          <div className="max-w-lg text-sm/6 text-white max-lg:text-center py-4">
            <h3 className='text-white text-lg'>Features</h3>

            {stratacacheFeatures.frontend.map((item: string) => <p key={item}>{item}</p>)}
            {stratacacheFeatures.design.map((item: string) => <p key={item}>{item}</p>)}
            {stratacacheFeatures.language.map((item: string) => <p key={item}>{item}</p>)}
            {stratacacheFeatures.extraFeatures.map((item: string) => <p key={item}>{item}</p>)}

            <h3 className='text-white text-lg mt-2'>About</h3>
            {stratacacheFeatures.details}
          </div>


        </div>
        <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
          <Image
            alt={stratacacheFeatures.logoPath.alt}
            width={200}
            height={200}
            src={stratacacheFeatures.logoPath.path}
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
          <p className="mt-2 text-xl font-medium tracking-tight text-gray-950 max-lg:text-center">{farmdirectoryAdminFeatures.title}</p>
          <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
            {farmdirectoryAdminFeatures.description}
          </p>


          <div className="max-w-lg text-sm/6 text-gray-600 max-lg:text-center py-4">
            <h3 className='text-gray-600 text-lg'>Features</h3>

            {farmdirectoryAdminFeatures.frontend.map((item: string) => <p key={item}>{item}</p>)}
            {farmdirectoryAdminFeatures.design.map((item: string) => <p key={item}>{item}</p>)}
            {farmdirectoryAdminFeatures.language.map((item: string) => <p key={item}>{item}</p>)}
            {farmdirectoryAdminFeatures.database.map((item: string) => <p key={item}>{item}</p>)}
            {farmdirectoryAdminFeatures.deployed.map((item: string) => <p key={item}>{item}</p>)}

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
            {farmdirectoryFeatures.title}
          </p>
          <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
            {farmdirectoryFeatures.title}
          </p>

          <div className="max-w-lg text-sm/6 text-gray-600 max-lg:text-center py-4">
            <h3 className='text-gray-600 text-lg'>Features</h3>

            {farmdirectoryFeatures.frontend.map((item: string) => <p key={item}>{item}</p>)}
            {farmdirectoryFeatures.design.map((item: string) => <p key={item}>{item}</p>)}
            {farmdirectoryFeatures.language.map((item: string) => <p key={item}>{item}</p>)}
            {farmdirectoryFeatures.database.map((item: string) => <p key={item}>{item}</p>)}
            {farmdirectoryFeatures.deployed.map((item: string) => <p key={item}>{item}</p>)}
            {farmdirectoryFeatures.extraFeatures.map((item: string) => <p key={item}>{item}</p>)}

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
              alt={farmdirectoryFeatures.logoPath.alt}
              width={200}
              height={200}
              src={farmdirectoryFeatures.logoPath.path}
              className="text-center w-[100%] object-top"
            />
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-r-[2rem]"></div>
    </div>
  );

  const projectFive = (
    <div className="relative lg:row-span-2">
      <div className="absolute inset-px rounded-lg bg-white lg:rounded-r-[2rem]"></div>
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-r-[calc(2rem+1px)]">
        <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
          <p className="mt-2 text-xl font-medium tracking-tight text-gray-950 max-lg:text-center">
            {radminFeatures.title}
          </p>
          <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
            {radminFeatures.title}
          </p>

          <div className="max-w-lg text-sm/6 text-gray-600 max-lg:text-center py-4">
            <h3 className='text-gray-600 text-lg'>Features</h3>

            {radminFeatures.frontend.map((item: string) => <p key={item}>{item}</p>)}
            {radminFeatures.design.map((item: string) => <p key={item}>{item}</p>)}
            {radminFeatures.language.map((item: string) => <p key={item}>{item}</p>)}
            {radminFeatures.deployed.map((item: string) => <p key={item}>{item}</p>)}

            <h3 className='text-gray-600 text-lg mt-2'>About</h3>
            {radminFeatures.details}
          </div>

          <div className="mt-10 flex items-center gap-x-6">
            <a href="https://radmin.vercel.app/" target="_blank" className="text-sm/6 font-semibold text-gray-900">
              Website <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="mt-10 flex items-center gap-x-6">
            <a href="https://github.com/mdreesen/admin" target="_blank" className="text-sm/6 font-semibold text-gray-900">
              Github <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
          <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-white shadow-2xl">
            <Image
              alt={radminFeatures.logoPath.alt}
              width={200}
              height={200}
              src={radminFeatures.logoPath.path}
              className="text-center w-[100%] object-top"
            />
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-r-[2rem]"></div>
    </div>
  );

  const projectSix = (
    <div className="relative lg:row-span-2">
      <div className="absolute inset-px rounded-lg bg-white lg:rounded-r-[2rem]"></div>
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-r-[calc(2rem+1px)]">
        <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
          <p className="mt-2 text-xl font-medium tracking-tight text-gray-950 max-lg:text-center">
          {ascendFeatures.title}
          </p>
          <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
          {ascendFeatures.title}
          </p>

          <div className="max-w-lg text-sm/6 text-gray-600 max-lg:text-center py-4">
            <h3 className='text-gray-600 text-lg'>Features</h3>

            {ascendFeatures.frontend.map((item: string) => <p key={item}>{item}</p>)}
            {ascendFeatures.design.map((item: string) => <p key={item}>{item}</p>)}
            {ascendFeatures.language.map((item: string) => <p key={item}>{item}</p>)}
            {ascendFeatures.deployed.map((item: string) => <p key={item}>{item}</p>)}
            {ascendFeatures.extraFeatures.map((item: string) => <p key={item}>{item}</p>)}

            <h3 className='text-gray-600 text-lg mt-2'>About</h3>
            {ascendFeatures.details}
          </div>

          <div className="mt-10 flex items-center gap-x-6">
            <a href="https://goals-io.vercel.app/" target="_blank" className="text-sm/6 font-semibold text-gray-900">
              Website <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="mt-10 flex items-center gap-x-6">
            <a href="https://github.com/mdreesen/goals-io" target="_blank" className="text-sm/6 font-semibold text-gray-900">
              Github <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
          <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-white shadow-2xl">
            <Image
              alt={ascendFeatures.logoPath.alt}
              width={200}
              height={200}
              src={ascendFeatures.logoPath.path}
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
          {projectFive}
          {projectSix}
        </div>
      </div>
    </div>
  )
}
