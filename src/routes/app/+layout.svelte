<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import NavBar from '$lib/components/NavBar.svelte';

	const { children } = $props();
</script>

<div class="flex h-full w-full flex-col">
	<Header />
	<main class="no-scrollbar flex-1 overflow-x-hidden overflow-y-auto p-6">
		{@render children()}
	</main>
	<NavBar />
</div>
