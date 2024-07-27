import Image from 'next/image';

const About = () => {
  return (
    <div className="py-24 px-6 md:px-12 lg:px-24 xl:px-48 2xl:px-64 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-16">
        {/* LEFT - AUTHOR IMAGE */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="bg-white rounded-lg shadow-xl p-6">
            <Image 
              src="/images/author.jpg" // Replace with the actual image path
              alt="Author of Geomancy Book"
              width={300}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
        {/* RIGHT - ABOUT TEXT */}
        <div className="w-full md:w-2/3 flex flex-col gap-6">
          <h1 className="text-5xl font-bold text-blue-700">About Us</h1>
          <p className="text-lg leading-relaxed">
            Welcome to Geomancy Coaching, your premier resource for mastering the ancient art of geomancy. We are dedicated to providing comprehensive, high-quality educational content to help you understand and apply geomancy in your life.
          </p>
          <p className="text-lg leading-relaxed">
            Our platform offers a range of resources including educational videos, insightful blog posts, and one-on-one consultations with experts. Whether you are a beginner or a seasoned practitioner, our content is designed to enhance your knowledge and skills in geomancy.
          </p>
          <h2 className="text-3xl font-semibold text-blue-700 mt-8">Meet the Author</h2>
          <p className="text-lg leading-relaxed">
            <strong>Ahmed Salim Pinchi</strong> is a renowned expert in the field of geomancy with over 20 years of experience. Ahmed has authored several books on the subject and has been a keynote speaker at numerous international conferences. His passion for geomancy and dedication to teaching have made him a respected figure in the community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
