export interface Notification {
    id: string;
    message: string;
    timestamp: string;
    seen: boolean;
  }
  
  export interface Testimonial {
    id: string;
    name: string;
    service: string;
    rating: number;
    comment: string;
    image: string;
  }
  
  export interface Feedback {
    name: string;
    rating: number;
    comment: string;
  }
  
  export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    specs: string[];
    image: string;
    availability: boolean;
    category: string;
  }
  
  export interface Service {
    id: string;
    name: string;
    description: string;
    estimated_time: string;
    starting_price: number;
    features: string[];
    image: string;
  }