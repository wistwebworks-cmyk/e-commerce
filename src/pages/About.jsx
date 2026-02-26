import React, { useRef } from "react";
import "./CSS/About.css";
import hero from "../assets/About Us.avif";
import { motion } from "framer-motion";

/* ========================= Animati Variants
========================= */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25
    }
  }
};

const fadeBlur = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(8px)"
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

/* ========================= Mag Btn ========================= */

const MagneticButton = ({ children }) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (window.matchMedia("(hover: hover)").matches) {
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    }
  };

  const reset = () => {
    ref.current.style.transform = "translate(0, 0)";
  };

  return (
    <button
      ref={ref}
      className="magnetic-btn"
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
    >
      {children}
    </button>
  );
};

/* ===========  About Page ==============*/

const About = () => {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <motion.div
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.img
          src={hero}
          alt="Hero"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="content"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.section variants={fadeBlur}>
          <h1>All About Wistplants</h1>
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid possimus molestiae veritatis suscipit illum assumenda, voluptates hic quod nisi eum culpa, fugiat nulla officia sequi commodi cupiditate illo, dolores fugit?
          </p>
        </motion.section>

        <motion.section variants={fadeBlur}>
          <h1>Connecting People with Plants</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consequatur temporibus similique deleniti voluptatibus animi architecto! Enim odit veniam dolor nesciunt cumque fugiat eaque, ipsa odio tempora eos amet eveniet?
          </p>
        </motion.section>

        <motion.section variants={fadeBlur}>
          <h1>This Is Wistplants</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat facere autem ducimus quaerat quidem nesciunt accusantium ex error aspernatur praesentium illum veniam sed modi maxime nam labore, illo soluta! Possimus.
          </p>

          <MagneticButton>Explore Plants</MagneticButton>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default About;