'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { validateContactForm, ContactFormData } from '@/lib/validation';
import Button from '@/components/ui/Button';

type FormErrors = Record<keyof ContactFormData, string | null>;

const emptyErrors: FormErrors = {
  name: null,
  email: null,
  phone: null,
  subject: null,
  message: null,
};

interface FloatingInputProps {
  id: keyof ContactFormData;
  label: string;
  type?: string;
  value: string;
  error: string | null;
  onChange: (value: string) => void;
  multiline?: boolean;
}

function FloatingInput({
  id,
  label,
  type = 'text',
  value,
  error,
  onChange,
  multiline = false,
}: FloatingInputProps) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  const inputClasses =
    'w-full px-4 pt-5 pb-2 border rounded-lg bg-transparent transition-colors duration-200 focus:outline-none focus:border-secondary border-border text-text-primary';

  return (
    <div className="relative">
      <motion.label
        htmlFor={id}
        className="absolute left-4 pointer-events-none text-text-secondary origin-left"
        animate={{
          y: isActive ? 4 : 14,
          scale: isActive ? 0.75 : 1,
        }}
        transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {label}
      </motion.label>

      {multiline ? (
        <textarea
          id={id}
          name={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${inputClasses} min-h-[120px] resize-y`}
          rows={4}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={inputClasses}
        />
      )}

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -5, height: 0 }}
            transition={{ duration: 0.2 }}
            className="text-sm text-red-500 mt-1 ml-1"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>(emptyErrors);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const updateField = (field: keyof ContactFormData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = validateContactForm(formData);

    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setIsLoading(true);

    // Simulate form submission (replace with Formspree/EmailJS in production)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
          className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6"
        >
          <motion.svg
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="w-10 h-10 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </motion.svg>
        </motion.div>
        <h3 className="text-2xl font-heading font-bold text-primary mb-2">
          Thank You!
        </h3>
        <p className="text-text-secondary max-w-sm">
          Your message has been sent successfully. We&apos;ll get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FloatingInput
          id="name"
          label="Full Name *"
          value={formData.name}
          error={errors.name}
          onChange={updateField('name')}
        />
        <FloatingInput
          id="email"
          label="Email Address *"
          type="email"
          value={formData.email}
          error={errors.email}
          onChange={updateField('email')}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FloatingInput
          id="phone"
          label="Phone Number"
          type="tel"
          value={formData.phone}
          error={errors.phone}
          onChange={updateField('phone')}
        />
        <FloatingInput
          id="subject"
          label="Subject *"
          value={formData.subject}
          error={errors.subject}
          onChange={updateField('subject')}
        />
      </div>

      <FloatingInput
        id="message"
        label="Your Message *"
        value={formData.message}
        error={errors.message}
        onChange={updateField('message')}
        multiline
      />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isLoading}
        className="w-full md:w-auto"
      >
        {isLoading ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
