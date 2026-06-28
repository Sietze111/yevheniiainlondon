import { useState, useEffect } from "react";
import type { Stop } from "./components/StopList";
import { STOPS } from "./data/stops";
import { ProgressBar } from "./components/ProgressBar";
import { StopList } from "./components/StopList";
import { LondonMap } from "./components/Map";
import { COLORS } from "./components/StampSvg";
import { Map as MapIcon, List as ListIcon, Download } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

const STORAGE_KEY = "visitedStops";

function App() {
  const [visited, setVisited] = useState<Set<string>>(new Set());
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedStop, setSelectedStop] = useState<Stop | null>(null);
  const [mobileView, setMobileView] = useState<"map" | "list">("map");
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  // Listen to beforeinstallprompt event for PWA installation
  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to install prompt: ${outcome}`);
    setDeferredPrompt(null);
  };

  // Load visited from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        setVisited(new Set(JSON.parse(raw)));
      }
    } catch (e) {
      console.error("Failed to load visited stops", e);
    }
  }, []);

  // Save visited to localStorage
  const saveVisited = (newVisited: Set<string>) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...newVisited]));
    } catch (e) {
      console.error("Failed to save visited stops", e);
    }
  };

  const handleToggleVisited = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newVisited = new Set(visited);
    if (newVisited.has(id)) {
      newVisited.delete(id);
    } else {
      newVisited.add(id);
    }
    setVisited(newVisited);
    saveVisited(newVisited);
  };

  const handleStopClick = (stop: Stop) => {
    setSelectedStop(stop);
    if (window.innerWidth < 768) {
      setMobileView("map");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F3ECD9] text-[#1B2A4A] font-sans antialiased">
      {/* Header / Masthead */}
      <header className="px-5 py-6 md:px-8 md:py-7 bg-[#F3ECD9] border-b-2 border-[#1B2A4A] relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
            <div>
              <p className="font-mono text-[10px] md:text-xs tracking-[0.14em] uppercase text-[#B6332B] font-semibold mb-1.5">
                A Self-Guided Walking &amp; Wonder Map · 10 Days in London
              </p>
              <h1 className="font-serif text-3xl md:text-4xl font-extrabold tracking-tight">
                Yevheniia's London Passport
              </h1>
            </div>
            {deferredPrompt && (
              <button
                onClick={handleInstallClick}
                className="bg-[#B6332B] text-white border-[1.5px] border-[#B6332B] hover:bg-[#FBF6E9] hover:text-[#B6332B] rounded-full px-5 py-2 font-mono text-[11px] tracking-wider transition-all duration-150 flex items-center gap-2 font-bold shadow-sm hover:-translate-y-0.5 cursor-pointer self-start"
              >
                <Download size={14} />
                Install Passport App
              </button>
            )}
          </div>
          <p className="max-w-2xl text-sm md:text-[15px] leading-relaxed text-[#46506b] mb-5">
            First time in London, first ten days to fill. Twenty-six stops, stamped and sorted into four kinds of wonder: the Wizarding World, the Page &amp; Screen spots, the unmissable Icons, and the Hidden Gems most visitors walk straight past.
          </p>

          {/* Filter Chips */}
          <div className="flex gap-2.5 flex-wrap">
            <button
              onClick={() => setActiveCategory("all")}
              className={`border-[1.5px] border-[#1B2A4A] rounded-full px-4 py-1.5 font-mono text-[11px] tracking-wider transition-all duration-150 flex items-center gap-2 ${
                activeCategory === "all"
                  ? "bg-[#1B2A4A] text-white"
                  : "bg-[#FBF6E9] hover:-translate-y-0.5"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-current" />
              All Stamps
            </button>
            <button
              onClick={() => setActiveCategory("magic")}
              className={`border-[1.5px] border-[#1B2A4A] rounded-full px-4 py-1.5 font-mono text-[11px] tracking-wider transition-all duration-150 flex items-center gap-2 ${
                activeCategory === "magic"
                  ? "bg-[#A8842C] text-white border-[#A8842C]"
                  : "bg-[#FBF6E9] hover:-translate-y-0.5"
              }`}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: activeCategory === "magic" ? "#fff" : COLORS.magic }}
              />
              Wizarding World
            </button>
            <button
              onClick={() => setActiveCategory("lit")}
              className={`border-[1.5px] border-[#1B2A4A] rounded-full px-4 py-1.5 font-mono text-[11px] tracking-wider transition-all duration-150 flex items-center gap-2 ${
                activeCategory === "lit"
                  ? "bg-[#6B4E71] text-white border-[#6B4E71]"
                  : "bg-[#FBF6E9] hover:-translate-y-0.5"
              }`}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: activeCategory === "lit" ? "#fff" : COLORS.lit }}
              />
              Page &amp; Screen
            </button>
            <button
              onClick={() => setActiveCategory("classic")}
              className={`border-[1.5px] border-[#1B2A4A] rounded-full px-4 py-1.5 font-mono text-[11px] tracking-wider transition-all duration-150 flex items-center gap-2 ${
                activeCategory === "classic"
                  ? "bg-[#B6332B] text-white border-[#B6332B]"
                  : "bg-[#FBF6E9] hover:-translate-y-0.5"
              }`}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: activeCategory === "classic" ? "#fff" : COLORS.classic }}
              />
              London Icons
            </button>
            <button
              onClick={() => setActiveCategory("gem")}
              className={`border-[1.5px] border-[#1B2A4A] rounded-full px-4 py-1.5 font-mono text-[11px] tracking-wider transition-all duration-150 flex items-center gap-2 ${
                activeCategory === "gem"
                  ? "bg-[#3E5C3A] text-white border-[#3E5C3A]"
                  : "bg-[#FBF6E9] hover:-translate-y-0.5"
              }`}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: activeCategory === "gem" ? "#fff" : COLORS.gem }}
              />
              Hidden Gems
            </button>
          </div>
        </div>

        {/* Decorative bottom line */}
        <div className="absolute left-5 right-5 bottom-1.5 h-[1px] bg-repeating-dots opacity-40" />
      </header>

      {/* Main Workspace Layout */}
      <div className="flex-1 flex flex-col md:flex-row min-h-0 relative">
        {/* Sidebar Container */}
        <aside
          className={`w-full md:w-[380px] md:border-r-2 md:border-[#1B2A4A] flex-shrink-0 flex flex-col bg-[#F3ECD9] ${
            mobileView === "list" ? "block" : "hidden md:flex"
          }`}
        >
          <div className="overflow-y-auto flex-1 px-4 py-5 md:px-6 md:py-5 max-h-[calc(100vh-220px)] md:max-h-[calc(100vh-188px)] space-y-4">
            <div className="text-[13px] leading-relaxed text-[#46506b] bg-[#FBF6E9] border border-[#D8C9A0] rounded-xl p-3.5 shadow-sm">
              <strong className="text-[#1B2A4A]">How to use:</strong> tap a stamp on the map, or pick a stop from the list below to fly straight to it. Tap the circle next to a name to mark it visited as you go.
            </div>

            <ProgressBar visitedCount={visited.size} totalCount={STOPS.length} />

            <StopList
              stops={STOPS}
              visited={visited}
              onToggleVisited={handleToggleVisited}
              onStopClick={handleStopClick}
              activeCategory={activeCategory}
            />
          </div>
        </aside>

        {/* Map Container */}
        <main
          className={`flex-1 flex flex-col min-h-[50vh] md:min-h-0 relative ${
            mobileView === "map" ? "block" : "hidden md:block"
          }`}
        >
          <div className="absolute inset-0 w-full h-full">
            <LondonMap
              stops={STOPS}
              activeCategory={activeCategory}
              selectedStop={selectedStop}
              onClearSelectedStop={() => setSelectedStop(null)}
            />
          </div>
        </main>

        {/* Mobile View Toggle Tabs */}
        <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 bg-[#1B2A4A] text-[#F3ECD9] rounded-full shadow-lg border border-[#D8C9A0]/20 flex items-center p-1 z-[9999]">
          <button
            onClick={() => setMobileView("map")}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all ${
              mobileView === "map" ? "bg-[#F3ECD9] text-[#1B2A4A] font-bold" : "text-[#F3ECD9]/80"
            }`}
          >
            <MapIcon size={14} />
            Map View
          </button>
          <button
            onClick={() => setMobileView("list")}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all ${
              mobileView === "list" ? "bg-[#F3ECD9] text-[#1B2A4A] font-bold" : "text-[#F3ECD9]/80"
            }`}
          >
            <ListIcon size={14} />
            Stops List
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="font-mono text-[10px] text-[#46506b] px-5 py-4 md:px-8 border-t border-[#D8C9A0] bg-[#F3ECD9] z-10 flex flex-col md:flex-row md:justify-between gap-2">
        <div>
          Map data &amp; tiles &copy;{" "}
          <a
            href="https://www.openstreetmap.org/copyright"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            OpenStreetMap
          </a>{" "}
          contributors
        </div>
        <div>Stamps are hand-drawn vector illustrations · Built with React &amp; Tailwind</div>
      </footer>
    </div>
  );
}

export default App;
