# Photos (shot list)

Drop real photos here, named by their **shot-list id**, lowercase:

```
a1.jpg   b1.jpg   c1.jpg   e1.jpg   e3.jpg   …
```

(`.jpg .jpeg .png .webp .avif` all work.) As soon as a file lands here, the
matching `PhotoFrame` swaps its placeholder box for the real image —
optimized by Astro's `<Image>`, same framed aspect-ratio, **zero layout
change**. Until then the page keeps the labelled placeholder so layout is real.

Current ids in use (see `PHOTO_BY_KEY` in `src/lib/content.ts` + the section files):

| id | where | suggested shot |
|----|-------|----------------|
| A1 | Hero portrait | Alexander, eye contact, warm light |
| A2 | About / Who | working / hands-on |
| B1 | Repair card + page | a machine mid-repair, opened up |
| C1 | Tutoring card + page | explaining / at a board or screen |
| E1 | Smart Glasses card + page | the build in progress on the bench |
| E3 | English project card + page | planning / notes / ideas |

Match the shot list in the project bible; ids are just filenames — add new
ones freely and reference them from a section via `PhotoFrame id="…"`.
