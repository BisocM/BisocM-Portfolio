import {useEffect, useRef, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {featuredSkills, Skill, skills} from "@/data/skills.tsx";
import {useTranslation} from "react-i18next";

const cardVariants = {
    initial: {opacity: 0, y: 20, scale: 0.95},
    animate: {opacity: 1, y: 0, scale: 1, transition: {duration: 0.4, ease: 'easeOut'}},
    exit: {opacity: 0, y: -20, scale: 0.95, transition: {duration: 0.3, ease: 'easeIn'}},
};

export default function SkillsSection() {
    const [selectedSkill, setSelectedSkill] = useState(featuredSkills[0]);
    const [isHoverPaused, setIsHoverPaused] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const {t, i18n} = useTranslation(); // Added i18n

    useEffect(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);

        if (!isHoverPaused) {
            intervalRef.current = setInterval(() => {
                setSelectedSkill(currentSkill => {
                    const currentIndex = featuredSkills.findIndex(s => s.id === currentSkill.id);
                    const nextIndex = (currentIndex + 1) % featuredSkills.length;
                    return featuredSkills[nextIndex];
                });
            }, 5000); // Change skill every 5 seconds
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isHoverPaused]);

    const handleMouseEnter = (skill: Skill) => {
        if (skill.descriptionKey) { // Check descriptionKey
            setSelectedSkill(skill);
            setIsHoverPaused(true);
        }
    };

    const handleMouseLeave = () => {
        setIsHoverPaused(false);
    };

    return (
        <section id="skills" className="py-16 px-4 md:px-8 bg-white dark:bg-darkBgAlt">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="
                    mb-2 text-3xl md:text-4xl font-bold py-2
                    text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent
                ">
                    {t('skillsSection.title')}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {t('skillsSection.subtitle')}
                </p>

                {}
                <div className="relative min-h-[18rem] md:min-h-[14rem] mb-6 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedSkill ? `${selectedSkill.id}-${i18n.language}` : 'empty'}
                            variants={cardVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="w-full"
                        >
                            <div
                                className="bg-gray-50 dark:bg-darkBg p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-left">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{selectedSkill.name}</h3>
                                <p className={`text-md font-semibold mb-4 ${selectedSkill.levelColor}`}>{t(selectedSkill.levelKey)}</p>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {selectedSkill.descriptionKey ? t(selectedSkill.descriptionKey) : ''}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Skill Icons Grid */}
                <div
                    onMouseLeave={handleMouseLeave}
                    className="flex flex-wrap justify-center gap-4"
                >
                    {skills.map((skill) => (
                        <div
                            key={skill.id}
                            onMouseEnter={() => handleMouseEnter(skill)}
                            className="cursor-pointer"
                            title={skill.name}
                        >
                            <div className={`
                                p-4 bg-gray-100 dark:bg-darkBg rounded-lg
                                transition-all duration-300 ease-in-out
                                ${selectedSkill?.id === skill.id
                                ? 'scale-110 ring-2 ring-primary shadow-lg'
                                : 'scale-100 ring-0 hover:scale-105'}
                            `}>
                                <div className={`
                                    text-gray-600 dark:text-gray-400 transition-colors duration-300
                                    ${selectedSkill?.id === skill.id ? 'text-primary' : ''}
                                `}>
                                    {skill.icon}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}