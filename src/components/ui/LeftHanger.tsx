// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// function LeftHanger() {
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "start start"],
//   });
//   const position = useTransform(scrollYProgress, [0.7, 1], [0, 450]);

//   const variantsContainer = {
//     narrow: {
//       width: "8rem",
//     },
//     wide: {
//       width: "20rem",
//       transition: {
//         type: "tween",
//         delay: 0.1,
//         ease: "easeOut",
//       },
//     },
//   };

//   const variantsText = {
//     narrow: {
//       opacity: 0,
//     },
//     wide: {
//       opacity: 1,
//     },
//     transition: {
//       type: "tween",
//       delay: 0.5,
//       ease: "easeOut",
//     },
//   };

//   return (
//     <motion.div
//       className="h-28 bg-gray-800 rounded-l-full absolute right-0 flex gap-4 items-center justify-start pl-4 top-[-30%]"
//       style={{ x: position }}
//       initial="narrow"
//       whileHover="wide"
//       variants={variantsContainer}
//       ref={ref}
//     >
//       <div className="relative w-[85px] h-[85px] rounded-full bg-gray-700 shrink-0 flex justify-center items-center">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           height="48"
//           viewBox="0 -960 960 960"
//           width="48"
//           fill="white"
//         >
//           <path d="M480-460.001q-41.922 0-70.961-29.038-29.038-29.039-29.038-70.961t29.038-70.961q29.039-29.038 70.961-29.038t70.961 29.038q29.038 29.039 29.038 70.961t-29.038 70.961Q521.922-460.001 480-460.001ZM260.001-70.771v-286.307q-38-39.692-59-91.848-21-52.157-21-111.074 0-125.624 87.17-212.811 87.169-87.188 212.768-87.188t212.829 87.188Q779.999-685.624 779.999-560q0 58.917-21 111.074-21 52.156-59 91.848v286.306L480-140.77l-219.999 70ZM480-320q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70ZM320-158.615l160-42.924 160 42.924v-148.618q-34.231 22.308-75.007 34.77-40.777 12.462-85.077 12.462-44.301 0-84.993-12.462-40.692-12.462-74.923-34.77v148.618Zm160-74.309Z" />
//         </svg>
//       </div>
//       <motion.h4
//         className="text-slate-100 absolute w-96 left-28 overflow-hidden"
//         variants={variantsText}
//       >
//         Titre professionnel niv. 5 <br /> Développeur web
//       </motion.h4>
//     </motion.div>
//   );
// }

// export default LeftHanger;
