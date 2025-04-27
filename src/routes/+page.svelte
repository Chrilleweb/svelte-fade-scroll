<script lang="ts">
	import { fadeOnScroll } from "$lib/animation.js";
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
