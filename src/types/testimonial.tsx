

// types/testimonial.ts
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  image: string;
  content: string;
  position?: {
    top: string;
    left: string;
    size: number;
    delay: number;
  };
}