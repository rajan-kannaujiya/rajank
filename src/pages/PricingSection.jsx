import React from "react";

const PricingSection = () => {
  return (
    <section
      id="work"
      className="bg-gray-900" // Replaced bg-image with a dark background
    >
      <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8 scroll-effect">
        {/* Background Gradient Effect */}
        <div
          className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
          aria-hidden="true"
        >
          <div
            className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#1e3a8a] to-[#60a5fa] opacity-40" // Adjusted gradient for dark blue theme
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        {/* Title */}
        <div className="mx-auto max-w-4xl text-center scroll-effect">
          <h2 className="text-base/7 font-semibold text-blue-400 scroll-effect">
            Services
          </h2>
          <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl scroll-effect">
            Choose Your Plan
          </p>
        </div>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-300 sm:text-xl/8 scroll-effect">
          {/* Select a plan tailored for VR game development, web design, and
          technology solutions to meet your needs. */}
          With real experience in web design and tech support, I offer plans that are simple, effective, and built to solve your everyday digital needs
        </p>

        {/* Pricing Cards */}
        <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-6 sm:mt-20 lg:flex-row lg:gap-8 scroll-effect">
          {/* Starter Pack */}
          <div className="glass-card-dark rounded-3xl p-8 sm:p-10 flex-1 min-w-[300px] max-w-[400px] mx-auto scroll-effect">
            <h3
              id="tier-starter"
              className="text-base/7 font-semibold text-blue-400 scroll-effect"
            >
              Starter Pack
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2 scroll-effect">
              <span className="text-5xl font-semibold tracking-tight text-white scroll-effect">
                ₹10k
              </span>
              <span className="text-base text-gray-400 scroll-effect">
                /month
              </span>
            </p>
            <p className="mt-6 text-base/7 text-gray-300 scroll-effect">
              Perfect for small projects focusing on frontend development.
            </p>
            <ul
              role="list"
              className="mt-8 space-y-3 text-sm/6 text-gray-300 sm:mt-10 scroll-effect"
            >
              <li className="flex gap-x-3 scroll-effect">
                <svg
                  className="h-6 w-5 flex-none text-blue-400 scroll-effect"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                    clipRule="evenodd"
                  />
                </svg>
                Only Frontend Development
              </li>
              <li className="flex gap-x-3 scroll-effect">
                <svg
                  className="h-6 w-5 flex-none text-blue-400 scroll-effect"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                    clipRule="evenodd"
                  />
                </svg>
                Hosting not included
              </li>
              <li className="flex gap-x-3 scroll-effect">
                <svg
                  className="h-6 w-5 flex-none text-blue-400 scroll-effect"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                    clipRule="evenodd"
                  />
                </svg>
                Maintence not included
              </li>
              <li className="flex gap-x-3 scroll-effect">
                
                  <br />
              
              </li>
            </ul>
            <a
              href="#"
              aria-describedby="tier-starter"
              className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-blue-400 ring-1 ring-inset ring-blue-500/30 hover:ring-blue-500/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 sm:mt-10 scroll-effect"
            >
              Get Started Now
            </a>
          </div>

          {/* Enterprise Pack */}
          <div className="glass-card-dark rounded-3xl p-8 sm:p-10 flex-1 min-w-[300px] max-w-[400px] mx-auto scroll-effect">
            <h3
              id="tier-enterprise"
              className="text-base/7 font-semibold text-blue-400 scroll-effect"
            >
              Enterprise Pack
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2 scroll-effect">
              <span className="text-5xl font-semibold tracking-tight text-white scroll-effect">
                ₹25k
              </span>
              <span className="text-base text-gray-400 scroll-effect">
                /month
              </span>
            </p>
            <p className="mt-6 text-base/7 text-gray-300 scroll-effect">
              Comprehensive plan for frontend and backend development needs.
            </p>
            <ul
              role="list"
              className="mt-8 space-y-3 text-sm/6 text-gray-300 sm:mt-10 scroll-effect"
            >
              <li className="flex gap-x-3 scroll-effect">
                <svg
                  className="h-6 w-5 flex-none text-blue-400 scroll-effect"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                    clipRule="evenodd"
                  />
                </svg>
                Frontend & Backend Development
              </li>
              <li className="flex gap-x-3 scroll-effect">
                <svg
                  className="h-6 w-5 flex-none text-blue-400 scroll-effect"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                    clipRule="evenodd"
                  />
                </svg>
                Basic Web Hosting
              </li>
              <li className="flex gap-x-3 scroll-effect">
                <svg
                  className="h-6 w-5 flex-none text-blue-400 scroll-effect"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                    clipRule="evenodd"
                  />
                </svg>
                Free Domain not included
              </li>
              <li className="flex gap-x-3 scroll-effect">
                <svg
                  className="h-6 w-5 flex-none text-blue-400 scroll-effect"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                    clipRule="evenodd"
                  />
                </svg>
                Limited Maintenance with extra charges
              </li>
            </ul>
            <a
              href="#"
              aria-describedby="tier-enterprise"
              className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-blue-400 ring-1 ring-inset ring-blue-500/30 hover:ring-blue-500/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 sm:mt-10 scroll-effect"
            >
              Get Started Now
            </a>
          </div>

          {/* Premium Pack */}
          <div className="glass-card-dark rounded-3xl p-8 sm:p-10 flex-1 min-w-[300px] max-w-[400px] mx-auto scroll-effect">
            <h3
              id="tier-premium"
              className="text-base/7 font-semibold text-blue-400 scroll-effect"
            >
              Premium Pack
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2 scroll-effect">
              <span className="text-5xl font-semibold tracking-tight text-white scroll-effect">
                ₹50k
              </span>
              <span className="text-base text-gray-400 scroll-effect">
                /month
              </span>
            </p>
            <p className="mt-6 text-base/7 text-gray-300 scroll-effect">
              Complete solution for fullstack development and premium support.
            </p>
            <ul
              role="list"
              className="mt-8 space-y-3 text-sm/6 text-gray-300 sm:mt-10 scroll-effect"
            >
              <li className="flex gap-x-3 scroll-effect">
                <svg
                  className="h-6 w-5 flex-none text-blue-400 scroll-effect"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                    clipRule="evenodd"
                  />
                </svg>
                Fullstack Development
              </li>
              <li className="flex gap-x-3 scroll-effect">
                <svg
                  className="h-6 w-5 flex-none text-blue-400 scroll-effect"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                    clipRule="evenodd"
                  />
                </svg>
                Premium Web Hosting
              </li>
              <li className="flex gap-x-3 scroll-effect">
                <svg
                  className="h-6 w-5 flex-none text-blue-400 scroll-effect"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                    clipRule="evenodd"
                  />
                </svg>
                Free Domain
              </li>
              <li className="flex gap-x-3 scroll-effect">
                <svg
                  className="h-6 w-5 flex-none text-blue-400 scroll-effect"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                    clipRule="evenodd"
                  />
                </svg>
                Free Maintenance for 1st year
              </li>
            </ul>
            <a
              href="#"
              aria-describedby="tier-starter"
              className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-blue-400 ring-1 ring-inset ring-blue-500/30 hover:ring-blue-500/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 sm:mt-10 scroll-effect"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;