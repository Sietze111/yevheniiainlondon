import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Stop } from "./StopList";
import { StampSvg, COLORS, CAT_LABEL } from "./StampSvg";
import { renderToString } from "react-dom/server";

interface MapProps {
  stops: Stop[];
  activeCategory: string;
  selectedStop: Stop | null;
  onClearSelectedStop: () => void;
}

export const BernMap: React.FC<MapProps> = ({
  stops,
  activeCategory,
  selectedStop,
  onClearSelectedStop,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<globalThis.Map<string, L.Marker>>(
    new globalThis.Map(),
  );

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Create Leaflet map instance
    const mapInstance = L.map(mapContainerRef.current, {
      scrollWheelZoom: true,
    }).setView([46.95421326794626, 7.4741547239042605], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(mapInstance);

    mapRef.current = mapInstance;

    return () => {
      mapInstance.remove();
      mapRef.current = null;
    };
  }, []);

  // Sync Markers
  useEffect(() => {
    const mapInstance = mapRef.current;
    if (!mapInstance) return;

    // Clear existing markers
    markersRef.current.forEach((marker) => {
      mapInstance.removeLayer(marker);
    });
    markersRef.current.clear();

    // Recreate markers based on current category filter
    stops.forEach((stop, index) => {
      // Check category filter
      const show = activeCategory === "all" || stop.cat === activeCategory;
      if (!show) return;

      // Add rotation logic from original HTML
      const rotIcon = ((index * 37) % 13) - 6;
      const rotPopup = ((index * 53) % 9) - 4;

      // Render React component to static HTML string
      const stampHtml = renderToString(
        <div style={{ transform: `rotate(${rotIcon}deg)` }}>
          <StampSvg cat={stop.cat} glyph={stop.glyph} size={40} />
        </div>,
      );

      const icon = L.divIcon({
        html: stampHtml,
        className: "stamp-marker",
        iconSize: [40, 40],
        iconAnchor: [20, 20],
        popupAnchor: [0, -14],
      });

      const popupHtml = renderToString(
        <div className="popup-card w-[250px] font-sans">
          <div className="popup-head flex gap-3 items-center mb-2">
            <div style={{ transform: `rotate(${rotPopup}deg)` }}>
              <StampSvg cat={stop.cat} glyph={stop.glyph} size={58} />
            </div>
            <div>
              <p className="popup-title font-serif font-extrabold text-[16px] leading-tight text-[#1B2A4A]">
                {stop.name}
              </p>
              <span
                className="popup-badge font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full inline-block mt-1"
                style={{
                  backgroundColor: `${COLORS[stop.cat]}22`,
                  color: COLORS[stop.cat],
                  border: `1px solid ${COLORS[stop.cat]}77`,
                }}
              >
                {CAT_LABEL[stop.cat]}
              </span>
            </div>
          </div>
          <p className="popup-blurb text-[13.5px] leading-relaxed text-[#1B2A4A] mb-1">
            {stop.blurb}
          </p>
          <div className="popup-tip text-[12.5px] leading-relaxed bg-[#1B2A4A]/5 border-l-4 border-[#1B2A4A] p-2.5 rounded mt-2 text-[#46506b]">
            <b className="font-mono text-[10px] uppercase tracking-wider text-[#1B2A4A] block mb-0.5">
              Good to know
            </b>
            {stop.tip}
          </div>
        </div>,
      );

      const marker = L.marker([stop.lat, stop.lng], { icon }).addTo(
        mapInstance,
      );
      marker.bindPopup(popupHtml);

      markersRef.current.set(stop.id, marker);
    });
  }, [stops, activeCategory]);

  // Handle flying to selected stop
  useEffect(() => {
    const mapInstance = mapRef.current;
    if (!mapInstance || !selectedStop) return;

    // Fly to coordinates
    mapInstance.flyTo([selectedStop.lat, selectedStop.lng], 15, {
      duration: 0.8,
    });

    // Find marker and open popup
    const marker = markersRef.current.get(selectedStop.id);
    if (marker) {
      setTimeout(() => {
        marker.openPopup();
        onClearSelectedStop();
      }, 700);
    } else {
      onClearSelectedStop();
    }
  }, [selectedStop, onClearSelectedStop]);

  return (
    <div className="relative w-full h-full min-h-[40vh] md:min-h-0 bg-[#e7ddc4]">
      <div
        ref={mapContainerRef}
        className="w-full h-full"
        style={{ minHeight: "inherit" }}
      />
    </div>
  );
};
