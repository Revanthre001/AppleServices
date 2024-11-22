const Footer = async () => {
  const adminInfo = {
    name: 'John Smith',
    email: 'admin@appleservices.com',
    phone: '+1 (555) 123-4567',
    address: '123 Tech Street, Silicon Valley, CA 94025',
    social: {
      facebook: 'https://facebook.com/appleservices',
      twitter: 'https://twitter.com/appleservices',
      instagram: 'https://instagram.com/appleservices',
      linkedin: 'https://linkedin.com/company/appleservices'
    }
  }

  return (
    <footer className='bg-gray-900 text-white py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div>
            <h3 className='text-2xl font-bold mb-4'>Contact Information</h3>
            <div className='space-y-4'>
              <p className='flex items-center gap-2'>
                <span className='font-semibold'>{adminInfo.name}</span>
              </p>
              <p className='flex items-center gap-2'>
                {/* <Mail className="h-5 w-5" /> */}
                <a href={`mailto:${adminInfo.email}`}>{adminInfo.email}</a>
              </p>
              <p className='flex items-center gap-2'>
                {/* <Phone className="h-5 w-5" /> */}
                <a href={`tel:${adminInfo.phone}`}>{adminInfo.phone}</a>
              </p>
              <p className='flex items-center gap-2'>
                {/* <MapPin className="h-5 w-5" /> */}
                {adminInfo.address}
              </p>
            </div>
          </div>
          <div>
            <h3 className='text-2xl font-bold mb-4'>Connect With Us</h3>
            <div className='flex space-x-6'>
              <a href={adminInfo.social.facebook} target='_blank' rel='noopener noreferrer'>
                {/* <Facebook className="h-6 w-6 hover:text-blue-400" /> */}
              </a>
              <a href={adminInfo.social.twitter} target='_blank' rel='noopener noreferrer'>
                {/* <Twitter className="h-6 w-6 hover:text-blue-400" /> */}
              </a>
              <a href={adminInfo.social.instagram} target='_blank' rel='noopener noreferrer'>
                {/* <Instagram className="h-6 w-6 hover:text-pink-400" /> */}
              </a>
              <a href={adminInfo.social.linkedin} target='_blank' rel='noopener noreferrer'>
                {/* <Linkedin className="h-6 w-6 hover:text-blue-400" /> */}
              </a>
            </div>
          </div>
        </div>
        <div className='mt-8 pt-8 border-t border-gray-700 text-center'>
          <p>&copy; {new Date().getFullYear()} Apple Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
