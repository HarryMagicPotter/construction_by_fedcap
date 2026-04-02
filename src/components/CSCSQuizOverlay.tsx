import React, { useEffect, useRef } from 'react';
import { allCSCSQuestions } from '../data/cscsQuestions';

interface CSCSQuizOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CSCSQuizOverlay({ isOpen, onClose }: CSCSQuizOverlayProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

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

  // Listen for messages from the iframe (e.g., to close the quiz)
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data === 'closeQuiz') {
        onClose();
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [onClose]);

  if (!isOpen) return null;

  const questionsJson = JSON.stringify(allCSCSQuestions);

  const srcDoc = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSCS Practice Test</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&family=JetBrains+Mono&display=swap" rel="stylesheet">
    <style>
        /* RESET & LAYOUT */
        body {
            background: #f5f2ed;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            padding: 20px;
            font-family: 'Inter', sans-serif;
            color: #333;
            transition: background 0.5s ease;
        }
        body.start-mode {
            background: #f5f2ed;
        }
        #cscs-quiz-container {
            max-width: 900px;
            width: 100%;
        }

        /* START SCREEN */
        .start-screen {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 40px;
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            padding: 4rem 3rem;
            text-align: center;
            position: relative;
            animation: fadeIn 0.6s ease-out;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .back-btn-top {
            position: absolute;
            top: 20px;
            left: 20px;
            background: transparent;
            border: 1px solid #ddd;
            color: #666;
            padding: 8px 16px;
            border-radius: 20px;
            cursor: pointer;
            font-size: 0.8rem;
            transition: all 0.3s;
        }
        .back-btn-top:hover {
            border-color: #007a78;
            color: #007a78;
        }
        .difficulty-buttons {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
            margin: 40px 0;
        }
        .difficulty-btn {
            background: #f8f9fa;
            color: #333;
            border: 1px solid #e0e0e0;
            padding: 18px 36px;
            border-radius: 12px;
            font-weight: 700;
            font-size: 1.1rem;
            cursor: pointer;
            transition: all 0.3s;
            min-width: 200px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .difficulty-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
            border-color: #007a78;
            background: #fff;
        }
        .difficulty-btn.easy { border-left: 4px solid #00ff88; }
        .difficulty-btn.medium { border-left: 4px solid #00ffff; }
        .difficulty-btn.medium-hard { border-left: 4px solid #9945ff; }
        .difficulty-btn.hard { border-left: 4px solid #ff3333; }

        /* QUIZ MODERN STYLES */
        .quiz-modern {
            background: #ffffff;
            border-radius: 24px;
            border: 1px solid #e0e0e0;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        .quiz-header {
            background: #007a78;
            padding: 1.5rem 2.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #e0e0e0;
        }
        .quiz-header h3 {
            margin: 0;
            font-size: 1.4rem;
            font-weight: 800;
            color: #fff;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .quiz-timer {
            background: #ffd966;
            color: #000;
            padding: 10px 24px;
            border-radius: 8px;
            font-weight: 900;
            font-size: 1.8rem;
            font-family: 'JetBrains Mono', monospace;
            box-shadow: 0 0 15px rgba(255,217,102,0.2);
        }
        .quiz-body {
            padding: 3rem;
        }
        .progress-badge {
            background: #f0f4f8;
            color: #007a78;
            display: inline-block;
            padding: 8px 16px;
            border-radius: 6px;
            font-size: 0.85rem;
            font-weight: 700;
            margin-bottom: 2rem;
            border: 1px solid #e0e0e0;
        }
        .question-text {
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 2.5rem;
            color: #1a1a1a;
            line-height: 1.4;
        }
        .options-grid {
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-bottom: 3rem;
        }
        .quiz-option {
            background: #fff;
            border: 1px solid #e0e0e0;
            border-radius: 12px;
            padding: 20px 28px;
            font-size: 1.1rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            gap: 18px;
            color: #444;
        }
        .quiz-option:hover {
            border-color: #007a78;
            background: #f9f9f9;
        }
        .quiz-option.selected {
            border-color: #007a78;
            background: #e6f2f2;
            color: #005e5c;
        }
        .option-letter {
            background: #f0f0f0;
            width: 36px;
            height: 36px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            font-weight: 800;
            color: #666;
            border: 1px solid #ddd;
        }
        .selected .option-letter {
            background: #007a78;
            color: #fff;
            border-color: #007a78;
        }
        .nav-buttons {
            display: flex;
            justify-content: space-between;
            gap: 20px;
        }
        .quiz-btn {
            border: none;
            padding: 16px 32px;
            border-radius: 12px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s;
            background: #e0e0e0;
            color: #333;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .quiz-btn:hover:not(:disabled) {
            background: #d0d0d0;
        }
        .quiz-btn-primary {
            background: linear-gradient(135deg, #007a78, #005e5c);
            color: #fff;
        }
        .quiz-btn-primary:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0,122,120,0.3);
        }
        .quiz-btn-share {
            background: linear-gradient(135deg, #9945ff, #7a2ed1);
            color: #fff;
        }
        .result-card {
            text-align: center;
            padding: 4rem;
        }
        .score-circle {
            background: linear-gradient(135deg, #007a78, #9945ff);
            width: 200px;
            height: 200px;
            margin: 0 auto 2rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 3.5rem;
            font-weight: 900;
            box-shadow: 0 10px 30px rgba(0,122,120,0.2);
        }
        @media (max-width: 600px) {
            body { padding: 10px; }
            .start-screen { padding: 2rem 1.5rem; border-radius: 20px; }
            .start-screen h1 { font-size: 1.8rem; }
            .difficulty-buttons { gap: 10px; }
            .difficulty-btn { padding: 12px 20px; font-size: 0.9rem; min-width: 100%; }
            
            .quiz-modern { border-radius: 12px; }
            .quiz-header { padding: 0.8rem 1rem; }
            .quiz-header h3 { font-size: 1rem; }
            .quiz-timer { font-size: 1.2rem; padding: 6px 16px; }
            
            .quiz-body { padding: 1.2rem; }
            .progress-badge { margin-bottom: 1rem; font-size: 0.75rem; }
            .question-text { font-size: 1.2rem; margin-bottom: 1.5rem; }
            .options-grid { gap: 10px; margin-bottom: 2rem; }
            .quiz-option { padding: 12px 16px; font-size: 0.9rem; gap: 10px; }
            .option-letter { width: 28px; height: 28px; font-size: 0.8rem; }
            
            .nav-buttons { gap: 10px; }
            .quiz-btn { padding: 12px 20px; font-size: 0.8rem; flex: 1; }
            
            .result-card { padding: 2rem 1rem; }
            .score-circle { width: 120px; height: 120px; font-size: 2.2rem; }
            .result-card h2 { font-size: 1.5rem; }
            .result-card p { font-size: 1rem; }
            .result-card .quiz-btn { width: 100%; }
        }
        
        /* Custom Checkbox/Radio Styling */
        input[type="checkbox"], input[type="radio"] {
            appearance: none;
            -webkit-appearance: none;
            width: 24px;
            height: 24px;
            border: 2px solid #ccc;
            border-radius: 6px;
            margin-right: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s;
            background: #fff;
            position: relative;
        }
        input[type="radio"] {
            border-radius: 50%;
        }
        input[type="checkbox"]:checked, input[type="radio"]:checked {
            background: #007a78;
            border-color: #007a78;
            box-shadow: 0 0 8px rgba(0,122,120,0.4);
        }
        input[type="checkbox"]:checked::after {
            content: '✓';
            color: white;
            font-size: 16px;
            font-weight: 900;
        }
        input[type="radio"]:checked::after {
            content: '';
            width: 12px;
            height: 12px;
            background: white;
            border-radius: 50%;
        }
    </style>
</head>
<body>
<div id="cscs-quiz-container"></div>

<script>
    const allQuestions = ${questionsJson};
    
    const levels = [
        { name: 'Easy',           questions: allQuestions.slice(0, 50) },
        { name: 'Medium',         questions: allQuestions.slice(50, 100) },
        { name: 'Medium to Hard', questions: allQuestions.slice(100, 150) },
        { name: 'Hard',           questions: allQuestions.slice(150, 200) }
    ];

    const TIME_PER_QUESTION = 60;
    let currentQuiz = null;
    let currentIndex = 0;
    let userAnswers = [];
    let timerInterval = null;
    let timeLeft = TIME_PER_QUESTION;
    let quizFinished = false;

    const container = document.getElementById('cscs-quiz-container');
    let dynamicDiv, timerSpan;

    function stopTimer() { if (timerInterval) clearInterval(timerInterval); timerInterval = null; }
    
    function updateTimerDisplay() {
        const secs = timeLeft;
        timerSpan.textContent = secs < 10 ? '0' + secs : secs;
        timerSpan.style.color = timeLeft <= 10 ? "#ff3333" : "#fff";
    }

    function startTimer() {
        stopTimer();
        timeLeft = TIME_PER_QUESTION;
        updateTimerDisplay();
        timerInterval = setInterval(() => {
            if (quizFinished) return;
            timeLeft--;
            updateTimerDisplay();
            if (timeLeft <= 0) {
                stopTimer();
                goToNext();
            }
        }, 1000);
    }

    function saveAnswer(selectedIdx, isCheckbox = false) {
        if (quizFinished) return;
        let currentSelections = userAnswers[currentIndex] || [];
        const question = currentQuiz.questions[currentIndex];
        
        if (isCheckbox) {
            if (currentSelections.includes(selectedIdx)) {
                currentSelections = currentSelections.filter(i => i !== selectedIdx);
            } else {
                // Prevent selecting all options
                if (currentSelections.length >= question.options.length - 1) {
                    // We can show a small toast or just ignore. Let's just ignore for now or show alert.
                    return;
                }
                currentSelections.push(selectedIdx);
            }
            currentSelections.sort((a,b)=>a-b);
            userAnswers[currentIndex] = currentSelections;
            renderCurrentQuestion();
        } else {
            userAnswers[currentIndex] = [selectedIdx];
            renderCurrentQuestion();
            setTimeout(goToNext, 300);
        }
    }

    function goToNext() {
        if (quizFinished) return;
        if (currentIndex < currentQuiz.questions.length - 1) {
            currentIndex++;
            renderCurrentQuestion();
            startTimer();
        } else {
            finishQuiz();
        }
    }

    function goToPrev() {
        if (quizFinished) return;
        if (currentIndex > 0) {
            currentIndex--;
            renderCurrentQuestion();
            startTimer();
        }
    }

    function calculateScore() {
        let score = 0;
        currentQuiz.questions.forEach((q, i) => {
            const userSel = userAnswers[i] || [];
            if (userSel.length === q.correctIndices.length && userSel.every(idx => q.correctIndices.includes(idx))) {
                score++;
            }
        });
        return score;
    }

    async function shareResults() {
        const score = calculateScore();
        const total = currentQuiz.questions.length;
        const text = \`I just scored \${score}/\${total} on the CSCS Practice Test! Can you beat my score? #CSCS #ConstructionSafety\`;
        
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'CSCS Practice Test Results',
                    text: text,
                    url: window.location.href
                });
            } catch (err) {
                console.log('Error sharing:', err);
            }
        } else {
            // Fallback: Copy to clipboard
            navigator.clipboard.writeText(text).then(() => {
                alert('Results copied to clipboard!');
            });
        }
    }

    function finishQuiz() {
        quizFinished = true;
        stopTimer();
        const score = calculateScore();
        const total = currentQuiz.questions.length;
        const percent = Math.round((score / total) * 100);
        
        dynamicDiv.innerHTML = \`
            <div class="result-card">
                <div class="score-circle">\${score}/\${total}</div>
                <h2 style="font-size:2rem; margin-bottom:1rem; color: #1a1a1a;">\${percent >= 80 ? 'EXCELLENT!' : percent >= 60 ? 'GOOD JOB!' : 'KEEP PRACTICING!'}</h2>
                <p style="font-size:1.2rem; color:#666; margin-bottom:2rem;">You scored \${percent}% correct.</p>
                <div style="display: flex; flex-wrap: wrap; gap: 15px; justify-content: center;">
                    <button class="quiz-btn quiz-btn-primary" onclick="location.reload()">RESTART TEST</button>
                    <button class="quiz-btn quiz-btn-share" onclick="shareResults()">SHARE MY RESULTS</button>
                    <button class="quiz-btn" onclick="window.parent.postMessage('closeQuiz', '*')">BACK TO HUB</button>
                </div>
            </div>
        \`;
    }

    function renderCurrentQuestion() {
        const q = currentQuiz.questions[currentIndex];
        const selected = userAnswers[currentIndex] || [];
        const isMultiple = q.correctIndices.length > 1;
        const letters = ['A', 'B', 'C', 'D', 'E'];

        const optionsHtml = q.options.map((opt, idx) => {
            const isSelected = selected.includes(idx);
            const inputType = isMultiple ? 'checkbox' : 'radio';
            return \`
                <div class="quiz-option \${isSelected ? 'selected' : ''}" onclick="saveAnswer(\${idx}, \${isMultiple})">
                    <div style="display: flex; align-items: center; gap: 15px; width: 100%;">
                        <input type="\${inputType}" \${isSelected ? 'checked' : ''} style="pointer-events: none;">
                        <span class="option-letter">\${letters[idx]}</span>
                        <span style="flex: 1;">\${opt}</span>
                    </div>
                </div>
            \`;
        }).join('');

        dynamicDiv.innerHTML = \`
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                <div class="progress-badge">QUESTION \${currentIndex + 1} OF \${currentQuiz.questions.length}</div>
                \${isMultiple ? '<span style="color: #d97706; font-weight: 700; font-size: 0.8rem;">SELECT ALL THAT APPLY</span>' : ''}
            </div>
            <div class="question-text">\${q.text}</div>
            <div class="options-grid">\${optionsHtml}</div>
            <div class="nav-buttons">
                <button class="quiz-btn" onclick="goToPrev()" \${currentIndex === 0 ? 'disabled' : ''}>PREVIOUS</button>
                <button class="quiz-btn quiz-btn-primary" onclick="goToNext()">\${currentIndex === currentQuiz.questions.length - 1 ? 'FINISH' : 'NEXT'}</button>
            </div>
        \`;
    }

    function startQuiz(levelIndex) {
        document.body.classList.remove('start-mode');
        currentQuiz = levels[levelIndex];
        userAnswers = new Array(currentQuiz.questions.length).fill(null);
        currentIndex = 0;
        quizFinished = false;
        
        container.innerHTML = \`
            <div class="quiz-modern">
                <div class="quiz-header">
                    <h3>\${currentQuiz.name.toUpperCase()} TEST</h3>
                    <div class="quiz-timer" id="timerDisplay">60</div>
                </div>
                <div id="quizBody" class="quiz-body"></div>
            </div>
        \`;
        dynamicDiv = document.getElementById('quizBody');
        timerSpan = document.getElementById('timerDisplay');
        renderCurrentQuestion();
        startTimer();
    }

    function showStartScreen() {
        document.body.classList.add('start-mode');
        container.innerHTML = \`
            <div class="start-screen">
                <button class="back-btn-top" onclick="window.parent.postMessage('closeQuiz', '*')">← BACK</button>
                <h1 style="font-size:2.5rem; margin-bottom:1rem; font-weight:900; color: #1a1a1a;">CSCS PRACTICE TEST</h1>
                <p style="color:#666; margin-bottom:3rem;">Select a difficulty level to begin your 50-question mock exam.</p>
                <div class="difficulty-buttons">
                    <button class="difficulty-btn easy" onclick="startQuiz(0)">EASY</button>
                    <button class="difficulty-btn medium" onclick="startQuiz(1)">MEDIUM</button>
                    <button class="difficulty-btn medium-hard" onclick="startQuiz(2)">MEDIUM TO HARD</button>
                    <button class="difficulty-btn hard" onclick="startQuiz(3)">HARD</button>
                </div>
            </div>
        \`;
    }

    window.onload = showStartScreen;
    window.saveAnswer = saveAnswer;
    window.goToNext = goToNext;
    window.goToPrev = goToPrev;
    window.startQuiz = startQuiz;
    window.shareResults = shareResults;
</script>
</body>
</html>
  `;

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-10">
      <iframe
        ref={iframeRef}
        srcDoc={srcDoc}
        className="w-full h-full border-none rounded-3xl shadow-2xl bg-white"
        title="CSCS Practice Test"
      />
    </div>
  );
}
