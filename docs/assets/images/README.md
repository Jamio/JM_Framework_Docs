# Custom site images

Upload your artwork to this folder using the filenames below. The site retains its existing gradient design when an image is absent.

## Homepage

| Location | Filename | Suggested shape |
| --- | --- | --- |
| Main header | `home-hero.jpg` | Wide, around 1920 × 700 |
| Player Guide card | `home-player.jpg` | Landscape, around 1200 × 700 |
| Mission Making card | `home-mission-making.jpg` | Landscape, around 1200 × 700 |
| Development card | `home-development.jpg` | Landscape, around 1200 × 700 |

JPG and WebP are best for screenshots. Keep each image reasonably compressed—ideally below 500 KB.

## Page headers

Any page can use its own banner image. Upload the image here, then place this block at the top of that page:

```html
<div class="jmf-page-hero" style="--jmf-page-image: url('../assets/images/aid-station.jpg')" markdown>

<span class="jmf-eyebrow">FRAMEWORK COMPONENT</span>

# Aid Station

Deployable medical support for players, Mission Makers, and Zeus.

</div>
```

Adjust the relative path if the page is nested more or less deeply. You can reuse the same image across several related pages.

## Naming

Use short lowercase filenames with hyphens, for example:

- `rally-points.jpg`
- `ace-medical.jpg`
- `mission-preparation.jpg`
- `zeus-controls.jpg`

Avoid putting important text inside the image because headers crop differently on desktop and mobile.
