const tintColorLight = "#0066FF"; // Sharp blue
const tintColorDark = "#00CCFF";

export default {
  light: {
    primary: tintColorLight,
    secondary: "#FF0066", // Hot pink
    secondaryLight: "#FF6699", // Light pink
    secondaryDark: "#CC0044", // Dark pink
    accent: "#FFCC00", // Bright yellow
    success: "#00CC66", // Vibrant green
    warning: "#FF6600", // Bright orange
    error: "#FF0033", // Bright red
    background: "#FFFFFF",
    surface: "#F8F9FA",
    text: "#000000",
    subtext: "#666666",
    border: "#E0E0E0",
    tint: tintColorLight,
    tabIconDefault: "#CCCCCC",
    tabIconSelected: tintColorLight,
  },
  dark: {
    primary: tintColorDark,
    secondary: "#FF3399", // Neon pink
    secondaryLight: "#FF6699", // Light pink
    secondaryDark: "#CC0044", // Dark pink
    accent: "#FFD700", // Golden yellow
    success: "#00FF7F", // Spring green
    warning: "#FF8C00", // Dark orange
    error: "#FF3333", // Light red
    background: "#000000",
    surface: "#121212",
    text: "#FFFFFF",
    subtext: "#AAAAAA",
    border: "#333333",
    tint: tintColorDark,
    tabIconDefault: "#666666",
    tabIconSelected: tintColorDark,
  },
} as const;

// Color name reference for documentation
export const colorNames = {
  primary: "Main brand color, sharp blue",
  secondary: "Complementary color, hot pink",
  accent: "Accent color for highlights and CTAs",
  success: "Positive actions and success states",
  warning: "Warning states and attention-needed actions",
  error: "Error states and destructive actions",
  background: "Main background color",
  surface: "Surface/card background color",
  text: "Primary text color",
  subtext: "Secondary text color",
  border: "Border and divider color",
  tint: "Tint color for the app theme",
  tabIconDefault: "Default tab icon color",
  tabIconSelected: "Selected tab icon color",
} as const;
