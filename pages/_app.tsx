import Layout from '../src/components/Layout'
import { AuthProvider } from '../src/context/AuthContext'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <AuthProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </AuthProvider>
  )
}

export default MyApp
