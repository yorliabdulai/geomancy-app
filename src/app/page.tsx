import Head from "next/head";
import Image from "next/image";

const posts = [
  {title: "What is Geomancy?", excerpt: "A brief introduction to the ancient art of Geomancy."},
  {title: "How to Read Geomantic Figures", excerpt: "A guide to interpreting the sixteen geomantic figures."},
  {title: "Geomantic Divination", excerpt: "A guide to practicing geomantic divination."},
  {title: "Geomantic Tools", excerpt: "A list of tools used in geomancy."},
];
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto px-10 mb-8">
        <Head>
          <title>Geomancy Blog</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

        </div>
      </div>
    </main>
  );
}
