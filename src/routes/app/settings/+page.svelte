<script>
	import Avatar from '$lib/components/ui/Avatar.svelte';
	import MenuItem from '$lib/components/ui/MenuItem.svelte';
	import ProfileSetupModal from '$lib/components/ui/ProfileSetupModal.svelte';
	import { userManager } from '$lib/store/app.svelte';
	import { modalManager } from '$lib/store/modal.svelte';
	import { Cpu, FileDown, Info, RefreshCcw, Rocket, SquarePen, User } from '@lucide/svelte';
</script>

<div class="flex h-full flex-col gap-6">
	<div class="space-y-6 text-center text-xl font-semibold uppercase">
		<Avatar avatarId={userManager.avatarId} className="w-32" />

		<h2 class="text-white/75">{userManager.username}</h2>

		<button
			class="btn btn-wide text-lg btn-primary"
			onclick={() =>
				modalManager.open({
					title: 'Profile Setup',
					icon: User,
					component: ProfileSetupModal,
					closable: true,
					description: 'Setup your profile to continue!'
				})}
		>
			Edit Profile <SquarePen size="20" />
		</button>
	</div>

	<div class="divider my-0"></div>

	<div>
		<h3 class="text-sm opacity-65">Setup</h3>
		<div class="mt-2 flex flex-col gap-3 p-2">
			<MenuItem Icon={Cpu} label="Get AI Prompt" />
			<MenuItem Icon={FileDown} label="Import Tasks" />
			<MenuItem Icon={RefreshCcw} label="Sync With Other Devices">
                <div class="badge badge-soft badge-info">In Progress</div>
            </MenuItem>
		</div>
	</div>

	<div>
		<h3 class="text-sm opacity-65">App Info</h3>
		<div class="mt-2 flex flex-col gap-3 p-2">
			<MenuItem Icon={Info} label="App Version">
                <span class="text-xs" >1.0.201</span>
            </MenuItem>
			<MenuItem Icon={Rocket} label="Updates" />
		</div>
	</div>
</div>
