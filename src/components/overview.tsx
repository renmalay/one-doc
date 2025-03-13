interface OverviewProps {
    value: string;
    title: string;
    index: number;
}

export default function Overview({ value, title, index }: OverviewProps) {
    
    return (
        <>
            <div className="w-full flex flex-col gap-1 px-10 md:py-20" data-aos="fade-up" data-aos-duration={`${1000 + (index * 700)}`}>
              <h2 className="text-3xl sm:text-5xl italic font-bold">{value}</h2>
              <span className="text-xl sm:text-2xl italic">{title}</span>
              {/* <span className="text-base italic text-center">{desc}</span> */}
            </div>
        </>
    )
}