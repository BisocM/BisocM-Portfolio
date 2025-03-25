import useFadeInOnScroll from "../../hooks/useFadeInOnScroll.ts";

export default function Hero() {
    const fadeInRef = useFadeInOnScroll<HTMLDivElement>();

    return (
        <section
            id="home"
            ref={fadeInRef}
            className="relative flex flex-col items-center text-center
                 bg-gradient-to-r from-[#2b2d42] via-[#1a1c29] to-[#232442]
                 py-16 px-4
                 opacity-0 translate-y-6 transition-all duration-700"
        >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                BisocM
            </h1>
            <p className="text-xl md:text-2xl font-light mb-6 max-w-2xl">
                Backend Developer • Embedded Systems • Reverse Engineering
            </p>
        </section>
    );
}