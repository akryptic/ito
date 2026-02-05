<script lang="ts">
	import type { IconType } from '$lib/types/icon';
	import type { Snippet } from 'svelte';

	const {
		Icon,
		label,
		children,
		onclick
	}: { Icon: typeof IconType; label: string; children?: Snippet; onclick?: () => void } = $props();
</script>

<button
	class="flex items-center gap-3 rounded-lg px-3 py-2 {onclick
		? 'cursor-pointer transition-all duration-300 hover:bg-white/5 active:translate-y-0.5'
		: ''}"
	tabindex={onclick ? 0 : -1}
	{onclick}
>
	<Icon />
	<span>{label}</span>
	<div class="ml-auto">
		{@render children?.()}
	</div>
</button>
