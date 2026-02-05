<script lang="ts">
	import { page } from '$app/state';
	import { LayoutDashboard, Settings } from '@lucide/svelte';
	import { type IconType } from '$lib/types/icon';

	interface INavItem {
		label: string;
		icon: typeof IconType;
		href: string;
	}

	const navItems: INavItem[] = [
		{ label: 'Dashboard', icon: LayoutDashboard, href: '/app' },
		{ label: 'Settings', icon: Settings, href: '/app/settings' }
	];

	const path = $derived(page.url.pathname);
</script>

<nav class="flex shrink-0 justify-evenly border-t-2 border-gray-800 bg-base-300 p-6">
	{#each navItems as { label, icon, href } (label)}
		{@render NavItem(icon, label, href, href === '/app' ? path === '/app' : path.startsWith(href))}
	{/each}
</nav>

{#snippet NavItem(Icon: typeof IconType, title: string, href: string, active: boolean = false)}
	<a
		{href}
		class="flex items-center gap-2 rounded-full px-4 py-2 font-semibold {active
			? 'bg-base-100 text-base-content'
			: ''}"
	>
		<Icon size="24" />
		{title}
	</a>
{/snippet}
