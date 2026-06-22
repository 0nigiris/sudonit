---
key: repair
name: "Computer help"
verb: fix
oneLine: "Computers, phones, setup — I'll fix it, set it up, explain it."
order: 1
status: available
pricing: tiers
tiers:
  - group: "💻 Computers & laptops"
    name: "Slow computer — I'll speed it up"
    price: "from 25€"
    when:
      - "Takes more than 5 minutes to start"
      - "Programs open slowly"
      - "Viruses or pop-up ads showed up"
    what:
      - "Clear junk out of startup"
      - "Clean out system clutter"
      - "Remove viruses and adware"
    gives:
      - { t: "Fast start", d: "Boots in seconds" }
      - { t: "Runs smoothly", d: "No freezing" }
      - { t: "Clean", d: "No viruses or ads" }
  - group: "💻 Computers & laptops"
    name: "Full clean-up & setup"
    price: "from 35€"
    when:
      - "The computer is old and very slow"
      - "A lot has piled up"
      - "You want it like new"
    what:
      - "Full diagnostics"
      - "Clear out everything unnecessary"
      - "Tune it for speed"
      - "Explain what was going on"
    gives:
      - { t: "Runs fast", d: "Noticeably faster" }
      - { t: "Tidy", d: "Everything in order" }
      - { t: "Clear", d: "I'll tell you what I did" }
  - group: "💻 Computers & laptops"
    name: "Frozen solid — I'll reinstall it"
    price: "from 45€"
    when:
      - "The computer won't start"
      - "Blue screen"
      - "A virus broke the system"
    what:
      - "Save your files and photos"
      - "Install a clean Windows"
      - "Install the programs you need"
      - "Set it up from scratch"
    gives:
      - { t: "Like new", d: "Runs fast" }
      - { t: "Files intact", d: "Nothing gets lost" }
      - { t: "Clean", d: "Only what you need" }
  - group: "🔧 Repairs & parts"
    name: "Slow to boot — I'll add a fast drive"
    price: "from 30€"
    when:
      - "The computer takes 10+ minutes to start"
      - "Files open slowly"
    what:
      - "Pick the right drive"
      - "Install it carefully"
      - "Move your system over"
    gives:
      - { t: "Boots in 15 seconds", d: "Instead of 10 minutes" }
      - { t: "Files open instantly", d: "No more waiting" }
  - group: "🔧 Repairs & parts"
    name: "Cracked laptop screen — I'll replace it"
    price: "from 45€"
    when:
      - "The screen is cracked or shattered"
      - "Lines or spots on the screen"
    what:
      - "Carefully take it apart"
      - "Fit a new screen"
      - "Reassemble with no marks"
    gives:
      - { t: "Screen like new", d: "No cracks" }
      - { t: "Tidy", d: "Everything back in place" }
  - group: "🔧 Repairs & parts"
    name: "Noisy & overheating — I'll clean it"
    price: "from 30€"
    when:
      - "The fan is very loud"
      - "The laptop is very hot"
      - "It shuts off from the heat"
    what:
      - "Open it up and clean out the dust"
      - "Replace the thermal paste"
      - "Check the temperature"
    gives:
      - { t: "Quiet", d: "No constant noise" }
      - { t: "Cool", d: "No overheating" }
      - { t: "Lasts longer", d: "Overheating kills hardware" }
  - group: "🔧 Repairs & parts"
    name: "Won't charge — I'll fix the port"
    price: "from 40€"
    when:
      - "The charger doesn't seat properly"
      - "Only works at an angle"
    what:
      - "Check the port"
      - "Replace it if needed"
      - "Test the charging"
    gives:
      - { t: "Charges reliably", d: "In any position" }
      - { t: "Dependable", d: "No holding it at an angle" }
  - group: "🔧 Repairs & parts"
    name: "Need a new PC — I'll build it"
    price: "from 50€"
    when:
      - "You need a new computer"
      - "You don't know what to choose"
      - "You want it for sensible money"
    what:
      - "Find out what it's for and your budget"
      - "Pick reliable parts"
      - "Build and set it up"
      - "Install Windows"
    gives:
      - { t: "Right for you", d: "No wasted spend" }
      - { t: "Ready to go", d: "Turn it on and use it" }
  - group: "🔧 Repairs & parts"
    name: "Loose port or button — I'll re-solder it"
    price: "from 25€"
    when:
      - "The charging or headphone port is wobbly"
      - "A button won't press"
      - "A wire came loose inside"
    what:
      - "Open it up and find the problem"
      - "Re-solder it cleanly"
      - "Test it under load"
    gives:
      - { t: "Works as it should", d: "Stable and dependable" }
      - { t: "Tidy", d: "No signs it was opened" }
  - group: "🔧 Repairs & parts"
    name: "Console is loud or the stick drifts — I'll fix it"
    price: "from 30€"
    when:
      - "Your PS/Xbox roars and overheats"
      - "The stick drifts on its own"
      - "The console shuts off from heat"
    what:
      - "Open it up and clean out the dust"
      - "Replace the thermal paste"
      - "Fix or replace the stick"
    gives:
      - { t: "Quiet and cool", d: "No overheating" }
      - { t: "Precise control", d: "No drift" }
  - group: "📱 Phones & tablets"
    name: "New phone — I'll move your data"
    price: "from 20€"
    when:
      - "You bought a new phone"
      - "You're afraid of losing photos and contacts"
    what:
      - "Move all your contacts"
      - "Move photos and videos"
      - "Set up your accounts"
      - "Check everything's there"
    gives:
      - { t: "Nothing gets lost", d: "All photos, contacts, apps" }
      - { t: "New phone set up", d: "Ready to go" }
  - group: "📱 Phones & tablets"
    name: "Battery drains fast — I'll replace it"
    price: "from 40€"
    when:
      - "You charge it several times a day"
      - "It dies at 20–30%"
    what:
      - "Carefully replace the battery"
      - "Test it afterwards"
    gives:
      - { t: "Lasts all day", d: "Like a new phone" }
      - { t: "No carrying a charger", d: "Back to normal" }
  - group: "📱 Phones & tablets"
    name: "Slow phone — I'll speed it up"
    price: "from 15€"
    when:
      - "The phone has gotten slower"
      - "Apps take a long time to load"
    what:
      - "Delete unneeded files"
      - "Free up space"
      - "Tune the phone"
    gives:
      - { t: "Runs faster", d: "Apps open normally" }
      - { t: "More space", d: "For photos and files" }
  - group: "📱 Phones & tablets"
    name: "Afraid to crack it — I'll fit a screen protector"
    price: "from 10€"
    when:
      - "No screen protector yet"
      - "You've cracked a screen before"
    what:
      - "Fit tempered glass with no bubbles"
    gives:
      - { t: "Screen protected", d: "The glass takes the hit, not the display" }
      - { t: "Tidy", d: "No bubbles" }
  - group: "🐧 Systems & data"
    name: "Old laptop crawling — I'll revive it with Linux"
    price: "from 30€"
    when:
      - "An old computer barely runs Windows"
      - "You'd like Linux as a second system"
      - "You need a light system for school or work"
    what:
      - "Pick a suitable Linux"
      - "Install it alongside Windows or instead"
      - "Set it up for your needs"
      - "Show you how to use it"
    gives:
      - { t: "The old PC flies again", d: "A light system" }
      - { t: "Two systems to choose from", d: "If you want" }
  - group: "🐧 Systems & data"
    name: "Lost photos and files — I'll try to get them back"
    price: "from 30€"
    when:
      - "You deleted something important by accident"
      - "A USB stick or drive won't open"
      - "The system died with your data inside"
    what:
      - "Check the drive"
      - "Try to recover the data"
      - "If it can't be done — I'll tell you honestly"
    gives:
      - { t: "A chance to get it back", d: "Photos, documents, files" }
      - { t: "Honest", d: "No charge if it doesn't work" }
  - group: "🐧 Systems & data"
    name: "Your own media centre and storage — I'll set it up"
    price: "from 40€"
    when:
      - "You'd like your own \"Netflix\" at home (Plex/Jellyfin)"
      - "You need shared storage for files"
      - "You're tired of photos scattered across devices"
    what:
      - "Build it from your hardware or parts I pick"
      - "Set up the media server and access"
      - "Show you how to add films and files"
    gives:
      - { t: "Your own films and music", d: "From any device at home" }
      - { t: "All in one place", d: "Files and backups" }
  - group: "🐧 Systems & data"
    name: "Privacy and parental controls — I'll set them up"
    price: "from 20€"
    when:
      - "You'd like more privacy online"
      - "You need parental controls for the kids"
      - "Too much tracking and advertising"
    what:
      - "Set up a VPN on your devices"
      - "Add tracker and ad blocking"
      - "Configure parental controls"
    gives:
      - { t: "Less tracking", d: "And intrusive ads" }
      - { t: "Peace of mind", d: "A safer internet for kids" }
  - group: "🏠 Home & devices"
    name: "Smart home — I'll set it up your way"
    price: "from 25€"
    when:
      - "You bought smart bulbs, plugs, a speaker"
      - "You can't get it all to work together"
      - "You'd like voice or scene control"
    what:
      - "Connect devices to Alexa or Google"
      - "Set up scenes (lights, music, morning)"
      - "Show you how to control it"
    gives:
      - { t: "It all listens to your voice", d: "Lights, music, plugs" }
      - { t: "Handy scenes", d: "Built around your day" }
  - group: "🏠 Home & devices"
    name: "Printer won't print — I'll connect and set it up"
    price: "from 15€"
    when:
      - "You can't get the printer connected"
      - "It prints with errors or not at all"
      - "You need the scanner set up"
    what:
      - "Connect it to your computer and Wi-Fi"
      - "Install the drivers"
      - "Test printing and scanning"
    gives:
      - { t: "Prints from any device", d: "PC and phone" }
      - { t: "No errors", d: "Stable" }
  - group: "🏠 Home & devices"
    name: "Smart TV or streaming box — I'll set it up"
    price: "from 20€"
    when:
      - "A new TV or streaming box"
      - "Apps and channels aren't set up"
      - "You'd like a proper home cinema"
    what:
      - "Connect and update it"
      - "Set up apps and accounts"
      - "Show you how to use it"
    gives:
      - { t: "Ready to watch", d: "Apps and channels" }
      - { t: "Clear", d: "I'll explain the controls" }
  - group: "🏠 Home & devices"
    name: "Security cameras — I'll install and set them up"
    price: "from 30€"
    when:
      - "You want to keep an eye on your home or entrance"
      - "You bought cameras but they aren't set up"
      - "You need access from your phone"
    what:
      - "Place and connect the cameras"
      - "Set up recording and phone access"
      - "Show you how to view them"
    gives:
      - { t: "Visible from your phone", d: "From anywhere" }
      - { t: "Peace of mind", d: "Your home is watched over" }
  - group: "🔑 Accounts & email"
    name: "Forgot your password — I'll recover access"
    price: "from 20€"
    when:
      - "You can't log into email or a social account"
      - "The account is locked"
    what:
      - "Try to recover access"
      - "If it can't be done — I'll tell you honestly"
    gives:
      - { t: "Recovered if possible", d: "I'll do everything I can" }
      - { t: "Honest", d: "No charge if it doesn't work" }
  - group: "🔑 Accounts & email"
    name: "Email not working — I'll set it up"
    price: "from 15€"
    when:
      - "Emails aren't coming through"
      - "Email isn't set up on your phone"
    what:
      - "Set it up on phone and computer"
      - "Check that mail goes through"
    gives:
      - { t: "Works everywhere", d: "On phone and computer" }
      - { t: "Reliable", d: "No lost emails" }
  - group: "🎨 Digital services"
    name: "Need a banner or product card"
    price: "from 20€"
    when:
      - "You need a banner for social media"
      - "You need a product card for a shop"
    what:
      - "Check the style"
      - "Make an eye-catching design"
    gives:
      - { t: "Ready to publish", d: "Use it right away" }
      - { t: "Looks great", d: "Grabs attention" }
  - group: "🎨 Digital services"
    name: "Need a presentation"
    price: "from 30€"
    when:
      - "You need to present a product or service"
      - "You need it for a meeting"
    what:
      - "Clarify the goal"
      - "Make a clean design"
      - "Lay it out logically"
    gives:
      - { t: "Ready to show", d: "Use it right away" }
      - { t: "Clean", d: "Makes a good impression" }
  - group: "🎨 Digital services"
    name: "Need a simple website"
    price: "from 60€"
    when:
      - "You need a one-page site or landing page"
      - "You need a portfolio or a services page"
      - "You'd like a presence online"
    what:
      - "Clarify the goal and the style"
      - "Build a tidy site"
      - "Set it up and publish it"
    gives:
      - { t: "Ready to show", d: "Share the link" }
      - { t: "Tidy", d: "Looks good on a phone" }
  - group: "🎨 Digital services"
    name: "I'll edit video for social media"
    price: "from 20€"
    when:
      - "You need a Reel, a Short, or a clip"
      - "You have footage but no time to edit"
      - "You'd like it tidy and dynamic"
    what:
      - "Cut it together from your footage"
      - "Add text, music, transitions"
      - "Fit it to the right format"
    gives:
      - { t: "Ready to publish", d: "For the right platform" }
      - { t: "Feels alive", d: "Dynamic and clean" }
  - group: "🎨 Digital services"
    name: "I'll brand your channel or socials"
    price: "from 20€"
    when:
      - "You need a banner, avatar, header"
      - "You'd like a consistent channel look"
      - "You need a simple logo"
    what:
      - "Clarify the style"
      - "Make banners and an avatar"
      - "Pull it together into one look"
    gives:
      - { t: "One consistent style", d: "The channel looks whole" }
      - { t: "Ready to upload", d: "Correct sizes" }
  - group: "🎨 Digital services"
    name: "I'll teach you to use AI"
    price: "from 20€"
    when:
      - "You've heard of ChatGPT but never tried it"
      - "You'd like to use AI for work and study"
      - "You don't know where to start"
    what:
      - "Set up the right AI tools"
      - "Show you on your own examples"
      - "Explain it in plain language"
    gives:
      - { t: "You use it confidently", d: "For work and study" }
      - { t: "Saves time", d: "AI takes the busywork" }
priceNote: "These are ballpark figures — the final price depends on the job and is agreed before we start. Hardware is paid for separately."
problem: "Something broke, runs slow, or you just can't work out how to set it up — a computer, a phone, email, a printer, Wi-Fi. That's usually the moment it feels easier to give up or buy new. I'd rather check first whether it can be sorted."
approach: "I don't write a device off before trying to fix it, and I don't overcomplicate what can be said plainly. I work out what's wrong and tell you honestly: it can be fixed or set up — or you're better off replacing it."
whatYouGet: "A working, set-up device and a clear explanation of what was wrong. Before any serious work I back your data up — it stays safe. If it can't be solved, I'll say so right away and won't charge you. You only pay once it all works."
howItWorks: "You tell me what happened — I ask a couple of questions and give a rough price. Then I sort it remotely (TeamViewer / AnyDesk) or in person in Alicante. We check the result together — and only then do you pay."
---
