// ─── Contact Form Validation ───────────────────────────────────────────────────

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<keyof ContactFormData, string | null>;
}

/**
 * Validates the name field.
 * Must be non-empty and at least 2 characters.
 */
export function validateName(name: string): string | null {
  const trimmed = name.trim();
  if (!trimmed) {
    return "Please enter your name";
  }
  if (trimmed.length < 2) {
    return "Name must be at least 2 characters";
  }
  return null;
}

/**
 * Validates the email field.
 * Must match a valid email pattern.
 */
export function validateEmail(email: string): string | null {
  const trimmed = email.trim();
  if (!trimmed) {
    return "Please enter your email address";
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(trimmed)) {
    return "Please provide a valid email address";
  }
  return null;
}

/**
 * Validates the phone field.
 * Accepts valid Indian phone numbers (10 digits, optional +91 prefix).
 * Phone is optional — empty string is valid.
 */
export function validatePhone(phone: string): string | null {
  const trimmed = phone.trim();
  if (!trimmed) {
    return null; // Phone is optional
  }
  // Remove spaces, dashes, and dots for validation
  const cleaned = trimmed.replace(/[\s\-().]/g, "");
  // Accept: 10 digits, or +91 followed by 10 digits, or 91 followed by 10 digits
  const phonePattern = /^(\+?91)?[6-9]\d{9}$/;
  if (!phonePattern.test(cleaned)) {
    return "Please provide a valid Indian phone number";
  }
  return null;
}

/**
 * Validates the subject field.
 * Must be non-empty and at least 3 characters.
 */
export function validateSubject(subject: string): string | null {
  const trimmed = subject.trim();
  if (!trimmed) {
    return "Please enter a subject";
  }
  if (trimmed.length < 3) {
    return "Subject must be at least 3 characters";
  }
  return null;
}

/**
 * Validates the message field.
 * Must be non-empty and at least 10 characters.
 */
export function validateMessage(message: string): string | null {
  const trimmed = message.trim();
  if (!trimmed) {
    return "Please enter your message";
  }
  if (trimmed.length < 10) {
    return "Message must be at least 10 characters";
  }
  return null;
}

/**
 * Validates the entire contact form.
 * Runs all individual validators and returns a composite result.
 */
export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Record<keyof ContactFormData, string | null> = {
    name: validateName(data.name),
    email: validateEmail(data.email),
    phone: validatePhone(data.phone),
    subject: validateSubject(data.subject),
    message: validateMessage(data.message),
  };

  const isValid = Object.values(errors).every((error) => error === null);

  return { isValid, errors };
}
