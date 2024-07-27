import Head from "next/head";
import Image from "next/image";
import {PostCard, PostWidget, Categories} from "../../../components";

const posts = [
  {title: "What is Geomancy?", excerpt: "A brief introduction to the ancient art of Geomancy."},
  {title: "How to Read Geomantic Figures", excerpt: "A guide to interpreting the sixteen geomantic figures."},
  {title: "Geomantic Divination", excerpt: "A guide to practicing geomantic divination."},
  {title: "Geomantic Tools", excerpt: "A list of tools used in geomancy."},
];
export default function BlogPage() {
  return (
      <div className="container mx-auto px-10 mb-8">
        <Head>
          <title>Geomancy Blog</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
           {posts.map((post, index) => ( <PostCard post={post} key={post.title}/> ))}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
  );
}
