import { notFound } from 'next/navigation'
import { draftMode } from 'next/headers'
import * as contentful from '@/services/contentful'
import Link from 'next/link'
import Image from 'next/image'
import { CategoryInterface } from '@/interfaces/main'

export default async function Page() {
  const { isEnabled } = await draftMode()
  const entryCollection = await contentful.getEntriesWithCache('category', isEnabled, {
    limit: 30,
    include: 10
  })
  const categories = entryCollection as unknown as { items: CategoryInterface[] }

  if (categories.items.length <= 0) {
    notFound()
  }

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <h2 className='text-4xl font-bold mb-8'>Our Products</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
        {categories.items.map((category: CategoryInterface, index: number) => (
          <Link
            key={index}
            href={`/products/${category.fields.slug}`}
            className='group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow h-[180px] w-[320px] flex justify-center items-center grid-cols-1 mx-auto sm:ml-0'
          >
            <Image
              src={`https:${category.fields.image.fields.file.url}`}
              alt={category.fields.image.fields.file.title || ''}
              height={480}
              width={360}
              className='object-cover object-center group-hover:scale-105 transition-transform duration-300'
            />

            <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6'>
              <div className='text-white'>
                <Image
                  src={`https:${category.fields.icon.fields.file.url}`}
                  alt={category.fields.icon.fields.file.title || ''}
                  className='object-contain mb-2'
                  height={24}
                  width={24}
                  style={{
                    filter: 'invert(1) brightness(100%)'
                  }}
                />
                <h2 className='text-xl font-semibold'>{category.fields.name}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
