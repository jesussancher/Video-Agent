// Professional SVG icons for services and products

interface IconProps {
  size?: number;
  color?: string;
}

export const BrainIcon: React.FC<IconProps> = ({
  size = 40,
  color = "#9DFF20",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2a6 6 0 0 0-6 6c0 1.66.68 3.16 1.76 4.24L12 16.49l4.24-4.25A5.98 5.98 0 0 0 18 8a6 6 0 0 0-6-6z" />
    <path d="M9.5 6.5C9.5 5.12 10.62 4 12 4s2.5 1.12 2.5 2.5" />
    <path d="M12 16.5V22" />
    <path d="M8 20h8" />
    <circle cx="9" cy="8" r="0.5" fill={color} />
    <circle cx="15" cy="8" r="0.5" fill={color} />
    <path d="M9 8c0 1.5 1.5 2.5 3 2.5s3-1 3-2.5" />
  </svg>
);

export const ZapIcon: React.FC<IconProps> = ({
  size = 40,
  color = "#9DFF20",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill={`${color}22`} stroke={color} />
  </svg>
);

export const EyeIcon: React.FC<IconProps> = ({
  size = 40,
  color = "#9DFF20",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" fill={`${color}33`} />
    <circle cx="12" cy="12" r="1" fill={color} />
  </svg>
);

export const FlaskIcon: React.FC<IconProps> = ({
  size = 40,
  color = "#9DFF20",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 3h6" />
    <path d="M10 3v6.5L4 20h16l-6-10.5V3" />
    <path d="M7.5 16h9" />
    <circle cx="10" cy="18" r="0.5" fill={color} />
    <circle cx="14" cy="18" r="0.5" fill={color} />
    <circle cx="12" cy="17" r="0.5" fill={color} />
  </svg>
);

export const CpuIcon: React.FC<IconProps> = ({
  size = 40,
  color = "#9DFF20",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" rx="1" fill={`${color}22`} />
    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
  </svg>
);

export const ShieldIcon: React.FC<IconProps> = ({
  size = 40,
  color = "#9DFF20",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2l8 4v6c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V6l8-4z" fill={`${color}11`} />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const BotIcon: React.FC<IconProps> = ({
  size = 40,
  color = "#9DFF20",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="8" width="18" height="12" rx="3" fill={`${color}11`} />
    <path d="M12 2v4" />
    <circle cx="12" cy="2" r="1" fill={color} />
    <circle cx="9" cy="14" r="1.5" fill={color} />
    <circle cx="15" cy="14" r="1.5" fill={color} />
    <path d="M9 17.5c0 0 1.5 1 3 1s3-1 3-1" />
  </svg>
);

export const NetworkIcon: React.FC<IconProps> = ({
  size = 40,
  color = "#9DFF20",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="5" r="2.5" fill={`${color}22`} />
    <circle cx="5" cy="19" r="2.5" fill={`${color}22`} />
    <circle cx="19" cy="19" r="2.5" fill={`${color}22`} />
    <path d="M12 7.5v3" />
    <path d="M7.5 17L10.5 12.5" />
    <path d="M16.5 17L13.5 12.5" />
    <circle cx="12" cy="12" r="1.5" fill={color} />
  </svg>
);

export const GlobeIcon: React.FC<IconProps> = ({
  size = 40,
  color = "#9DFF20",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <ellipse cx="12" cy="12" rx="4" ry="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10" />
    <path d="M12 2a15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0 4 10" />
  </svg>
);

export const DatabaseIcon: React.FC<IconProps> = ({
  size = 40,
  color = "#9DFF20",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <ellipse cx="12" cy="5" rx="9" ry="3" fill={`${color}15`} />
    <path d="M21 5v6c0 1.66-4.03 3-9 3s-9-1.34-9-3V5" />
    <path d="M21 11v6c0 1.66-4.03 3-9 3s-9-1.34-9-3v-6" />
    <path d="M3 11c0 1.66 4.03 3 9 3s9-1.34 9-3" />
  </svg>
);
