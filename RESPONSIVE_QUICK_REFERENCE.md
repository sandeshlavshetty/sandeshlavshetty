================================================================================
QUICK REFERENCE: RESPONSIVE DESIGN PATTERNS
================================================================================

🚀 QUICK START - Copy-Paste Patterns
====================================

HEADING (scales from mobile to desktop):
    className="text-xl sm:text-2xl md:text-[32px]"
    └─ Mobile: 20px | Tablet: 28px | Desktop: 32px

PARAGRAPH (normal text):
    className="text-sm sm:text-base md:text-lg"
    └─ Mobile: 14px | Tablet: 16px | Desktop: 18px

SMALL TEXT (captions, metadata):
    className="text-xs sm:text-sm"
    └─ Mobile: 12px | Tablet: 14px

LARGE TEXT (hero headings):
    className="text-2xl sm:text-3xl md:text-4xl lg:text-[60px]"
    └─ Mobile: 24px | Tablet: 30px | Desktop: 40px | Large: 60px

PADDING - Tight spacing:
    className="p-4 sm:p-6 md:p-8"
    └─ Mobile: 16px | Tablet: 24px | Desktop: 32px

PADDING - Generous spacing:
    className="p-8 sm:p-10 md:p-12"
    └─ Mobile: 32px | Tablet: 40px | Desktop: 48px

GAP - Between items:
    className="gap-3 sm:gap-4 md:gap-6"
    └─ Mobile: 12px | Tablet: 16px | Desktop: 24px

MARGIN TOP:
    className="mt-6 sm:mt-8 md:mt-12"
    └─ Mobile: 24px | Tablet: 32px | Desktop: 48px

BORDER RADIUS - Small:
    className="rounded-lg sm:rounded-xl"
    └─ Mobile: 8px | Tablet: 12px

BORDER RADIUS - Large (cards):
    className="rounded-[24px] sm:rounded-[32px]"
    └─ Mobile: 24px | Tablet: 32px

FLEX LAYOUT - Stack mobile, row tablet+:
    className="flex flex-col sm:flex-row"
    └─ Mobile: Column | Tablet+: Row

FLEX LAYOUT - Space between:
    className="flex flex-col sm:flex-row justify-between"

IMAGE - Responsive sizing:
    className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]"
    └─ Mobile: 80×80 | Tablet: 100×100

IMAGE - Full width responsive:
    className="w-full sm:w-1/2 md:w-1/3"

GRID - Responsive columns:
    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
    └─ Mobile: 2 cols | Tablet: 3 cols | Desktop: 4 cols

MAX WIDTH - Container:
    className="max-w-sm sm:max-w-md md:max-w-4xl"

BUTTON - Responsive:
    className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base"

BUTTON - Full width mobile, auto desktop:
    className="w-full sm:w-auto"

STICKY - Responsive offset:
    className="sticky top-20 sm:top-24 lg:top-28"

DISPLAY - Hide on mobile, show on tablet+:
    className="hidden sm:block"

DISPLAY - Show on mobile, hide on tablet+:
    className="sm:hidden"

DISPLAY - Hidden on large screens:
    className="lg:hidden"

================================================================================
COMPONENT SNIPPET LIBRARY
================================================================================

RESPONSIVE CARD:
----------------
<div className="p-6 sm:p-8 rounded-lg sm:rounded-xl bg-[#0f0f0f] border border-white/5">
  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
    Title
  </h3>
  <p className="text-sm sm:text-base text-gray-400">
    Description text
  </p>
</div>

RESPONSIVE GRID:
----------------
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
  {items.map((item) => (
    <div key={item.id} className="...">
      {item.name}
    </div>
  ))}
</div>

RESPONSIVE MODAL:
-----------------
<div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4 sm:px-6 py-4 sm:py-6 overflow-y-auto">
  <div className="relative w-full max-w-2xl bg-[#111] rounded-xl sm:rounded-2xl p-5 sm:p-8">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
      Modal Title
    </h2>
  </div>
</div>

RESPONSIVE HERO:
----------------
<div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 md:gap-12">
  <div className="flex-1">
    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
      Heading
    </h1>
    <p className="text-sm sm:text-base md:text-lg mt-4">
      Description
    </p>
  </div>
  <div className="flex-1">
    <img src="hero.jpg" className="w-full" />
  </div>
</div>

RESPONSIVE NAV:
---------------
<nav className="hidden lg:flex gap-4 sm:gap-6 md:gap-8">
  {navItems.map((item) => (
    <a key={item.id} href={item.url} className="text-sm sm:text-base">
      {item.label}
    </a>
  ))}
</nav>

RESPONSIVE FORM:
----------------
<form className="space-y-4 sm:space-y-6">
  <div>
    <label className="text-sm font-medium">
      Name
    </label>
    <input className="w-full mt-2 px-4 py-2 rounded-lg border" />
  </div>
  <button className="w-full px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-orange-500">
    Submit
  </button>
</form>

================================================================================
TAILWIND RESPONSIVE REFERENCE
================================================================================

BREAKPOINTS:
├─ (none): 0px → Default/Mobile
├─ sm: 640px → Small devices
├─ md: 768px → Medium devices
├─ lg: 1024px → Large devices
├─ xl: 1280px → Extra large
└─ 2xl: 1536px → 2x large

COMMON UTILITIES:

Display:
• flex, grid, block, hidden
• sm:hidden, md:flex, lg:block

Sizing:
• w-full, w-1/2, w-[200px]
• sm:w-1/3, md:w-1/2

Spacing:
• p-4, m-2, gap-6
• sm:p-6, md:m-8

Typography:
• text-xs, text-sm, text-lg
• font-bold, font-light
• leading-tight, leading-relaxed

Colors:
• bg-white, text-black
• opacity-50, bg-black/80

Sizing:
• rounded-lg, rounded-full
• shadow-md, shadow-lg

Positioning:
• absolute, relative, fixed, sticky
• top-0, left-0, inset-0

================================================================================
MOBILE-FIRST APPROACH RULES
================================================================================

Rule 1: Start with mobile
    <div className="text-sm sm:text-base md:text-lg">
    └─ Base: mobile sized, then enhance

Rule 2: Add complexity up
    <div className="flex flex-col sm:flex-row">
    └─ Mobile simple, tablet enhanced

Rule 3: Hide less important on small screens
    <div className="hidden sm:block">
    └─ Hide on mobile, show on tablet+

Rule 4: Maximize mobile space
    <div className="w-full sm:w-1/2 md:w-1/3">
    └─ Full width mobile, narrower desktop

Rule 5: Test on actual devices
    Always verify on real mobile devices

================================================================================
TROUBLESHOOTING GUIDE
================================================================================

Issue: Text too large on mobile
Solution: Add text sizing breakpoint
    ❌ <p className="text-lg">Text</p>
    ✅ <p className="text-sm sm:text-lg">Text</p>

Issue: Content overflows on mobile
Solution: Add padding and constrain width
    ❌ <div className="p-10">Content</div>
    ✅ <div className="p-4 sm:p-10 max-w-full">Content</div>

Issue: Image distorted on mobile
Solution: Use object-cover and responsive sizing
    ❌ <img src="img.jpg" />
    ✅ <img src="img.jpg" className="w-[80px] h-[80px] object-cover" />

Issue: Buttons not tappable
Solution: Ensure minimum 44px height
    ❌ <button className="px-2 py-1">Button</button>
    ✅ <button className="px-4 py-2 sm:px-6 sm:py-3">Button</button>

Issue: Spacing too cramped
Solution: Increase gap/padding on mobile
    ❌ <div className="gap-4">...</div>
    ✅ <div className="gap-2 sm:gap-4 md:gap-6">...</div>

Issue: Sticky element overlaps content
Solution: Adjust top offset for each breakpoint
    ❌ <div className="sticky top-0">...</div>
    ✅ <div className="sticky top-16 sm:top-20 lg:top-24">...</div>

Issue: Modal doesn't fit on mobile
Solution: Adjust padding and max-height
    ❌ <div className="max-h-[80vh] p-8">...</div>
    ✅ <div className="max-h-[90vh] sm:max-h-[85vh] p-4 sm:p-8">...</div>

Issue: Grid too dense on mobile
Solution: Reduce columns on mobile
    ❌ <div className="grid grid-cols-4">...</div>
    ✅ <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">...</div>

================================================================================
CHECKLIST FOR NEW COMPONENTS
================================================================================

When creating new components, ensure:
☐ Text has responsive sizing (base + sm: + md:)
☐ Padding/margin responds to screen size
☐ Flex direction stacks on mobile (flex-col sm:flex-row)
☐ Images have responsive width/height
☐ Buttons are at least 44px height
☐ Modals fit on mobile (px-4 for mobile padding)
☐ Grids reduce columns on mobile
☐ No fixed widths (use max-width instead)
☐ No horizontal overflow
☐ Touch targets properly spaced
☐ Tested on 375px, 768px, 1024px viewports

================================================================================
PERFORMANCE TIPS
================================================================================

✅ DO:
• Use Tailwind utility classes (already optimized)
• Start with mobile, then enhance
• Use responsive images (srcset, sizes)
• Minimize layout shifts (use aspect-ratio)
• Test performance on real mobile devices

❌ DON'T:
• Add custom media queries (use Tailwind breakpoints)
• Use fixed pixel measurements
• Make components too wide on desktop
• Hide content on mobile (unless truly unnecessary)
• Use heavy fonts on mobile (web safe fonts)

================================================================================
SECTION LINK SHARING PATTERN (NEW)
================================================================================

QUICK SETUP:
    // 1. Add imports
    import { useState, useEffect } from "react";
    import { Link } from "lucide-react";
    
    // 2. Add state
    const [copiedLink, setCopiedLink] = useState(null);
    
    // 3. Add useEffect for hash navigation
    useEffect(() => {
      if (window.location.hash) {
        const sectionId = window.location.hash.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 100);
        }
      }
    }, []);
    
    // 4. Add copy function
    const copyToClipboard = (sectionId) => {
      const url = `${window.location.origin}${window.location.pathname}#${sectionId}`;
      navigator.clipboard.writeText(url);
      setCopiedLink(sectionId);
      setTimeout(() => setCopiedLink(null), 2000);
    };

SHARE BUTTON HTML:
    <button
      onClick={() => copyToClipboard("section-id")}
      className="
        p-2 rounded-lg
        bg-white/5 hover:bg-white/10
        text-white/60 hover:text-white
        transition
        flex items-center gap-2 whitespace-nowrap text-sm
      "
    >
      <Link size={18} />
      <span className="hidden sm:inline">
        {isCopied ? "Copied!" : "Share"}
      </span>
    </button>

SECTION DIV:
    <div id="section-name">
      <!-- Your section content here -->
    </div>

BENEFIT:
    ✅ Share direct links: yoursite.com/page#section-name
    ✅ Auto-scrolls to section when link is opened
    ✅ Users can scroll freely after landing
    ✅ Perfect for recruiters targeting specific categories

================================================================================
Responsive design makes your site work EVERYWHERE! 🎯
================================================================================
