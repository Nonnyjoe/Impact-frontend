import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '@/components/Header';
import { usePathname } from 'next/navigation';

export default function App({ Component, pageProps }: AppProps) {
  const ap = usePathname();

  return ap.startsWith('/admin') ? (
    <Component {...pageProps} />
  ) : (
    <>
      <Header />
      <div className="pt-[70px] md:pt-[90px]">
        <Component {...pageProps} />
      </div>
    </>
  );
}