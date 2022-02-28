import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/requests'

const Home: NextPage = ({ results }: any) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
      <Nav />
      <Results results={results} />
    </div>
  )
}

export default Home

export async function getServerSideProps(context: any) {
  const genre = context.query.genre
  const req = await fetch(
    `https://api.themoviedb.org/3${
      // @ts-ignore
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json())
  return {
    props: {
      results: req,
    },
  }
}
