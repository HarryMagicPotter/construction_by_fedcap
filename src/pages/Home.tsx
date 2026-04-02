import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const portfolioData = [
  { id: 1, title: 'Build with AI', description: 'Advanced AI assistant for construction intelligence and project planning.', image: 'https://picsum.photos/seed/ai/400/500', tech: ['Gemini', 'AI'], path: '/build-with-ai' },
  { id: 2, title: 'Employment', description: 'Comprehensive directory of construction agencies and job roles in Sussex.', image: 'https://picsum.photos/seed/construction/400/500', tech: ['Verified', 'Sussex'], path: '/employment' },
  { id: 3, title: 'Learning', description: 'Mastery of cutting-edge construction technologies and technical frameworks.', image: 'https://picsum.photos/seed/learning/400/500', tech: ['Skills', 'Training'], path: '/learning' },
  { id: 4, title: 'Trades', description: 'Interactive mapping of 50+ trades with CSCS, ECS, and CISRS pathways.', image: 'https://picsum.photos/seed/matrix/400/500', tech: ['Spider Build', 'NVQ'], path: '/trades' },
  { id: 5, title: 'CSCS Card Practice Test', description: 'The central hub for construction innovation and advanced digital solutions.', image: 'https://picsum.photos/seed/prism/400/500', tech: ['Practice', 'Mock'], path: '/learning' },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % portfolioData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  const getCardPosition = (index: number) => {
    let offset = index - currentIndex;
    const total = portfolioData.length;
    if (offset > total / 2) offset -= total;
    else if (offset < -total / 2) offset += total;
    return offset;
  };

  const getXOffset = (offset: number) => {
    if (windowWidth < 768) return offset * 300;
    if (windowWidth < 1024) return offset * 360;
    return offset * 420;
  };

  return (
    <div>
      <section className="hero">
        <div className="carousel-container">
          <div className="carousel">
            <AnimatePresence mode="popLayout">
              {portfolioData.map((item, index) => {
                const offset = getCardPosition(index);
                const absOffset = Math.abs(offset);
                const isVisible = absOffset <= 2;
                
                if (!isVisible) return null;

                return (
                  <motion.div 
                    key={item.id} 
                    className="carousel-item"
                    initial={{ opacity: 0, scale: 0.8, z: -500 }}
                    animate={{
                      x: `calc(-50% + ${getXOffset(offset)}px)`,
                      y: absOffset === 0 ? '-55%' : '-50%', // Slight lift for active card
                      z: -absOffset * 200,
                      rotateY: -offset * 35,
                      rotateX: absOffset === 0 ? 0 : 5,
                      scale: 1 - absOffset * 0.18,
                      opacity: 1 - absOffset * 0.35,
                      zIndex: 10 - absOffset
                    }}
                    exit={{ opacity: 0, scale: 0.5, z: -1000 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 25,
                      mass: 1.2
                    }}
                    onClick={() => handleCardClick(item.path)}
                  >
                    <motion.div 
                      className="card"
                      animate={absOffset === 0 ? {
                        y: [0, -15, 0],
                      } : {}}
                      transition={absOffset === 0 ? {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      } : {}}
                      whileHover={{ 
                        scale: 1.05,
                        rotateY: offset * 5,
                        y: -20,
                        boxShadow: "0 30px 60px rgba(0,168,255,0.4)",
                        borderColor: "rgba(0,168,255,0.6)"
                      }}
                    >
                      <div className="card-number">0{item.id}</div>
                      <div className="card-image">
                        <motion.img 
                          src={item.image} 
                          alt={item.title} 
                          referrerPolicy="no-referrer"
                          whileHover={{ scale: 1.15 }}
                          transition={{ duration: 0.6 }}
                        />
                      </div>
                      <h3 className="card-title">{item.title}</h3>
                      <p className="card-description">{item.description}</p>
                      <div className="card-tech">
                        {item.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
                      </div>
                      <button 
                        className="card-cta" 
                        onClick={(e) => { e.stopPropagation(); handleCardClick(item.path); }}
                      >
                        Explore
                      </button>
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
          
          <div className="carousel-controls">
            <button className="carousel-btn" onClick={() => setCurrentIndex((currentIndex - 1 + portfolioData.length) % portfolioData.length)}>‹</button>
            <button className="carousel-btn" onClick={() => setCurrentIndex((currentIndex + 1) % portfolioData.length)}>›</button>
          </div>
          
          <div className="carousel-indicators">
            {portfolioData.map((_, index) => (
              <div 
                key={index} 
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="philosophy-section">
        <div className="philosophy-container">
          <div className="prism-line"></div>
          <h2 className="philosophy-headline">Building The Future Together</h2>
          <p className="philosophy-subheading">
            We transform the construction landscape through specialized training, AI intelligence, and career excellence.
          </p>
          <div className="philosophy-pillars">
            <div className="pillar">
              <div className="pillar-icon">💎</div>
              <h3 className="pillar-title">Innovation</h3>
              <p className="pillar-description">Breaking boundaries with revolutionary approaches that redefine industry standards.</p>
            </div>
            <div className="pillar">
              <div className="pillar-icon">🔬</div>
              <h3 className="pillar-title">Precision</h3>
              <p className="pillar-description">Meticulous attention to detail ensures every interaction is perfectly crafted.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
