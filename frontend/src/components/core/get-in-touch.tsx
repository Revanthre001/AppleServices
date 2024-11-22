'use client'

import { useState } from 'react'

const GetInTouchComponent = ({
  buttonName,
  productName,
  serviceName
}: {
  buttonName: string
  productName?: string
  serviceName?: string
}) => {
  console.log(productName, serviceName)
  const [showEnquiryForm, setShowEnquiryForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    deviceType: '',
    issue: '',
    preferredDate: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      alert('Request sent! We will contact you shortly.')
      setShowEnquiryForm(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        deviceType: '',
        issue: '',
        preferredDate: ''
      })
    } catch (error) {
      alert('Failed to send request. Please try again.')
      console.error(error)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  return !showEnquiryForm ? (
    <button
      onClick={() => setShowEnquiryForm(true)}
      className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300'
    >
      {buttonName}
    </button>
  ) : (
    <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4'>
      <div className='bg-slate-900 rounded-lg p-6 max-w-md w-full'>
        <h2 className='text-2xl font-bold mb-4'>Product Enquiry</h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='relative z-0 w-full mb-5 group'>
            <input
              type='text'
              name='name'
              id='name'
              className='block py-2.5 px-0 w-full text-sm border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer bg-transparent'
              placeholder=' '
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <label
              htmlFor='name'
              className='peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Name
            </label>
          </div>

          <div className='relative z-0 w-full mb-5 group'>
            <input
              type='email'
              name='email'
              id='email'
              className='block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer'
              placeholder=''
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <label
              htmlFor='floating_email'
              className='peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Email address
            </label>
          </div>

          <div className='relative z-0 w-full mb-5 group'>
            <input
              type='tel'
              pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
              name='floating_phone'
              id='floating_phone'
              className='block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer'
              placeholder=' '
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            <label
              htmlFor='floating_phone'
              className='peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Phone number
            </label>
          </div>

          <div>
            <label htmlFor='message' className='block mb-2 text-sm font-medium text-white'>
              Message
            </label>
            <textarea
              id='message'
              rows={4}
              className='block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
              placeholder='Leave a comment...'
            ></textarea>
          </div>

          <div className='flex justify-end space-x-3'>
            <button
              type='button'
              onClick={() => setShowEnquiryForm(false)}
              className='bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='bg-blue-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            >
              Submit Enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default GetInTouchComponent
