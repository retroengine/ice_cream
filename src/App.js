import React, { useState, useEffect, useCallback } from 'react';
import './styles.css';
import { QUESTIONS } from './data/questions';
import StatsPanel from './components/StatsPanel';
import FiltersBar from './components/FiltersBar';
import QuestionTable from './components/QuestionTable';
import PatternFrequencies from './components/PatternFrequencies';
import Tips from './components/Tips';
import Acknowledgements from './components/Acknowledgements';

// ── localStorage helpers ─────────────────────────────────────────
const load  = (key, def) => { try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : def; } catch { return def; } };
const save  = (key, val) => { try { localStorage.setItem(key, JSON.stringify(val)); } catch {} };

const TABS = ['Questions', 'Patterns', 'Tips', 'Acknowledgements'];

export default function App() {
  // ── Persisted state ────────────────────────────────────────────
  const [solved,  setSolved]  = useState(() => load('omg_solved',  {}));
  const [dates,   setDates]   = useState(() => load('omg_dates',   {}));
  const [notes,   setNotes]   = useState(() => load('omg_notes',   {}));
  const [isDark,  setIsDark]  = useState(() => load('omg_dark',    false));

  // ── UI state ───────────────────────────────────────────────────
  const [activeTab,    setActiveTab]    = useState('Questions');
  const [showPatterns, setShowPatterns] = useState(true);
  const [sortCol,      setSortCol]      = useState(null);
  const [sortDir,      setSortDir]      = useState(1);
  const [search,       setSearch]       = useState('');
  const [filterPat,    setFilterPat]    = useState('all');
  const [filterDiff,   setFilterDiff]   = useState('all');
  const [filterComp,   setFilterComp]   = useState('all');

  // ── Sync dark mode to DOM ──────────────────────────────────────
  useEffect(() => {
    document.body.classList.toggle('dark', isDark);
    save('omg_dark', isDark);
  }, [isDark]);

  // ── Persist data ───────────────────────────────────────────────
  useEffect(() => { save('omg_solved', solved); }, [solved]);
  useEffect(() => { save('omg_dates',  dates);  }, [dates]);
  useEffect(() => { save('omg_notes',  notes);  }, [notes]);

  // ── Handlers ───────────────────────────────────────────────────
  const handleCheck = useCallback((id, checked) => {
    setSolved(prev => { const n = {...prev}; if(checked) n[id]=true; else delete n[id]; return n; });
    setDates(prev  => {
      const n = {...prev};
      if(checked) n[id] = new Date().toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
      else delete n[id];
      return n;
    });
  }, []);

  const handleNoteChange = useCallback((id, text) => {
    setNotes(prev => { const n = {...prev}; if(text.trim()) n[id]=text; else delete n[id]; return n; });
  }, []);

  const handleReset = () => {
    if(!window.confirm('Reset ALL progress? This cannot be undone.')) return;
    setSolved({}); setDates({}); save('omg_solved',{}); save('omg_dates',{});
  };

  const handleSort = (col) => {
    if(sortCol === col) setSortDir(d => d * -1);
    else { setSortCol(col); setSortDir(1); }
  };

  // ── Filtered + sorted questions ────────────────────────────────
  const filtered = QUESTIONS.filter(q => {
    if(filterDiff !== 'all' && q.difficulty !== filterDiff) return false;
    if(filterPat  !== 'all' && !q.patterns.includes(filterPat)) return false;
    if(filterComp !== 'all' && !q.companies.includes(filterComp)) return false;
    if(search && !q.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const sorted = sortCol ? [...filtered].sort((a, b) => {
    if(sortCol === 'name') return a.name.localeCompare(b.name) * sortDir;
    if(sortCol === 'diff') {
      const o = { Easy:0, Medium:1, Hard:2 };
      return (o[a.difficulty] - o[b.difficulty]) * sortDir;
    }
    if(sortCol === 'date') {
      const da = dates[a.id] || '', db = dates[b.id] || '';
      return da.localeCompare(db) * sortDir;
    }
    return 0;
  }) : filtered;

  // ── Render ─────────────────────────────────────────────────────
  return (
    <>
      {/* HEADER */}
      <header className="omg-header">
        <a className="omg-logo" href="/">
          OhMyGOD
          <span className="omg-logo-super">PATTERNS</span>
        </a>
        <div className="header-right">
          <a
            className="icon-btn"
            href="https://github.com/seanprashad/leetcode-patterns"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
            aria-label="GitHub"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <button
            className="dark-btn"
            onClick={() => setIsDark(d => !d)}
            title="Toggle dark mode"
            aria-label="Toggle dark mode"
          >
            <div className="dark-knob" />
          </button>
        </div>
      </header>

      {/* TABS */}
      <div className="omg-tabs">
        {TABS.map(tab => (
          <div
            key={tab}
            className={`omg-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
            role="tab"
            aria-selected={activeTab === tab}
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && setActiveTab(tab)}
          >{tab}</div>
        ))}
      </div>

      {/* MAIN */}
      <main className="omg-main">

        {activeTab === 'Questions' && (
          <>
            <StatsPanel solved={solved} dates={dates} onReset={handleReset} />
            <FiltersBar
              search={search}       onSearch={setSearch}
              pattern={filterPat}   onPattern={setFilterPat}
              diff={filterDiff}     onDiff={setFilterDiff}
              company={filterComp}  onCompany={setFilterComp}
              showPatterns={showPatterns}
              onTogglePatterns={() => setShowPatterns(p => !p)}
            />
            <QuestionTable
              questions={sorted}
              solved={solved}
              dates={dates}
              notes={notes}
              showPatterns={showPatterns}
              onCheck={handleCheck}
              onNoteChange={handleNoteChange}
              sortCol={sortCol}
              sortDir={sortDir}
              onSort={handleSort}
            />
          </>
        )}

        {activeTab === 'Patterns' && (
          <PatternFrequencies solved={solved} />
        )}

        {activeTab === 'Tips' && <Tips />}

        {activeTab === 'Acknowledgements' && <Acknowledgements />}

      </main>

      {/* FOOTER */}
      <footer className="omg-footer">
        <div className="footer-logo">OhMyGOD</div>
        <div className="footer-meta">
          Built by grinders, for grinders.<br />
          Fork it. Add more. Break it. ⚡
        </div>
      </footer>
    </>
  );
}
