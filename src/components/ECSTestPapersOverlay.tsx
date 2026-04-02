import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface ECSTestPapersOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  sections: any[];
  questions: any[];
  testTitle: string;
}

export default function ECSTestPapersOverlay({ 
  isOpen, 
  onClose, 
  sections, 
  questions, 
  testTitle 
}: ECSTestPapersOverlayProps) {
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data === 'closeTest') {
        onClose();
      } else if (event.data === 'goLearning') {
        onClose();
        navigate('/learning');
      }
    };
    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [onClose, navigate]);

  if (!isOpen) return null;

  const sectionsJson = JSON.stringify(sections);
  const questionsJson = JSON.stringify(questions);

  const srcDoc = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${testTitle}</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        :root {
            --book-bg: #f5f2ed;
            --book-paper: #ffffff;
            --book-ink: #1a1a1a;
            --book-accent: #007a78;
            --book-shadow: rgba(0, 0, 0, 0.1);
            --correct: #27ae60;
            --incorrect: #e74c3c;
        }

        * { box-sizing: border-box; }
        
        body {
            background: var(--book-bg);
            color: var(--book-ink);
            font-family: 'Inter', sans-serif;
            margin: 0;
            display: flex;
            flex-direction: column;
            height: 100vh;
            overflow: hidden;
        }

        /* HEADER */
        .book-header {
            background: var(--book-accent);
            color: white;
            padding: 0.5rem 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 10px var(--book-shadow);
            z-index: 10;
        }

        .book-header h1 {
            margin: 0;
            font-size: 0.9rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .header-btn {
            background: rgba(255,255,255,0.2);
            border: none;
            color: white;
            padding: 0.4rem 0.8rem;
            border-radius: 4px;
            cursor: pointer;
            font-weight: 600;
            font-size: 0.75rem;
            transition: background 0.3s;
        }
        .header-btn:hover { background: rgba(255,255,255,0.3); }

        /* VIEWPORT */
        .book-viewport {
            flex: 1;
            display: flex;
            flex-direction: column;
            padding: 1rem;
            overflow-y: auto;
            align-items: center;
        }

        .content-container {
            width: 100%;
            max-width: 800px;
            background: var(--book-paper);
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            border-radius: 8px;
            min-height: 100%;
            display: flex;
            flex-direction: column;
        }

        .section-banner {
            background: var(--book-accent);
            color: white;
            padding: 1.5rem 2rem;
            border-radius: 8px 8px 0 0;
        }

        .section-banner h2 {
            margin: 0;
            font-size: 1.2rem;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .questions-list {
            padding: 2rem;
            flex: 1;
        }

        .question-card {
            margin-bottom: 2.5rem;
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            border: 1px solid #e0e0e0;
        }

        .q-header {
            background: var(--book-accent);
            color: white;
            padding: 1rem 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .q-id {
            font-weight: 800;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .q-body {
            padding: 1.5rem;
        }

        .q-text {
            font-size: 1.1rem;
            font-weight: 700;
            line-height: 1.4;
            margin-bottom: 1.5rem;
            color: #2c3e50;
        }

        .options-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 0.8rem;
            margin-bottom: 1.5rem;
        }

        .option-btn {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            background: #f8f9fa;
            border: 2px solid #e9ecef;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s;
            text-align: left;
            font-size: 0.95rem;
            font-weight: 500;
        }

        .option-btn:hover:not(.disabled) {
            border-color: var(--book-accent);
            background: #f0f7f7;
        }

        .option-btn.selected {
            border-color: var(--book-accent);
            background: #e6f2f2;
        }

        .option-btn.correct {
            border-color: var(--correct);
            background: #eafaf1;
            color: #1b5e20;
        }

        .option-btn.incorrect {
            border-color: var(--incorrect);
            background: #fdedec;
            color: #78281f;
        }

        .opt-letter {
            width: 30px;
            height: 30px;
            background: white;
            border: 1px solid #ddd;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 800;
            flex-shrink: 0;
        }

        .actions {
            display: flex;
            gap: 1rem;
            align-items: center;
        }

        .reveal-btn {
            background: #34495e;
            color: white;
            border: none;
            padding: 0.6rem 1.2rem;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 700;
            font-size: 0.8rem;
            text-transform: uppercase;
            transition: background 0.3s;
        }
        .reveal-btn:hover { background: #2c3e50; }

        .explanation-box {
            margin-top: 1.5rem;
            padding: 1.2rem;
            background: #fff9db;
            border-left: 4px solid #f1c40f;
            border-radius: 4px;
            display: none;
        }

        .explanation-box.visible { display: block; }

        .exp-title {
            font-weight: 800;
            color: #856404;
            margin-bottom: 0.5rem;
            font-size: 0.85rem;
            text-transform: uppercase;
        }

        .exp-text {
            font-size: 0.9rem;
            line-height: 1.5;
            color: #533f03;
        }

        /* FOOTER NAV */
        .book-nav {
            background: white;
            padding: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            box-shadow: 0 -2px 10px var(--book-shadow);
        }

        .nav-btn {
            background: var(--book-accent);
            color: white;
            border: none;
            padding: 0.7rem 1.5rem;
            border-radius: 30px;
            cursor: pointer;
            font-weight: 700;
            text-transform: uppercase;
            font-size: 0.8rem;
            transition: all 0.3s;
        }
        .nav-btn:disabled { background: #ccc; cursor: not-allowed; }

        .page-info { font-weight: 700; color: #666; font-size: 0.9rem; }

        @media (max-width: 600px) {
            .book-header h1 { font-size: 0.7rem; }
            .questions-list { padding: 1rem; }
            .q-text { font-size: 1rem; }
            .option-btn { padding: 0.8rem; font-size: 0.85rem; }
            .book-nav { gap: 1rem; }
            .nav-btn { padding: 0.6rem 1rem; font-size: 0.7rem; }
        }
    </style>
</head>
<body>
    <header class="book-header">
        <h1>${testTitle}</h1>
        <button class="header-btn" onclick="window.parent.postMessage('goLearning', '*')">EXIT</button>
    </header>

    <div class="book-viewport">
        <div class="content-container">
            <div id="sectionBanner" class="section-banner">
                <h2 id="sectionTitle">General Health and Safety</h2>
            </div>
            <div id="questionsList" class="questions-list">
                <!-- Questions will be injected here -->
            </div>
        </div>
    </div>

    <footer class="book-nav">
        <button class="nav-btn" id="prevBtn" onclick="changeSection(-1)">PREVIOUS SECTION</button>
        <div class="page-info" id="sectionInfo">Section 1 of 11</div>
        <button class="nav-btn" id="nextBtn" onclick="changeSection(1)">NEXT SECTION</button>
    </footer>

    <script>
        const sections = ${sectionsJson};
        const questions = ${questionsJson};
        let currentSectionIdx = 0;

        function renderSection() {
            const section = sections[currentSectionIdx];
            document.getElementById('sectionTitle').textContent = section.title;
            document.getElementById('sectionInfo').textContent = 'Section ' + (currentSectionIdx + 1) + ' of ' + sections.length;
            
            const sectionQuestions = questions.filter(q => q.section === section.title);
            const list = document.getElementById('questionsList');
            list.innerHTML = '';

            sectionQuestions.forEach(q => {
                const card = document.createElement('div');
                card.className = 'question-card';
                
                let optionsHtml = '';
                q.options.forEach((opt, i) => {
                    const letter = String.fromCharCode(65 + i);
                    optionsHtml += \`
                        <button class="option-btn" onclick="checkAnswer(this, '\${letter}', '\${q.correctAnswer}', '\${q.id}')">
                            <span class="opt-letter">\${letter}</span>
                            <span>\${opt}</span>
                        </button>
                    \`;
                });

                card.innerHTML = \`
                    <div class="q-header">
                        <span class="q-id">Question \${q.id}</span>
                    </div>
                    <div class="q-body">
                        <div class="q-text">\${q.text}</div>
                    <div class="options-grid" id="options-\${q.id}">
                        \${optionsHtml}
                    </div>
                    <div class="actions">
                        <button class="reveal-btn" onclick="revealAnswer('\${q.id}')">Reveal Answer</button>
                    </div>
                    <div class="explanation-box" id="exp-\${q.id}">
                        <div class="exp-title">Correct Answer: \${q.correctAnswer}</div>
                        <div class="exp-text">\${q.explanation}</div>
                    </div>
                </div>\`;
                list.appendChild(card);
            });

            document.getElementById('prevBtn').disabled = currentSectionIdx === 0;
            document.getElementById('nextBtn').disabled = currentSectionIdx === sections.length - 1;
            
            // Scroll to top
            document.querySelector('.book-viewport').scrollTop = 0;
        }

        window.checkAnswer = function(btn, picked, correct, qId) {
            const grid = document.getElementById('options-' + qId);
            if (grid.classList.contains('answered')) return;

            const buttons = grid.querySelectorAll('.option-btn');
            buttons.forEach(b => b.classList.add('disabled'));
            grid.classList.add('answered');

            if (picked === correct) {
                btn.classList.add('correct');
            } else {
                btn.classList.add('incorrect');
                // Highlight correct one too
                buttons.forEach(b => {
                    if (b.querySelector('.opt-letter').textContent === correct) {
                        b.classList.add('correct');
                    }
                });
            }
            
            // Auto reveal explanation
            revealAnswer(qId);
        };

        window.revealAnswer = function(qId) {
            const box = document.getElementById('exp-' + qId);
            box.classList.add('visible');
        };

        function changeSection(delta) {
            currentSectionIdx += delta;
            if (currentSectionIdx < 0) currentSectionIdx = 0;
            if (currentSectionIdx >= sections.length) currentSectionIdx = sections.length - 1;
            renderSection();
        }

        renderSection();
    </script>
</body>
</html>
  `;

  return (
    <div className="fixed inset-0 top-[70px] sm:top-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-0 md:p-4 lg:p-10">
      <div className="w-full h-full max-w-5xl max-h-full bg-white relative overflow-hidden shadow-2xl rounded-lg">
        <iframe
          srcDoc={srcDoc}
          className="w-full h-full border-none"
          title="ECS Test Papers"
        />
      </div>
    </div>
  );
}
