import {motion, Variants} from "framer-motion";
import {useTranslation} from "react-i18next";

const heroVariants: Variants = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0, transition: {duration: 0.8, ease: "easeOut"}},
};

export default function HeroSection() {
    const {t} = useTranslation();

    return (
        <motion.section
            id="home"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.1}}
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
                {/* Titles */}
                {t('hero.title1')} • {t('hero.title2')} • {t('hero.title3')}
            </p>

            <div className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                {/* Speaking section */}
                {t('hero.speaking')} <span
                className="text-gray-700 dark:text-gray-200">{t('hero.languages.ru')}</span>, <span
                className="text-gray-700 dark:text-gray-200">{t('hero.languages.en')}</span> & <span
                className="text-gray-700 dark:text-gray-200">{t('hero.languages.ge')}</span>
            </div>
        </motion.section>
    );
}