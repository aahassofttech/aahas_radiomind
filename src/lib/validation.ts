import { ContactFormData, FormFieldError } from "@/types/content";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+]?[\d\s-]{7,15}$/;

export function validateContactForm(data: ContactFormData): FormFieldError {
  const errors: FormFieldError = {};

  if (!data.firstName.trim()) errors.firstName = "First name is required.";
  if (!data.email.trim()) {
    errors.email = "Work email is required.";
  } else if (!EMAIL_REGEX.test(data.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (data.phone && !PHONE_REGEX.test(data.phone)) {
    errors.phone = "Enter a valid phone number.";
  }
  if (!data.interest.trim()) errors.interest = "Please select an area of interest.";
  if (!data.message.trim()) {
    errors.message = "Tell us a little about what you need.";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }

  return errors;
}

export function validatePostForm(fields: {
  title: string;
  excerpt: string;
  content: string;
  category: string;
}): FormFieldError {
  const errors: FormFieldError = {};
  if (!fields.title.trim()) errors.title = "Title is required.";
  if (!fields.excerpt.trim()) errors.excerpt = "Excerpt is required.";
  if (!fields.content.trim()) errors.content = "Content is required.";
  if (!fields.category.trim()) errors.category = "Select a category.";
  return errors;
}
