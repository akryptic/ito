<script lang="ts">
	import { PROMPT_TEMPLATE } from '$lib/constants';
	import { populate } from '$lib/utils/str';
	import { Check, CheckCircle, Copy, Hash, Info, ListTree, Save, ScrollText } from '@lucide/svelte';

	const opt = $state({
		type: '',
		number: undefined,
		instructions: ''
	});

	let copied = $state<boolean>(false);

	const isValid = $derived.by<boolean>(() => {
		const num = Number.parseInt(opt.number ?? '');
		return opt.type.trim().length >= 4 && num > 0 && num <= 100;
	});

	const prompt = $derived.by<string>(() => {
		return populate(PROMPT_TEMPLATE, opt);
	});

	const handleCopy = async () => {
		if (!isValid) return alert('The hell, you think you are doing?');

		try {
			await navigator.clipboard.writeText(prompt.trim());
			copied = true;

			setTimeout(() => {
				copied = false;
			}, 2000);
		} catch (error) {
			console.error(error);
		}
	};
</script>

<div class="space-y-4">
	<div
		class="flex flex-col items-center rounded-lg border border-gray-700 bg-gray-950 p-4 font-mono text-sm"
	>
		<div class="line-clamp-5 text-justify">
			{prompt}
		</div>
	</div>

	<label class="input w-full">
		<ListTree />
		<input type="text" class="grow" bind:value={opt.type} placeholder="Task Type" />
	</label>

	<label class="input w-full">
		<Hash />
		<input type="text" class="grow" bind:value={opt.number} placeholder="Number Of Tasks" />
	</label>

	<label class="input w-full">
		<ScrollText />
		<input type="text" class="grow" bind:value={opt.instructions} placeholder="Extra Instruction" />
	</label>

	<div role="alert" class="alert border border-info alert-soft alert-info">
		<Info size="16" />
		<span class="text-sm">
			Paste this prompt into any chatbot, it will give you a .ito file, import that .ito file into
			this application
		</span>
	</div>

	<button
		type="submit"
		class="btn w-full text-lg btn-primary"
		disabled={!isValid || copied}
		onclick={handleCopy}
	>
		{#if copied}
			<Check size="20" strokeWidth={2.5} /> Copied
		{:else}
			<Copy size="20" strokeWidth={2.5} /> Copy
		{/if}
	</button>
</div>
