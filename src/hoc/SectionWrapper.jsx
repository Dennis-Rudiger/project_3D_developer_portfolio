import { motion } from "framer-motion"; // Import motion components for animations
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

// Higher Order Component that wraps other components with animation features
const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      // Main animated section with stagger effects and hover animation
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }} // Triggers animation when 25% of element is in view
        whileHover={{ scale: 1.02 }} // Slight scale up on hover
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10
        }}
        className={`${styles.padding} max-w-7xl 
        mx-auto relative z-0`}
      >
        {/* Hash span for navigation anchor points */}
        <motion.span
          className='hash-span'
          id={idName}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          &nbsp;
        </motion.span>

        {/* Wrapper for the component with fade-up animation */}
        <motion.div
          initial={{ y: 50, opacity: 0 }} // Start 50px down and invisible
          whileInView={{ y: 0, opacity: 1 }} // Animate to original position and visible
          transition={{
            type: "spring",
            duration: 1.2,
            delay: 0.2,
          }}
        >
          <Component />
        </motion.div>
      </motion.section>
    );
  };

export default StarWrapper;
