import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Adrian Wieczorek</title>
        <meta name="description" content="Simple Next.js page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">
          Adrian Wieczorek
        </h1>
        <p className="subtitle">
          119203
        </p>
      </main>
    </div>
  );
}

