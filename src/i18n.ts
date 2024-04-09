import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'ar'];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    throw new Error('Not Found');
    console.log('error mounted')
  }

  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
