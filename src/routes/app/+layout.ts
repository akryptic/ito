import ProfileSetupModal from '$lib/components/ui/ProfileSetupModal.svelte';
import { userManager } from '$lib/store/app.svelte.js';
import { modalManager } from '$lib/store/modal.svelte';
import { User } from '@lucide/svelte';

export const load = () => {
	const isPWA =
		window.matchMedia('(display-mode: standalone)').matches || (navigator as any).standalone;
	if (!isPWA) return;

	if (userManager.onboard && !userManager.username) {
		console.log('yes');

		modalManager.open({
			title: 'Profile Setup',
			icon: User,
			component: ProfileSetupModal,
			closable: false,
			description: 'Setup your profile to continue!'
		});
	}
};
