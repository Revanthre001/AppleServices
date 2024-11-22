'use client'

import Image from 'next/image'
import { useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ImageViewerComponent = ({ props }: { props?: any }) => {
  console.log(props)
  const [isViewerOpen, setIsViewerOpen] = useState(false) // Modal state
  const images = [
    'https://images.ctfassets.net/5kon50y9zagh/21Cu62nyX0EePLAzEk8yln/384ea3fd89cf0d531d3c6e08ca37c1cc/maxim-hopman-Hin-rzhOdWs-unsplash.jpg',
    'https://images.ctfassets.net/5kon50y9zagh/1R5Cu62nyX0EePLAzEk8yln/sample1.jpg',
    'https://images.ctfassets.net/5kon50y9zagh/1G7Cu62nyX0EePLAzEk8yln/sample2.jpg',
    'https://images.ctfassets.net/5kon50y9zagh/1A8Cu62nyX0EePLAzEk8yln/sample3.jpg',
    'https://images.ctfassets.net/5kon50y9zagh/1B9Cu62nyX0EePLAzEk8yln/sample4.jpg'
  ]
  return (
    <>
      <div className='grid grid-cols-4 gap-2'>
        {images.slice(0, 3).map((src, index) => (
          <div key={index} className='relative aspect-square overflow-hidden rounded-lg'>
            <Image
              src={src}
              alt={`Product image ${index + 1}`}
              className='object-cover'
              fill
              sizes='(max-width: 768px) 25vw, (max-width: 1200px) 15vw, 10vw'
            />
          </div>
        ))}
        <div
          onClick={() => setIsViewerOpen(true)}
          className='relative aspect-square overflow-hidden rounded-lg bg-gray-200 cursor-pointer flex items-center justify-center'
        >
          <span className='text-gray-600 text-lg font-medium'>See More</span>
        </div>
      </div>

      {isViewerOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50'>
          <div className='relative max-w-4xl mx-auto p-4'>
            <button
              onClick={() => setIsViewerOpen(false)}
              className='absolute top-2 right-2 text-white text-lg font-bold'
            >
              ×
            </button>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              {images.map((src, index) => (
                <div key={index} className='relative overflow-hidden rounded-lg aspect-square'>
                  <Image src={src} alt={`Image ${index + 1}`} className='object-cover' fill />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ImageViewerComponent
