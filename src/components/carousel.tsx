import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

export default function CarouselBg() {
    const images = [
        "/images/slide1.jpg",
        "/images/slide2.jpg",
        "/images/slide3.jpg",
    ];
    
    return (
        <>
            <Carousel
                autoPlay
                infiniteLoop
                interval={5000}
                transitionTime={1500}
                showThumbs={false}
                showStatus={false}
                showArrows={false}
                showIndicators
                className="absolute top-0 left-0 w-full h-full z-0"
                >
                {images.map((src, index) => (
                    <div key={index} className="h-screen">
                    <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="h-screen object-cover"
                    />
                </div>
                ))}
            </Carousel>
        </>
    )
}