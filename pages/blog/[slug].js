// import { useRouter } from 'next/router';

// const POSTS = {
//   'winter-ear-care': {
//     title: 'Tips to Keep Your Ears Safe and Healthy This Winter Season',
//     image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=900&fit=crop',
//     intro:
//       'For those who have ear problems, the icy winter weather could be one of the most dreadful things for you. Although there is no scientific fact that cold wear can cause ear infections, being constantly exposed to the low temperature can lead to ringing in the ear, dizziness, pain and other symptoms associated with existing ear problems.'
//   },
//   'hearing-aids-technology': {
//     title: "Hearing Aids — The Tiny Tech Millions Can't Hear Without",
//     image: 'https://images.unsplash.com/photo-1519101096400-4ccfe0613c3f?w=800&h=900&fit=crop',
//     intro:
//       'Modern hearing aids bring rechargeable batteries, Bluetooth connectivity, AI noise reduction, and health tracking...'
//   },
//   'safe-earwax-removal': {
//     title: 'The Safest Way to Remove Earwax',
//     image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&h=900&fit=crop',
//     intro:
//       'Avoid cotton buds. Consider softening drops and see a professional for microsuction if needed.'
//   }
// };

// export default function BlogPost() {
//   const { query } = useRouter();
//   const slug = Array.isArray(query.slug) ? query.slug[0] : query.slug;
//   const post = (slug && POSTS[slug]) || null;

//   if (!post) {
//     return (
//       <div className="min-h-screen bg-white px-8 md:px-16 py-16">
//         <h1 className="text-4xl font-light">Post not found</h1>
//         <p className="text-gray-600 mt-4">The article you are looking for does not exist.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       <div className="flex flex-col lg:flex-row items-stretch gap-0 pt-12 md:pt-20">
//         <div className="w-full lg:w-1/2 px-8 md:px-16 flex flex-col justify-center pb-12 lg:pb-0">
//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-black">{post.title}</h1>
//         </div>
//         <div className="w-full lg:w-1/2 h-96 md:h-auto md:min-h-screen">
//           <img src={post.image} alt={post.title} className="w-full h-full object-cover rounded-l-3xl" />
//         </div>
//       </div>

//       <div className="bg-white py-16 border-t border-gray-300 mt-5 m-5 md:py-24">
//         <div className="max-w-4xl mx-auto px-8 md:px-16">
//           <div className="space-y-6 mb-12">
//             <p className="text-lg text-gray-800 leading-relaxed font-light">{post.intro}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useRouter } from 'next/router';

const POSTS = {
  'winter-ear-care': {
    title: 'Tips to Keep Your Ears Safe and Healthy This Winter Season',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=900&fit=crop',
    intro:
      'For those who have ear problems, the icy winter weather could be one of the most dreadful things for you. Although there is no scientific fact that cold wear can cause ear infections, being constantly exposed to the low temperature can lead to ringing in the ear, dizziness, pain and other symptoms associated with existing ear problems.',
    sections: [
      {
        heading: 'Keep your body warm',
        content: [
          'People who have upper respiratory colds or flu are more prone to ear infections. This infection happens when the eustachian tube in your middle ear is blocked by fluid or inflammation which could result in the development of viral or bacterial infection. Although kids are more susceptible to these types of infections, adults can also develop symptoms if they aren\'t careful enough.',
          'Keeping your body warm during the icy cold weather can strengthen your immune system so your body will be able to fight off potential viruses and colds. Whether you are outside or inside your home, make sure to wear warm clothes.'
        ]
      },
      {
        heading: 'Take care of your immune system',
        content: [
          'A strong immune system is your body\'s best defense against infections and illnesses. Make sure to get enough sleep, eat nutritious foods, and stay hydrated throughout the day. Regular exercise and stress management also play important roles in maintaining a healthy immune system.'
        ]
      },
      {
        heading: 'Protect your ears from wind',
        content: [
          'Wind exposure can be particularly harmful to your ears during winter. Strong winds can cause rapid temperature changes in your ear canal, leading to discomfort and potential damage. Always wear a hat or earmuffs when going outside in windy conditions to create a protective barrier.'
        ]
      }
    ]
  },

  'hearing-aids-technology': {
    title: "Hearing Aids — The Tiny Tech Millions Can't Hear Without",
    image: 'https://images.unsplash.com/photo-1519101096400-4ccfe0613c3f?w=800&h=900&fit=crop',
    intro:
    'Modern hearing aids bring rechargeable batteries, Bluetooth connectivity, AI noise reduction, and health tracking...',
    sections: [

      {
        heading: 'Keep your body warm',
        content: [
          'People who have upper respiratory colds or flu are more prone to ear infections. This infection happens when the eustachian tube in your middle ear is blocked by fluid or inflammation which could result in the development of viral or bacterial infection. Although kids are more susceptible to these types of infections, adults can also develop symptoms if they aren\'t careful enough.',
          'Keeping your body warm during the icy cold weather can strengthen your immune system so your body will be able to fight off potential viruses and colds. Whether you are outside or inside your home, make sure to wear warm clothes.'
        ]
      },
      {
        heading: 'Take care of your immune system',
        content: [
          'A strong immune system is your body\'s best defense against infections and illnesses. Make sure to get enough sleep, eat nutritious foods, and stay hydrated throughout the day. Regular exercise and stress management also play important roles in maintaining a healthy immune system.'
        ]
      },
      {
        heading: 'Protect your ears from wind',
        content: [
          'Wind exposure can be particularly harmful to your ears during winter. Strong winds can cause rapid temperature changes in your ear canal, leading to discomfort and potential damage. Always wear a hat or earmuffs when going outside in windy conditions to create a protective barrier.'
        ]
      }
    ]
  },

  'safe-earwax-removal': {
    title: 'The Safest Way to Remove Earwax',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&h=900&fit=crop',
    intro:
      'Avoid cotton buds. Consider softening drops and see a professional for microsuction if needed.',
    sections: [
      {
        heading: 'Keep your body warm',
        content: [
          'People who have upper respiratory colds or flu are more prone to ear infections. This infection happens when the eustachian tube in your middle ear is blocked by fluid or inflammation which could result in the development of viral or bacterial infection. Although kids are more susceptible to these types of infections, adults can also develop symptoms if they aren\'t careful enough.',
          'Keeping your body warm during the icy cold weather can strengthen your immune system so your body will be able to fight off potential viruses and colds. Whether you are outside or inside your home, make sure to wear warm clothes.'
        ]
      },
      {
        heading: 'Take care of your immune system',
        content: [
          'A strong immune system is your body\'s best defense against infections and illnesses. Make sure to get enough sleep, eat nutritious foods, and stay hydrated throughout the day. Regular exercise and stress management also play important roles in maintaining a healthy immune system.'
        ]
      },
      {
        heading: 'Protect your ears from wind',
        content: [
          'Wind exposure can be particularly harmful to your ears during winter. Strong winds can cause rapid temperature changes in your ear canal, leading to discomfort and potential damage. Always wear a hat or earmuffs when going outside in windy conditions to create a protective barrier.'
        ]
      }
    ]
  }
};

export default function BlogPost() {
  const { query } = useRouter();
  const slug = Array.isArray(query.slug) ? query.slug[0] : query.slug;
  const post = (slug && POSTS[slug]) || null;

  if (!post) {
    return (
      <div className="min-h-screen bg-white px-8 md:px-16 py-16">
        <h1 className="text-4xl font-light">Post not found</h1>
        <p className="text-gray-600 mt-4">The article you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-stretch gap-0 pt-12 md:pt-20">
        <div className="w-full lg:w-1/2 px-8 md:px-16 flex flex-col justify-center pb-12 lg:pb-0">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-black">
            {post.title}
          </h1>
        </div>
        <div className="w-full lg:w-1/2 h-96 md:h-auto md:min-h-screen">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover rounded-l-3xl"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white py-16 border-t border-gray-300 mt-5 m-5 md:py-24">
        <div className="max-w-4xl mx-auto px-8 md:px-16">
          {/* Intro */}
          <div className="space-y-6 mb-12">
            <p className="text-lg text-gray-800 leading-relaxed font-light">{post.intro}</p>
            {post.slug === 'winter-ear-care' && (
              <p className="text-lg text-gray-800 leading-relaxed font-light">
                So how can you keep your ears and hearing in good condition this winter season? Check out these tips below.
              </p>
            )}
          </div>

          {/* Render Sections if available */}
          {post.sections &&
            post.sections.map((section, index) => (
              <div key={index} className="space-y-6 mb-16">
                <h2 className="text-4xl font-light text-black">{section.heading}</h2>
                {section.content.map((para, i) => (
                  <p key={i} className="text-lg text-gray-800 leading-relaxed font-light">
                    {para}
                  </p>
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
