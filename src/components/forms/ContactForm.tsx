"use client";

import { useState } from "react";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { InputField, TextareaField, SelectField } from "@/components/ui/FormField";
import Button from "@/components/ui/Button";
import { ContactFormData, FormFieldError } from "@/types/content";
import { validateContactForm } from "@/lib/validation";

const INTEREST_OPTIONS = [
  { label: "AI-powered reporting", value: "ai-reporting" },
  { label: "PACS / DICOM integration", value: "pacs-integration" },
  { label: "Viewer & visualization tools", value: "viewer" },
  { label: "Teleradiology workflows", value: "teleradiology" },
  { label: "Pricing & general inquiry", value: "general" },
];

const initialData: ContactFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  organization: "",
  interest: "",
  message: "",
};

interface ContactFormProps {
  variant?: "contact" | "demo";
  submitLabel?: string;
}

export default function ContactForm({ variant = "contact", submitLabel }: ContactFormProps) {
  const [data, setData] = useState<ContactFormData>(initialData);
  const [errors, setErrors] = useState<FormFieldError>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function update<K extends keyof ContactFormData>(key: K, value: ContactFormData[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validation = validateContactForm(data);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    setSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-white p-10 text-center">
        <HiOutlineCheckCircle className="h-12 w-12 text-primary" />
        <h3 className="mt-4 text-lg font-semibold text-ink">Thanks, {data.firstName}!</h3>
        <p className="mt-2 max-w-sm text-sm text-slate">
          {variant === "demo"
            ? "A Radiomind AI specialist will reach out within one business day to schedule your personalized demo."
            : "We've received your message and will get back to you within one business day."}
        </p>
        <Button
          variant="secondary"
          className="mt-6"
          onClick={() => {
            setData(initialData);
            setSubmitted(false);
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-white p-6 sm:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2 mb-4">
        <InputField
          label="First Name"
          required
          value={data.firstName}
          onChange={(e) => update("firstName", e.target.value)}
          error={errors.firstName}
          placeholder="Your First Name"
        />
        <InputField
          label="Last Name"
          value={data.lastName}
          onChange={(e) => update("lastName", e.target.value)}
          error={errors.lastName}
          placeholder="Your Last Name"
        />
        <InputField
          label="Work Email"
          type="email"
          required
          value={data.email}
          onChange={(e) => update("email", e.target.value)}
          error={errors.email}
          placeholder="your@email.com"
        />
        <InputField
          label="Phone Number"
          type="tel"
          value={data.phone}
          onChange={(e) => update("phone", e.target.value)}
          error={errors.phone}
          placeholder="+91 xxxxx xxxxx"
        />
        <SelectField
          label="Area of Interest"
          required
          options={INTEREST_OPTIONS}
          placeholder="Select an option"
          value={data.interest}
          onChange={(e) => update("interest", e.target.value)}
          error={errors.interest}
        />
        <InputField
          label="Hospital / Organization"
          value={data.organization}
          onChange={(e) => update("organization", e.target.value)}
          error={errors.organization}
          placeholder="Name of Hospital / Organization"
        />
      </div>

      <TextareaField
        label="Your Message (Optional)"
        value={data.message}
        onChange={(e) => update("message", e.target.value)}
        error={errors.message}
        placeholder={
          variant === "demo"
            ? "Tell us about your facility and current imaging setup..."
            : "How can we help?"
        }

      />

      <Button type="submit" disabled={submitting} className="mt-6 w-full sm:w-auto">
        {submitting ? "Sending..." : submitLabel || (variant === "demo" ? "Request Demo" : "Send Message")}
      </Button>
    </form>
  );
}
