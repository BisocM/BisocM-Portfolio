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
                bg-gradient-to-r from-white via-gray-100 to-gray-50
                dark:from-[#2b2d42] dark:via-darkBg dark:to-darkBgAlt
                py-16 px-4
            "
        >
            <h1
                className="
                    text-4xl md:text-5xl font-extrabold mb-4
                    text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent
                  "
            >
                BisocM
            </h1>
            <p
                className="
                    text-xl md:text-2xl font-light mb-6 max-w-2xl
                    text-gray-900 dark:text-gray-200
                "
            >
                Backend Developer • Embedded Systems • Reverse Engineering
            </p>

            <div className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                Speaking: <span className="text-gray-700 dark:text-gray-200">Russian(Native)</span>, <span className="text-gray-700 dark:text-gray-200">English (Professional)</span> & <span className="text-gray-700 dark:text-gray-200">Georgian (Limited Working)</span>
            </div>
        </motion.section>
    );
}