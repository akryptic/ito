<script lang="ts">
	import { trapFocus } from '$lib/attachments/trap-focus';
	import { modalManager } from '$lib/store/modal.svelte';
	import { CircleX } from '@lucide/svelte';

	const modal = $derived(modalManager.current);
</script>

{#if modal}
	<div
		class="fixed inset-0 z-99 flex h-full w-full items-center justify-center bg-black/75 backdrop-blur-lg"
	>
		<div class="relative flex max-h-160 w-sm flex-col rounded-lg bg-base-100" {@attach trapFocus}>
			<!-- Hidden Element to trap focus when there are no focusable elements in the modal -->
			<button class="sr-only">Hello</button>

			<header
				class="flex shrink-0 items-center gap-2 border-b-2 p-4 text-xl font-medium text-success"
			>
				<modal.icon size="28" />

				<h3>{modal.title}</h3>

				{#if modal.closable}
					<button
						class="ml-auto cursor-pointer text-neutral-content transition-transform duration-200 active:scale-90"
						onclick={() => modalManager.close()}
					>
						<CircleX size="20" />
					</button>
				{/if}
			</header>

			<section class="flex-1 overflow-y-auto p-4">
				<modal.component />
			</section>
		</div>
	</div>
{/if}
