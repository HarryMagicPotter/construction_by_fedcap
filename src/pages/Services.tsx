import React, { useState } from 'react';
import CSCSQuizOverlay from '../components/CSCSQuizOverlay';
import CSCSBookOverlay from '../components/CSCSBookOverlay';
import CSCSVideoOverlay from '../components/CSCSVideoOverlay';
import ECSTestPapersOverlay from '../components/ECSTestPapersOverlay';
import { cscsBookSections, cscsBookQuestions } from '../data/cscsBookData';
import { cscsBook2Sections, cscsBook2Questions } from '../data/cscsBook2Data';
import { ecsTestSections, ecsTestQuestions } from '../data/ecsTestPapersData';
import { cscsTestPapers2Sections, cscsTestPapers2Questions } from '../data/cscsTestPapers2Data';

const skills = [
  { name: 'DIGITAL CSCS CARD BOOKS', icon: '📚', level: 95 },
  { name: 'DIGITAL CSCS CARD VIDEOS', icon: '🎥', level: 90 },
  { name: 'DIGITAL CSCS CARD TEST PAPERS', icon: '📝', level: 88 },
  { name: 'DIGITAL CSCS CARDS', icon: '💳', level: 92 },
  { name: 'DIGITAL CSCS CARD APPLICATION FORMS', icon: '📄', level: 85 },
];

export default function Services() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [isTestPapersOpen, setIsTestPapersOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [showBookSelection, setShowBookSelection] = useState(false);
  const [showTestSelection, setShowTestSelection] = useState(false);
  const [selectedBook, setSelectedBook] = useState<{
    sections: { title: string; startPage: number }[];
    questions: any[];
    title: string;
  } | null>(null);
  const [selectedTest, setSelectedTest] = useState<{
    sections: { title: string; startPage: number }[];
    questions: any[];
    title: string;
  } | null>(null);

  const handleSkillClick = (name: string) => {
    if (name === 'DIGITAL CSCS CARD BOOKS') {
      setShowBookSelection(true);
    } else if (name === 'DIGITAL CSCS CARD TEST PAPERS') {
      setShowTestSelection(true);
    } else if (name === 'DIGITAL CSCS CARD VIDEOS') {
      setIsVideoOpen(true);
    }
  };

  const openBook = (bookNumber: number) => {
    if (bookNumber === 1) {
      setSelectedBook({
        sections: cscsBookSections,
        questions: cscsBookQuestions,
        title: 'DIGITAL CSCS CARD BOOK 1'
      });
    } else {
      setSelectedBook({
        sections: cscsBook2Sections,
        questions: cscsBook2Questions,
        title: 'DIGITAL CSCS CARD BOOK 2'
      });
    }
    setIsBookOpen(true);
    setShowBookSelection(false);
  };

  const openTest = (testNumber: number) => {
    if (testNumber === 1) {
      setSelectedTest({
        sections: ecsTestSections,
        questions: ecsTestQuestions,
        title: 'DIGITAL CSCS CARD TEST PAPER 1'
      });
    } else {
      setSelectedTest({
        sections: cscsTestPapers2Sections,
        questions: cscsTestPapers2Questions,
        title: 'DIGITAL CSCS CARD TEST PAPER 2'
      });
    }
    setIsTestPapersOpen(true);
    setShowTestSelection(false);
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <section className="philosophy-section !p-0 !bg-transparent">
        <div className="philosophy-container">
          <div className="prism-line"></div>
          <h1 className="philosophy-headline !text-5xl mb-2">LEARNING</h1>
          <p className="philosophy-subheading !mb-12">
            Digital CSCS card books • Videos • Practice test papers • Applications
          </p>
        </div>
      </section>

      <CSCSQuizOverlay isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
      {selectedBook && (
        <CSCSBookOverlay 
          isOpen={isBookOpen} 
          onClose={() => setIsBookOpen(false)} 
          sections={selectedBook.sections}
          questions={selectedBook.questions}
          bookTitle={selectedBook.title}
        />
      )}
      <CSCSVideoOverlay isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
      {selectedTest && (
        <ECSTestPapersOverlay 
          isOpen={isTestPapersOpen} 
          onClose={() => setIsTestPapersOpen(false)} 
          sections={selectedTest.sections}
          questions={selectedTest.questions}
          testTitle={selectedTest.title}
        />
      )}

      {/* Book Selection Modal */}
      {showBookSelection && (
        <div className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-carbon-dark border-2 border-accent-blue/30 p-8 rounded-2xl max-w-md w-full relative">
            <button 
              onClick={() => setShowBookSelection(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">SELECT A BOOK</h2>
            <div className="grid grid-cols-1 gap-4">
              <button 
                onClick={() => openBook(1)}
                className="p-6 bg-carbon-medium hover:bg-accent-blue/20 border border-white/10 hover:border-accent-blue rounded-xl transition-all group"
              >
                <div className="text-3xl mb-2">📚</div>
                <div className="font-bold text-white group-hover:text-accent-blue">BOOK 1</div>
                <div className="text-xs text-white/50 mt-1 uppercase tracking-widest">Health, Safety and Environment</div>
              </button>
              <button 
                onClick={() => openBook(2)}
                className="p-6 bg-carbon-medium hover:bg-accent-blue/20 border border-white/10 hover:border-accent-blue rounded-xl transition-all group"
              >
                <div className="text-3xl mb-2">📖</div>
                <div className="font-bold text-white group-hover:text-accent-blue">BOOK 2</div>
                <div className="text-xs text-white/50 mt-1 uppercase tracking-widest">Advanced Site Safety & Management</div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Test Selection Modal */}
      {showTestSelection && (
        <div className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-carbon-dark border-2 border-accent-blue/30 p-8 rounded-2xl max-w-md w-full relative">
            <button 
              onClick={() => setShowTestSelection(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">SELECT TEST PAPER</h2>
            <div className="grid grid-cols-1 gap-4">
              <button 
                onClick={() => openTest(1)}
                className="p-6 bg-carbon-medium hover:bg-accent-blue/20 border border-white/10 hover:border-accent-blue rounded-xl transition-all group"
              >
                <div className="text-3xl mb-2">📝</div>
                <div className="font-bold text-white group-hover:text-accent-blue">TEST PAPER 1</div>
                <div className="text-xs text-white/50 mt-1 uppercase tracking-widest">Health, Safety and Environment</div>
              </button>
              <button 
                onClick={() => openTest(2)}
                className="p-6 bg-carbon-medium hover:bg-accent-blue/20 border border-white/10 hover:border-accent-blue rounded-xl transition-all group"
              >
                <div className="text-3xl mb-2">📄</div>
                <div className="font-bold text-white group-hover:text-accent-blue">TEST PAPER 2</div>
                <div className="text-xs text-white/50 mt-1 uppercase tracking-widest">Operatives and Specialists Test 6</div>
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="skills-section">
        <div className="skills-container">
          <div className="section-header">
            <h2 className="section-title">LEARNING</h2>
            <p className="section-subtitle">Comprehensive resources for your CSCS certification and career advancement</p>
          </div>
          
          <div className="skills-hexagon-grid">
            {skills.map((skill) => (
              <div 
                key={skill.name} 
                className={`skill-hexagon ${(skill.name === 'DIGITAL CSCS CARD BOOKS' || skill.name === 'DIGITAL CSCS CARD VIDEOS' || skill.name === 'DIGITAL CSCS CARD TEST PAPERS') ? 'cursor-pointer hover:scale-105 transition-transform' : ''}`}
                onClick={() => handleSkillClick(skill.name)}
              >
                <div className="hexagon-inner">
                  <div className="hexagon-content">
                    <div className="skill-icon-hex">{skill.icon}</div>
                    <div className="skill-name-hex" style={{ fontSize: '10px' }}>{skill.name}</div>
                    <div className="skill-level">
                      <div className="skill-level-fill" style={{ width: `${skill.level}%` }}></div>
                    </div>
                    <div className="skill-percentage-hex">{skill.level}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-6xl mx-auto px-0 sm:px-4">
            <div className="pillar !p-6 sm:!p-8 md:!p-10 border-2 border-accent-blue/30 bg-carbon-medium/40 backdrop-blur-md relative !overflow-visible group flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple"></div>
              
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1">
                <h3 className="philosophy-headline !text-2xl sm:!text-3xl !mb-0">
                  🎯 Digital CSCS Card Practice Tests
                </h3>
                
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 md:gap-6 mt-6">
                  <div className="flex flex-col items-center lg:items-start">
                    <span className="text-[9px] font-bold text-accent-green uppercase tracking-widest">Easy</span>
                    <div className="w-6 h-1 bg-accent-green/30 mt-1 rounded-full"></div>
                  </div>
                  <div className="flex flex-col items-center lg:items-start">
                    <span className="text-[9px] font-bold text-accent-cyan uppercase tracking-widest">Medium</span>
                    <div className="w-6 h-1 bg-accent-cyan/30 mt-1 rounded-full"></div>
                  </div>
                  <div className="flex flex-col items-center lg:items-start">
                    <span className="text-[9px] font-bold text-accent-blue uppercase tracking-widest">Med-Hard</span>
                    <div className="w-6 h-1 bg-accent-blue/30 mt-1 rounded-full"></div>
                  </div>
                  <div className="flex flex-col items-center lg:items-start">
                    <span className="text-[9px] font-bold text-accent-red uppercase tracking-widest">Hard</span>
                    <div className="w-6 h-1 bg-accent-red/30 mt-1 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto flex-shrink-0">
                <button 
                  onClick={() => setIsQuizOpen(true)}
                  className="card-cta w-full lg:w-auto !px-8 sm:!px-16 !py-4 sm:!py-5 !text-lg sm:!text-xl hover:scale-105 active:scale-95 transition-transform shadow-[0_0_30px_rgba(0,168,255,0.4)] !bg-gradient-to-r !from-accent-blue !to-accent-cyan"
                >
                  START TEST
                </button>
              </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="stat-card">
              <h3 className="text-xl font-bold mb-4 text-accent-cyan">Study Guides</h3>
              <p className="text-sm text-text-secondary">Comprehensive digital books covering all health, safety, and environment topics.</p>
            </div>
            <div className="stat-card">
              <h3 className="text-xl font-bold mb-4 text-accent-purple">Video Tutorials</h3>
              <p className="text-sm text-text-secondary">Interactive video modules designed to help you master site safety protocols.</p>
            </div>
            <div className="stat-card">
              <h3 className="text-xl font-bold mb-4 text-accent-green">Mock Exams</h3>
              <p className="text-sm text-text-secondary">Realistic test papers to prepare you for the official CSCS computer-based test.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
