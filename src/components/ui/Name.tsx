// import { motion } from "framer-motion";
// import image from "../../assets/images/PHOTO UP-20211120-Vermogen-82.jpg";
// import { Link } from "react-router-dom";

// function Name() {
//   const wordVariants = {
//     hidden: { width: "0%" },
//     visible: {
//       width: "100%",
//       transition: {
//         type: "tween",
//         duration: 0.5,
//       },
//     },
//   };
//   const nameVariants = {
//     hidden: { width: "0%" },
//     visible: {
//       width: "150%",
//       transition: {
//         type: "tween",
//         duration: 0.5,
//       },
//     },
//   };

//   return (
//     <Link to="/">
//       <motion.div
//         className="relative flex items-center gap-6 text-xl"
//         initial="hidden"
//         whileHover="visible"
//       >
//         <div className="w-[50px] h-[50px] rounded-full overflow-hidden bg-white opacity-75 lg:block hidden shrink-0">
//           <motion.img
//             src={image}
//             className="w-full h-full"
//             initial={{ filter: "grayscale(80%)" }}
//             whileHover={{ filter: "grayscale(0%)" }}
//           />
//         </div>
//         <motion.div className="flex" variants={nameVariants}>
//           <div>D</div>
//           <motion.div className="overflow-hidden" variants={wordVariants}>
//             aniel
//           </motion.div>
//           <div>D</div>
//           <motion.div className="overflow-hidden" variants={wordVariants}>
//             erudder
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </Link>
//   );
// }

// export default Name;
