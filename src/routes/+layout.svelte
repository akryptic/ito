<script lang="ts">
	import ModalShell from '$lib/components/ui/ModalShell.svelte';
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>ITO - by Akryptic</title>
</svelte:head>

<ModalShell />
{@render children()}
