# QuickDungeonCrawler.com

Astro site with a blog about the Quick Dungeon Crawler Game - it's the official website for the game.

Link: https://quickdungeoncrawler.com

Learn more about the project on the [About page](https://quickdungeoncrawler.com/about).

Press resources are available at [https://quickdungeoncrawler.com/press](https://quickdungeoncrawler.com/press).

GitHub link of the game: https://github.com/Werkstattl/quick-dungeon-crawler-rpg-od


## Development

Install nodeJS and GIT. 
Then git clone this repository locally and run the following commands in your terminal:

| Command             | Action                                                   |
| :------------------ | :------------------------------------------------------- |
| `npm install`       | Installs dependencies                                     |
| `npm run dev`       | Starts local dev server at `localhost:4321`               |
| `npm run build`     | Build your production site to `./dist/`                   |
| `npm run preview`   | Preview your build locally, before deploying              |
| `npm run press:build` | Renders `press-kit/fact-sheet.html` to the press PDF + ZIP |


## Wiki & Guides

The handbook lives at `/wiki/`. Its guides and the FAQ answers are
maintained together in `src/content/wiki/`. Add Markdown or MDX files with the
frontmatter required by `src/content.config.mjs`; categories and their order are
defined in `src/lib/wiki.ts`.

Each guide has one primary `question` and `answer`. That answer is reused on the
wiki overview, FAQ page and article's Quick answer panel. Keep `faqId` unique
and stable so shared answer links continue to work. Use relative guide IDs in
`related`; Astro validates those references during the build.

The initial content was reviewed on 20 September 2026 against game release
**4.2.2** (commit `2affb4b37ec86a248ce2efc4a54f736611cce527`). Each article records
its own `gameVersion`, `reviewed`, pinned `sourceRef` and relevant source paths.
When game rules change, review the affected articles and update those fields
only after verifying the content. Recommendations should be labelled as tips,
and historical blog posts should link to the maintained guide.

The mechanics reference guides (`combat`, `stats`, `gear-rolls`, `loot`) expand
topics raised in a player-supplied **Quick Dungeon Crawler RPG — Game Mechanics
Wiki** PDF. The PDF is background research, not the source of current rules.
The guides were rewritten against the pinned game release. When maintaining
them, distinguish conditional roll odds from whole-item odds, allocated/class
base stats from initial defaults, player from enemy Vampirism, and chest
equipment outcomes from all chest openings. Keep examples scoped to the
mechanic they isolate; do not label simplified examples as full combat models.

`npm run build` also generates the Pagefind full-text index. Only guide content
marked with `data-pagefind-body` is indexed, so old release announcements do
not compete with current answers. Use `npm run build` followed by
`npm run preview` to test search locally; the Astro development server does not
serve the generated search index. Search loads on demand. All articles, FAQ
answers and navigation remain readable without JavaScript.

Before publishing, run `npm run build` and `npm run check:wiki`, then check the
overview, an article and the FAQ on mobile and desktop. Check a search query,
an empty result, a shared FAQ anchor and navigation back from an article.

## Credits

[Accessible Astro Starter](https://github.com/incluud/accessible-astro-starter) 
for top-grade accessibility, SEO and performance
