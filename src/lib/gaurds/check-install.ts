import { redirect } from '@sveltejs/kit';

export const checkInstall = (pathname: string) => {
	const isPWA =
		window.matchMedia('(display-mode: standalone)').matches || (navigator as any).standalone;

	if (!isPWA && pathname !== '/') {
		alert('What do you think you are doing, huh? 🔫');
		throw redirect(307, '/');
	}

	if (isPWA && !pathname.startsWith('/app')) {
		alert('You though I am gonna let you do that? 🖕');
		throw redirect(307, '/app');
	}
};
