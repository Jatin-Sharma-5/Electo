import Image from "next/image";

const Homepage = () => {
  return (
    <div className="w-full bg-blue-50 py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 bg-gradient-to-r from-white via-gray-50 to-blue-300 rounded-xl">

        {/* Left Side - Text */}
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Discover the Future of Electronics
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-800">
            Cutting-edge gadgets designed to make your life smarter, simpler, and more connected.
          </p>
          <button className="mt-6 px-6 py-3 rounded-3xl bg-gray-900 text-white font-semibold shadow-sm hover:shadow-md transition">
            Shop Now
          </button>
        </div>

        {/* Right Side - Image Card */}
        <div className="flex justify-center w-full lg:w-1/2">
          {/* <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-lg transition w-full sm:w-3/4 lg:w-full"> */}
            <Image
              src="/Featured2.png"
              alt="Electronics"
              width={500}
              height={500}
              className="rounded-xl w-full h-auto"
            />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
