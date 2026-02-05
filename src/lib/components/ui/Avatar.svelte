<script lang="ts">
	let { avatarId, className }: { avatarId: string; className?: string } = $props();
</script>

<div class="avatar mx-auto">
	<div
		class="{className} rounded-full bg-base-200 ring-2 ring-base-300 ring-offset-2 ring-offset-base-100"
	>
		<img src="/avatars/{avatarId}.svg" alt="Avatar" />
	</div>
</div>
