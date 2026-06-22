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
    price: "from 15€"
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
    price: "from 20€"
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
    price: "from 30€"
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
    price: "from 15€"
    when:
      - "The computer takes 10+ minutes to start"
      - "Files open slowly"
    what:
      - "Pick the right drive"
      - "Install it carefully"
      - "Move your system over"
    gives:
      - { t: "Boots in 15 seconds", d: "Instead of 10 minutes" }
      - { t: "Files fly", d: "Open instantly" }
  - group: "🔧 Repairs & parts"
    name: "Cracked laptop screen — I'll replace it"
    price: "from 30€"
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
    price: "from 15€"
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
    price: "from 25€"
    when:
      - "The charger doesn't seat properly"
      - "Only works at an angle"
    what:
      - "Check the port"
      - "Replace it if needed"
      - "Test the charging"
    gives:
      - { t: "Charges normally", d: "No tricks" }
      - { t: "Reliable", d: "No holding it at an angle" }
  - group: "🔧 Repairs & parts"
    name: "Need a new PC — I'll build it"
    price: "from 40€"
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
  - group: "📱 Phones & tablets"
    name: "New phone — I'll move your data"
    price: "from 15€"
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
    price: "from 30€"
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
    price: "from 10€"
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
  - group: "🔑 Accounts & email"
    name: "Forgot your password — I'll recover access"
    price: "from 15€"
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
    price: "from 10€"
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
    price: "from 15€"
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
    price: "from 20€"
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
priceNote: "These are ballpark figures — the final price depends on the job and is agreed before we start. Hardware is paid for separately."
problem: "Something broke, runs slow, or you just can't work out how to set it up — a computer, a phone, email, a printer, Wi-Fi. That's usually the moment it feels easier to give up or buy new. I'd rather check first whether it can be sorted."
approach: "I don't write a device off before trying to fix it, and I don't overcomplicate what can be said plainly. I work out what's wrong and tell you honestly: it can be fixed or set up — or you're better off replacing it."
whatYouGet: "A working, set-up device and a clear explanation of what was wrong. Before any serious work I back your data up — it stays safe. If it can't be solved, I'll say so right away and won't charge you. You only pay once it all works."
howItWorks: "You tell me what happened — I ask a couple of questions and give a rough price. Then I sort it remotely (TeamViewer / AnyDesk) or in person in Alicante. We check the result together — and only then do you pay."
---
