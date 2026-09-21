// import React from 'react';
// import { motion } from 'framer-motion';

// const About = () => {
//   return (
//     <section id="about" className="py-24 bg-[#260812] text-[#FFF5EA] overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
//           {/* ================= LEFT SIDE: 3 IMAGES COLLAGE ================= */}
//           <div className="relative w-full aspect-square max-w-md mx-auto lg:max-w-none flex items-center justify-center order-2 lg:order-1 my-6 lg:my-0">
            
//             {/* Image 1 (Top Center) - Pehle Jump Karegi */}
//             <motion.div
//               initial={{ x: -120, y: -50, opacity: 0, scale: 0.7 }}
//               whileInView={{ x: 0, y: 0, opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{
//                 type: 'spring',
//                 stiffness: 120,
//                 damping: 12,
//                 delay: 0.6 // Sequence 2: Text ke baad 1st Image
//               }}
//               className="absolute top-0 w-3/5 h-1/2 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C98F8F]/40 z-20 group"
//             >
//               <img
//                 src="/images/image2.jpeg"
//                 alt="Anchor Shubham Atre Hosting"
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//               />
//             </motion.div>

//             {/* Image 2 (Bottom Left Overlapping) - Dusre No. Par Jump Karegi */}
//             <motion.div
//               initial={{ x: -150, y: 50, opacity: 0, scale: 0.7 }}
//               whileInView={{ x: 0, y: 0, opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{
//                 type: 'spring',
//                 stiffness: 120,
//                 damping: 12,
//                 delay: 0.8 // Sequence 3: 2nd Image
//               }}
//               className="absolute bottom-2 left-0 w-7/12 h-1/2 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C98F8F]/40 z-30 group"
//             >
//               <img
//                 src="/images/image3.jpeg"
//                 alt="Anchor Shubham Atre Event"
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//               />
//             </motion.div>

//             {/* Image 3 (Bottom Right Overlapping) - Teesre No. Par Jump Karegi */}
//             <motion.div
//               initial={{ x: -100, y: 80, opacity: 0, scale: 0.7 }}
//               whileInView={{ x: 0, y: 0, opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{
//                 type: 'spring',
//                 stiffness: 120,
//                 damping: 12,
//                 delay: 1.0 // Sequence 4: 3rd Image
//               }}
//               className="absolute bottom-2 right-0 w-7/12 h-1/2 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C98F8F]/40 z-10 group"
//             >
//               <img
//                 src="/images/image4.jpeg"
//                 alt="Anchor Shubham Atre Stage Presence"
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//               />
//             </motion.div>

//           </div>


//           {/* ================= RIGHT SIDE: TEXT CONTENT ================= */}
//           {/* Pehle Right Side Se Jump Karke Aayega */}
//           <motion.div
//             initial={{ x: 120, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{
//               type: 'spring',
//               stiffness: 100,
//               damping: 12,
//               delay: 0.2 // Sequence 1: Sabse Pehle Text
//             }}
//             className="order-1 lg:order-2 space-y-6 text-left"
//           >
//             <div className="inline-block px-4 py-1.5 rounded-full bg-[#4A1022] border border-[#C98F8F]/30 text-[#C98F8F] text-xs font-bold tracking-widest uppercase">
//               Meet The Host
//             </div>

//             <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FFF5EA] tracking-wider leading-tight">
//               ᗩᑎᑕᕼOᖇ ᔕᕼᑌᗷᕼᗩᗰ ᗩTᖇE
//             </h2>

//             <p className="text-[#E8D5C4] text-base sm:text-lg leading-relaxed">
//               Bringing boundless energy, high-class charisma, and seamless stage control to make every celebration truly extraordinary. With years of experience hosting luxury weddings, grand sangeet nights, corporate galas, and celebrity events.
//             </p>

//             <p className="text-[#D9A6A8] text-sm sm:text-base leading-relaxed">
//               Every moment is crafted to keep the audience captivated, smiling, and fully engaged from start to finish.
//             </p>

//             <div className="pt-4 flex flex-wrap items-center gap-6">
//               <div className="border-l-2 border-[#C98F8F] pl-4">
//                 <h4 className="text-2xl font-bold text-[#FFF5EA]">500+</h4>
//                 <p className="text-xs text-[#E8D5C4] uppercase tracking-wider">Shows Completed</p>
//               </div>

//               <div className="border-l-2 border-[#C98F8F] pl-4">
//                 <h4 className="text-2xl font-bold text-[#FFF5EA]">100%</h4>
//                 <p className="text-xs text-[#E8D5C4] uppercase tracking-wider">High Energy Guaranteed</p>
//               </div>
//             </div>

//             <div className="pt-2">
//               <a
//                 href="https://wa.me/916232091754"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="inline-block bg-[#C98F8F] hover:bg-[#D9A6A8] text-[#260812] px-7 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:scale-105"
//               >
//                 ᖇEᔕEᖇᐯE YOᑌᖇ ᕴOᒪᗪEᑎ ᗪᗩTEᔕ
//               </a>
//             </div>
//           </motion.div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default About;


// import React from 'react';
// import { motion } from 'framer-motion';

// const About = () => {
//   return (
//     <section id="about" className="py-24 bg-[#FDF8F2] text-[#260812] relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
//           {/* Image Side with Royal Border */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="relative mx-auto w-full max-w-md lg:max-w-none"
//           >
//             <div className="relative p-3 bg-[#4A1022] rounded-3xl shadow-2xl border-2 border-[#C98F8F]">
//               <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-[#C98F8F]/40 bg-[#260812]">
//                 <img
//                   src="/image/Image1.jpeg"
//                   alt="Anchor Shubham"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </motion.div>

//           {/* Content Side */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="space-y-6"
//           >
//             <span className="text-xs font-bold uppercase tracking-widest text-[#4A1022] bg-[#F7E7D8] px-4 py-1.5 rounded-full border border-[#C98F8F]">
//               About The Host
//             </span>
//             <h2 className="text-3xl sm:text-5xl font-extrabold tracking-wider text-[#260812]">
//               Bringing Life & Elegance To Every Stage
//             </h2>
//             <p className="text-[#6B4423] text-base sm:text-lg leading-relaxed">
//               With years of stage experience, I specialize in transforming high-profile weddings, corporate galas, and live concerts into unforgettable celebrations. My hosting style blends charm, energy, and royal elegance to keep your guests captivated throughout the event.
//             </p>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#260812] text-[#FFF5EA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-wider text-[#C98F8F]"
          >
            ᗩᗷOᑌT ᗰE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[#E8D5C4] mt-3 tracking-wide text-sm sm:text-base max-w-2xl mx-auto"
          >
            Passionate Anchor & Event Host Creating Unforgettable Moments Across India
          </motion.p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Container */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative bg-[#3B0C1B] p-3 rounded-3xl border border-[#C98F8F]/30 shadow-2xl">
              <div 
                className="relative w-full overflow-hidden rounded-2xl border border-[#C98F8F]/40"
                style={{ aspectRatio: '4/5' }}
              >
                <img
                  src="/image/Image1.jpeg"
                  alt="Anchor Shubham Atre"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Description */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-4xl font-bold text-[#FFF5EA] leading-tight">
              Elevating Celebrations With High Voltage Energy & Grace
            </h3>

            <p className="text-[#E8D5C4] text-base sm:text-lg leading-relaxed">
              Welcome! I am <span className="text-[#C98F8F] font-bold">Shubham Atre</span>, a professional event host and anchor with years of experience commanding stages across luxury weddings, corporate summits, and grand concerts.
            </p>

            <p className="text-[#E8D5C4] text-base sm:text-lg leading-relaxed">
              My goal is to bring spontaneous charm, interactive guest engagement, and a seamless flow to every single event, making it truly iconic and memorable.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-[#C98F8F] hover:bg-[#D9A6A8] text-[#260812] px-8 py-3 rounded-full font-bold text-sm tracking-wider uppercase transition-all shadow-lg hover:scale-105"
              >
                Let's Connect
              </a>
              <a
                href="https://wa.me/916232091754"
                target="_blank"
                rel="noreferrer"
                className="border-2 border-[#C98F8F] text-[#FFF5EA] hover:bg-[#C98F8F]/20 px-8 py-3 rounded-full font-bold text-sm tracking-wider uppercase transition-all"
              >
                WhatsApp Direct
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;