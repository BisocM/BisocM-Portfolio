import { motion, Variants } from "framer-motion";

const heroVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function HeroSection() {
    return (
        <motion.section
            id="home"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={heroVariants}
            className="
        relative flex flex-col items-center text-center
        bg-gradient-to-r from-[#2b2d42] via-darkBg to-darkBgAlt
        py-16 px-4
      "
        >
            <h1 className="
        text-4xl md:text-5xl font-extrabold mb-4
        text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400
      ">
                BisocM
            </h1>
            <p className="text-xl md:text-2xl font-light mb-6 max-w-2xl">
                Backend Developer • Embedded Systems • Reverse Engineering
            </p>
        </motion.section>
    );
}