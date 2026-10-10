# Soans Farm image asset inventory

Audit scope: the 11 routes registered in `src/App.jsx`, every page in `src/pages/`, shared components in `src/components/`, image-related rules in `src/index.css` and `src/App.css`, and files under `public/`.

## Naming, delivery, and status conventions

- Proposed photographic assets live under `public/images/<page-or-category>/` and use unique lowercase kebab-case `.webp` names. For example, `public/images/home/home-farm-aerial-hero.webp`.
- The 46 proposed `.webp` delivery paths below are not present. Current implementation status: Home retains its existing `PlaceholderImage`; non-Home pages contain no placeholder image frames. Shared sections render a real local image only when a suitable `imageSrc` is supplied, otherwise their content remains text-only. Botanical specimen entries render as text cards. See `IMAGE_ASSET_SUMMARY.md` for the photos currently reused and outstanding subjects.
- Unless noted, photograph direction means an authentic Soans Farm or local subject, available light, realistic muted colour, calm editorial composition, and no generic stock substitute. Avoid presenting generated or contemporary material as historical evidence.
- Use one high-resolution master for desktop and mobile; create responsive derivatives only during implementation if file weight or art direction requires them. For image frames use `object-fit: cover`, with the key subject kept inside the central crop-safe area. No separate mobile compositions are required by the current code.
- Minimum source dimensions below are practical starting points, not export dimensions. Do not upscale smaller originals. For archival documents, scan the original at the highest available quality and preserve provenance.
- Shared IDs intentionally describe one file used at multiple placements. Displayed aspect ratios are taken from the current component props/defaults; “21:9”, “16:9”, etc. denote frames, not forced source-file crops.

## Home (`/`)

| Asset ID | Section / purpose / subject and visual direction | Recommended file | Type; frame; orientation; minimum source | Priority; status; code reference |
|---|---|---|---|---|
| IMG-001 | Hero; establish the scale and real place of the estate. Wide elevated view showing cultivated canopy and Moodbidri terrain; keep important landscape detail across the full width. Shared with The Land closing panorama. | `public/images/home/home-farm-aerial-hero.webp` | Full-bleed hero; 21:9; landscape; 3200×1400 px | Essential; missing placeholder; `src/pages/Home.jsx` Home hero and `src/pages/TheLand.jsx` closing visual via `FullWidthImageSection` |
| IMG-002 | Farm overview; communicate a working mixed agricultural landscape. Contemporary broad view with layered planting, paths, and canopy, no staged people. | `public/images/home/home-farm-overview-landscape.webp` | Editorial landscape; 4:3; landscape; 2400×1800 px | Essential; missing placeholder; `src/pages/Home.jsx` introduction / `PlaceholderImage` |
| IMG-003 | Heritage feature; show verified archival evidence of the farm’s history. Prefer a sourced historic farm photograph or a legible archival record; do not label a modern image as historic. | `public/images/home/home-farm-heritage-archive.webp` | Archival portrait; 3:4; portrait; scan/photo at least 2000×2667 px | High; placeholder, provenance needs verification; `src/pages/Home.jsx` heritage feature |
| IMG-004 | Botanical collection feature; communicate living plant diversity. A real tropical specimen or layered foliage with clean, uncluttered framing. | `public/images/home/home-botanical-collection-specimen.webp` | Square editorial; 1:1; square; 1800×1800 px | High; missing placeholder; `src/pages/Home.jsx` botanical collection feature |
| IMG-005 | Crop feature; recognizable estate pineapple cultivation, showing fruit and growing context. Shared with Cultivation’s pineapple feature. | `public/images/cultivation/cultivation-pineapple-plantation.webp` | Crop feature; Home 4:3 and Cultivation 16:9; landscape; 2400×1800 px | Essential; missing placeholder; `src/pages/Home.jsx` cultivation card and `src/pages/Cultivation.jsx` `CropPlantFeature` data |
| IMG-006 | Crop feature; cocoa pods growing on trunk/branches beneath shade canopy. Shared with Cultivation’s cocoa feature. | `public/images/cultivation/cultivation-cocoa-pods-trunk.webp` | Crop feature; Home 4:3 and Cultivation 16:9; landscape; 2400×1800 px | High; missing placeholder; `src/pages/Home.jsx` cultivation card and `src/pages/Cultivation.jsx` `CropPlantFeature` data |
| IMG-007 | Bamboo feature; distinctive bamboo clumps/pathway at Soans Farm, with trunk scale and canopy visible. Shared with Cultivation’s bamboo feature and Oxygen Park section. | `public/images/cultivation/cultivation-bamboo-grove-wide.webp` | Crop/landscape feature; Home 4:3 and Cultivation 16:9; landscape; 2400×1800 px | High; missing placeholder; `src/pages/Home.jsx` crop card and `src/pages/Cultivation.jsx` bamboo feature + Oxygen Park visual |
| IMG-008 | Visitor transition; shaded path through actual plantation/bamboo. Keep path leading into frame, with room for wide crops. Shared across Experiences and Visit pathway placements. | `public/images/experiences/experiences-farm-pathway.webp` | Walk/landscape; Home and feature 16:9, closing 21:9; landscape; 3200×1800 px | High; missing placeholder; `src/pages/Home.jsx` visitor elements, `src/pages/Experiences.jsx` pathway feature + closing visual, `src/pages/Visit.jsx` visitor expectations |
| IMG-009 | Energy & Reflection teaser; depict the actual contemplative structures in their farm setting, without implying medical effects. Shared with Energy & Reflection overview. | `public/images/energy-healing/energy-healing-patterns-landscape.webp` | Feature; Home 16:9 and overview 4:3; landscape; 2400×1800 px | High; missing placeholder; `src/pages/Home.jsx` Energy & Reflection feature and `src/pages/EnergyHealing.jsx` overview block |

The Home Contact section also embeds Google Maps via an external iframe. It is not a locally sourced image; retain it as an external map embed and verify its destination/availability during implementation. Reference: `src/pages/Home.jsx`, Contact section, iframe titled “Find Soans Farm on Google Maps”.

## The Farm (`/the-farm`)

| Asset ID | Section / purpose / subject and visual direction | Recommended file | Type; frame; orientation; minimum source | Priority; status; code reference |
|---|---|---|---|---|
| IMG-010 | Overview; show the real terrain and cultivated character that generations shaped. Contemporary broad estate view, naturally lit. | `public/images/farm/farm-agricultural-landscape.webp` | Editorial landscape; 4:3; landscape; 2400×1800 px | Essential; missing placeholder; `src/pages/TheFarm.jsx` overview `EditorialBlock` |
| IMG-011 | History; depict the early agricultural project using a verified historic photo, map, or document with provenance. If none can be verified, use a clearly identified contemporary scene or omit historical-image claims. | `public/images/farm/farm-early-agricultural-project-archive.webp` | Historical archive; 4:3; landscape or document crop; scan at least 2400 px on longest side | High; placeholder, source/provenance needs verification; `src/pages/TheFarm.jsx` history `EditorialBlock` |
| IMG-012 | Post-1947 diversification; show mixed crops and canopy layers rather than a single-plantation monoculture. | `public/images/farm/farm-diversified-estate-canopy.webp` | Editorial landscape; 4:3; landscape; 2400×1800 px | High; missing placeholder; `src/pages/TheFarm.jsx` expansion/diversification `EditorialBlock` |

## The Land (`/the-land`)

| Asset ID | Section / purpose / subject and visual direction | Recommended file | Type; frame; orientation; minimum source | Priority; status; code reference |
|---|---|---|---|---|
| IMG-013 | Topography; communicate the rolling terrain around Moodbidri. Use a real farm/regional viewpoint with visible slope and scale. | `public/images/land/land-hilly-terrain-moodbidri.webp` | Landscape feature; 4:3; landscape; 2400×1800 px | High; missing placeholder; `src/pages/TheLand.jsx` terrain `EditorialBlock` |
| IMG-014 | Monsoon hydrology; show actual rainwater movement, drainage, retention, or wet-season canopy. Avoid a generic rain image. | `public/images/land/land-monsoon-water-management.webp` | Landscape feature; 4:3; landscape; 2400×1800 px | High; missing placeholder; `src/pages/TheLand.jsx` climate/hydrology `EditorialBlock` |
| IMG-015 | Biodiversity; show canopy layers and understory habitat within the cultivated estate. | `public/images/land/land-biodiversity-canopy-understory.webp` | Landscape feature; 4:3; landscape; 2400×1800 px | High; missing placeholder; `src/pages/TheLand.jsx` biodiversity `EditorialBlock` |

The closing panoramic landscape uses shared asset **IMG-001**. The “Layered Crop Architecture” section is text/cards only and currently has no image placement.

## Cultivation (`/cultivation`)

| Asset ID | Section / purpose / subject and visual direction | Recommended file | Type; frame; orientation; minimum source | Priority; status; code reference |
|---|---|---|---|---|
| IMG-016 | Areca nut crop; show tall slender palms and plantation-row structure, including ground/canopy context. | `public/images/cultivation/cultivation-areca-nut-plantation.webp` | Crop feature; 16:9; landscape; 2400×1350 px | High; missing placeholder; `src/pages/Cultivation.jsx` `CropPlantFeature` array |

The pineapple, cocoa, and bamboo features use shared **IMG-005**, **IMG-006**, and **IMG-007** respectively. The Oxygen Park/Bamboo Grove image placement also uses **IMG-007**. No separate additional photo is required for those repeated subjects.

## Botanical Garden (`/botanical-garden`, page heading “Botanical Collection”)

| Asset ID | Section / purpose / subject and visual direction | Recommended file | Type; frame; orientation; minimum source | Priority; status; code reference |
|---|---|---|---|---|
| IMG-017 | Collection development; establish the farm’s living collection and layered tropical foliage. | `public/images/botanical-garden/botanical-garden-collection-canopy.webp` | Editorial feature; 4:3; landscape; 2400×1800 px | High; missing placeholder; `src/pages/BotanicalGarden.jsx` development `EditorialBlock` |
| IMG-018 | Diesel tree (`Copaifera langsdorffii`); identifying specimen with bark/foliage and a scale cue. Verify species identity and whether the named specimen is present on site before captioning. | `public/images/botanical-garden/botanical-garden-diesel-tree-specimen.webp` | Botanical gallery; 4:3; landscape; 2400×1800 px | High; missing placeholder, specimen ID to verify; `src/pages/BotanicalGarden.jsx` `notablePlants` item 1 via `ImageGrid` |
| IMG-019 | Amherstia nobilis / Pride of Burma; show identifiable flowering form or flower detail, with natural colour. Verify on-site specimen and identification. | `public/images/botanical-garden/botanical-garden-amherstia-flower.webp` | Botanical gallery; 4:3; landscape; 2400×1800 px | High; missing placeholder, specimen ID to verify; `src/pages/BotanicalGarden.jsx` `notablePlants` item 2 |
| IMG-020 | Brownea grandiceps / Rose of Venezuela; clear inflorescence and foliage, without oversaturated processing. Verify on-site specimen and identification. | `public/images/botanical-garden/botanical-garden-brownea-flower.webp` | Botanical gallery; 4:3; landscape; 2400×1800 px | High; missing placeholder, specimen ID to verify; `src/pages/BotanicalGarden.jsx` `notablePlants` item 3 |
| IMG-021 | Macadamia and cola nut specimens; distinguish both tree/fruit subjects if one frame can do so clearly, otherwise select the more representative verified specimen and revise the caption. | `public/images/botanical-garden/botanical-garden-macadamia-cola-specimens.webp` | Botanical gallery; 4:3; landscape; 2400×1800 px | High; missing placeholder, exact specimens to verify; `src/pages/BotanicalGarden.jsx` `notablePlants` item 4 |
| IMG-022 | Rare tropical fruit collection; show recognizable fruit on tree or specimen in context, not a generic fruit still-life. | `public/images/botanical-garden/botanical-garden-tropical-fruit-collection.webp` | Botanical gallery; 4:3; landscape; 2400×1800 px | High; missing placeholder; `src/pages/BotanicalGarden.jsx` `notablePlants` item 5 |
| IMG-023 | Medicinal herbs and ferns; close understory textures with enough context to convey a living planting. | `public/images/botanical-garden/botanical-garden-herbs-ferns-understory.webp` | Botanical gallery; 4:3; landscape; 2400×1800 px | High; missing placeholder; `src/pages/BotanicalGarden.jsx` `notablePlants` item 6 |
| IMG-024 | Observation pathways; show a real path through plant collection zones with layered vegetation and human-scale context. | `public/images/botanical-garden/botanical-garden-observation-pathway.webp` | Editorial feature; 4:3; landscape; 2400×1800 px | High; missing placeholder; `src/pages/BotanicalGarden.jsx` observation `EditorialBlock` |
| IMG-025 | Closing specimen study; detailed close-up of a verified tropical leaf/flower/fruit specimen. Keep texture sharp and background restrained. | `public/images/botanical-garden/botanical-garden-specimen-macro-wide.webp` | Wide close-up; 21:9; landscape; 3200×1400 px | Optional; missing placeholder; `src/pages/BotanicalGarden.jsx` closing `FullWidthImageSection` |

## Experiences (`/experiences`)

| Asset ID | Section / purpose / subject and visual direction | Recommended file | Type; frame; orientation; minimum source | Priority; status; code reference |
|---|---|---|---|---|
| IMG-026 | Plantation/crop observation; rows and crop-layer context (pineapple, cocoa, areca) that help explain a working farm walk. | `public/images/experiences/experiences-plantation-crop-walk.webp` | Experience feature; 16:9; landscape; 2400×1350 px | High; missing placeholder; `src/pages/Experiences.jsx` item 2 via `ExperienceFeature` |
| IMG-027 | Botanical walk; visitors’ eye-level view into a varied living collection, preferably with a path or scale cue. | `public/images/experiences/experiences-botanical-collection-walk.webp` | Experience feature; 16:9; landscape; 2400×1350 px | High; missing placeholder; `src/pages/Experiences.jsx` item 3 via `ExperienceFeature` |
| IMG-028 | Educational visit; real school/college learner group observing crops, with appropriate permissions and no identifiable minors without consent. Shared with Visit academic-study section. | `public/images/experiences/experiences-educational-farm-visit.webp` | Experience feature; 16:9; landscape; 2400×1350 px | High; missing placeholder; `src/pages/Experiences.jsx` item 4 and `src/pages/Visit.jsx` academic visit `EditorialBlock` |

The pathway feature and closing visual use shared **IMG-008**.

## Explore Estate (`/explore`)

No photograph slot is currently rendered. The central “Interactive Map Viewport Placeholder” is a CSS-framed mockup with inline SVG artwork in `src/pages/ExploreEstate.jsx`; it is not a missing image file. A future interactive map requires a separate verified GIS/base-map deliverable (recommended planning ID **MAP-001**, not counted as a photo): surveyed estate extent/boundaries, coordinate reference, zones/trails/specimen locations, and tile/vector source. Do not invent spatial data. Current route copy says GIS data and botanical taxonomy are pending. The screenshot-like viewport placeholder should not be treated as a real map.

## Energy & Reflection (`/energy-healing`)

| Asset ID | Section / purpose / subject and visual direction | Recommended file | Type; frame; orientation; minimum source | Priority; status; code reference |
|---|---|---|---|---|
| IMG-029 | Labyrinth; actual Soans Farm Cretan/French labyrinth path, ideally an elevated view that shows the continuous route. | `public/images/energy-healing/energy-healing-labyrinth-path.webp` | Editorial feature; 4:3; landscape; 2400×1800 px | Existing `public/labyrinth.jpg` is used in the labyrinth feature; source/identity and higher-resolution master should be verified. |
| IMG-030 | Medicine Wheel; actual circular ground pattern and setting; photograph respectfully and do not claim a universal interpretation. | `public/images/energy-healing/energy-healing-medicine-wheel.webp` | Editorial feature; 4:3; landscape; 2400×1800 px | High; missing placeholder; `src/pages/EnergyHealing.jsx` Medicine Wheel block |
| IMG-031 | Pyramid; actual structure with enough surrounding estate context to convey scale. | `public/images/energy-healing/energy-healing-pyramid-structure.webp` | Editorial feature; 4:3; landscape; 2400×1800 px | High; missing placeholder; `src/pages/EnergyHealing.jsx` Pyramid block |
| IMG-032 | Spiral; actual spiral pattern from a viewpoint that makes its form legible. | `public/images/energy-healing/energy-healing-spiral-pattern.webp` | Editorial feature; 4:3; landscape; 2400×1800 px | High; missing placeholder; `src/pages/EnergyHealing.jsx` Spiral block |
| IMG-033 | Quiet reflection; a truthful, unoccupied view of one of the farm’s contemplative places, with calm light and no staged healing claim. | `public/images/energy-healing/energy-healing-quiet-reflection-space.webp` | Editorial feature; 4:3; landscape; 2400×1800 px | High; missing placeholder; `src/pages/EnergyHealing.jsx` Reflection block |

The overview block uses shared **IMG-009** from Home.

## Products (`/products`)

| Asset ID | Section / purpose / subject and visual direction | Recommended file | Type; frame; orientation; minimum source | Priority; status; code reference |
|---|---|---|---|---|
| IMG-034 | Seasonal harvest; authentic Soans Farm pineapple/fruit harvest, emphasizing freshness and actual produce. | `public/images/products/products-farm-fruit-harvest.webp` | Product feature; 16:9; landscape; 2400×1350 px | Essential; missing placeholder; `src/pages/Products.jsx` productOutput item 1 via `CropPlantFeature` |
| IMG-035 | Pineapple juice; actual farm-served juice and preparation/serving context. Avoid implying packaging exists if it does not. | `public/images/products/products-farm-pineapple-juice.webp` | Product feature; 16:9; landscape; 2400×1350 px | High; missing placeholder; `src/pages/Products.jsx` productOutput item 2 |
| IMG-036 | Estate spices; verified pepper, vanilla, nutmeg, cinnamon, clove, or allspice, preferably growing/harvested rather than generic spice bowls. | `public/images/products/products-estate-spice-harvest.webp` | Product feature; 16:9; landscape; 2400×1350 px | High; missing placeholder; `src/pages/Products.jsx` productOutput item 3 |
| IMG-037 | Nursery material; real propagation beds and young plants that represent current nursery activity. | `public/images/products/products-nursery-saplings.webp` | Product feature; 16:9; landscape; 2400×1350 px | High; missing placeholder; `src/pages/Products.jsx` productOutput item 4 |
| IMG-038 | Closing output visual; wide documentary view joining harvest and nursery activity, if both occur in the scene; otherwise choose the most representative verified output. | `public/images/products/products-harvest-nursery-wide.webp` | Full-width landscape; 21:9; landscape; 3200×1400 px | Optional; missing placeholder; `src/pages/Products.jsx` closing `FullWidthImageSection` |

## Journal (`/journal`)

| Asset ID | Section / purpose / subject and visual direction | Recommended file | Type; frame; orientation; minimum source | Priority; status; code reference |
|---|---|---|---|---|
| IMG-039 | Featured record; bamboo architecture, clump form, canopy density, and pathway scale. | `public/images/journal/journal-bamboo-architecture-study.webp` | Featured editorial; 16:9; landscape; 2400×1350 px | Existing `public/bamboo1.jpg` is used on the bamboo journal entry; a dedicated, higher-resolution study image remains optional. |
| IMG-040 | Basel Mission/agricultural history article; use an authenticated archive scan or verified historic photograph with source/date. Never fabricate archival evidence. | `public/images/journal/journal-basel-mission-archive-record.webp` | Archival article feature; 16:9; landscape; scan at least 2400 px on longest side | High; missing placeholder, archival provenance needs verification; `src/pages/Journal.jsx` article item 2 via `JournalPreview` |
| IMG-041 | Cocoa article; close documentary view of flowers/pods emerging from trunk/branches under shade canopy. | `public/images/journal/journal-cocoa-cauliflory-study.webp` | Article feature; 16:9; landscape; 2400×1350 px | High; missing placeholder; `src/pages/Journal.jsx` article item 3 |
| IMG-042 | Hydrology article; document monsoon water retention/drainage and soil/canopy context at the farm. | `public/images/journal/journal-monsoon-hydrology-field-study.webp` | Article feature; 16:9; landscape; 2400×1350 px | High; missing placeholder; `src/pages/Journal.jsx` article item 4 |
| IMG-043 | Labyrinth article; a real overhead/elevated composition that makes the continuous route and geometry clear. | `public/images/journal/journal-labyrinth-geometric-paths.webp` | Article feature; 16:9; landscape; 2400×1350 px | High; missing placeholder; `src/pages/Journal.jsx` article item 5 |
| IMG-044 | Exotic fruit record; verified fruit specimens on plant/tree or documented field specimens, not stock produce. | `public/images/journal/journal-exotic-tropical-fruit-record.webp` | Article feature; 16:9; landscape; 2400×1350 px | High; missing placeholder; `src/pages/Journal.jsx` article item 6 |
| IMG-045 | Featured archive / primary journal entry; a verified tropical fruit research or specimen-study scene. Avoid implying an archival document if the image is contemporary. | `public/images/journal/journal-tropical-fruit-study-feature.webp` | Featured record; 16:9; landscape; 2400×1350 px | High; missing placeholder; `src/pages/Journal.jsx` featured-entry frame |

## Visiting Information (`/visit`)

| Asset ID | Section / purpose / subject and visual direction | Recommended file | Type; frame; orientation; minimum source | Priority; status; code reference |
|---|---|---|---|---|
| IMG-046 | Entrance/access; show the actual Soans Farm access road or entrance in its setting, with a clear but un-staged arrival view. | `public/images/visit/visit-soans-farm-entrance.webp` | Wide location feature; 21:9; landscape; 3200×1400 px | Essential; missing placeholder; `src/pages/Visit.jsx` closing `FullWidthImageSection` |

The working-farm pathway placement uses shared **IMG-008**; the academic visit placement uses shared **IMG-028**.

## Existing and external visual assets

| Asset / visual | Audit finding | Recommendation |
|---|---|---|
| `public/logo.png` | One local PNG exists (21,207 bytes; 150×150 px). It is a Soans Farm logo on a light square background; no source reference to it was found in `src/`. It is not a substitute for any photographic slot. | Retain as an existing brand asset. Decide separately whether/how it should appear; do not rename or convert during this audit. |
| `public/hero.png` | A 1672×941 px PNG (3,308,472 bytes) depicts a pineapple field and is used for non-Home pineapple/plantation sections. The source and whether the scene is actually Soans Farm could not be verified from the file alone. | Treat it as an illustrative local crop photo until provenance is confirmed; obtain a verified higher-resolution original when available. The Home page's image path and layout remain unchanged. |
| Favicon link | `index.html` references `/favicon.svg`, but no `public/favicon.svg` (or other favicon file) exists in the audited project. | Broken non-photo icon reference. Record for the later implementation pass; no file or website code was changed for this audit. |
| Contact Google Maps iframe | `src/pages/Home.jsx` embeds Google Maps remotely. This is external content, not a local image and not a broken local image reference. | Keep external; verify the embed/permissions and location accuracy when integrating assets. |
| Explore estate map | `src/pages/ExploreEstate.jsx` no longer draws a schematic route graphic or invented specimen metrics. It shows a clear empty state until surveyed data is available. | Treat future real GIS data as MAP-001, a distinct map/data task, not a photograph. |
| CSS/inline backgrounds | `src/index.css`, `src/App.css`, `PlaceholderImage.jsx`, `PageHero.jsx`, `FullWidthImageSection.jsx`, `GlobalHeader.jsx`, and page styles use gradients, colours, borders, and a decorative CSS grid. No file-backed `background-image` reference was found. | No additional image assets are required for those backgrounds. |

## Audit notes and uncertainties

- `Home`, `The Farm`, `The Land`, `Cultivation`, `Botanical Garden`, `Experiences`, `Explore Estate`, `Energy & Reflection`, `Products`, `Journal`, and `Visit` are all represented from the route registry. The Explore route has the MAP-001 note above instead of a photo row.
- The 56 photographic placements map to 46 unique proposed photo files because seven files are intentionally shared across compatible placements. See the shared IDs above; do not add duplicate copies for those placements.
- No existing photo URL, `src`, `srcSet`, CSS file background, or dynamically assembled photo path was found. The Google Maps iframe is the only externally hosted visual embed identified.
- Historical images, plant species/specimen identity, available nursery/products, and actual estate features require owner/source verification before final captions. The inventory describes the current UI’s intended subject; it does not claim those photographs or specimens have already been located.
- `PlaceholderImage` remains in use on Home only. Explore has no mock map artwork. `public/logo.png` remains unused as a brand asset; `public/hero.png` is now used outside Home for pineapple/plantation imagery, with farm provenance unverified.
