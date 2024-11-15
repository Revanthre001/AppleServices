import Image from 'next/image'
import Link from 'next/link'
import { HeroBannerComponentInterface } from './interface'
import { parseNameAndLink } from '@/utils/main'

const HeroBannerComponent = (component: HeroBannerComponentInterface) => {
  return (
    <section className='relative h-[600px]'>
      <div className='absolute inset-0'>
        <Image
          src={`https:${component.banner.fields.file.url}`}
          alt={component.banner.fields.file.title || ''}
          fill
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black bg-opacity-50' />
      </div>
      <div className='relative max-w-7xl mx-auto px-4 h-full flex items-center'>
        <div className='text-white'>
          <h1 className='text-5xl font-bold mb-4'>{component.heading}</h1>
          <p className='text-xl mb-8'>{component.description}</p>
          <div className='space-x-4'>
            {component.buttons.map((button, index: number) => {
              const buttonData = parseNameAndLink(button)
              return (
                <Link
                  href={buttonData.link}
                  key={index}
                  className='bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100'
                >
                  {buttonData.name}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBannerComponent
