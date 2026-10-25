/**
 * Small inline outline icon set for content cards. Every icon is drawn on a
 * 24px grid with a 2px round stroke, hidden from assistive tech (the adjacent
 * text carries the meaning), and takes its color from `currentColor`. No icon
 * library and no emoji.
 */
const PATHS = {
  briefcase: [
    "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
    "M4 7h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z",
  ],
  "map-pin": [
    "M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z",
    "M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  ],
  banknote: [
    "M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z",
    "M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
    "M6 12h.01M18 12h.01",
  ],
  route: [
    "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",
    "M9 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
    "M21 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  ],
  "graduation-cap": ["M22 10v6", "M2 10l10-5 10 5-10 5Z", "M6 12v5c3 3 9 3 12 0v-5"],
  wrench: [
    "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z",
  ],
  "clipboard-check": [
    "M9 2h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z",
    "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
    "m9 14 2 2 4-4",
  ],
  "clipboard-list": [
    "M9 2h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z",
    "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
    "M12 11h4M12 16h4M8 11h.01M8 16h.01",
  ],
  calendar: [
    "M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z",
    "M16 2v4M8 2v4M3 10h18",
  ],
  send: ["m22 2-7 20-4-9-9-4Z", "M22 2 11 13"],
  "shield-check": [
    "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z",
    "m9 12 2 2 4-4",
  ],
  clock: ["M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z", "M12 6v6l4 2"],
  archive: [
    "M3 3h18a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z",
    "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",
    "M10 12h4",
  ],
  truck: [
    "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
    "M15 18H9",
    "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
    "M9 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
    "M19 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
  ],
  activity: ["M22 12h-4l-3 9L9 3l-3 9H2"],
  camera: [
    "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4Z",
    "M16 13a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
  ],
  smartphone: [
    "M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z",
    "M12 18h.01",
  ],
  info: ["M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z", "M12 16v-4", "M12 8h.01"],
  car: [
    "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",
    "M9 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
    "M19 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
    "M9 17h6",
  ],
  "id-card": [
    "M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z",
    "M10 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
    "M5 16c.5-1.5 2-2 3-2s2.5.5 3 2",
    "M14 10h4M14 14h4",
  ],
  phone: [
    "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z",
  ],
  "help-circle": [
    "M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z",
    "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
    "M12 17h.01",
  ],
  "chevron-right": ["m9 6 6 6-6 6"],
  "arrow-right": ["M5 12h14", "m13 6 6 6-6 6"],
  "arrow-down": ["M12 5v14", "m6 13 6 6 6-6"],
} as const;

export type IconName = keyof typeof PATHS;

export function Icon({
  name,
  size = 24,
  className = "",
}: {
  readonly name: IconName;
  readonly size?: number;
  readonly className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 ${className}`.trim()}
    >
      {PATHS[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
