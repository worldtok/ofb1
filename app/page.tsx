'use server'
import Image from 'next/image'
import { ip } from './ip'
import { headers } from "next/headers"

const getData = async () => {
  // This will not work on local host
  const _ip = headers().get("x-forwarded-for") || ''
  const a = await ip(_ip)
  return a
}

export default async function Page() {
  const loc = await getData()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
      <div className="fixed inset-0 overflow-hidden opacity-75 bg-[#f8fafb]">
        <Image
          src={`/bg.jpg?w=192&q=100`}
          sizes='100vw'
          width={192}
          height={100}
          alt="World Map"
          data-nimg="fill"
          decoding="async"
          className="object-cover absolute h-full w-full left-0 right-0 top-0 bottom-0 text-transparent"
          loading="lazy"
          quality={50}
        />
      </div>
      <main className="z-10 flex flex-col items-center flex-1 px-4 pt-8 text-center sm:px-20 sm:pt-20">
        <section className="w-full mt-16 transition bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl">
          <div className="flex justify-center p-4 border-b items-between">
            <div className="self-center"><span className="relative inline-block w-16">
              <Image
                src="/dp.jpg?w=48&q=100"
                width={48}
                height={48}
                alt="avatar"
                data-nimg="1"
                decoding="async"
                className="object-cover w-16 h-16 rounded-full shadow text-transparent" loading="lazy"
                quality={100}
              />
              <span
                className="absolute top-0 right-0 flex w-3 h-3 -ml-2"><span
                  className="absolute inline-flex w-full h-full duration-150 bg-green-400 rounded-full opacity-75 animate-ping"></span><span
                    className="relative inline-flex w-3 h-3 bg-green-400 rounded-full"></span></span> </span></div>
            <div className="ml-4 mr-auto text-left">
              <h4 className="font-semibold">Katrina Sten <span
                className="px-2 py-1 text-sm text-green-500 bg-green-100 rounded-full shadow-green-400">Online Now</span>
              </h4>
              <p className="text-gray-500 text-md sm:text-lg">
                Personal Fitness Trainer in {' '}
                <span>
                  London {' '}
                  <Image alt="GB flag" src="https://flagcdn.com/gb.svg" width="24" height="4" decoding="async" data-nimg="1"
                    className="inline-block h-3 text-transparent" loading="lazy" />,
                  {' '}
                </span>

                <span>
                  Dubai
                  {' '}
                  <Image alt="AE flag"
                    src="https://flagcdn.com/ae.svg" width="24" height="4" decoding="async" data-nimg="1"
                    className="inline-block h-4 text-transparent " loading="lazy" />
                </span>
                <span>
                  {loc?.c &&
                    <>
                      <span>
                        {' '}   and {loc.c + ' '}
                      </span>
                      <Image alt={(loc.f as string).toUpperCase() + " flag"} src={`https://flagcdn.com/${(loc.f as string).toLowerCase()}.svg`} width="24" height="4" decoding="async" data-nimg="1"
                        className="inline-block object-contain h-4 text-transparent" loading="lazy" />
                      {' '}
                    </>
                  }
                </span>
                <span>{` I'm obsessed with hugs, travel and fitness 💪🏝️❤️.`}</span>
              </p>
            </div>
          </div>
          <div className="p-4 space-y-4 rounded-b-lg flexborder-b bg-gray-50">
            <h4 className="font-semibold text-left">My Links</h4>
            <a href="https://5vpe.short.gy/X5CXbd">
              <button
                className={`z-10 w-full py-3 mt-4 font-medium tracking-wide text-white transform shadow  bg-sky-500 rounded-lg hover:-translate-y-0.5 duration-150 hover:shadow-xl`}>
                OnlyFans
              </button>
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

