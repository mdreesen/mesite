import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Dark | White Raven Web Developer",
  description: "Full Stack Web Developer",
};

const values = [
  {
    name: 'Innovation',
    description:
      'Continuously explore and adopt new technologies to deliver cutting-edge solutions.',
  },
  {
    name: 'Quality',
    description:
      'Strive for excellence in every aspect of development, from design to deployment.',
  },
  {
    name: 'Collaboration',
    description:
      'Foster strong relationships with team members and clients to achieve shared goals.',
  },
  {
    name: 'Problem-Solving',
    description:
      'Embrace challenges as opportunities to learn and find creative solutions.',
  },
  {
    name: 'User-Centric Design',
    description:
      'Prioritize user needs and experiences in every development decision.',
  },
  {
    name: 'Continuous Learning',
    description:
      'Stay up-to-date with industry trends and technologies through ongoing education and training.',
  },
]

export default function Page() {

  return (
    <div className="bg-grey-900">

      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10">
          <div
            aria-hidden="true"
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          >
            <div
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-pretty text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                    Turning Dreams into Digital Reality.
                  </h1>
                  <p className="mt-8 text-pretty text-lg font-medium text-white sm:max-w-md sm:text-xl/8 lg:max-w-none">
                    As a passionate Full Stack Developer, I thrive on crafting innovative digital solutions that blend seamless user experiences with robust backend infrastructure. With a solid foundation in frontend technologies like HTML, CSS, and JavaScript, I create visually appealing and interactive interfaces. My expertise extends to backend development, where I leverage languages Javascript/Typescript with Node.js to build efficient and scalable applications. I am committed to staying up-to-date with the latest industry trends and technologies to deliver cutting-edge solutions.
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                    <Image
                        alt="Cloud Image Two"
                        width={1000}
                        height={1000}
                        src={'/assets/cloudOne.webp'}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <Image
                        alt="Cloud Image Two"
                        width={1000}
                        height={1000}
                        src={'/assets/cloudTwo.webp'}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <Image
                        alt="Cloud Image Three"
                        width={1000}
                        height={1000}
                        src={'/assets/cloudThree.webp'}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <Image
                        alt="Cloud Image Four"
                        width={1000}
                        height={1000}
                        src={'/assets/cloudFour.webp'}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <Image
                        alt="Cloud Image Five"
                        width={1000}
                        height={1000}
                        src={'/assets/cloudFive.webp'}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">Mission</h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl/8 text-white">
                  To create exceptional digital experiences by leveraging the full spectrum of web development technologies. I am dedicated to designing and building innovative, user-centric applications that seamlessly integrate frontend and backend components. Through a commitment to clean code, efficient problem-solving, and continuous learning, I strive to deliver high-quality solutions that exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <Image
            alt="White Raven homepage image of computer monitor and desk"
            width={1000}
            height={1000}
            src={'/assets/about.webp'}
            className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
          />
        </div>

        {/* Values section */}
        <div className="mx-auto mt-32 pb-32 max-w-7xl px-6 sm:mt-40 sm:pb-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">Values</h2>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name}>
                <dt className="font-semibold text-white">{value.name}</dt>
                <dd className="mt-1 text-white">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </main>
    </div>
  )
}
