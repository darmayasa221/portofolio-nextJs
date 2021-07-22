import { Fragment } from 'react'
import Head from 'next/head';
import Layout from '../components/layout/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Fragment>
      <Head>
      <title>Darma Yasa</title>
      <meta name='description' content='this is my Portofolio using Next Js'/>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </Fragment>
}
export default MyApp
