<script lang="ts">
	import { avatars } from '$lib/constants';
	import { userManager } from '$lib/store/app.svelte';
	import { Save, User } from '@lucide/svelte';
	import Avatar from './Avatar.svelte';
	import { modalManager } from '$lib/store/modal.svelte';

	let name = $state<string>(userManager.username || 'Deafult User');
	let avatarId = $state<string>(userManager.avatarId || 'male-1');

	function setUser(e: SubmitEvent) {
		e.preventDefault();
		if (name.length < 3) {
			alert('You think you are smart enough?');
			return;
		}
		userManager.username = name;
		userManager.avatarId = avatarId;

		if (userManager.onboard) {
			userManager.onboard = false;
			window.location.reload();
		} else {
			modalManager.close();
		}
	}

	function setAvatar(id: string) {
		if (avatarId === id) return;
		avatarId = id;
	}
</script>

<div class="flex flex-col gap-4 py-3">
	<Avatar {avatarId} className="w-28" />
	<h2 class="text-center text-xl font-semibold">&nbsp;{name}</h2>

	<div
		class="grid grid-cols-3 grid-rows-2 place-content-center place-items-center gap-4 rounded-lg border-2 border-neutral bg-base-300 p-4"
	>
		{#each avatars as { id }, i (i + id)}
			<button
				onclick={() => setAvatar(id)}
				class="aspect-square w-16 cursor-pointer overflow-hidden rounded-full bg-base-100 {avatarId ===
				id
					? 'ring-2 ring-primary ring-offset-2 ring-offset-base-300 focus:outline-none'
					: 'ring-info hover:ring-2 focus:ring-2 focus:outline-none'}"
			>
				<img src="/avatars/{id}.svg" alt="Avatar" />
			</button>
		{/each}
	</div>

	<form class="space-y-4" onsubmit={setUser}>
		<label class="input w-full">
			<User />
			<input type="text" class="grow" bind:value={name} placeholder="Enter your name" />
		</label>

		<button
			type="submit"
			class="btn w-full text-lg btn-primary"
			disabled={!name || name.length < 3}
		>
			Save <Save size="20" strokeWidth={2.5} />
		</button>
	</form>
</div>
