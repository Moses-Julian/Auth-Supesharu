import { ClerkProvider } from '@clerk/nextjs';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default MyApp;
