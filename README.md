# Swayam — Video Editor Portfolio

A cinematic, dark portfolio built with Next.js. It includes a featured showreel and separate Personal Edits and Client Projects galleries with scroll-reveal motion.

## Add your videos

Place your video files in `public/videos/` using these exact names:

- `showcase-reel.mp4` — featured showreel
- `1st.mp4` through `5th.mp4` — Personal Edits
- `6th.mp4` through `10th.mp4` — Client Projects

Keep the original aspect ratios. The two vertical client clips (9th and 10th) are displayed in portrait frames.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before publishing

1. Replace `YOUR_EMAIL@example.com` in `app/page.tsx` with the contact email you want displayed.
2. Only publish client work you have permission to showcase.
3. Add the video files to a video host or your deployment's public assets. Large video files are not included in this source repository.
