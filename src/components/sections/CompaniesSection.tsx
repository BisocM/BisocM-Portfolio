import {useEffect, useRef} from "react";
import {companies, ICompany} from "@/data/companies";
import {useTranslation} from "react-i18next";

export default function CompaniesSection() {
    const {t} = useTranslation();

    const loop: ICompany[] = [...companies, ...companies];
    const stripRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Animation logic remains unchanged
        const strip = stripRef.current;
        if (!strip) return;


        let x = 0;
        const speed = 0.3;
        let frameId = 0;


        const singleWidth =
            strip.scrollWidth / 2 || strip.getBoundingClientRect().width;

        const step = () => {
            x -= speed;

            if (-x >= singleWidth) x += singleWidth;
            strip.style.transform = `translateX(${x}px)`;

            frameId = requestAnimationFrame(step);
        };


        frameId = requestAnimationFrame(step);
        const pause = () => cancelAnimationFrame(frameId);
        const resume = () => (frameId = requestAnimationFrame(step));
        strip.addEventListener("mouseenter", pause);
        strip.addEventListener("mouseleave", resume);

        return () => {
            cancelAnimationFrame(frameId);
            strip.removeEventListener("mouseenter", pause);
            strip.removeEventListener("mouseleave", resume);
        };
    }, []);

    return (
        <section id="companies" className="py-12 bg-white dark:bg-darkBg px-4 md:px-8">
            <h2
                className="
          mb-6 text-2xl md:text-3xl font-bold text-center
          text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent
        "
            >
                {t('companiesSection.title')}
            </h2>

            {/* Carousel implementation remains the same */}
            <div className="relative w-[24rem] mx-auto overflow-hidden">
                {}
                <div
                    ref={stripRef}
                    className="flex whitespace-nowrap will-change-transform"
                >
                    {loop.map((c, i) => (
                        <div key={i} className="flex-shrink-0 p-6 group">
                            <img
                                src={c.logoSrc}
                                alt={c.name}
                                title={c.name}
                                className="
                  w-24 h-24 object-contain rounded-full
                  transition-transform duration-300 group-hover:scale-110
                "
                            />
                        </div>
                    ))}
                </div>

                {}
                <div
                    className="
            pointer-events-none absolute inset-y-0 left-0 w-16 z-20
            bg-gradient-to-r
            from-white via-white/60 to-transparent
            dark:from-darkBg dark:via-darkBg/60 dark:to-transparent
          "
                />
                <div
                    className="
            pointer-events-none absolute inset-y-0 right-0 w-16 z-20
            bg-gradient-to-l
            from-white via-white/60 to-transparent
            dark:from-darkBg dark:via-darkBg/60 dark:to-transparent
          "
                />
            </div>
        </section>
    );
}