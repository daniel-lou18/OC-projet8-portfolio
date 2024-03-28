// import { motion, useScroll, useSpring, useTransform } from "framer-motion";
// import logements from "../../data/logements.json";
// import { useRef } from "react";

// function Gallery() {
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end end"],
//   });

//   const fixedOrRelative = useTransform(scrollYProgress, (value) =>
//     value === 1 ? "relative" : "fixed"
//   );
//   const stickyOrAbsolute = useTransform(scrollYProgress, (value) =>
//     value === 1 ? "absolute" : "sticky"
//   );

//   const progress = useTransform(
//     scrollYProgress,
//     [0, 0.2, 0.7, 1],
//     [0, 0, 0.99, 1]
//   );

//   const radius = useTransform(scrollYProgress, [0.7, 1], ["50%", "0%"]);

//   const scrollYSpring = useSpring(progress, {
//     stiffness: 200,
//     damping: 20,
//   });

//   return (
//     <motion.div
//       className="h-[200vh] w-full"
//       style={{ position: fixedOrRelative }}
//       ref={ref}
//     >
//       <motion.div
//         className="opacity-100 w-full h-screen"
//         style={{
//           bottom: 0,
//           position: stickyOrAbsolute,
//         }}
//       >
//         <motion.ul
//           className="grid grid-cols-3 w-full p-16 gap-4 overflow-hidden"
//           style={{
//             opacity: scrollYProgress,
//             borderRadius: radius,
//             scale: scrollYSpring,
//           }}
//         >
//           {logements.map((logement: { id: string; cover: string }) => (
//             <li key={logement.id} className="rounded-lg overflow-hidden">
//               <img
//                 src={logement.cover}
//                 className="h-full w-auto object-cover"
//               />
//             </li>
//           ))}
//         </motion.ul>
//       </motion.div>
//     </motion.div>
//   );
// }

// export default Gallery;
