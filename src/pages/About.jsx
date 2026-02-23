import React from "react";
import './CSS/About.css';
import hero from '../assets/About Us.jpeg';
import { motion } from 'framer-motion';


const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

const fadeup = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 }
};

const About = () => {
  return (
    <div className="about-page">

      <motion.div className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      >
        <motion.img 
        src={hero}
        alt="Hero Image"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4 }}
        />
      </motion.div>

      <div className="content">
        <motion.section 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        >
          <h1>All About Wistplants</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum architecto alias vero deleniti sint qui distinctio perferendis! Minima beatae hic reiciendis fugit, aperiam ipsam in totam, itaque aliquam et qui.
          </p>
        </motion.section>

        <motion.section 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        >
          <h1>Connecting People with Plants</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum eveniet veritatis repudiandae odit distinctio fugit voluptate? Alias, recusandae similique consectetur omnis perspiciatis mollitia blanditiis? Repellendus consequuntur quae qui illo? Rerum!
          </p>
        </motion.section>

        <motion.section 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        >
          <h1>This Is Wistplants</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, nesciunt tenetur placeat dignissimos laborum porro aliquid ipsa fugiat eum veritatis esse nam. Eveniet, reiciendis eaque dolores ratione reprehenderit vel quia!
          </p>
        </motion.section>
      </div>
    </div>
  );
};

export default About;