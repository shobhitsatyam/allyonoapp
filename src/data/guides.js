export const GUIDES_DATA = [
  {
    id: 1,
    slug: "how-to-check-app-permissions",
    title: "How to Check & Verify Mobile App Permissions",
    category: "Security Awareness",
    readTime: "4 min read",
    icon: "ShieldAlert",
    tag: "Essential Guide",
    summary: "Understand why standard card and arcade games do NOT need invasive permissions such as SMS access, contact lists, or background mic monitoring.",
    sections: [
      {
        heading: "1. Why Android Permissions Matter for Mobile Gaming",
        content: "When installing digital gaming applications on Android devices, permissions define what hardware and personal data the application can access. Reputable game applications require only minimal permissions necessary for core gameplay — such as network access for multiplayer synchronization and storage cache access for loading graphics."
      },
      {
        heading: "2. Essential vs. Unnecessary Permissions Checklist",
        checklist: [
          { name: "Internet / Network Access", status: "Legitimate", note: "Required to connect to live game servers and verify account credentials." },
          { name: "Vibration / Haptic Feedback", status: "Legitimate", note: "Used for subtle tactile cues during card dealing or spin rotations." },
          { name: "Storage / Cache", status: "Legitimate", note: "Caches textures, sound effects, and card skins to reduce data consumption." },
          { name: "Read SMS / Auto-Read OTP", status: "High Risk", note: "Legitimate apps should allow manual OTP entry without requiring full SMS reading privileges." },
          { name: "Contacts List", status: "Unnecessary", note: "Card games do not require access to your personal phonebook to function." },
          { name: "Location / Background GPS", status: "Caution", note: "Should only be checked once for regional jurisdiction compliance, never in the background." }
        ]
      },
      {
        heading: "3. Step-by-Step: How to Audit Permissions on Android",
        steps: [
          "Open your Android Settings app.",
          "Navigate to 'Apps' or 'Application Manager'.",
          "Select the gaming application from your installed list.",
          "Tap 'Permissions'.",
          "Review each granted permission and revoke any sensitive access (e.g. Contacts, SMS, Microphone)."
        ]
      },
      {
        heading: "4. Warning Signs of Suspicious APKs",
        content: "If an installation file requests 'Device Administrator' privileges, asks for Accessibility Service permissions, or prompts you to disable Google Play Protect permanently, terminate installation immediately."
      }
    ]
  },
  {
    id: 2,
    slug: "how-to-identify-official-app-sources",
    title: "How to Identify Authentic vs. Cloned APK Sources",
    category: "Source Verification",
    readTime: "5 min read",
    icon: "CheckCircle2",
    tag: "Integrity",
    summary: "Learn how to spot cloned applications, verify SHA-256 digital signatures, and prevent installing modified packages.",
    sections: [
      {
        heading: "1. The Risk of Modified & Repackaged APKs",
        content: "Third-party cloned APKs frequently inject intrusive background adware, cryptocurrency miners, or credential loggers into legitimate game clients. Always ensure you are reviewing packages from authenticated developers."
      },
      {
        heading: "2. Key Indicators of Authentic Packages",
        checklist: [
          { name: "Official HTTPS Domain", status: "Verified", note: "Check the SSL certificate and domain authenticity before downloading any setup file." },
          { name: "Standard Package Naming", status: "Verified", note: "Look for coherent package identifiers (e.g. com.developer.game) rather than random alphanumeric strings." },
          { name: "Consistent File Sizes", status: "Verified", note: "Legitimate game APKs typically range between 25MB - 60MB. Unusually small (<5MB) or huge files can indicate repackaged shells." },
          { name: "Digital Signature Match", status: "Verified", note: "Authentic updates share the same developer signing key as previous releases." }
        ]
      },
      {
        heading: "3. Verification Protocol",
        steps: [
          "Cross-reference the application version number with official patch notes.",
          "Scan downloaded APK files using online threat scanners like VirusTotal before installing.",
          "Ensure your device settings have 'Install Unknown Apps' restricted to single-use prompts rather than globally enabled."
        ]
      }
    ]
  },
  {
    id: 3,
    slug: "understanding-app-categories-mechanics",
    title: "Understanding Digital Game Categories & RNG Systems",
    category: "Game Mechanics",
    readTime: "6 min read",
    icon: "Layers",
    tag: "Educational",
    summary: "A technical breakdown of Rummy variations, Slot reel algorithms, Bingo ball hoppers, and Random Number Generation (RNG).",
    sections: [
      {
        heading: "1. What is Certified Random Number Generation (RNG)?",
        content: "Legitimate digital gaming platforms rely on cryptographically secure pseudorandom number generators (CSPRNG). Evaluated by independent testing agencies such as iTech Labs or GLI, RNG engines guarantee that every card drawn, reel spun, or bingo ball selected is completely unpredictable and unmanipulated."
      },
      {
        heading: "2. Breakdown of Major Categories",
        checklist: [
          { name: "Rummy (Points / Pool / Deals)", status: "Skill & Strategy", note: "Focuses on sequencing 13 cards into valid sets and pure runs with disciplined discard calculation." },
          { name: "Slots & Reels", status: "Random Simulation", note: "Determined by predefined mathematical payout tables (RTP) and reel stop algorithms." },
          { name: "Bingo & Number Draws", status: "Uniform Distribution", note: "Simulates physical ball hoppers with uniform probability across 75 or 90 numbers." },
          { name: "Arcade & Skill Puzzles", status: "Dexterity & Speed", note: "Outcomes determined by player reaction time, cognitive speed, and precision touch input." }
        ]
      },
      {
        heading: "3. Responsible Understanding of Volatility and RTP",
        content: "Return to Player (RTP) is a theoretical statistical calculation across millions of simulation cycles. It does not represent a guarantee for short individual play sessions. Understanding mathematical house edges is key to healthy entertainment."
      }
    ]
  },
  {
    id: 4,
    slug: "account-security-otp-protection",
    title: "Mobile Account Security: OTP & Password Best Practices",
    category: "Account Security",
    readTime: "4 min read",
    icon: "Lock",
    tag: "Security",
    summary: "Protect your mobile game accounts from unauthorized access, social engineering scams, and SIM swap exploits.",
    sections: [
      {
        heading: "1. Never Share One-Time Passwords (OTPs)",
        content: "No authentic game support agent or platform administrator will ever request your login OTP or payment verification code. OTPs are private authorization keys meant solely for your personal device."
      },
      {
        heading: "2. Five Rules for Account Protection",
        checklist: [
          { name: "Unique Passwords", status: "Critical", note: "Use dedicated alphanumeric passwords rather than reusing email or banking passwords." },
          { name: "Beware of Phishing Links", status: "Critical", note: "Do not click on WhatsApp or Telegram messages claiming to offer 'VIP bonuses' via third-party web forms." },
          { name: "Device Lock & Biometrics", status: "Recommended", note: "Secure your phone with PIN or biometric authentication to prevent physical unauthorized access." },
          { name: "Monitor Active Sessions", status: "Recommended", note: "Regularly check logged-in devices in account settings and terminate unrecognized sessions." }
        ]
      }
    ]
  },
  {
    id: 5,
    slug: "responsible-gaming-guidelines",
    title: "Responsible Gaming Awareness & Self-Regulation Guide",
    category: "Player Well-being",
    readTime: "5 min read",
    icon: "HeartHandshake",
    tag: "Essential",
    summary: "Fundamental principles for treating digital games strictly as recreational leisure with time limits, self-exclusion, and budget discipline.",
    sections: [
      {
        heading: "1. The Recreational Mindset",
        content: "Digital games should be viewed exclusively as a form of casual entertainment, comparable to buying a movie ticket. They must NEVER be treated as a source of guaranteed income, career alternative, or financial remedy."
      },
      {
        heading: "2. Core Self-Regulation Principles",
        checklist: [
          { name: "Strict Session Time Limits", status: "Rule 1", note: "Set a dedicated timer (e.g. 30 to 45 minutes) and step away when the alarm sounds." },
          { name: "Zero Loss Chasing", status: "Rule 2", note: "Never increase stakes or play durations to attempt recovering past losses." },
          { name: "Never Borrow or Compromise Essentials", status: "Rule 3", note: "Only use modest leisure funds that do not affect living expenses, savings, or responsibilities." },
          { name: "Cool-Off and Self-Exclusion", status: "Rule 4", note: "Utilize built-in platform cool-off periods or app-blocker tools when taking breaks." }
        ]
      },
      {
        heading: "3. Recognizing Signs of Unhealthy Play",
        content: "If gaming interferes with your sleep, relationships, work productivity, or emotional state, seek help immediately. Several independent helpline services offer free, confidential counseling."
      }
    ]
  },
  {
    id: 6,
    slug: "troubleshooting-app-performance",
    title: "Troubleshooting Lag, Crashes & Network Disconnections",
    category: "Technical Support",
    readTime: "3 min read",
    icon: "Wrench",
    tag: "Optimization",
    summary: "Quick fixes for common Android gaming performance bottlenecks, cache corruption, and latency spikes.",
    sections: [
      {
        heading: "1. Clearing App Cache Safely",
        content: "Over time, temporary texture files can become fragmented, causing stutter during card animations. Go to Settings > Apps > [Game Name] > Storage > Clear Cache."
      },
      {
        heading: "2. Optimizing Network Latency (Ping)",
        steps: [
          "Switch from congested 2.4GHz Wi-Fi to 5GHz or stable 4G/5G mobile data.",
          "Disable background sync for heavy apps (like cloud backups or video downloads).",
          "Turn off battery saver modes that throttle CPU frequency during gaming sessions."
        ]
      }
    ]
  }
];
