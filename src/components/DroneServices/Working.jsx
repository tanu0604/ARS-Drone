import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Working() {
  const steps = [
    {
      icon: 'fas fa-comments',
      title: 'Consultation',
      description: 'Discuss your project requirements and goals with our experts.',
    },
    {
      icon: 'fas fa-calendar-check',
      title: 'Planning',
      description: 'We assess the site, schedule operations, and prepare the equipment.',
    },
    {
      icon: 'fas fa-drone',
      title: 'Execution',
      description: 'Our drones capture high-quality data with precision and efficiency.',
    },
    {
      icon: 'fas fa-file-alt',
      title: 'Delivery',
      description: 'Receive detailed analysis, reports, or stunning visuals in no time.',
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800, // Slightly reduced animation duration for quicker feedback
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section className="py-8 bg-black">
      <div className="container mx-auto px-4">
        <h2
          className="text-2xl font-bold text-center text-white mb-6"
          data-aos="fade-up"
        >
          How Our Drone Services Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white shadow-md rounded-md"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-3xl text-blue-500 mb-3">
                <i className={step.icon}></i>
              </div>
              <h3 className="text-base font-semibold">{step.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Working;
