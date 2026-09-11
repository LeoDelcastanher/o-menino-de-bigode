# o Menino de Bigode — links page

A vaporwave/pixel-art "link in bio" page. Plain HTML/CSS/JS, no build step, no
dependencies to install.

## Files

- [index.html](index.html) — page structure (title, avatar, footer)
- [style.css](style.css) — all visual styling (vaporwave sunset background,
  pixel borders, scanlines, glow effects)
- [links.js](links.js) — **the file you'll edit most.** The list of link
  buttons (label, URL, icon, enabled/disabled)
- [script.js](script.js) — turns `links.js` into the buttons on the page.
  You shouldn't need to touch this for normal edits.

## Adding or editing links

Open [links.js](links.js) and edit the `LINKS` array. Each entry looks like:

```js
{
  label: "Instagram",
  url: "https://instagram.com/o.menino.de.bigode",
  icon: "instagram", // "instagram" | "tiktok" | "youtube" | "link"
}
```

- To turn on YouTube once you have a channel, fill in its `url` and delete
  the `disabled: true` line.
- To add something new (a gallery, a Discord server, a second account),
  copy one of the blocks, paste it into the array, and edit the fields.
  Use `icon: "link"` for anything that isn't Instagram/TikTok/YouTube — it's
  a generic pixel-link icon.
- Reorder buttons by reordering the entries in the array.
- Save the file and refresh the page — no build step needed.

## Previewing locally

Ask Claude Code to open it in the Browser pane, or just double-click
`index.html` to open it in your browser (styling/behavior will look right
either way once you refresh after edits — a couple of effects need a real
`http://` server rather than a `file://` URL to preview identically to how
it'll behave online, but a plain double-click is fine for quick checks).

## Deploying

This is a fully static site — any static host works. Easiest options:

**GitHub Pages** (free, ties to this repo):
1. Push this repo to GitHub.
2. In the repo settings → Pages, set the source to the `main` branch, root
   folder.
3. Your site will be live at `https://<username>.github.io/<repo-name>/`.

**Netlify / Vercel** (free, gives you a custom-ish URL faster):
1. Drag-and-drop this folder onto netlify.com/drop, or connect the GitHub
   repo on either platform.
2. No build command needed — it's static files.

Once it's live, put that URL in your Instagram/TikTok bio.

## Notes

- The pixel mustache avatar, favicon, and social icons are hand-drawn inline
  SVG — no image files to manage or that can go missing.
- The "YouTube — em breve" button is disabled until you add a real URL in
  `links.js`.
