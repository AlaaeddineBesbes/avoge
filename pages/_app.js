import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return( 
  
<MoralisProvider
  appId="HdF6rfjk1P9mIXmHskEb2rUG56OzlYjGeI4YKTXF"
  serverUrl='https://qv8zrk4frg2v.usemoralis.com:2053/server'>
  <Component {...pageProps}/>
  </MoralisProvider>
  )
}

export default MyApp
