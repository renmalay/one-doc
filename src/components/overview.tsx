interface OverviewProps {
    value: string;
    title: string;
    index: number;
}

export default function Overview({ value, title, index }: OverviewProps) {
    
    return (
        <>
            <div className="w-full flex flex-col gap-1 md:py-20" data-aos="fade-up" data-aos-duration={`${1000 + (index * 700)}`}>
                <h2 className="text-3xl md:text-5xl font-extrabold italic bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text drop-shadow-lg">
                    {value}
                </h2>
              <span className="text-xl sm:text-2xl italic text-white/80">{title}</span>
            </div>
        </>
    )
}