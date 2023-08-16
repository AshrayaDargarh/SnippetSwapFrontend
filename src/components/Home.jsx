import React from "react";
const Home = () => {
  return (
    <div className=" container mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold text-center text-red-400">
        Welcome to SnippetSwap
      </h1>
      
      <p className="text-xl text-white text-center mt-6">
        SnippetSwap is a platform where you can create and share snippets of any
        piece of information with anyone.
      </p>

      <div className="mt-12">
        <h2 className="text-4xl font-bold text-red-400 text-center">
          How it works
        </h2>
    <div className='border border-gray-500 mt-7'></div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <li className="flex flex-col items-center">
            <img
              src="/src/assets/icons/create1.png"
              alt="Create"
              className="w-20 cursor-pointer  object-cover "
            />
            <h3 className="text-xl font-bold text-blue-300 mt-4">
              Create a snippet
            </h3>
            <p className="text-gray-300 text-lg text-center mt-4">
              You can set the title, expiration date, and content of your
              snippet.
            </p>
          </li>
          <li className="flex flex-col items-center">
            <img
              src="/src/assets/icons/share1.png"
              alt="Share"
              className="w-20 cursor-pointer object-cover"
            />
            <h3 className="text-xl font-semibold text-blue-300 mt-4">
              Share your snippet
            </h3>
            <p className="text-gray-300 text-lg text-center mt-2">
              You can share your snippet via QR code or a with anyone you want.
            </p>
          </li>
          <li className="flex flex-col items-center">
            <img
              src="/src/assets/icons/qr-scan.png"
              alt="Access"
              className="w-20 cursor-pointer object-cover"
            />
            <h3 className="text-xl font-semibold text-blue-300 mt-4">
              Access any snippet
            </h3>
            <p className="text-gray-300 text-lg text-center mt-2">
              You can access any snippet via QR code or link without logging in.
            </p>
          </li>
        </ul>
      </div>
      <div className='border border-gray-500 mt-8'></div>
      
      <About />
    </div>
  );
};
function About() {
  return (
    <div className="container mx-auto px-4 py-14">
      <h1 className="text-4xl font-bold text-red-400 text-center">About Me</h1>
      <div className='border border-gray-500 mt-8'></div>

      <p className=" text-white text-center mt-4">
      As a passionate developer, I built SnippetSwap as a platform for creating and sharing snippets of any piece of information with anyone in a simple and enjoyable manner.
      </p>
      <div className='border border-gray-500 mt-8'></div>

      <div className="mt-16">
        <h2 className="text-4xl font-bold text-red-400 text-center">My Mission</h2>
      <div className='border border-gray-500 mt-8'></div>
        <p className="text-white text-center mt-4">
        My mission is to enable people to create and share snippets of any piece of information with anyone in a simple and secure way. You can create and share any kind of snippet you want, such as code, quote, recipe, joke, or anything else. I want to help you share it with the world.
        </p>
      <div className='border border-gray-500 mt-8'></div>

      </div>
      
      <div className="mt-16">
        <h2 className="text-4xl font-bold text-red-400 text-center">My Vision</h2>
      <div className='border border-gray-500 mt-8'></div>

        <p className="text-white text-center mt-4">
          {" "}
          I aspire to establish a community of snippet creators and sharers who can learn from each other, inspire each other, and have fun with each other. I want to make SnippetSwap a place where you can find snippets of anything you are interested in, and where you can present your own snippets to the world.{" "}
        </p>{" "}
      <div className='border border-gray-500 mt-8'></div>

      </div>{" "}
      
        <p className="text-gray-300 text-center mt-10">
        Developed by <a href="https://www.ashrayadargarh.me" className="text-gray-400" target="_blank"> Ashraya Dargarh</a>, Created with MERN Stack.
        </p>
    </div>
  );
}

export default Home;
