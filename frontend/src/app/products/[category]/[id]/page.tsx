import { draftMode } from 'next/headers'
import * as contentful from '@/services/contentful'
import Image from 'next/image'
import { ProductInterface } from '@/interfaces/main'
import { notFound } from 'next/navigation'
import GetInTouchComponent from '@/components/core/get-in-touch'
import ImageViewerComponent from '@/components/core/image-viewer'

export default async function Page({ params }: { params: Promise<{ category: string; id: string }> }) {
  const { category, id } = await params
  const { isEnabled } = await draftMode()
  const entryCollection = await contentful.getEntriesWithCache('products', isEnabled, {
    limit: 1,
    'fields.slug': id,
    'fields.category.sys.contentType.sys.id': 'category',
    'fields.category.fields.slug': category,
    include: 10
  })

  const products = entryCollection as unknown as { items: ProductInterface[] }

  if (products.items && products.items.length !== 1) {
    notFound()
  }

  const page = products.items[0]

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <div className='grid gap-6 sm:grid-cols-2'>
        <div className='space-y-4'>
          <div className='relative aspect-square overflow-hidden rounded-lg'>
            <Image
              src={`https:${page.fields.image.fields.file.url}`}
              alt='Product main image'
              className='object-cover'
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              priority
            />
          </div>
          {page.fields.gallery && <ImageViewerComponent props={page.fields.gallery} />}
        </div>

        <div className='space-y-6'>
          <div>
            <h1 className='text-3xl font-bold'>{page.fields.name}</h1>
            <p className='text-xl font-semibold mt-2'>
              $249.00 <span className='font-thin text-sm'>onwards</span>
            </p>
          </div>

          <div className='prose max-w-none text-gray-600'>Rich Text</div>

          <GetInTouchComponent {...{ buttonName: 'Get In Touch' }} />
        </div>
      </div>
    </div>
  )
}
