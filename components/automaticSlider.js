// import { useState, useEffect } from 'react';

// export default function AutoCarousel() {
//   const [position, setPosition] = useState(0);
//   const [direction, setDirection] = useState(1); // 1 for right, -1 for left

//   const images = [
//     'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop',
//     'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
//     'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
//     'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=300&fit=crop',
//     'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&h=300&fit=crop'
//   ];

//   const itemWidth = 320; // width of each item including gap
//   const maxPosition = (images.length - 1) * itemWidth;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPosition(prev => {
//         const newPosition = prev + (direction * 2); // Speed: 2px per frame
        
//         // Check if we've reached the end (going right)
//         if (newPosition >= maxPosition && direction === 1) {
//           setDirection(-1);
//           return maxPosition;
//         }
        
//         // Check if we've reached the start (going left)
//         if (newPosition <= 0 && direction === -1) {
//           setDirection(1);
//           return 0;
//         }
        
//         return newPosition;
//       });
//     }, 30); // Update every 30ms for smooth animation

//     return () => clearInterval(interval);
//   }, [direction, maxPosition]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-8">
//       <div className="w-full max-w-6xl">
//         <h1 className="text-4xl font-bold text-white text-center mb-12">
//           Automatic Reversing Carousel
//         </h1>
        
//         <div className="relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm p-8">
//           {/* Carousel Container */}
//           <div className="overflow-hidden">
//             <div 
//               className="flex gap-8 transition-none"
//               style={{
//                 transform: `translateX(-${position}px)`
//               }}
//             >
//               {images.map((img, idx) => (
//                 <div 
//                   key={idx}
//                   className="flex-shrink-0 w-72 h-72 rounded-xl overflow-hidden shadow-2xl border-4 border-purple-500/30"
//                 >
//                   <img 
//                     src={img} 
//                     alt={`Product ${idx + 1}`}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Direction Indicator */}
//           <div className="mt-6 text-center">
//             <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm">
//               <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
//               Moving {direction === 1 ? 'Right →' : '← Left'}
//             </span>
//           </div>
//         </div>

//         <p className="text-gray-400 text-center mt-6 text-sm">
//           Automatically scrolls right, then reverses direction at the end
//         </p>
//       </div>
//     </div>
//   );
// }