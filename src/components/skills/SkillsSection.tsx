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
import useFadeInOnScroll from "../../hooks/useFadeInOnScroll.ts";

interface LanguageBarProps {
    language: string;
    level: string;
    percentage: number;
}

function LanguageBar({ language, level, percentage }: LanguageBarProps) {
    return (
        <div className="space-y-1">
            <div className="flex items-center justify-between">
                <span className="font-medium">{language}</span>
                <span className="text-gray-400">{level}</span>
            </div>
            <div className="bg-gray-700 h-2 rounded overflow-hidden">
                <div
                    className="bg-indigo-500 h-full transition-all duration-500 ease-in-out"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
}

export default function SkillsSection() {
    const fadeInRef = useFadeInOnScroll<HTMLDivElement>();

    return (
        <section
            id="skills"
            ref={fadeInRef}
            className="py-12 px-4 md:px-8 bg-[#232442]
                 opacity-0 translate-y-6 transition-all duration-700"
        >
            <div className="mb-8 text-2xl md:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Skills &amp; Proficiency
            </div>
            <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
                {/* Core Development Stack */}
                <div className="bg-[#1a1c29] rounded-lg p-6 flex-1 shadow-md">
                    <h3 className="text-xl font-semibold text-purple-300 mb-4 flex items-center gap-2">
                        <FaCogs /> Core Development Stack
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm">
                        <div className="bg-[#232442] px-3 py-1 rounded flex items-center gap-2">
                            <SiDotnet className="text-indigo-400" /> <span>C# (Expert)</span>
                        </div>
                        <div className="bg-[#232442] px-3 py-1 rounded flex items-center gap-2">
                            <SiCplusplus className="text-indigo-400" /> <span>C/C++/ASM</span>
                        </div>
                        <div className="bg-[#232442] px-3 py-1 rounded flex items-center gap-2">
                            <SiJavascript className="text-indigo-400" /> <span>JS/TS/React.js</span>
                        </div>
                        <div className="bg-[#232442] px-3 py-1 rounded flex items-center gap-2">
                            <FaServer className="text-indigo-400" /> <span>Backend &amp; Embedded</span>
                        </div>
                    </div>
                </div>

                {/* Cloud & Networking */}
                <div className="bg-[#1a1c29] rounded-lg p-6 flex-1 shadow-md">
                    <h3 className="text-xl font-semibold text-purple-300 mb-4 flex items-center gap-2">
                        <SiDocker /> Cloud &amp; Networking
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm">
                        <div className="bg-[#232442] px-3 py-1 rounded flex items-center gap-2">
                            <SiFramework className="text-indigo-400" /> <span>NAT, VPLAN, AiMesh</span>
                        </div>
                        <div className="bg-[#232442] px-3 py-1 rounded flex items-center gap-2">
                            <SiGooglecloud className="text-indigo-400" /> <span>Google Cloud, AWS</span>
                        </div>
                        <div className="bg-[#232442] px-3 py-1 rounded flex items-center gap-1">
                            <SiKubernetes className="text-indigo-400" />
                            <span>K8 &amp; Docker</span>
                        </div>
                        <div className="bg-[#232442] px-3 py-1 rounded flex items-center gap-1">
                            <SiPostgresql className="text-indigo-400" />
                            <span>PostgreSQL, MySQL, MongoDB</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Language Proficiency */}
            <div className="mt-10 bg-[#1a1c29] p-6 rounded-lg shadow-md max-w-3xl mx-auto">
                <h3 className="text-xl font-semibold text-purple-300 mb-4 text-center">
                    Language Proficiency
                </h3>
                <div className="space-y-4 text-sm">
                    <LanguageBar language="English" level="Full Professional" percentage={95} />
                    <LanguageBar language="Russian" level="Native/Bilingual" percentage={100} />
                    <LanguageBar language="Georgian" level="Limited Working" percentage={50} />
                    <LanguageBar language="German" level="Elementary" percentage={30} />
                </div>
            </div>
        </section>
    );
}