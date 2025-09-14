const GradientTextComponent = () => {
  return (
    <div className="min-h-screen min-w-full bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full text-center">
        {/* Gradient Text */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8  md:mt-12 lg: mt-15">
          <span 
            className="bg-gradient-to-b from-white to-white/10 bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(0deg, #FFFFFF 0%, rgba(255, 255, 255, 0.1) 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
            }}
          >
            LATEST WORK
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Explore our recent projects and creative solutions that have helped our clients achieve their goals.
        </p>
        
        {/* Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Work Item 1 */}
          <div className="bg-gray-800/50 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-gray-800/70 h-80 relative">
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-xl font-semibold text-white mb-2">Remix Supply</h3>
              <p className="text-gray-300 mb-3">A Framer boutique with a mission to help designers and makers to showcase their skills and do is as fast as possible.</p>
              <span className="inline-block bg-gradient-to-r from-pink-500 to-orange-400 text-white text-sm font-medium px-3 py-1 rounded-full">
                View Project
              </span>
            </div>
          </div>
          
          {/* Work Item 2 */}
          <div className="bg-gray-800/50 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-gray-800/70 h-80 relative">
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-xl font-semibold text-white mb-2">Haze</h3>
              <p className="text-gray-300 mb-3">The goal of Haze was to deliver a fullscreen horizontal experience to showcase photography and branding projects that look awesome on bigger formats.</p>
              <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                 view project
              </span>
            </div>
          </div>
          
          {/* Work Item 3 */}
          <div className="bg-gray-800/50 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-gray-800/70 h-80 relative">
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-xl font-semibold text-white mb-2">Nitro</h3>
              <p className="text-gray-300 mb-3">Nitro is a premium Framer template for designers with an advanced layout and a ton of little big details to catch the visitor.</p>
              <span className="inline-block bg-gradient-to-r from-green-500 to-teal-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                View Project
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradientTextComponent;