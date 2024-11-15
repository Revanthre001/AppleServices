import { draftMode } from 'next/headers'
import * as contentful from '@/services/contentful'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ProductInterface } from '@/interfaces/main'

export default async function Page({ params }: { params: Promise<{ category: string }> }) {
  const category = (await params).category
  const { isEnabled } = await draftMode()
  const entryCollection = await contentful.getEntriesWithCache('products', isEnabled, {
    limit: 30,
    'fields.category.sys.contentType.sys.id': 'category',
    'fields.category.fields.slug': category,
    include: 10
  })
  const products = entryCollection as unknown as { items: ProductInterface[] }

  if (products.items && products.items.length <= 0) {
    notFound()
  }

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <h2 className='text-4xl font-bold mb-8'>
        <span className='capitalize'>{(await params).category}</span> Products
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {products.items.map((product: ProductInterface, index: number) => (
          <Link
            key={index}
            href={`/products/${category}/${product.fields.name}`}
            className='group rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow'
          >
            <div className='overflow-hidden h-[270px]'>
              <Image
                src={`https:${product.fields.image.fields.file.url}`}
                alt={product.fields.image.fields.file.title || ''}
                height={270}
                width={480}
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
              />
            </div>
            <div className='p-6 bg-white'>
              <h2 className='text-xl font-semibold mb-2 text-black'>{product.fields.name}</h2>
              <p className='text-gray-600'>{product.fields.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
