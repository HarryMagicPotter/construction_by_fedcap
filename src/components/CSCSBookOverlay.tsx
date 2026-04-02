import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { cscsBookSections, cscsBookQuestions, CSCSBookQuestion } from '../data/cscsBookData';

interface CSCSBookOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  sections: { title: string; startPage: number }[];
  questions: CSCSBookQuestion[];
  bookTitle: string;
}

export default function CSCSBookOverlay({ isOpen, onClose, sections, questions, bookTitle }: CSCSBookOverlayProps) {
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
      if (event.data === 'closeBook') {
        onClose();
      } else if (event.data === 'goHome') {
        onClose();
        navigate('/');
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
    <title>${bookTitle}</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    <style>
        :root {
            --book-bg: #f5f2ed;
            --book-paper: #ffffff;
            --book-ink: #1a1a1a;
            --book-accent: #007a78;
            --book-shadow: rgba(0, 0, 0, 0.1);
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
            gap: 1rem;
        }

        .header-left {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .book-header h1 {
            margin: 0;
            font-size: 1rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            white-space: nowrap;
        }

        .header-actions {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .chapter-select {
            background: white;
            border: none;
            color: var(--book-accent);
            padding: 0.5rem 1rem;
            border-radius: 4px;
            font-size: 0.85rem;
            font-weight: 700;
            cursor: pointer;
            outline: none;
            max-width: 280px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .footer-select {
            background: #f0f0f0;
            border: 1px solid #ccc;
            color: var(--book-accent);
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 700;
            cursor: pointer;
            outline: none;
            max-width: 160px;
            text-transform: uppercase;
            box-shadow: inset 0 1px 2px rgba(0,0,0,0.05);
        }
        .footer-select option { color: black; font-weight: normal; }

        .header-btn {
            background: rgba(255,255,255,0.2);
            border: none;
            color: white;
            padding: 0.4rem 0.8rem;
            border-radius: 4px;
            cursor: pointer;
            font-weight: 600;
            font-size: 0.85rem;
            transition: background 0.3s;
            text-transform: uppercase;
            white-space: nowrap;
        }
        .header-btn:hover { background: rgba(255,255,255,0.3); }
        .btn-home { background: rgba(0,0,0,0.2); }

        /* BOOK CONTAINER */
        .book-viewport {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1rem;
            perspective: 2000px;
            overflow: hidden;
        }

        .book {
            width: 100%;
            max-width: 1000px;
            height: 100%;
            background: var(--book-paper);
            box-shadow: 0 20px 50px rgba(0,0,0,0.2);
            display: flex;
            position: relative;
            border-radius: 4px;
            overflow: hidden;
        }

        .book-spine {
            width: 2px;
            background: rgba(0,0,0,0.1);
            height: 100%;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            z-index: 5;
        }

        /* PAGES */
        .page {
            flex: 1;
            padding: 0 2rem 2rem 2rem;
            overflow-y: auto;
            position: relative;
            display: flex;
            flex-direction: column;
        }

        .page-left { border-right: 1px solid #eee; }
        
        .page-number {
            position: absolute;
            bottom: 1rem;
            font-size: 0.8rem;
            color: #888;
            font-weight: 600;
            z-index: 1;
        }
        .page-left .page-number { left: 1.5rem; }
        .page-right .page-number { right: 1.5rem; }

        /* BACK COVER */
        .back-cover {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            text-align: center;
            background: linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%);
            padding: 3rem;
        }

        .back-cover h2 {
            font-family: 'Playfair Display', serif;
            font-size: 2.5rem;
            color: var(--book-accent);
            margin-bottom: 1rem;
        }

        .back-cover p {
            font-size: 1.1rem;
            color: #666;
            margin-bottom: 2rem;
        }

        .restart-btn {
            background: var(--book-accent);
            color: white;
            border: none;
            padding: 1rem 2rem;
            border-radius: 4px;
            font-weight: 700;
            cursor: pointer;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: transform 0.2s;
        }
        .restart-btn:hover { transform: scale(1.05); }

        /* CONTENT STYLES */
        .section-title {
            background: var(--book-accent);
            color: white;
            padding: 1rem 2rem;
            font-size: 0.9rem;
            font-weight: 700;
            margin: 0 -2rem 1.5rem -2rem;
            position: sticky;
            top: 0;
            z-index: 10;
            box-shadow: 0 2px 8px rgba(0,0,0,0.15);
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .question-block {
            margin-bottom: 2rem;
            border-bottom: 1px solid #f0f0f0;
            padding-bottom: 1rem;
        }

        .q-label {
            font-weight: 800;
            color: var(--book-accent);
            display: block;
            margin-bottom: 0.4rem;
            font-size: 0.8rem;
            text-transform: uppercase;
        }

        .q-text {
            font-size: 1rem;
            font-weight: 600;
            line-height: 1.4;
            margin-bottom: 0.8rem;
        }

        .options-list {
            list-style: none;
            padding: 0;
            margin: 0 0 0.8rem 0;
        }

        .option-item {
            margin-bottom: 0.4rem;
            display: flex;
            gap: 0.4rem;
            font-size: 0.95rem;
        }

        .opt-letter { font-weight: 700; min-width: 20px; }

        .correct-answer {
            font-style: italic;
            color: #666;
            font-size: 0.85rem;
            margin-top: 0.4rem;
            padding: 0.3rem 0.5rem;
            background: #f9f9f9;
            border-left: 3px solid var(--book-accent);
        }

        /* TABLE OF CONTENTS */
        .toc-list {
            list-style: none;
            padding: 0;
        }

        .toc-item {
            display: flex;
            justify-content: space-between;
            padding: 0.6rem 0;
            border-bottom: 1px dotted #ccc;
            cursor: pointer;
            transition: color 0.2s;
            font-size: 0.9rem;
        }
        .toc-item:hover { color: var(--book-accent); }
        .toc-page { font-weight: 600; }

        /* NAVIGATION */
        .book-nav {
            background: white;
            padding: 0.75rem 1.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1.5rem;
            box-shadow: 0 -2px 10px var(--book-shadow);
            z-index: 10;
        }

        .nav-btn {
            background: var(--book-accent);
            color: white;
            border: none;
            padding: 0.6rem 1.2rem;
            border-radius: 30px;
            cursor: pointer;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.8rem;
        }
        .btn-close-footer {
            background: #e74c3c;
            color: white;
            border: none;
            padding: 0.6rem 1.2rem;
            border-radius: 30px;
            cursor: pointer;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.8rem;
        }
        .btn-close-footer:hover { background: #c0392b; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(231,76,60,0.3); }
        .nav-btn:disabled { background: #ccc; cursor: not-allowed; }

        .page-info {
            font-weight: 600;
            color: #666;
            font-size: 0.85rem;
        }

        /* COVER PAGE STYLES */
        .cover-page {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            text-align: center;
            background: linear-gradient(135deg, var(--book-accent) 0%, #005e5c 100%);
            color: white;
            padding: 2rem;
            width: 100%;
        }
        .cover-page h2 {
            font-family: 'Playfair Display', serif;
            font-size: 2.2rem;
            margin-bottom: 1rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            line-height: 1.2;
        }
        .start-book-btn {
            background: white;
            color: var(--book-accent);
            border: none;
            padding: 1.2rem 2.5rem;
            border-radius: 50px;
            font-weight: 800;
            font-size: 1.1rem;
            cursor: pointer;
            text-transform: uppercase;
            letter-spacing: 2px;
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
            transition: transform 0.2s, box-shadow 0.2s;
            margin-top: 2rem;
        }
        .start-book-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.3);
        }

        /* MOBILE ADAPTATION */
        @media (max-width: 768px) {
            .book-header { padding: 0.5rem 1rem; }
            .book-header h1 { font-size: 0.8rem; max-width: 150px; overflow: hidden; text-overflow: ellipsis; }
            .chapter-select { display: none; }
            .header-btn { padding: 0.3rem 0.6rem; font-size: 0.75rem; }
            
            .book { flex-direction: column; height: 100%; overflow-y: auto; border-radius: 0; }
            .page-left { border-right: none; border-bottom: 1px solid #eee; }
            .book-spine { display: none; }
            .book-viewport { padding: 0; height: calc(100vh - 120px); }
            .page { padding: 1.2rem; min-height: 50%; }
            .section-title { margin: 0 -1.2rem 1.2rem -1.2rem; padding: 0.8rem 1.2rem; font-size: 0.8rem; }
            .q-text { font-size: 0.9rem; }
            .option-item { font-size: 0.85rem; }
            
            .book-nav { padding: 0.5rem; gap: 0.5rem; flex-wrap: wrap; }
            .nav-btn { padding: 0.5rem 0.8rem; font-size: 0.7rem; flex: 1; justify-content: center; }
            .btn-close-footer { width: 100%; order: 3; margin-top: 5px; }
            .page-info { font-size: 0.75rem; width: 100%; text-align: center; order: -1; }
            .footer-select { max-width: none; flex: 2; }
        }

        @media (max-width: 480px) {
            .header-actions { gap: 0.3rem; }
            .header-btn { font-size: 0.7rem; }
            
            .book-nav {
                display: grid;
                grid-template-columns: 1fr 1.5fr 1fr;
                gap: 5px;
                padding: 8px;
            }
            .nav-btn { 
                padding: 0; 
                height: 40px; 
                font-size: 0.65rem; 
                border-radius: 6px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .footer-select { 
                height: 40px; 
                max-width: none; 
                width: 100%;
                font-size: 0.65rem;
                padding: 0 5px;
                border-radius: 6px;
                border: 1px solid #ddd;
                background: #f8f9fa;
                color: var(--book-accent);
                font-weight: 800;
            }
            .btn-close-footer {
                grid-column: span 3;
                width: 100%;
                height: 36px;
                font-size: 0.7rem;
                margin-top: 2px;
            }
            .page-info {
                grid-column: span 3;
                font-size: 0.7rem;
                margin-bottom: 2px;
            }

            .toc-item {
                padding: 10px 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-bottom: 1px solid #f0f0f0;
            }
            .toc-item span:first-child {
                flex: 1;
                padding-right: 10px;
                line-height: 1.2;
            }
            .toc-page {
                background: var(--book-accent);
                color: white;
                padding: 2px 6px;
                border-radius: 4px;
                font-size: 0.65rem;
                min-width: 55px;
                text-align: center;
                border-bottom: none;
            }
        }
    </style>
</head>
<body>
    <header class="book-header">
        <div class="header-left">
            <h1>${bookTitle}</h1>
            <select class="chapter-select" id="chapterSelect" onchange="goToSection(this.value)">
                <option value="">Jump to Chapter...</option>
                ${sections.map(s => `<option value="${s.title}">${s.title}</option>`).join('')}
            </select>
        </div>
        <div class="header-actions">
            <button class="header-btn btn-home" onclick="window.parent.postMessage('goHome', '*')">HOME</button>
            <button class="header-btn" onclick="window.parent.postMessage('closeBook', '*')">CLOSE</button>
        </div>
    </header>

    <div class="book-viewport">
        <div class="book" id="book">
            <div class="book-spine"></div>
            <div class="page page-left" id="leftPage"></div>
            <div class="page page-right" id="rightPage"></div>
        </div>
    </div>

    <footer class="book-nav">
        <button class="btn-close-footer" onclick="window.parent.postMessage('goLearning', '*')">CLOSE BOOK</button>
        <button class="nav-btn" id="prevBtn" onclick="prevPage()">← PREVIOUS</button>
        <div class="page-info" id="pageInfo">Page 1-2</div>
        <select class="footer-select" id="footerChapterSelect" onchange="goToSection(this.value)">
            <option value="">CATEGORIES...</option>
            ${sections.map(s => `<option value="${s.title}">${s.title}</option>`).join('')}
        </select>
        <button class="nav-btn" id="nextBtn" onclick="nextPage()">NEXT →</button>
    </footer>

    <script>
        const sections = ${sectionsJson};
        const questions = ${questionsJson};
        
        const isPhone = window.innerWidth <= 480;
        const totalQuestionSpreads = Math.ceil(questions.length / 4);
        const totalPages = isPhone ? (Math.ceil(questions.length / 2) + 3) : (totalQuestionSpreads + 2);
        
        let currentPage = 0; 

        function renderPages() {
            const left = document.getElementById('leftPage');
            const right = document.getElementById('rightPage');
            const info = document.getElementById('pageInfo');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            const chapterSelect = document.getElementById('chapterSelect');
            const footerChapterSelect = document.getElementById('footerChapterSelect');
            const book = document.getElementById('book');
            const isMobile = window.innerWidth <= 768;

            if (currentPage === 0) {
                if (isPhone) {
                    // PHONE COVER PAGE
                    left.innerHTML = \`
                        <div class="cover-page">
                            <div style="font-size: 4rem; margin-bottom: 1rem;">📚</div>
                            <h2>\${questions[0].section}</h2>
                            <p style="opacity: 0.8; font-size: 1.1rem;">Health, Safety and Environment Revision Guide</p>
                            <button class="start-book-btn" onclick="nextPage()">VIEW CONTENTS</button>
                        </div>
                    \`;
                    right.style.display = 'none';
                    info.textContent = "Cover Page";
                } else if (isMobile) {
                    // TABLET START PAGE
                    left.innerHTML = \`
                        <div class="cover-page">
                            <div style="font-size: 4rem; margin-bottom: 1rem;">📚</div>
                            <h2>\${questions[0].section}</h2>
                            <p style="opacity: 0.8; font-size: 1.1rem;">Health, Safety and Environment Revision Guide</p>
                            <button class="start-book-btn" onclick="nextPage()">START BOOK</button>
                        </div>
                    \`;
                    right.style.display = 'none';
                    info.textContent = "Cover Page";
                } else {
                    // DESKTOP TOC
                    right.style.display = 'flex';
                    let tocHtml = '<div class="section-title">Table of Contents</div><div style="padding-top: 0.5rem;"><ul class="toc-list">';
                    sections.forEach(s => {
                        tocHtml += '<li class="toc-item" onclick="goToSection(\\'' + s.title + '\\')">' +
                                   '<span>' + s.title + '</span>' +
                                   '<span class="toc-page">Page ' + s.startPage + '</span>' +
                                   '</li>';
                    });
                    tocHtml += '</ul></div><div class="page-number">i</div>';
                    left.innerHTML = tocHtml;
                    
                    // First question page on the right
                    renderQuestionPage(right, 0, 1);
                    info.textContent = "Contents / Page 1-2";
                }
                prevBtn.disabled = true;
                nextBtn.disabled = false;
                chapterSelect.value = "";
                footerChapterSelect.value = "";
            } else if (isPhone && currentPage === 1) {
                // PHONE ONLY: TABLE OF CONTENTS PAGE
                right.style.display = 'none';
                let tocHtml = '<div class="section-title">Table of Contents</div><div style="padding: 1rem;"><ul class="toc-list">';
                sections.forEach(s => {
                    tocHtml += '<li class="toc-item" onclick="goToSection(\\'' + s.title + '\\')">' +
                               '<span>' + s.title + '</span>' +
                               '<span class="toc-page">Page ' + s.startPage + '</span>' +
                               '</li>';
                });
                tocHtml += '</ul>' +
                           '<button class="start-book-btn" style="width:100%; margin-top:2rem;" onclick="nextPage()">START PAGE 1</button>' +
                           '</div><div class="page-number">ii</div>';
                left.innerHTML = tocHtml;
                info.textContent = "Table of Contents";
                prevBtn.disabled = false;
                nextBtn.disabled = false;
            } else if (currentPage >= totalPages - 1) {
                // Render Back Cover
                right.style.display = (isMobile || isPhone) ? 'none' : 'flex';
                left.innerHTML = '<div class="back-cover"><h2>End of Revision</h2><p>You have reached the end of the \${bookTitle}.</p><button class="restart-btn" onclick="goToStart()">Return to Start</button></div>';
                if (!isMobile && !isPhone) {
                    right.innerHTML = '<div class="back-cover" style="background: #1a1a1a; color: white;"><h2>CITB</h2><p style="color: #aaa;">Health, Safety and Environment Test</p></div>';
                }
                info.textContent = "End of Book";
                prevBtn.disabled = false;
                nextBtn.disabled = true;
                chapterSelect.value = "";
                footerChapterSelect.value = "";
            } else {
                right.style.display = (isMobile || isPhone) ? 'none' : 'flex';
                
                if (isPhone) {
                    // PHONE: 2 questions per page
                    const qIdxStart = (currentPage - 2) * 2;
                    renderQuestionPage(left, qIdxStart, currentPage - 1);
                    info.textContent = 'Page ' + (currentPage - 1);
                } else if (isMobile) {
                    // TABLET: 2 questions per page (stacked)
                    const qIdxStart = (currentPage - 1) * 2;
                    renderQuestionPage(left, qIdxStart, currentPage);
                    info.textContent = 'Page ' + currentPage;
                } else {
                    // DESKTOP: 4 questions per spread
                    const qIdxStart = (currentPage - 1) * 4; 
                    renderQuestionPage(left, qIdxStart, currentPage * 2 - 1);
                    renderQuestionPage(right, qIdxStart + 2, currentPage * 2);
                    info.textContent = 'Page ' + (currentPage * 2 - 1) + '-' + (currentPage * 2);
                }
                
                prevBtn.disabled = false;
                nextBtn.disabled = false;
            }

            // Scroll to top
            left.scrollTop = 0;
            right.scrollTop = 0;
        }

        function renderQuestionPage(container, startIdx, pageNum) {
            const pageQuestions = questions.slice(startIdx, startIdx + 2);
            if (pageQuestions.length === 0) {
                container.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#ccc;">End of Content</div>';
                return;
            }

            const section = pageQuestions[0].section;
            let html = '<div class="section-title">' + section + '</div>';
            
            pageQuestions.forEach(q => {
                html += '<div class="question-block">' +
                        '<span class="q-label">Question ' + q.id + '</span>' +
                        '<div class="q-text">' + q.text + '</div>' +
                        '<ul class="options-list">';
                
                q.options.forEach((opt, i) => {
                    html += '<li class="option-item">' +
                            '<span class="opt-letter">' + String.fromCharCode(65 + i) + ')</span>' +
                            '<span>' + opt + '</span>' +
                            '</li>';
                });
                
                html += '</ul>' +
                        '<div class="correct-answer">Correct Answer: ' + q.correctAnswer + '</div>' +
                        '</div>';
            });
            
            html += '<div class="page-number">' + pageNum + '</div>';
            container.innerHTML = html;
        }

        function nextPage() {
            if (currentPage < totalPages - 1) {
                currentPage++;
                renderPages();
            }
        }

        function prevPage() {
            if (currentPage > 0) {
                currentPage--;
                renderPages();
            }
        }

        function goToStart() {
            currentPage = 0;
            renderPages();
        }

        function goToSection(title) {
            if (!title) return;
            // Find first question of section
            const qIdx = questions.findIndex(q => q.section === title);
            if (qIdx !== -1) {
                if (isPhone) {
                    currentPage = Math.floor(qIdx / 2) + 2;
                } else if (isMobile) {
                    currentPage = Math.floor(qIdx / 2) + 1;
                } else {
                    currentPage = Math.floor(qIdx / 4) + 1;
                }
                renderPages();
            }
        }

        renderPages();
    </script>
</body>
</html>
  `;

  return (
    <div className="fixed inset-0 top-[70px] sm:top-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-0 md:p-4 lg:p-10">
      <div className="w-full h-full max-w-6xl max-h-full bg-white relative overflow-hidden shadow-2xl rounded-lg">
        <iframe
          srcDoc={srcDoc}
          className="w-full h-full border-none"
          title={bookTitle}
        />
      </div>
    </div>
  );
}
