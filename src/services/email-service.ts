import { logger } from '@/services/logger';

export async function sendContactEmail(payload: Record<string, unknown>) {
  logger.info('contact email payload', payload);
  return { success: true };
}
