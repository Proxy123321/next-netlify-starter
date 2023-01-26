import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Poopy Games 3kho" />
        <p className="This is Poopy Game new Game site">
          
        </p> 
    <p>Click the start button to see all of our wonderful games.</p>
      </main>

      <Footer />
    </div>
  )
}
