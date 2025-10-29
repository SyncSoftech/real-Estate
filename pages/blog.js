export default function WellnessHero() {
    return (
      <div className="min-h-screen bg-white">
        {/* Header Info */}
        {/* <div className="pt-8 px-8 md:px-16">
          <p className="text-sm text-gray-600 font-light">Wellness • January 12, 2024</p>
        </div> */}
  
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-stretch gap-0 pt-12 md:pt-20">
          {/* Left Side - Title */}
          <div className="w-full lg:w-1/2 px-8 md:px-16 flex flex-col justify-center pb-12 lg:pb-0">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-black">
              Tips to Keep Your Ears Safe and Healthy This Winter Season
            </h1>
          </div>
  
          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2 h-96 md:h-auto md:min-h-screen">
            <img
              src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=900&fit=crop"
              alt="Family enjoying winter"
              className="w-full h-full object-cover rounded-l-3xl"
            />
          </div>
        </div>
         

        {/* Article Content Section */}
        <div className="bg-white py-16 border-t border-gray-300 mt-5 m-5 md:py-24">
          <div className="max-w-4xl mx-auto px-8 md:px-16">
            {/* Introduction */}
            <div className="space-y-6 mb-12">
              <p className="text-lg text-gray-800 leading-relaxed font-light ">
                For those who have ear problems, the icy winter weather could be one of the most dreadful things for you. Although there is no scientific fact that cold wear can cause ear infections, being constantly exposed to the low temperature can lead to ringing in the ear, dizziness, pain and other symptoms associated with existing ear problems.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed font-light">
                So how can you keep your ears and hearing in good condition this winter season? Check out these tips below.
              </p>
            </div>
  
            {/* Section 1 */}
            <div className="space-y-6 mb-16">
              <h2 className="text-4xl font-light text-black">Keep your body warm</h2>
              <p className="text-lg text-gray-800 leading-relaxed font-light">
                People who have upper respiratory colds or flu are more prone to ear infections. This infection happens when the eustachian tube in your middle ear is blocked by fluid or inflammation which could result in the development of viral or bacterial infection. Although kids are more susceptible to these types of infections, adults can also develop symptoms if they aren't careful enough.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed font-light">
                Keeping your body warm during the icy cold weather can strengthen your immune system so your body will be able to fight off potential viruses and colds. Whether you are outside or inside your home, make sure to wear warm clothes.
              </p>
            </div>
  
            {/* Section 2 */}
            <div className="space-y-6 mb-16">
              <h2 className="text-4xl font-light text-black">Take care of your immune system</h2>
              <p className="text-lg text-gray-800 leading-relaxed font-light">
                A strong immune system is your body's best defense against infections and illnesses. Make sure to get enough sleep, eat nutritious foods, and stay hydrated throughout the day. Regular exercise and stress management also play important roles in maintaining a healthy immune system.
              </p>
            </div>
  
            {/* Section 3 */}
            <div className="space-y-6">
              <h2 className="text-4xl font-light text-black">Protect your ears from wind</h2>
              <p className="text-lg text-gray-800 leading-relaxed font-light">
                Wind exposure can be particularly harmful to your ears during winter. Strong winds can cause rapid temperature changes in your ear canal, leading to discomfort and potential damage. Always wear a hat or earmuffs when going outside in windy conditions to create a protective barrier.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }