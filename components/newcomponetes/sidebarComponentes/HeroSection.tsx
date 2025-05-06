const HeroSection = () => {
  return (
    <section className="relative w-full px-6 py-16 overflow-hidden rounded-lg shadow-lg bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Decorative Light Circle */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-500/70 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1 right-5 w-50 h-50 bg-pink-400/50 rounded-full blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto text-center space-y-6 z-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          Welcome to <span className="text-purple-400">CodeRani</span> Blog
        </h1>
        <p className="text-lg sm:text-xl text-gray-300">
          Discover insightful articles, developer tips, and trending
          technologies in full-stack development.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition">
            Get Started
          </button>
          <button className="bg-transparent border border-gray-400 hover:border-white text-gray-300 hover:text-white px-6 py-3 rounded-lg transition">
            Read Articles
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8 text-white text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start space-y-1">
            <div className="text-2xl font-bold">1.5K+</div>
            <div className="text-gray-300 text-sm">Published articles</div>
          </div>
          <div className="flex flex-col items-center sm:items-start space-y-1">
            <div className="text-2xl font-bold">1K+</div>
            <div className="text-gray-300 text-sm">Developers</div>
          </div>
          <div className="flex flex-col items-center sm:items-start space-y-1">
            <div className="text-2xl font-bold">15+</div>
            <div className="text-gray-300 text-sm">Years of experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
