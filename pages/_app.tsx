import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
// import styles from '../styles/styles.css'
import  global from './global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
 
     <Component {...pageProps} />
 
    )
}
export default MyApp
