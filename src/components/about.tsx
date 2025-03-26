import { Teachers, Rethink_Sans } from 'next/font/google'

const rethinkSans = Rethink_Sans({
    weight:['400','700'],
  })
  
export default function About() {
    return (
        <div className="flex flex-col md:flex-row" id="aboutUs">
            <div className={`${rethinkSans.className} w-full md:w-1/2 bg-white flex flex-col gap-2 justify-center px-20 md:min-h-[90vh] py-10 md:py-0`}>
              <h1 className="text-[#3F3952] italic text-3xl md:text-4xl lg:text-5xl" data-aos="fade-right" data-aos-duration="1000">WHO WE ARE</h1>
              <h1 className="text-[#0A0A0A] italic text-3xl md:text-4xl lg:text-5xl" data-aos="fade-right" data-aos-duration="1200">ABOUT US</h1>
              <div className="text-justify pt-3" data-aos="fade-right" data-aos-duration="1500">
                <span className="text-black text-md leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur. Feugiat enim pulvinar vestibulum eget turpis enim et dolor.. Eget ut quam placerat sollicitudin egestas.. Cum est risus adipiscing iaculis. Sed tristique amet mi volutpat. Lorem ipsum dolor sit amet consectetur. Feugiat enim pulvinar vestibulum eget turpis enim et dolor.. 
                </span>
              </div>
            </div>
            
            <div className="bg-white md:grow md:h-[90vh] overflow-hidden flex items-center relative">
              {/* Half Cover - Positioned Behind */}
              <div className="absolute right-0 top-0 h-full w-1/2 bg-gray-950" 
              data-aos="custom-slide-left" 
              data-aos-duration="1000" 
              data-aos-anchor-placement="top-center"
              data-aos-mirror="true"
              ></div>
              <img className="w-full h-9/10 object-cover" src="./images/slide1.jpg" alt="who we are" 
              data-aos="custom-slide-left" 
              data-aos-duration="1000" 
              data-aos-anchor-placement="top-center"
              data-aos-mirror="true"
              />
            </div>
        </div>
    )
}
