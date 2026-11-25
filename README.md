# Kanishka Singh — Interior Design Portfolio

A minimal, animated Next.js portfolio for **Kanishka Singh**, Interior Designer.

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000)

---

## 📁 Adding Your PDF Designs

1. Copy your PDF files into `/public/designs/`  
   Example: `/public/designs/living-room-project.pdf`

2. Open [`src/components/Work.tsx`](src/components/Work.tsx) and edit the `designs` array:

```ts
const designs: DesignItem[] = [
  {
    id: "1",
    title: "Living Room Redesign",
    description: "Brief description of the project.",
    category: "Residential",   // used for filter tabs
    pdfPath: "/designs/living-room-project.pdf",
    thumbnailColor: "from-amber-900/20 to-stone-800/20", // Tailwind gradient classes
  },
  // …add more
];
```

Categories used in filter tabs are auto-generated from the `category` field — no extra config needed.

---

## 🎨 Customisation

| File | What to edit |
|------|-------------|
| `src/components/Work.tsx` | PDF list & card metadata |
| `src/app/globals.css` | Global colours & font variables |
| `tailwind.config.ts` | Colour tokens (`gold`, `cream`, `charcoal`) |
| `src/components/About.tsx` | Bio text & experience timeline |
| `src/components/Skills.tsx` | Skill groups & items |
| `src/components/Contact.tsx` | Contact details |

---

## 📦 Stack

- **Next.js 15** (App Router)  
- **Framer Motion** – scroll-triggered animations  
- **react-pdf** – inline PDF rendering  
- **Tailwind CSS** – styling  
- **TypeScript**

# kanshika-portfolio
