import { useRouter } from 'next/router'
import { Locale } from '%/locale'
import { en } from '@/hooks/locales/en';
import { ja } from '@/hooks/locales/ja';

type UseLocaleResult = [Locale, string | undefined]
export const useLocale = (): UseLocaleResult => {
  const { locale } = useRouter();
  const $t = locale === "en" ? en : ja;
  return [$t, locale];
};