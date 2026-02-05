<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import NavBar from '$lib/components/NavBar.svelte';

	const { children } = $props();
</script>

<div class="flex flex-col h-full w-full">
	<Header />
	<main class="flex-1 overflow-x-hidden overflow-y-auto no-scrollbar p-6">
		{@render children()}
	</main>
	<NavBar />
</div>
