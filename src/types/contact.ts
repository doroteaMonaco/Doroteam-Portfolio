export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  notificationId?: string;
  confirmationId?: string;
  error?: string;
}
