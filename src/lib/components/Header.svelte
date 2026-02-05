<script lang="ts">
	import { CREATOR_URL } from '$lib/constants';
	import { userManager } from '$lib/store/app.svelte';
	import Avatar from './ui/Avatar.svelte';
</script>

<header class="shrink-0 border-b-2 border-gray-800 bg-base-300 px-6 py-4">
	<div class="flex items-center justify-between">
		<p class="flex items-center gap-1 text-2xl font-semibold tracking-widest text-base-content">
			ITO
			<span class="text-sm font-normal">
				- by <a target="_blank" class="tracking-wide underline" href={CREATOR_URL}>Akryptic</a>
			</span>
		</p>

		{@render avatar()}
	</div>
</header>

{#snippet avatar()}
	<div class="flex items-center gap-3 overflow-hidden rounded-lg bg-base-100 px-4 py-3">
		<Avatar avatarId={userManager.avatarId} className="w-10" />
		<div class="flex flex-col justify-center">
			<p class="text-xs">Welcome</p>
			<p class="w-full max-w-28 overflow-hidden text-lg text-ellipsis whitespace-nowrap">
				{userManager.username}
			</p>
		</div>
	</div>
{/snippet}
