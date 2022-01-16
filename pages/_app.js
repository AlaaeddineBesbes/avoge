import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return( 
  
<MoralisProvider
  appId="X91JMrqLgSzlOvREFfDAKIBZitXAkG2cVU6FrdEJ"
  serverUrl="https://vqq0gzp6tjx4.usemoralis.com:2053/server">
  <Component {...pageProps}/>
  </MoralisProvider>
  )
}

export default MyApp
