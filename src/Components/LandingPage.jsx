import React from "react";
import { motion } from "framer-motion";
import Header from "./Header"; // Make sure the path is correct based on your folder structure
import "./Landing.css"; // Import your CSS file for styling

function LandingPage() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/man-worker-firld-by-solar-panels_1303-15593.jpg?t=st=1746802515~exp=1746806115~hmac=fbce80b24f3da1f1223f48c0ba8c2b19c564f2b9a42a768daf121183429f8ace&w=1380')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header Section */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 10 }} className="mt-5">
        <Header />
      </div>

      {/* Hero Content Section with Border */}
      <div className="hero-container">
        <motion.div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            zIndex: 5, // Ensuring it's above the background but below the header
          }}
        >
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ fontSize: "4rem", fontWeight: "bold" }}
          >
            Sustainable Future
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ maxWidth: "700px", margin: "1rem auto" }}
          >
            We are Windy, dedicated to creating a sustainable future through wind energy. We innovate to maximize wind
            power and support global energy needs with reliable and affordable clean energy solutions.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default LandingPage;
