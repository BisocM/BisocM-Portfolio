import { motion, Variants } from "framer-motion";
import { FaCogs, FaServer } from "react-icons/fa";
import {
    SiDotnet,
    SiCplusplus,
    SiJavascript,
    SiDocker,
    SiFramework,
    SiGooglecloud,
    SiKubernetes,
    SiPostgresql,
} from "react-icons/si";

interface LanguageBarProps {
    language: string;
    level: string;
    percentage: number;
}

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.2 } } };
const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
};

function LanguageBar({ language, level, percentage }: LanguageBarProps) {
    return (
        <motion.div variants={item} className="space-y-1">
            <div className="flex items-center justify-between">
                <span className="font-medium">{language}</span>
                <span className="text-gray-400">{level}</span>
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 h-2 rounded overflow-hidden">
                <motion.div
                    className="bg-primary h-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                />
            </div>
        </motion.div>
    );
}

export default function SkillsSection() {
    return (
        <motion.section
            id="skills"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={container}
            className="py-12 px-4 md:px-8 bg-white dark:bg-darkBgAlt"
        >
            <div className="
                mb-8 text-2xl md:text-3xl font-bold text-center
                text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400
            ">
                Skills &amp; Proficiency
            </div>
            <motion.div variants={item} className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
                {/* Core Development Stack */}
                <div className="bg-white dark:bg-darkBg rounded-lg p-6 shadow-md flex-1">
                    <h3 className="text-xl font-semibold text-purple-300 mb-4 flex items-center gap-2">
                        <FaCogs /> Core Development Stack
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm">
                        <div className="bg-gray-200 dark:bg-darkBgAlt px-3 py-1 rounded flex items-center gap-2">
                            <SiDotnet className="text-primary" /> <span>C# (Expert)</span>
                        </div>
                        <div className="bg-gray-200 dark:bg-darkBgAlt px-3 py-1 rounded flex items-center gap-2">
                            <SiCplusplus className="text-primary" /> <span>C/C++/ASM</span>
                        </div>
                        <div className="bg-gray-200 dark:bg-darkBgAlt px-3 py-1 rounded flex items-center gap-2">
                            <SiJavascript className="text-primary" /> <span>JS/TS/React.js</span>
                        </div>
                        <div className="bg-gray-200 dark:bg-darkBgAlt px-3 py-1 rounded flex items-center gap-2">
                            <FaServer className="text-primary" /> <span>Backend &amp; Embedded</span>
                        </div>
                    </div>
                </div>

                {/* Cloud & Networking */}
                <div className="bg-white dark:bg-darkBg rounded-lg p-6 shadow-md flex-1">
                    <h3 className="text-xl font-semibold text-purple-300 mb-4 flex items-center gap-2">
                        <SiDocker /> Cloud &amp; Networking
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm">
                        <div className="bg-gray-200 dark:bg-darkBgAlt px-3 py-1 rounded flex items-center gap-2">
                            <SiFramework className="text-primary" /> <span>NAT, VPLAN, AiMesh</span>
                        </div>
                        <div className="bg-gray-200 dark:bg-darkBgAlt px-3 py-1 rounded flex items-center gap-2">
                            <SiGooglecloud className="text-primary" /> <span>Google Cloud, AWS</span>
                        </div>
                        <div className="bg-gray-200 dark:bg-darkBgAlt px-3 py-1 rounded flex items-center gap-1">
                            <SiKubernetes className="text-primary" /> <span>K8 &amp; Docker</span>
                        </div>
                        <div className="bg-gray-200 dark:bg-darkBgAlt px-3 py-1 rounded flex items-center gap-1">
                            <SiPostgresql className="text-primary" /> <span>PostgreSQL, MySQL, MongoDB</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Language Proficiency */}
            <motion.div variants={item} className="mt-10 bg-white dark:bg-darkBg p-6 rounded-lg shadow-md max-w-3xl mx-auto">
                <h3 className="text-xl font-semibold text-purple-300 mb-4 text-center">
                    Language Proficiency
                </h3>
                <div className="space-y-4 text-sm">
                    <LanguageBar language="English" level="Full Professional" percentage={95} />
                    <LanguageBar language="Russian" level="Native/Bilingual" percentage={100} />
                    <LanguageBar language="Georgian" level="Limited Working" percentage={50} />
                    <LanguageBar language="German" level="Elementary" percentage={30} />
                </div>
            </motion.div>
        </motion.section>
    );
}