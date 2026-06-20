---
key: glasses
name: "Sudonit Glasses"
verb: build
oneLine: "A module that turns the glasses you already own into smart glasses."
order: 3
status: in-progress
youtube: "https://youtube.com/@Sudo_0nigiri"
lead: "Sudonit is a small module that clips onto your ordinary glasses and makes them smart. Not a new pair of glasses — a lightweight pod: a camera, a speaker, Wi-Fi, a tiny computer and a button. It attaches to the temple arm of the frames you already wear.\n\nWant to know about something in front of you? Press the button. The camera sees what you see, and a voice in your ear answers. And the point is this: you don't throw away the glasses you love and buy someone else's. You just add intelligence to your own."
points:
  - { t: "Your glasses stay yours", d: "It's a module, not a new frame. No proprietary Sudonit glasses — it clips onto the ones you already wear." }
  - { t: "Move it between glasses", d: "Sunglasses in the morning, reading glasses in the evening. The module comes with you in a couple of seconds." }
  - { t: "It's your hardware", d: "Buy it once and it's yours. You can open it, repair it, swap a part. Not a sealed box." }
  - { t: "You choose the AI", d: "Your own key, a convenient service, or your own server. No lock-in to a single company." }
  - { t: "No mandatory subscription", d: "The idea is simple: buy the hardware and it works. Paid services are only for convenience, and only if you want them." }
  - { t: "All on your head, nothing in your pocket", d: "Camera, computer, battery and speaker all live in the module. The battery sits behind the ear to balance the camera at the front, so it doesn't drag on your nose. No wires, no box in your pocket." }
howSteps:
  - "You press the button on the module."
  - "The camera captures what's in front of you."
  - "The image goes over Wi-Fi to your phone, which passes it to an AI."
  - "The AI understands the image and answers."
  - "The answer plays through a small speaker in your ear."
howNote: "And with no phone nearby, the module is still alive: it knows the time, remembers its settings, and can capture. The phone makes it smarter — it doesn't run it."
v1Included:
  - "Look, ask — hear the answer (the headline idea)."
  - "Works on its own, no phone: clock, settings, capture on a button press."
  - "Audio through the built-in speaker."
  - "A Wi-Fi link to the phone and simple setup."
  - "One-button control."
v1Excluded:
  - "A near-eye display — experimental for now; a real feature in the second version."
  - "A microphone and voice trigger — the button is enough for the first version."
  - "A polished enclosure — honest bracket-and-build for now."
  - "A finished app — the first demos run through a laptop."
  - "AI inside the glasses and always-listening — that comes later."
v1Hardware: "An ESP32-S3 microcontroller (the tiny computer), an OV5640 camera, a MAX98357A speaker/amplifier, Wi-Fi, one button, and a 3D-printed bracket onto ordinary glasses. Cheap on purpose: the phone does the heavy AI, not expensive chips inside."
principles:
  - { t: "Ownership", d: "Buy it and it's yours. It keeps working after purchase, with no mandatory payments." }
  - { t: "Repairability", d: "Parts are replaced, not glued shut. The battery is a service part; the bracket can be reprinted." }
  - { t: "Modularity", d: "Different batteries, microphones, audio, and displays later. Replaceable beats sealed." }
  - { t: "Autonomy", d: "The glasses are a standalone device. The phone and the cloud extend it — they don't define it." }
  - { t: "Privacy by your choice", d: "Your data is yours. You decide where your AI and your images live." }
  - { t: "Openness", d: "Open firmware and docs, with room for community-made and official accessories." }
aiLead: "The glasses can't run a large AI on their own — that's honestly too much for a tiny device. So the phone passes the request to the AI you chose. There are several ways, with no lock-in to anyone:"
aiOptions:
  - { t: "Your own key", d: "Connect your own AI account — the request goes straight to the provider you chose. Maximum control." }
  - { t: "Hosted Sudonit", d: "A convenient option for people who don't want to manage a key. Planned as an optional paid service." }
  - { t: "Your own server", d: "Point the glasses at a local or self-run model — for full control over your data." }
  - { t: "Provider-agnostic", d: "Sudonit doesn't depend on one company. Providers can be swapped." }
roadmap:
  - { ver: "V1", title: "The honest prototype — for me", body: "Audio instead of a screen: look, ask, hear. Built by hand, nothing extra — to prove the idea is even alive." }
  - { ver: "V2", title: "For enthusiasts", body: "The same, but built cleanly: no loose wires, a real enclosure, a battery that lasts close to a day. A small display, a microphone and an app arrive." }
  - { ver: "V3", title: "For ordinary people", body: "Looks like normal glasses. The display \"disappears\": bright in daylight, invisible to onlookers. A full assistant — still phone-brokered and privacy-respecting." }
ecosystem:
  - "Different batteries — for different needs."
  - "Printable accessories from the community."
  - "Replacement parts: the battery, the bracket and other wear items."
  - "Mounts for different frame styles."
  - "Community-made hardware."
  - "Official parts and upgrades."
faq:
  - { q: "Is it a pair of glasses?", a: "No. It's a module that attaches to your glasses. There's no Sudonit frame to buy — and that's on purpose." }
  - { q: "Do I have to buy special frames?", a: "No. That's the whole point: you keep your own glasses and just add the module to them." }
  - { q: "Can I move it between different glasses?", a: "Yes. Sunglasses, reading glasses, your nice frames for the evening — one module moves between them." }
  - { q: "Does it have a screen?", a: "Not in the first version — it's all audio: you hear the answer. A display is experimental for now and becomes a real feature later." }
  - { q: "Does it work without my phone?", a: "Its own functions, yes: clock, settings, capture on a button press. The AI needs the phone, because heavy AI doesn't fit in the glasses." }
  - { q: "Does it record all the time?", a: "No. It's a press-to-ask device, not a recorder. Always-listening is deliberately left out of the first version." }
  - { q: "Can I repair it and swap the battery?", a: "Yes. The module is meant to be open: the battery is a service part, parts are replaceable, and the bracket can be reprinted." }
  - { q: "Will there be a subscription?", a: "No mandatory one. Buy the hardware and it works. Paid services like hosted AI are only for convenience, and only if you want them." }
  - { q: "How much does it cost, and when can I buy it?", a: "There's no price yet and no launch date — it's an early, open project. Honestly: it's in development." }
  - { q: "Why not just buy Ray-Ban Meta?", a: "It's not about \"better\" head-on. If you want a finished, sealed gadget, that's a fine choice. Sudonit is about something else: your glasses, your hardware, your AI — openness and ownership." }
why: "Smart glasses are coming — but the ones on sale today are closed boxes. You buy their frame, run their cloud, live by their rules. Something breaks or the company moves on, and you're left with a sealed thing that was never really yours.\n\nGlasses are personal. People pick frames they love and wear them every day. You should be able to make your own glasses smart, keep the device when you switch frames, open it up and fix it, swap the battery, and decide for yourself where the AI runs.\n\nMy reference is the ThinkPad, but for smart glasses: less shiny on day one, but open, fixable, upgradable, and genuinely yours. And honestly: this is my first big project. I'm learning by building it with my own hands."
now: "Right now I'm buying the components for the first prototype. Next: build it and check that the idea is alive."
nextSteps:
  - "Buy the components for the first prototype"
  - "Build the first working prototype"
  - "Test it on ordinary glasses and show the process on YouTube"
---
