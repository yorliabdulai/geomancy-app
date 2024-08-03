import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component from next/image
import { grpahCMSImageLoader } from '../util';

const PostCard = ({ post }) => {
  // Ensure post and post.featuredImage are defined before accessing their properties
  const featuredImageUrl = post?.featuredImage?.url;
console.log(post)
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      {featuredImageUrl ? (
        <div className="relative overflow-hidden shadow-md pb-80 mb-6">
          <Image
            loader={grpahCMSImageLoader}
            src={featuredImageUrl}
            alt={post.title}
            width={800} // Specify width as a numeric value
            height={400} // Specify height as a numeric value
            className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
          />
        </div>
      ) : (
        <div className="relative overflow-hidden shadow-md pb-80 mb-6 bg-gray-200">
          <p className="text-center pt-36">No Image Available</p>
        </div>
      )}

      <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <p className="text-lg mt-2">{post.excerpt}</p>
      <Link href={`/post/${post.slug}`} className="text-blue-500 hover:underline mt-4 block">
        Read More
      </Link>
    </div>
  );
};

export default PostCard;
