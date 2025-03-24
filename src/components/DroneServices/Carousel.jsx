import { useRef, useEffect } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";

export default function Carousel({ items, boxWidth = "300px", boxHeight = "400px" }) {
  const containerRef = useRef(null);
  const controls = useAnimationControls();
  const isInView = useInView(containerRef);

  useEffect(() => {
    if (isInView) {
      controls.start({
        x: [0, -300 * items.length],
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        },
      });
    }
  }, [controls, isInView, items.length]);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden py-8">
      <motion.div
        animate={controls}
        className="flex gap-6 w-fit"
        onHoverStart={() => controls.stop()}
        onHoverEnd={() => {
          controls.start({
            x: [0, -300 * items.length],
            transition: {
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            },
          });
        }}
      >
        {items.map((item) => (
          <motion.div
            key={item.id}
            className="relative group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            style={{ width: boxWidth, height: boxHeight }}
          >
            <div className="relative h-full w-full rounded-xl overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2 py-1 rounded-full bg-white/10 text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200"
                >
                  Learn More
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
