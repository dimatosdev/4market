import type { AppProps } from 'next/app'
import "../index.scss";
import Seo from '@/components/common/seo';
 
export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <Seo/>
    <Component {...pageProps} />
  </>
  
)
}