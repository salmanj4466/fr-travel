import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Carousel, Rate, type CarouselRef } from "antd";
import { useRef } from "react";
import SectionTitle from "../SectionTitle";

const testimonials = [
  { initials: "AR", name: "Ahmed Raza", city: "Lahore, Pakistan", quote: "An extremely well organized trip. Everything was taken care of professionally. May Allah reward the team!" },
  { initials: "AM", name: "Ayesha Malik", city: "Karachi, Pakistan", quote: "A truly memorable and spiritual journey. The staff was supportive throughout. Highly recommended!" },
  { initials: "BK", name: "Bilal Khan", city: "Islamabad, Pakistan", quote: "From visa to hotel, everything was smooth and hassle free. Excellent service and sincere guidance." },
  { initials: "FS", name: "Fatima Siddiqui", city: "Faisalabad, Pakistan", quote: "The entire journey was planned with genuine care. Our hotels and transport were excellent, and the guidance gave us complete peace of mind." },
  { initials: "UH", name: "Usman Haider", city: "Multan, Pakistan", quote: "A professional and caring team from our first call until we returned home. Every detail was clear and beautifully managed." },
];

export default function Testimonials() {
  const carouselRef = useRef<CarouselRef>(null);

  return (
    <section id="testimonials" className="testimonial-bg home-section">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle eyebrow="Testimonials" title="What our pilgrims say" centered />
        <div className="relative mt-12 px-5 sm:px-8">
          <Carousel
            ref={carouselRef}
            className="testimonial-carousel"
            dots={false}
            infinite
            speed={550}
            slidesToShow={3}
            slidesToScroll={1}
            responsive={[
              { breakpoint: 1024, settings: { slidesToShow: 2 } },
              { breakpoint: 640, settings: { slidesToShow: 1 } },
            ]}
          >
          {testimonials.map((item) => (
            <div key={item.name} className="testimonial-slide px-3 py-2">
              <article className="h-full min-h-72 rounded-2xl bg-white p-6 shadow-[0_14px_40px_rgba(31,47,41,.09)] sm:p-7">
                <div className="flex items-center gap-4 mb-2">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[var(--fr-navy)] font-bold text-[var(--fr-light-blue)]">{item.initials}</span>
                  <div><h3 className="font-bold text-[var(--fr-navy)]">{item.name}</h3><p className="text-xs text-[#848985]">{item.city}</p></div>
                </div>
                <Rate disabled defaultValue={5} className="mt-5 text-base! text-[var(--fr-accent)]!" />
                <p className="mt-2 text-sm leading-7 text-[#5f6965]">“{item.quote}”</p>
              </article>
            </div>
          ))}
          </Carousel>

          <Button
            type="text"
            shape="circle"
            icon={<LeftOutlined />}
            className="testimonial-arrow testimonial-arrow-left absolute! left-0! top-1/2! z-10! h-11! w-11! -translate-y-1/2 bg-white! text-[var(--fr-navy)]! shadow-lg!"
            onClick={() => carouselRef.current?.prev()}
            aria-label="Previous testimonial"
          />
          <Button
            type="text"
            shape="circle"
            icon={<RightOutlined />}
            className="testimonial-arrow testimonial-arrow-right absolute! right-0! top-1/2! z-10! h-11! w-11! -translate-y-1/2 bg-white! text-[var(--fr-navy)]! shadow-lg!"
            onClick={() => carouselRef.current?.next()}
            aria-label="Next testimonial"
          />
        </div>
      </div>
    </section>
  );
}
