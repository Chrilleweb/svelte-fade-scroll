# ✨ svelte-fade-scroll

Fade elements smoothly when they enter the viewport – a simple Svelte/SvelteKit action.

Lightweight, dependency-free, and perfect for modern frontend apps, portfolios, or landing pages where you want beautiful scroll animations without extra libraries.

## ✨ Features

- Fade elements in and out based on scroll
- Full TypeScript support
- Configure delay, duration, easing, threshold, and once-only animation
- Fully offline – no external dependencies
- Small and fast

## 🚀 Installation

```bash
npm install svelte-fade-scroll
```

## Fade elements on scroll

```js
<script lang="ts">
	import { fadeOnScroll } from 'svelte-fade-scroll';
</script>

<div
	use:fadeOnScroll={{
		threshold: 0.25,
		delay: 300,
		duration: 1000,
		easing: 'ease-in-out',
		once: true
	}}
>
	Fade in once with 1s smooth ease-in-out
</div>
```

## 📋 Options

| Option    | Type    | Default | Description |
|:----------|:--------|:--------|:------------|
| threshold | number  | 0.1     | How much of the element should be visible before fade-in starts |
| delay     | number  | 0       | Delay before fade-in starts (in ms) |
| duration  | number  | 700     | Duration of fade animation (in ms) |
| easing    | string  | "ease"  | CSS easing function for the fade |
| once      | boolean | false   | If true, fade happens only once and does not fade out when scrolling away |

## 🛠 License
MIT

## ✨ Created by Chrilleweb
If you like this package, feel free to ⭐️ star it on GitHub or contribute!