# Soans Farm image asset audit summary

## Current implementation

- Non-Home pages no longer render placeholder image frames. Pages use genuine local images only when the subject fits; otherwise the image is omitted and the content remains in a responsive text layout.
- Home is intentionally unchanged in this cleanup. Its existing `PlaceholderImage` use remains as requested.
- Existing local photo files are `hero.png`, `bamboo.jpg`, `bamboo1.jpg`, `cottage.jpg`, and `labyrinth.jpg`. `logo.png` is a separate brand asset.
- Reused local photos: `hero.png` for pineapple cultivation/plantation context, `bamboo1.jpg` for bamboo collection and canopy sections, and `labyrinth.jpg` for the labyrinth feature and journal entry.
- `bamboo.jpg` shows people prominently in front of bamboo and was not selected for the image placements. `cottage.jpg` remains unused because no non-Home page currently has farm-stay content. Neither was forced into an unrelated section.
- Explore now shows an estate-map-data empty state without invented routes or specimen metrics. Verified GIS data is still needed before it can show a real map.

## Remaining genuine photo needs

Photos are still needed for historical records, cocoa pods and areca palms, specific botanical specimens, land/hydrology context, farm pathways and entrance, educational visits, harvested products and nursery material, and the other contemplative structures. The existing images do not accurately document those subjects. The Home page's own image slots are outside this cleanup's scope.

The detailed proposed subjects and framing guidance remain in [IMAGE_ASSET_INVENTORY.md](./IMAGE_ASSET_INVENTORY.md). The entries describe future photo needs; they no longer imply that non-Home placeholder frames are being displayed.
