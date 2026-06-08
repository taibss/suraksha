import React from 'react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  variant: number;
  stars: number;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="tcard">
      <div className="stars">
        {'★'.repeat(testimonial.stars)}
      </div>
      <div className="quote">
        "{testimonial.quote}"
      </div>
      <div className="who">
        <span className="av">
          <svg width="46" height="46" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="24" fill={['#fff3d6','#e3f7f1','#efeaff','#ffe9ec','#e9f2ff','#eafbe9'][testimonial.variant % 6]}/>
            <circle cx="24" cy="21" r="11" fill={['#f0bf95','#e8b48a','#d4a878','#f1c9a5','#c9966b','#e8c0a0'][testimonial.variant % 6]}/>
            <path d="M12 22a12 12 0 0 1 24 0c0 3-2 5-3 7l-2-9-4 5-3-6-4 6-3-5-2 9c-1-2-3-4-3-7z" fill={['#3a2c4f','#2a2438','#4a3a2a','#5a4a3a','#2a3440','#3a2a2a'][testimonial.variant % 6]}/>
            <circle cx="20" cy="21" r="1.6" fill="#33324a"/>
            <circle cx="28" cy="21" r="1.6" fill="#33324a"/>
            <path d="M21 26q3 2 6 0" stroke="#a86b4a" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
            <path d="M9 46a15 15 0 0 1 30 0z" fill={['#7b6bd6','#2cc4a6','#f7b32b','#ff6b6b','#5a8de0','#3aa86a'][testimonial.variant % 6]}/>
          </svg>
        </span>
        <div>
          <b>{testimonial.name}</b>
          <span>{testimonial.role}</span>
        </div>
      </div>
    </div>
  );
};

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section>
      <div className="wrap">
        <div className="sec-head center">
          <div className="eyebrow">From the community</div>
          <h2>People, just like you</h2>
        </div>
        <div className="tgrid">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
        <p style={{textAlign: "center", color: "var(--muted)", fontSize: "0.8rem", marginTop: "18px"}}>
          Representative stories for this prototype.
        </p>
      </div>
    </section>
  );
};