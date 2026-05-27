import React, { useState, useMemo, useEffect } from 'react';

// SECURE IMPORTS FROM EXTERNAL DATABASE NODES
import { dsm5DisordersList, sequentialCases } from './caseDatabase';
import { storylineTherapy } from './therapyDatabase';
import { netJrfPastQuestions } from './jrfDatabase';

export default function PsychologyApp() {
  const [currentModule, setCurrentModule] = useState('clinical');
  
  // Module 1: Sequential Case Arena Shuffled States
  const [shuffledCaseDeck, setShuffledCaseDeck] = useState([]);
  const [caseIndex, setCaseIndex] = useState(0);
  const [caseStageIndex, setCaseStageIndex] = useState(0);
  const [typedGuess, setTypedGuess] = useState('');
  const [submittedGuess, setSubmittedGuess] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Module 2: Storyline Therapy Shuffled States
  const [shuffledTherapyDeck, setShuffledTherapyDeck] = useState([]);
  const [therapyIndex, setTherapyIndex] = useState(0);
  const [therapyChapterIndex, setTherapyChapterIndex] = useState(0);
  const [selectedTherapyAns, setSelectedTherapyAns] = useState(null);

  // Module 3: Exam Desk Shuffled States
  const [shuffledNetDeck, setShuffledNetDeck] = useState([]);
  const [netIndex, setNetIndex] = useState(0);
  const [selectedNetAns, setSelectedNetAns] = useState(null);

  // UNIFIED FISHER-YATES DECK SHUFFLER
  useEffect(() => {
    // 1. Shuffle Case Arena
    let caseDeck = [...sequentialCases];
    for (let i = caseDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [caseDeck[i], caseDeck[j]] = [caseDeck[j], caseDeck[i]];
    }
    setShuffledCaseDeck(caseDeck);

    // 2. Shuffle Therapy Lab Profiles
    let therapyDeck = [...storylineTherapy];
    for (let i = therapyDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [therapyDeck[i], therapyDeck[j]] = [therapyDeck[j], therapyDeck[i]];
    }
    setShuffledTherapyDeck(therapyDeck);

    // 3. Shuffle JRF Exam Questions
    let netDeck = [...netJrfPastQuestions];
    for (let i = netDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [netDeck[i], netDeck[j]] = [netDeck[j], netDeck[i]];
    }
    setShuffledNetDeck(netDeck);
  }, []);

  // Safe Fallback Resolution while Decks are Shuffling
  const currentCase = shuffledCaseDeck[caseIndex] || sequentialCases[0] || null;
  const currentStage = currentCase?.stages?.[caseStageIndex] || currentCase?.stages?.[0] || null;
  
  const currentStory = shuffledTherapyDeck[therapyIndex] || storylineTherapy[0] || null;
  const currentChapter = currentStory?.chapters?.[therapyChapterIndex] || currentStory?.chapters?.[0] || null;
  
  const currentNetQ = shuffledNetDeck[netIndex] || netJrfPastQuestions[0] || null;

  // Auto-Suggestion Engine
  const autoSuggestions = useMemo(() => {
    if (!typedGuess.trim()) return [];
    const normalizedInput = typedGuess.toLowerCase();
    return dsm5DisordersList.filter(disorder => 
      disorder.toLowerCase().includes(normalizedInput)
    );
  }, [typedGuess]);

  // Handle Guess Checks with Stepwise Correction Tracking
  const handleGuessSubmit = (guessText) => {
    const finalGuess = guessText || typedGuess;
    if (!finalGuess.trim() || !currentCase) return;
    
    const isExact = finalGuess.toLowerCase().trim() === currentCase.correctDisorder.toLowerCase().trim();
    
    if (isExact) {
      setSubmittedGuess({ text: finalGuess, isCorrect: true });
      setErrorMessage('');
    } else {
      if (caseStageIndex < currentCase.stages.length - 1) {
        setErrorMessage(`"${finalGuess}" does not align. Advancing case logs for deeper cue verification...`);
        setCaseStageIndex(prev => prev + 1);
        setTypedGuess('');
        setTimeout(() => setErrorMessage(''), 4500);
      } else {
        setSubmittedGuess({ text: finalGuess, isCorrect: false });
        setErrorMessage('');
      }
    }
    setShowSuggestions(false);
  };

  const advanceToNextCaseStructure = () => {
    setTypedGuess('');
    setSubmittedGuess(null);
    setCaseStageIndex(0);
    setErrorMessage('');
    setCaseIndex((prev) => (prev + 1) % (shuffledCaseDeck.length || sequentialCases.length));
  };

  const handleTherapySelection = (option) => {
    setSelectedTherapyAns(option);
  };

  const advanceTherapyChapterOrLoop = () => {
    if (!currentStory) return;
    if (therapyChapterIndex < currentStory.chapters.length - 1) {
      setTherapyChapterIndex(prev => prev + 1);
      setSelectedTherapyAns(null);
    } else {
      setSelectedTherapyAns(null);
      setTherapyChapterIndex(0);
      setTherapyIndex((prev) => (prev + 1) % (shuffledTherapyDeck.length || storylineTherapy.length));
    }
  };

  const optionWasOptimal = selectedTherapyAns?.isOptimal;

  return (
    <div className="w-full min-h-screen bg-slate-200 text-slate-800 flex items-center justify-center p-4 box-border">
      <div 
        className="w-full max-w-md bg-[#F4F6F5] rounded-[40px] p-6 border border-white flex flex-col justify-between overflow-hidden box-border gap-4"
        style={{ 
          minHeight: '780px',
          boxShadow: '0 20px 50px -12px rgba(0, 0, 0, 0.15)' 
        }}
      >
        {/* TOP STATUS BAR */}
        <div className="w-full flex justify-between items-center text-slate-400 font-mono text-[10px] font-bold shrink-0">
          <span>09:30 PM</span>
          <div className="px-3 py-0.5 bg-white rounded-full border border-slate-100 text-[8px] text-[#3A5A40]">
            • DECOUPLED MATRIX SHUFFLE
          </div>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-[#588157] rounded-full"></span>
            <span className="w-3 h-1.5 bg-[#588157] rounded-xs"></span>
          </div>
        </div>

        {/* WORKSPACE PROFILE INDENT */}
        <header className="w-full bg-white rounded-2xl p-4 border border-slate-100 flex flex-col items-center text-center gap-2 shrink-0 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-[#E8EFEA] flex items-center justify-center text-lg text-[#3A5A40]">
            🧠
          </div>
          <div>
            <h1 className="text-lg font-black tracking-tight text-[#2B3E34] uppercase">BehavioralLab</h1>
            <p className="text-[9px] font-bold uppercase tracking-widest text-[#588157] mt-0.5">UGC NET Matrix Desk</p>
          </div>

          <nav className="w-full bg-[#F4F6F5] p-1 rounded-xl flex border border-slate-200 mt-1">
            <button 
              type="button"
              onClick={() => setCurrentModule('clinical')}
              className={`flex-1 py-1.5 text-[11px] font-bold rounded-lg transition-all ${currentModule === 'clinical' ? 'bg-white text-[#3A5A40] shadow-xs' : 'text-slate-400 hover:text-slate-600'}`}
            >
              Case Arena
            </button>
            <button 
              type="button"
              onClick={() => setCurrentModule('therapy')}
              className={`flex-1 py-1.5 text-[11px] font-bold rounded-lg transition-all ${currentModule === 'therapy' ? 'bg-white text-[#3A5A40] shadow-xs' : 'text-slate-400 hover:text-slate-600'}`}
            >
              Therapy Lab
            </button>
            <button 
              type="button"
              onClick={() => setCurrentModule('exam')}
              className={`flex-1 py-1.5 text-[11px] font-bold rounded-lg transition-all ${currentModule === 'exam' ? 'bg-white text-[#3A5A40] shadow-xs' : 'text-slate-400 hover:text-slate-600'}`}
            >
              JRF Desk
            </button>
          </nav>
        </header>

        {/* INTERACTION HUB */}
        <div className="flex-1 w-full flex flex-col justify-start overflow-hidden">
          
          {/* MODULE 1: CLINICAL CASE ARENA */}
          {currentModule === 'clinical' && (
            <div className="w-full bg-white rounded-2xl p-5 border border-slate-100 flex flex-col justify-between flex-1 gap-4 shadow-xs relative">
              <div className="w-full flex flex-col gap-3 overflow-y-auto pr-1">
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] font-extrabold tracking-widest text-[#588157] uppercase bg-[#E8EFEA] px-2 py-0.5 rounded">
                      Stepwise Case Log
                    </span>
                    <span className="text-[9px] font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                      Log {caseStageIndex + 1}/{currentCase?.stages?.length || 2}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400">{currentCase?.id}</span>
                </div>

                <div className="w-full bg-[#F8FAF9] border border-slate-100 p-4 rounded-xl flex flex-col gap-2.5">
                  <p className="text-slate-700 leading-relaxed font-semibold text-[13px]">
                    {currentStage?.vignette || "Loading scenario parameters..."}
                  </p>
                  <div className="text-[11px] text-[#3A5A40] font-mono bg-[#E8EFEA]/40 p-2.5 rounded-lg border border-[#588157]/10">
                    <span className="font-bold">🔬 System Pointer:</span> {currentStage?.cue}
                  </div>
                </div>

                {errorMessage && (
                  <div className="w-full p-2.5 bg-rose-50 border border-rose-100 rounded-xl text-[11px] font-bold text-rose-800 animate-pulse">
                    ⚠ {errorMessage}
                  </div>
                )}
              </div>

              <div className="w-full flex flex-col gap-2 mt-auto relative">
                {!submittedGuess ? (
                  <div className="w-full flex flex-col gap-1 relative">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400 px-0.5">
                      Enter Diagnostic Target Differential
                    </label>
                    <div className="w-full flex gap-2">
                      <input 
                        type="text"
                        value={typedGuess}
                        onFocus={() => setShowSuggestions(true)}
                        onChange={(e) => { setTypedGuess(e.target.value); setShowSuggestions(true); }}
                        placeholder="Type classification name..."
                        className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-bold text-slate-700 focus:outline-none focus:border-[#588157] transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => handleGuessSubmit()}
                        className="bg-[#3A5A40] text-white px-4 rounded-xl text-xs font-bold hover:bg-[#2B3E34] transition-all"
                      >
                        Check
                      </button>
                    </div>

                    {showSuggestions && autoSuggestions.length > 0 && (
                      <div className="absolute bottom-full mb-1 left-0 w-full bg-white border border-slate-200 rounded-xl shadow-lg max-h-36 overflow-y-auto z-50 p-1 flex flex-col gap-0.5">
                        {autoSuggestions.map((disorder, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => {
                              setTypedGuess(disorder);
                              handleGuessSubmit(disorder);
                            }}
                            className="w-full text-left px-3 py-2 hover:bg-[#E8EFEA] text-slate-700 font-semibold text-xs rounded-lg transition-colors"
                          >
                            {disorder}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="w-full flex flex-col gap-3">
                    <div className={`w-full p-3.5 rounded-xl border text-xs leading-relaxed ${submittedGuess.isCorrect ? 'bg-[#E8EFEA] border-emerald-200 text-[#2B3E34]' : 'bg-rose-50 border-rose-100 text-rose-900'}`}>
                      <p className="font-black uppercase tracking-wider mb-0.5">
                        {submittedGuess.isCorrect ? "✓ Identity Parameters Cleared" : "✗ Final Diagnostic Exhaustion"}
                      </p>
                      <p className="font-semibold mb-1">Evaluated Option: <span className="underline font-bold">{submittedGuess.text}</span></p>
                      <p className="font-medium opacity-90"><strong>Differential Matrix Defense:</strong> {currentCase?.rationale}</p>
                    </div>
                    <button 
                      type="button"
                      onClick={advanceToNextCaseStructure}
                      className="w-full py-3 bg-[#3A5A40] text-white font-bold text-xs rounded-xl hover:bg-[#2B3E34] transition-all uppercase tracking-widest"
                    >
                      Next Differential Cluster
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* MODULE 2: THERAPY LAB */}
          {currentModule === 'therapy' && (
            <div className="w-full bg-white rounded-2xl p-5 border border-slate-100 flex flex-col justify-between flex-1 gap-4 shadow-xs">
              <div className="w-full flex flex-col gap-3 overflow-y-auto pr-1">
                <div className="w-full flex items-center justify-between">
                  <span className="text-[9px] font-extrabold tracking-widest text-indigo-600 uppercase bg-indigo-50 px-2 py-0.5 rounded">
                    Therapeutic Storyline Track
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-400">
                    Chapter {therapyChapterIndex + 1}/{currentStory?.chapters?.length || 1}
                  </span>
                </div>

                <div className="w-full flex flex-col gap-1">
                  <div className="text-[10px] font-extrabold text-[#1E293B] uppercase tracking-wide bg-slate-100 px-3 py-2 rounded-xl border border-slate-200/60 leading-snug">
                    🎯 Focus: {currentStory?.clientProfile || "Loading profile tracking..."}
                  </div>
                  <div className="w-full bg-gradient-to-r from-slate-50 to-indigo-50/20 border border-slate-100 p-4 rounded-xl mt-1">
                    <p className="text-slate-700 font-serif italic text-xs leading-relaxed">
                      "{currentChapter?.dialogue || "Loading client entry dialog logs..."}"
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col gap-2 mt-auto">
                {!selectedTherapyAns ? (
                  currentChapter?.options?.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleTherapySelection(option)}
                      className="w-full text-left p-3 bg-white rounded-xl border border-slate-200 hover:border-indigo-500 hover:bg-indigo-50/10 transition-all text-xs flex flex-col gap-1 shadow-xs"
                    >
                      <span className="inline-block text-[8px] font-bold text-indigo-600 bg-indigo-50 px-1.5 rounded uppercase tracking-wider self-start">
                        {option.type}
                      </span>
                      <p className="font-bold text-slate-800 text-[11px] leading-snug">"{option.text}"</p>
                    </button>
                  ))
                ) : (
                  <div className="w-full flex flex-col gap-3">
                    <div className={`w-full p-3.5 rounded-xl border text-xs leading-relaxed ${optionWasOptimal ? 'bg-[#E8EFEA] border-emerald-200 text-[#2B3E34]' : 'bg-amber-50 border-amber-200 text-amber-900'}`}>
                      <p className="font-black uppercase tracking-wider mb-0.5">
                        {optionWasOptimal ? "✓ Alliance Progress Unlocked" : "⚠ Sub-Optimal Response Intervention"}
                      </p>
                      <p className="font-medium opacity-90">{selectedTherapyAns.impact}</p>
                    </div>
                    <button 
                      type="button"
                      onClick={advanceTherapyChapterOrLoop}
                      className="w-full py-3 bg-slate-800 text-white font-bold text-xs rounded-xl hover:bg-slate-900 transition-all uppercase tracking-widest"
                    >
                      {currentStory && therapyChapterIndex < currentStory.chapters.length - 1 
                        ? "Advance to Client's Response" 
                        : "Load Next Active Client Profile"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* MODULE 3: JRF BLUEPRINT DESK */}
          {currentModule === 'exam' && (
            <div className="w-full bg-white rounded-2xl p-5 border border-slate-100 flex flex-col justify-between flex-1 gap-4 shadow-xs">
              <div className="w-full flex flex-col gap-3 overflow-y-auto pr-1 max-h-[340px]">
                <div className="w-full flex items-center justify-between">
                  <span className="text-[9px] font-extrabold tracking-widest text-amber-600 uppercase bg-amber-50 px-2 py-0.5 rounded">
                    Syllabus Matrix
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-400">
                    Question {netIndex + 1}/{shuffledNetDeck.length || netJrfPastQuestions.length}
                  </span>
                </div>

                <div className="w-full flex flex-col gap-1">
                  <div className="text-[9px] font-mono font-bold text-[#588157] uppercase tracking-wider px-0.5">
                    {currentNetQ?.unit || "UNIT LOAD"}
                  </div>
                  <div className="w-full bg-slate-950 text-emerald-400 border border-slate-900 p-3.5 rounded-xl whitespace-pre-line font-mono text-[11px] leading-relaxed shadow-inner">
                    {currentNetQ?.question || "Assembling question matrix rows..."}
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col gap-2 mt-auto">
                {!selectedNetAns ? (
                  currentNetQ?.options?.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setSelectedNetAns(option)}
                      className="w-full text-left p-2.5 bg-white rounded-xl border border-slate-200 hover:border-amber-500 hover:bg-amber-50/20 transition-all text-[11px] font-bold text-slate-700 shadow-xs leading-normal"
                    >
                      {option.text}
                    </button>
                  ))
                ) : (
                  <div className="w-full flex flex-col gap-3">
                    <div className={`w-full p-3.5 rounded-xl border text-xs leading-relaxed ${selectedNetAns.isCorrect ? 'bg-[#E8EFEA] border-emerald-200 text-[#2B3E34]' : 'bg-rose-50 border-rose-100 text-rose-900'}`}>
                      {selectedNetAns.isCorrect ? (
                        <>
                          <p className="font-black uppercase tracking-wider mb-0.5 text-emerald-800">✓ Scoring Parameters Cleared</p>
                          <p className="font-medium opacity-90">{selectedNetAns.rationale}</p>
                        </>
                      ) : (
                        <div className="flex flex-col gap-2">
                          <div>
                            <p className="font-black uppercase tracking-wider text-rose-800 mb-0.5">✗ {selectedNetAns.warning}</p>
                            <p className="font-bold text-slate-700">Selected Option: <span className="line-through text-rose-600">{selectedNetAns.text}</span></p>
                          </div>
                          <div className="p-2 bg-white/60 rounded-lg border border-rose-200/50">
                            <p className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800">🎯 Correct Conceptual Target:</p>
                            <p className="font-bold text-slate-800 text-[11px] mt-0.5">{currentNetQ?.correctAnswerText}</p>
                          </div>
                          <div className="text-[11px] font-medium text-rose-950">
                            <p className="mt-1"><strong>Structural Difference:</strong> {selectedNetAns.difference}</p>
                            <p className="mt-1"><strong>Core Examination Explanation:</strong> {selectedNetAns.rationale}</p>
                          </div>
                        </div>
                      )}
                    </div>
                    <button 
                      type="button"
                      onClick={() => { setSelectedNetAns(null); setNetIndex((prev) => (prev + 1) % (shuffledNetDeck.length || netJrfPastQuestions.length)); }}
                      className="w-full py-3 bg-amber-700 text-white font-bold text-xs rounded-xl hover:bg-amber-800 transition-all uppercase tracking-widest"
                    >
                      Next Syllabus Row Question
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>

        {/* FOOTER */}
        <footer className="w-full flex flex-col items-center gap-1 shrink-0">
          <div className="text-center text-[8px] font-mono tracking-widest text-slate-400 uppercase">
            Joyal Jose • Behavioral Analytics Framework
          </div>
          <div className="w-24 h-1 bg-slate-300 rounded-full"></div>
        </footer>

      </div>
    </div>
  );
}