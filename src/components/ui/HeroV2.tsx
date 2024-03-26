// import { useScroll, motion, useTransform } from "framer-motion";
// import LetterChangeText from "./LetterChangeText/LetterChangeText";
// import { useRef } from "react";
// import Intro from "../Hero/Intro";
// import ScrollDown from "./ScrollDown";
// import PhotoBall from "./TrackBall/PhotoBall";
// import image from "../../assets/images/PHOTO UP-20211120-Vermogen-82.jpg";
// import Blob from "../Blob/Blob";

// function Hero() {
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });
//   // const positionX = useTransform(scrollYProgress, [0, 1], [0, -750]);
//   const positionX2 = useTransform(scrollYProgress, [0, 1], [0, 550]);
//   // const positionX3 = useTransform(scrollYProgress, [0, 1], [0, -200]);

//   return (
//     <>
//       <motion.div
//         className="h-screen w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-300"
//         ref={ref}
//         style={{
//           y: positionX2,
//           paddingLeft: "8%",
//           paddingRight: "8%",
//           paddingTop: "20vh",
//           paddingBottom: "20vh",
//           fontFamily: "Bebas Neue",
//         }}
//       >
//         <motion.div className="h-1/2 w-full flex justify-between items-end relative pb-8">
//           <motion.div className="">
//             <LetterChangeText
//               words={[
//                 "FULL-STACK",
//                 "FRONT-END",
//                 "BACK-END",
//                 "REACT JS",
//                 "JAVASCRIPT",
//                 "TYPESCRIPT",
//                 "NODE JS",
//               ]}
//             />
//           </motion.div>
//           <motion.div className="text-6xl text-nowrap flex justify-end">
//             <PhotoBall linkTo="/contact" size={185}>
//               <div className="w-[185px] h-[185px] rounded-full overflow-hidden bg-white">
//                 <img src={image} className="w-full h-full opacity-70" />
//               </div>
//             </PhotoBall>
//           </motion.div>
//         </motion.div>
//         <motion.div className="h-1/2 w-full pt-8 flex justify-between items-start relative border-y-2 border-solid border-slate-300">
//           <motion.div className="w-1/2 pr-24">
//             <Intro />
//           </motion.div>
//           <motion.div className="text-8xl font-extrabold text-nowrap flex flex-col items-end">
//             <div>DANIEL </div>
//             <div>DERUDDER</div>
//           </motion.div>
//         </motion.div>
//         <ScrollDown />
//       </motion.div>
//     </>
//   );
// }

// export default Hero;
