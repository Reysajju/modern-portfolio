"use client";

import { motion } from "framer-motion";

export function BookMockup({ coverSrc, spineTitle = "SAJJAD RASOOL" }: { coverSrc: string; spineTitle?: string }) {
    return (
        <div className="relative w-[280px] h-[400px] md:w-[320px] md:h-[460px] [perspective:1500px] group">
            <motion.div
                className="relative w-full h-full transition-all duration-700 ease-out [transform-style:preserve-3d] shadow-2xl group-hover:[transform:rotateY(-10deg)]"
                initial={{ rotateY: 25, rotateX: 5 }}
                animate={{ rotateY: 15, rotateX: 5 }}
            >
                {/* Front Cover */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center rounded-r-md shadow-[inset_4px_0_10px_rgba(0,0,0,0.1)] [backface-visibility:hidden]"
                    style={{ backgroundImage: `url('${coverSrc}')` }}
                >
                    {/* Lighting effect - glossy sheen */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/20 rounded-r-md"></div>
                    {/* Spine crease shadow */}
                    <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/60 to-transparent"></div>
                </div>

                {/* Spine */}
                <div className="absolute left-0 w-12 h-full bg-zinc-900 origin-left -translate-x-full [transform:rotateY(-90deg)] rounded-l-sm overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80"></div>
                    {/* Text on spine */}
                    <div className="[writing-mode:vertical-rl] rotate-180 text-white/80 font-bold tracking-widest text-sm z-10 whitespace-nowrap opacity-50">
                        {spineTitle}
                    </div>
                </div>

                {/* Pages (Right edge) */}
                <div className="absolute right-0 w-12 h-[98%] top-[1%] origin-right translate-x-full [transform:rotateY(90deg)]">
                    <div className="w-full h-full border-y-[1px] border-r-[1px] border-[#d4d4d8] bg-[#f4f4f5] rounded-r-sm overflow-hidden relative">
                        <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_2px,#e4e4e7_2px,#e4e4e7_3px)] opacity-50"></div>
                        {/* Shadow from cover to pages */}
                        <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-r from-black/20 to-transparent"></div>
                    </div>
                </div>

            </motion.div>
        </div>
    );
}
