import Banner from '@/components/Banner'
import Cards from '@/components/Cards'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Quote from '@/components/Quote'
import Start from '@/components/Start'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Charity Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <div className="h-10"></div>
      <Cards />
      <div className="h-10"></div>
      <Quote />
      <div className="h-10"></div>
      <Start />
      <div className="h-10"></div>
      <Footer />
    </div>
  )
}
