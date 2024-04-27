'use client'
import { useLocale } from "next-intl";

const useLangDirection = () => {
  const localActive = useLocale();
  // No direct access to `locale` through useTranslations, so continue using useRouter
  return {
    rtl: localActive === 'ar',
    ltr: localActive !== 'ar',
  };
};

export default useLangDirection;
