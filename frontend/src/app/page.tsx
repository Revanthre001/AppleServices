import HeroBannerComponent from '@/components/cms/hero-banner/component'
import { draftMode } from 'next/headers'
import * as contentful from '@/services/contentful'
import { notFound } from 'next/navigation'
import { PageInterface } from '@/interfaces/main'
import MainComponentsLoader from '@/components/cms-components-loader'

export default async function Home() {
  const { isEnabled } = await draftMode()

  const entryCollection = await contentful.getEntriesWithCache('page', isEnabled, {
    limit: 1,
    'fields.slug': 'home',
    include: 10
  })

  const pageList = entryCollection as unknown as { items: PageInterface[] }

  const pageExist = pageList.items.length > 0 ? true : false

  if (!pageExist) {
    notFound()
  }

  const pageProps: PageInterface = pageList.items[0]

  return (
    <>
      <MainComponentsLoader components={pageProps.fields.components} />
      {/* Testimonials */}
      <section className='max-w-7xl mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-12'>Customer Feedback</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.service}</p>
                  </div>
                </div>
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700">{testimonial.comment}</p>
              </div>
            ))} */}
        </div>
      </section>

      {/* Feedback Form */}
      <section className='max-w-7xl mx-auto px-4'>{/* <FeedbackForm /> */}</section>
    </>
  )
}
