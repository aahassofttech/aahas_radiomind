export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  organization: string;
  avatar: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FormFieldError {
  [key: string]: string | undefined;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organization: string;
  interest: string;
  message: string;
}

export interface DemoFormData extends ContactFormData {
  facilityType: string;
}

export interface TeamMember {
  name: string;
  role: string;
  photo: string;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: string;
  points: string[];
  image: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface AudienceItem {
  title: string;
  description: string;
}
