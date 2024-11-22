import { MainComponentsInterface } from './components'

export interface PageInterface {
  fields: {
    name: string
    slug: string
    components: MainComponentsInterface[]
  }
}

export interface CategoryInterface {
  fields: {
    name: string
    slug: string
    image: {
      fields: {
        file: {
          url: string
          title: string
        }
      }
    }
    icon: {
      fields: {
        file: {
          url: string
          title: string
        }
      }
    }
  }
}

export interface ProductInterface {
  fields: {
    name: string
    slug: string
    image: {
      fields: {
        file: {
          url: string
          title: string
        }
      }
    }
    gallery: {
      fields: {
        file: {
          url: string
          title: string
        }
      }
    }[]
    price: string
    category: CategoryInterface
  }
}

export interface ServiceInterface {
  fields: {
    name: string
    slug: string
    summary: string
    image: {
      fields: {
        file: {
          url: string
          title: string
        }
      }
    }
    icon: {
      fields: {
        file: {
          url: string
          title: string
        }
      }
    }
  }
}

export interface Notification {
  id: string
  message: string
  timestamp: string
  seen: boolean
}

export interface Testimonial {
  id: string
  name: string
  service: string
  rating: number
  comment: string
  image: string
}

export interface Feedback {
  name: string
  rating: number
  comment: string
}

export interface Product {
  id: string
  name: string
  price: number
  description: string
  specs: string[]
  image: string
  availability: boolean
  category: string
}

export interface Service {
  id: string
  name: string
  description: string
  estimated_time: string
  starting_price: number
  features: string[]
  image: string
}
