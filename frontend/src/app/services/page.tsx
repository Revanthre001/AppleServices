import { ServiceInterface } from '@/interfaces/main'
import { draftMode } from 'next/headers'
import * as contentful from '@/services/contentful'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function Page() {
  const { isEnabled } = await draftMode()
  const entryCollection = await contentful.getEntriesWithCache('service', isEnabled, {
    limit: 30,
    include: 10
  })
  const services = entryCollection as unknown as { items: ServiceInterface[] }

  if (services.items && services.items.length < 0) {
    notFound()
  }

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <h2 className='text-4xl font-bold mb-8'>Our Services</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {services.items.map((service: ServiceInterface, index: number) => (
          <Link
            key={index}
            href={`/services/${service.fields.slug}`}
            className='group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow'
          >
            <div className='aspect-w-16 aspect-h-9 relative h-48 overflow-hidden'>
              <Image
                src={`https:${service.fields.icon.fields.file.url}`}
                alt={service.fields.icon.fields.file.title || ''}
                fill
                className='w-full h-[192px] object-cover group-hover:scale-105 transition-transform duration-300'
              />
            </div>
            <div className='p-6'>
              <div className='flex items-center mb-4'>
                <Image
                  src={`https:${service.fields.icon.fields.file.url}`}
                  alt={service.fields.icon.fields.file.title || ''}
                  className='object-contain mb-2'
                  height={24}
                  width={24}
                  style={{
                    filter: 'invert(1) brightness(100%)'
                  }}
                />
                <h2 className='text-xl font-semibold text-black'>{service.fields.name}</h2>
              </div>
              <p className='text-gray-600'>{service.fields.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
