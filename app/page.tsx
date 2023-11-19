'use server'
import Image from 'next/image'
import { ip } from './ip'
import { headers } from 'next/headers'

const getData = async () => {
  // This will not work on local host
  const _ip = headers().get('x-forwarded-for') || ''
  const a = await ip(_ip)
  return a
}

export default async function Page() {
  const loc = await getData()
  const until = (() => {
    const date = new Date()
    date.setDate(date.getDate() + 3)

    const formattedDate = new Intl.DateTimeFormat('en-US', { day: '2-digit', month: 'short' }).format(date)

    return formattedDate
  })()

  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50'>
        <div className='fixed inset-0 overflow-hidden opacity-75 bg-[#f8fafb]'>
          <Image
            src={`/bg.jpg?w=192&q=100`}
            sizes='100vw'
            width={192}
            height={100}
            alt='World Map'
            data-nimg='fill'
            decoding='async'
            className='object-cover absolute h-full w-full left-0 right-0 top-0 bottom-0 text-transparent'
            loading='lazy'
            quality={50}
          />
        </div>
        <main className='z-10 flex flex-col items-center flex-1 px-4 pt-8 text-center sm:px-20 sm:pt-20'>
          <section className='w-full text-center max-w-lg mt-16 transition bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl relative'>
            <div className='justify-center text-center p-4 border-b items-between'>
              <img
                className='absolute object-cover -mt-6 transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform duration-300 inline-block h-24 w-24 rounded-full  border-2 shadow-lg border-white'
                src='/kat.png'
                alt=''
              />
              <div className='ml-4 mx-auto text-center align-middle relative mt-8'>
                <h4 className='font-semibold'>
                  Katrina
                  <span className='px-2 ml-1 py-1 text-sm relative text-green-500 bg-green-100 rounded-full shadow-green-400'>
                    <span className='absolute top-1.5 left-1.5 flex w-3 h-3 z-40'>
                      <span className='absolute inline-flex w-full h-full duration-1000 bg-green-400 rounded-full opacity-75 animate-ping'></span>
                      <span className='relative inline-flex w-3 h-3 bg-green-400 rounded-full'></span>
                    </span>{' '}
                    <span className='ml-3'>Online Now</span>
                  </span>
                </h4>
                <div className='flex flex-col  text-sm text-slate-400 sm:flex-row  items-center justify-center mt-2'>
                  <span className='flex items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      aria-hidden='true'
                      className='h-4 text-slate-400 mr-0.5 mt-0.5'>
                      <path
                        fillRule='evenodd'
                        d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z'
                        clipRule='evenodd'></path>
                    </svg>
                    Avg response time: 2 minutes
                  </span>
                  <span className='hidden sm:block mx-2'> | </span>
                  <span className='flex items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      aria-hidden='true'
                      className='h-4 text-slate-400 mt-0.5'>
                      <path
                        fillRule='evenodd'
                        d='M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z'
                        clipRule='evenodd'></path>
                    </svg>{' '}
                    {`${loc.c} ${loc.i}`}
                  </span>
                </div>
                <p className='text-gray-500 text-md mt-3 sm:my-6 '>
                  Staying in {`${loc.c} `}
                  <Image
                    alt={(loc.f as string).toUpperCase() + ' flag'}
                    src={`https://flagcdn.com/${(loc.f as string).toLowerCase()}.svg`}
                    width='24'
                    height='4'
                    decoding='async'
                    data-nimg='1'
                    className='inline-block object-contain h-4 text-transparent'
                    loading='lazy'
                  />{' '}
                  until {until}. Send me a message here, I reply to all my DMs ❤️
                </p>
              </div>
            </div>
            <div className='p-4 space-y-4 rounded-b-lg flexborder-b bg-gray-50'>
              <a href='https://5vpe.short.gy/cam3'>
                <button className='z-10 w-full py-3 mt-4 font-medium tracking-wide text-white transform shadow  bg-sky-500 rounded-lg hover:scale-105 duration-150 hover:shadow-xl'>
                  <strong>
                    <img
                      alt='NG flag'
                      loading='lazy'
                      width='24'
                      height='12'
                      decoding='async'
                      data-nimg='1'
                      className='inline-block h-6 mr-2 text-white opacity-90 text-transparent'
                      src='/olf.svg'
                    />
                    Send me a message
                  </strong>
                </button>
              </a>
              <p className='text-sm text-slate-600'>
                <span className='uppercase text-red-500 font-semibold '>80% off</span> sale end in 0h <span id='timer'>19m 29s</span>
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
