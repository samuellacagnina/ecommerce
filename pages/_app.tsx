import Layout from '../src/components/Layout'
import { AuthProvider } from '../src/context/AuthContext'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Layout>
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  </Layout>
  )
}

export default MyApp
