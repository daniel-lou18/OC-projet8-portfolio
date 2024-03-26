// import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import picture from "../../assets/images/PHOTO UP-20211120-Vermogen-14.jpg";

// type item = {
//   id: string;
//   cover: string;
// };

// type ParallaxGalleryProps = {
//   items: item[];
//   y?: MotionValue;
//   top?: number;
// };

// function Column({ items, y, top }: ParallaxGalleryProps) {
//   return (
//     <motion.ul
//       className="flex flex-col gap-4 relative w-1/3"
//       style={{ y, top }}
//     >
//       {items.map((logement: { id: string; cover: string }, id: number) => (
//         <li
//           key={logement.id}
//           className="rounded-lg overflow-hidden"
//           style={{ height: 300 }}
//         >
//           <img
//             src={id === 1 ? picture : logement.cover}
//             className="h-full w-auto object-cover"
//           />
//         </li>
//       ))}
//     </motion.ul>
//   );
// }

// function ParallaxGallery({ items }: ParallaxGalleryProps) {
//   const items1 = items.slice(0, 3);
//   const items2 = items.slice(3, 6);
//   const items3 = items.slice(6);
//   const ref = useRef<HTMLElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });
//   const y1 = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [0, window.innerHeight * 1.5]
//   );
//   const y2 = useTransform(scrollYProgress, [0, 1], [0, window.innerHeight]);
//   const y3 = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [0, window.innerHeight * 1.75]
//   );

//   return (
//     <section
//       className="w-full h-full pl-16 pr-16 gap-8 flex overflow-hidden"
//       ref={ref}
//       //   style={}
//     >
//       <Column items={items1} y={y1} top={-27} />
//       {/* <Column items={items2} y={y2} top={-15} /> */}
//       {/* <Column items={items3} y={y3} top={-27} /> */}
//       {/* <Column items={items3} y={y2} top={-15} /> */}
//     </section>
//   );
// }

// export default ParallaxGallery;
